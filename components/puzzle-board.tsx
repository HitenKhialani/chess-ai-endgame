import { useState, useCallback, useEffect } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess, Square } from 'chess.js'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react'
import { toast } from 'sonner'

interface PuzzleBoardProps {
  fen: string
  moves: string[]
  onComplete: () => void
  onFail: () => void
}

export function PuzzleBoard({ fen, moves = [], onComplete, onFail }: PuzzleBoardProps) {
  const [game, setGame] = useState(new Chess(fen))
  const [moveIndex, setMoveIndex] = useState(0)
  const [userToMove, setUserToMove] = useState(true)
  const [showSolution, setShowSolution] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [boardWidth, setBoardWidth] = useState(600)
  const [selectedPiece, setSelectedPiece] = useState<Square | null>(null)

  // Handle window resize for responsive board
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(600, window.innerWidth - 32) // 32px for padding
      setBoardWidth(width)
    }
    
    handleResize() // Initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Reset the puzzle
  const resetPuzzle = useCallback(() => {
    setGame(new Chess(fen))
    setMoveIndex(0)
    setUserToMove(true)
    setShowSolution(false)
    setCompleted(false)
    setSelectedPiece(null)
  }, [fen])

  // Custom styles for the dots on possible moves
  const customDotStyle = {
    background: 'radial-gradient(circle, rgba(0, 191, 207, 0.9) 25%, transparent 25%)',
    width: '25%',
    height: '25%',
    borderRadius: '50%',
    position: 'absolute',
    top: '37.5%',
    left: '37.5%',
  }

  // Handle piece selection
  const onSquareClick = useCallback((square: Square) => {
    if (!userToMove || completed) return

    const piece = game.get(square)
    
    if (selectedPiece === null) {
      // If no piece is selected and clicked square has a piece of correct color
      if (piece && piece.color === (game.turn() === 'w' ? 'w' : 'b')) {
        setSelectedPiece(square)
      }
    } else {
      // If a piece is already selected, try to make the move
      try {
        const move = game.move({
          from: selectedPiece,
          to: square,
          promotion: 'q', // Always promote to queen for simplicity
        })

        if (move === null) {
          // If the move is invalid but clicked on own piece, select that piece instead
          if (piece && piece.color === (game.turn() === 'w' ? 'w' : 'b')) {
            setSelectedPiece(square)
          } else {
            setSelectedPiece(null)
          }
          return
        }

        // Check if the move matches the expected move
        if (move.san === moves[moveIndex]) {
          setGame(new Chess(game.fen()))
          setMoveIndex(moveIndex + 1)
          setUserToMove(false)
          setSelectedPiece(null)

          // Make computer's move after a delay
          setTimeout(() => {
            if (moveIndex + 1 < moves.length) {
              const nextGame = new Chess(game.fen())
              nextGame.move(moves[moveIndex + 1])
              setGame(nextGame)
              setMoveIndex(moveIndex + 2)
              setUserToMove(true)
            } else {
              setCompleted(true)
              onComplete()
              toast.success('Puzzle completed successfully!')
            }
          }, 500)
        } else {
          onFail()
          toast.error('Incorrect move. Try again!')
          setTimeout(resetPuzzle, 500)
        }
      } catch (error) {
        setSelectedPiece(null)
      }
    }
  }, [game, moveIndex, moves, userToMove, completed, selectedPiece, onComplete, onFail, resetPuzzle])

  // Handle piece movement via drag and drop
  const onDrop = useCallback((sourceSquare: Square, targetSquare: Square) => {
    if (!userToMove || completed) return false

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // Always promote to queen for simplicity
      })

      if (move === null) return false

      // Check if the move matches the expected move
      if (move.san === moves[moveIndex]) {
        setGame(new Chess(game.fen()))
        setMoveIndex(moveIndex + 1)
        setUserToMove(false)

        // Make computer's move after a delay
        setTimeout(() => {
          if (moveIndex + 1 < moves.length) {
            const nextGame = new Chess(game.fen())
            nextGame.move(moves[moveIndex + 1])
            setGame(nextGame)
            setMoveIndex(moveIndex + 2)
            setUserToMove(true)
          } else {
            setCompleted(true)
            onComplete()
            toast.success('Puzzle completed successfully!')
          }
        }, 500)

        return true
      } else {
        onFail()
        toast.error('Incorrect move. Try again!')
        setTimeout(resetPuzzle, 500)
        return false
      }
    } catch (error) {
      return false
    }
  }, [game, moveIndex, moves, userToMove, completed, onComplete, onFail, resetPuzzle])

  return (
    <div className="space-y-4 w-full max-w-[600px] mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[#00BFCF] border-[#00BFCF]">
            {userToMove ? "Your Move" : "Opponent's Move"}
          </Badge>
          {completed && (
            <Badge variant="outline" className="text-green-500 border-green-500">
              Completed!
            </Badge>
          )}
        </div>
        <Button 
          variant="outline" 
          className="text-[#00BFCF] border-[#00BFCF]"
          onClick={resetPuzzle}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="aspect-square w-full">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          onSquareClick={onSquareClick}
          boardWidth={boardWidth}
          customDarkSquareStyle={{ backgroundColor: '#8B4513' }}
          customLightSquareStyle={{ backgroundColor: '#DEB887' }}
          customSquareStyles={{
            ...(selectedPiece && {
              [selectedPiece]: { 
                backgroundColor: 'rgba(0, 191, 207, 0.4)'
              },
              ...Object.fromEntries(
                game.moves({ square: selectedPiece, verbose: true })
                  .map(move => [
                    move.to,
                    {
                      '&::before': {
                        content: '""',
                        ...customDotStyle
                      }
                    }
                  ])
              )
            })
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 justify-center">
        <Button 
          variant="outline" 
          className="text-[#CFFAFE] border-[#3F51B5]"
          onClick={() => {
            if (moveIndex > 0) {
              const newGame = new Chess(fen)
              for (let i = 0; i < moveIndex - 1; i++) {
                newGame.move(moves[i])
              }
              setGame(newGame)
              setMoveIndex(moveIndex - 1)
              setUserToMove(!userToMove)
              setSelectedPiece(null)
            }
          }}
          disabled={moveIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button 
          variant="outline" 
          className="text-[#CFFAFE] border-[#3F51B5]"
          onClick={() => {
            if (moveIndex < moves.length) {
              const newGame = new Chess(game.fen())
              newGame.move(moves[moveIndex])
              setGame(newGame)
              setMoveIndex(moveIndex + 1)
              setUserToMove(!userToMove)
              setSelectedPiece(null)
            }
          }}
          disabled={moveIndex >= moves.length}
        >
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
        <Button 
          className="bg-[#3F51B5] hover:bg-[#3F51B5]/80 text-white"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </Button>
      </div>

      {showSolution && (
        <div className="mt-4 p-4 bg-[#121212] rounded-lg">
          <p className="text-[#CFFAFE]">
            Solution: {moves.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
} 