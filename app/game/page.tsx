"use client"

import { useState, useEffect, useCallback } from "react"
import { Chessboard } from "react-chessboard"
<<<<<<< HEAD
import { Chess, Square, Move } from "chess.js"
=======
import { Chess } from "chess.js"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
<<<<<<< HEAD
import { AlertCircle, Brain, RotateCcw, Zap, Crown, Target, ChevronLeft, ChevronRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

type Difficulty = "beginner" | "intermediate" | "advanced"

interface ChessMove {
  from: string
  to: string
  promotion?: string
}

interface CapturedPiece {
  type: string;
  color: "w" | "b";
}

// AI Logic
const pieceValues: Record<string, number> = {
  p: 1,  // pawn
  n: 3,  // knight
  b: 3,  // bishop
  r: 5,  // rook
  q: 9,  // queen
  k: 100 // king
}

const evaluatePosition = (game: Chess): number => {
  let score = 0
  const board = game.board()

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c]
      if (!piece) continue

      let pieceScore = pieceValues[piece.type]

      // Simple bonus for pieces in center (very basic positional play)
      if (r >= 3 && r <= 4 && c >= 3 && c <= 4 && piece.type !== 'k') {
        pieceScore += 0.1
      }

      score += piece.color === 'w' ? pieceScore : -pieceScore
    }
  }

  return score
}

const minimax = (game: Chess, depth: number, maximizingPlayer: boolean): number => {
  if (depth === 0) {
    return evaluatePosition(game)
  }

  const moves = game.moves({ verbose: true })

  if (moves.length === 0) {
    if (game.isCheck()) {
      return maximizingPlayer ? -1000 : 1000
    }
    return 0 // stalemate
  }

  if (maximizingPlayer) {
    let maxEval = Number.NEGATIVE_INFINITY
    for (const move of moves) {
      game.move(move)
      const score = minimax(game, depth - 1, false)
      game.undo()
      maxEval = Math.max(maxEval, score)
    }
    return maxEval
  } else {
    let minEval = Number.POSITIVE_INFINITY
    for (const move of moves) {
      game.move(move)
      const score = minimax(game, depth - 1, true)
      game.undo()
      minEval = Math.min(minEval, score)
    }
    return minEval
  }
}

const generateAIMove = (game: Chess, difficulty: Difficulty) => {
  const possibleMoves = game.moves({ verbose: true })
  if (possibleMoves.length === 0) return null

  if (difficulty === "beginner") {
    // 30% chance to make a random move (beginner mistake)
    if (Math.random() < 0.3) {
      return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    }

    // Look for captures first (beginner tends to focus on captures)
    const captureMoves = possibleMoves.filter(move => move.san.includes('x'))
    if (captureMoves.length > 0 && Math.random() < 0.7) {
      return captureMoves[Math.floor(Math.random() * captureMoves.length)]
    }

    // Simple evaluation with shallow depth (beginner level)
    let bestMove = possibleMoves[0]
    let bestScore = Number.NEGATIVE_INFINITY

    for (const move of possibleMoves) {
      game.move(move)
      // Very shallow search (depth 2) for beginner level
      const score = minimax(game, 2, false) + Math.random() * 0.5 // Add randomness
      game.undo()

      if (score > bestScore) {
        bestScore = score
        bestMove = move
      }
    }

    return bestMove
  } else if (difficulty === "intermediate") {
    const captures = possibleMoves.filter(move => move.san.includes("x"))
    return captures.length > 0 && Math.random() > 0.5 
      ? captures[Math.floor(Math.random() * captures.length)]
      : possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
  } else {
    const captures = possibleMoves.filter(move => move.san.includes("x"))
    const checks = possibleMoves.filter(move => move.san.includes("+"))
    const goodMoves = [...captures, ...checks]
    return goodMoves.length > 0 && Math.random() > 0.3
      ? goodMoves[Math.floor(Math.random() * goodMoves.length)]
      : possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
  }
}

const isPlayerTurn = (game: Chess, playerColor: "white" | "black") => {
  const currentTurn = game.turn()
  return (playerColor === "white" && currentTurn === "w") || 
         (playerColor === "black" && currentTurn === "b")
}

const getLegalMovesForSquare = (game: Chess, square: Square) => {
  const moves = game.moves({ square, verbose: true })
  return {
    moves: moves.map(move => move.to),
    highlights: {
      [square]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      ...moves.reduce((acc, move) => ({
        ...acc,
        [move.to]: {
          background: "radial-gradient(circle, rgba(0, 123, 255, 0.8) 25%, transparent 25%)"
        }
      }), {})
    }
  }
}

export default function GamePage() {
  const searchParams = useSearchParams()
  const [game, setGame] = useState<Chess>(new Chess())
  const [fen, setFen] = useState(new Chess().fen())
  const [moveHistory, setMoveHistory] = useState<string[]>([])
  const [analysis, setAnalysis] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null)
  const [legalMoves, setLegalMoves] = useState<string[]>([])
  const [highlightSquares, setHighlightSquares] = useState({})
  const [isThinking, setIsThinking] = useState(false)
  const [playerRating, setPlayerRating] = useState(1500)
  const [accuracy, setAccuracy] = useState(85)
  const [currentEvaluation, setCurrentEvaluation] = useState(0.0)
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1)
=======
import { AlertCircle, Brain, RotateCcw, Zap, Crown, Target } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function GamePage() {
  const searchParams = useSearchParams()
  const [game, setGame] = useState(new Chess())
  const [fen, setFen] = useState("")
  const [moveHistory, setMoveHistory] = useState<string[]>([])
  const [analysis, setAnalysis] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [orientation, setOrientation] = useState("white")
  const [gameMode, setGameMode] = useState("play")
  const [playerRating, setPlayerRating] = useState(1500)
  const [accuracy, setAccuracy] = useState(85)
  const [currentEvaluation, setCurrentEvaluation] = useState(0.0)
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa

  const opponent = searchParams?.get("opponent") || "intermediate-bot"
  const style = searchParams?.get("style") || null
  const quick = searchParams?.get("quick") || null
<<<<<<< HEAD
  const difficulty = opponent.includes("beginner") ? "beginner" : 
                    opponent.includes("intermediate") ? "intermediate" : "advanced"

  // Initialize game
  useEffect(() => {
    const newGame = new Chess()
    setGame(newGame)
    setFen(newGame.fen())
    setMoveHistory([])
    setCurrentMoveIndex(-1)
    // If player is black, make first move as white
    if (playerColor === "black") {
      setTimeout(() => makeAIMove(newGame), 500)
    }
  }, [playerColor, opponent])

  // Update the useEffect that syncs game state
  useEffect(() => {
    if (game) {
      setFen(game.fen())
      setMoveHistory(game.history())
      setCurrentMoveIndex(game.history().length - 1)
    }
  }, [game])

  const makeMove = useCallback(
    (move: { from: string; to: string; promotion?: string }) => {
      try {
        const result = game.move(move)
        if (result) {
          const newGame = new Chess(game.fen())
          setGame(newGame)
          setCurrentEvaluation(Math.random() * 2 - 1)
          setSelectedSquare(null)
          setHighlightSquares({})
          return true
        }
      } catch (e) {
        console.error("Move error:", e)
=======

  useEffect(() => {
    setFen(game.fen())
    setMoveHistory(game.history())
  }, [game])

  const makeMove = useCallback(
    (move: any) => {
      try {
        const result = new Chess(fen)
        const moveResult = result.move(move)

        if (moveResult) {
          setGame(result)
          // Simulate evaluation change
          setCurrentEvaluation(Math.random() * 2 - 1)
          return true
        }
      } catch (e) {
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
        return false
      }
      return false
    },
<<<<<<< HEAD
    [game],
  )

  const goToMove = (index: number) => {
    const newGame = new Chess()
    const moves = moveHistory.slice(0, index + 1)
    
    // Play all moves up to the target index
    for (const move of moves) {
      try {
        newGame.move(move)
      } catch (e) {
        console.error("Error replaying move:", e)
        return
      }
    }
    
    setFen(newGame.fen())
    setCurrentMoveIndex(index)
  }

  const goToPreviousMove = () => {
    if (currentMoveIndex > -1) {
      goToMove(currentMoveIndex - 1)
    }
  }

  const goToNextMove = () => {
    if (currentMoveIndex < moveHistory.length - 1) {
      goToMove(currentMoveIndex + 1)
    }
  }

  // Update resetGame to handle move index
  const resetGame = () => {
    const newGame = new Chess()
    setGame(newGame)
    setFen(newGame.fen())
    setMoveHistory([])
    setCurrentMoveIndex(-1)
    setAnalysis("")
    setSelectedSquare(null)
    setHighlightSquares({})
    if (playerColor === "black") {
      setTimeout(() => makeAIMove(newGame), 500)
    }
  }

  const makeAIMove = async (currentGame: Chess = game!) => {
    if (!currentGame || currentGame.isGameOver() || currentGame.isDraw()) return

    setIsThinking(true)
    try {
      // Add random delay between 500ms and 1500ms
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))
      
      const aiMove = generateAIMove(currentGame, difficulty as Difficulty)
      if (aiMove) {
        makeMove({
          from: aiMove.from,
          to: aiMove.to,
          promotion: aiMove.promotion
        })
      }
    } finally {
      setIsThinking(false)
    }
  }

  const onSquareClick = (square: Square) => {
    if (!game || !isPlayerTurn(game, playerColor)) return

    if (selectedSquare === null) {
      const piece = game.get(square)
      if (piece && piece.color === (playerColor === "white" ? "w" : "b")) {
        const { moves, highlights } = getLegalMovesForSquare(game, square)
        setSelectedSquare(square)
        setLegalMoves(moves)
        setHighlightSquares(highlights)
      }
    } else {
      if (legalMoves.includes(square)) {
        const move = makeMove({
          from: selectedSquare,
          to: square,
          promotion: "q"
        })
        if (move) {
          setTimeout(() => makeAIMove(), 500)
        }
      }
      setSelectedSquare(null)
      setHighlightSquares({})
    }
  }

  const onPieceDrop = (sourceSquare: Square, targetSquare: Square) => {
    if (!game || !isPlayerTurn(game, playerColor)) return false

    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q"
    })

    if (move) {
      setTimeout(() => makeAIMove(), 500)
    }

    return move
=======
    [fen],
  )

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    })

    if (!move) return false

    // Simulate AI response after player move
    setTimeout(() => {
      makeAIMove()
    }, 1000)

    return true
  }

  const makeAIMove = async () => {
    if (game.isGameOver() || game.isDraw()) return

    setLoading(true)
    try {
      // Simulate API call to Stockfish
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const moves = game.moves({ verbose: true })
      if (moves.length > 0) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)]
        makeMove(randomMove)
      }
    } catch (error) {
      console.error("Error getting AI move:", error)
    } finally {
      setLoading(false)
    }
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  }

  const analyzePosition = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setAnalysis(`Position Analysis:
      
Current Evaluation: ${currentEvaluation > 0 ? "+" : ""}${currentEvaluation.toFixed(2)}

Best Move: The engine suggests developing the knight to f3, controlling the center and preparing castling.

Key Ideas:
• Control the center with pawns and pieces
• Develop knights before bishops
• Castle early for king safety
• Look for tactical opportunities

${style ? `${style.replace("-", " ")} Style: This position would benefit from the aggressive approach typical of this grandmaster's play.` : ""}`)
    } catch (error) {
      console.error("Error analyzing position:", error)
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
  const flipBoard = () => {
    setPlayerColor(prev => prev === "white" ? "black" : "white")
    resetGame()
=======
  const resetGame = () => {
    setGame(new Chess())
    setAnalysis("")
    setCurrentEvaluation(0.0)
  }

  const flipBoard = () => {
    setOrientation(orientation === "white" ? "black" : "white")
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  }

  const gameStatus = () => {
    if (game.isCheckmate()) return "Checkmate!"
    if (game.isDraw()) return "Draw!"
    if (game.isCheck()) return "Check!"
    return game.turn() === "w" ? "White to move" : "Black to move"
  }

  const getOpponentName = () => {
    if (style) return style.replace("-", " ") + " Style"
    return opponent.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Game Info Panel */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-purple-600" />
                Game Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Opponent</div>
                <div className="font-semibold">{getOpponentName()}</div>
              </div>
              <div>
<<<<<<< HEAD
                <div className="text-sm text-muted-foreground">Playing as</div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold capitalize">{playerColor}</div>
                  <Button variant="outline" size="sm" onClick={flipBoard}>
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Flip Board
                  </Button>
                </div>
              </div>
              <div>
=======
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                <div className="text-sm text-muted-foreground">Your Rating</div>
                <div className="font-semibold">{playerRating}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
                <div className="flex items-center gap-2">
                  <Progress value={accuracy} className="flex-1" />
                  <span className="text-sm font-medium">{accuracy}%</span>
                </div>
              </div>
<<<<<<< HEAD
              {isThinking && (
                <Badge variant="secondary" className="w-full justify-center">
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600 mr-2"></div>
                  AI Thinking...
                </Badge>
              )}
=======
              <div>
                <div className="text-sm text-muted-foreground">Evaluation</div>
                <div
                  className={`font-semibold ${currentEvaluation > 0 ? "text-green-600" : currentEvaluation < 0 ? "text-red-600" : "text-gray-600"}`}
                >
                  {currentEvaluation > 0 ? "+" : ""}
                  {currentEvaluation.toFixed(2)}
                </div>
              </div>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button onClick={analyzePosition} disabled={loading} size="sm" className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Analyze Position
              </Button>
              <Button
                onClick={() => makeAIMove()}
                disabled={loading || game.isGameOver()}
                size="sm"
                variant="outline"
                className="w-full"
              >
                <Zap className="mr-2 h-4 w-4" />
                Get Hint
              </Button>
<<<<<<< HEAD
=======
              <Button onClick={flipBoard} variant="outline" size="sm" className="w-full">
                Flip Board
              </Button>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
              <Button onClick={resetGame} variant="outline" size="sm" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                New Game
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Chess Board */}
        <div className="lg:col-span-2">
<<<<<<< HEAD
          <Card>
=======
          <Card className="w-full">
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Chess Board</CardTitle>
                  <CardDescription>{gameStatus()}</CardDescription>
                </div>
<<<<<<< HEAD
                <div className="flex gap-2">
                  <Button onClick={resetGame} variant="outline" size="icon" className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button onClick={goToPreviousMove} disabled={currentMoveIndex === -1} variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button onClick={goToNextMove} disabled={currentMoveIndex >= moveHistory.length - 1} variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-square">
                <Chessboard
                  position={fen}
                  onPieceDrop={onPieceDrop}
                  onSquareClick={onSquareClick}
                  customSquareStyles={highlightSquares}
                  boardOrientation={playerColor}
                />
              </div>
=======
                {loading && (
                  <Badge variant="secondary">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600 mr-2"></div>
                    AI Thinking...
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[600px] mx-auto"
              >
                <Chessboard
                  position={fen}
                  onPieceDrop={onDrop}
                  boardOrientation={orientation}
                  animationDuration={200}
                />
              </motion.div>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            </CardContent>
          </Card>
        </div>

        {/* Analysis Panel */}
        <div className="lg:col-span-1">
          <Tabs defaultValue="moves" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="moves">Moves</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="moves">
              <Card>
                <CardHeader>
                  <CardTitle>Move History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] overflow-y-auto">
                    {moveHistory.length > 0 ? (
                      <div className="space-y-1">
                        {moveHistory.map((move, index) => (
                          <div
                            key={index}
                            className={`p-2 rounded text-sm ${index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                          >
                            <span className="text-muted-foreground mr-2">
                              {Math.floor(index / 2) + 1}
                              {index % 2 === 0 ? "." : "..."}
                            </span>
                            {move}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground">No moves yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis">
              <Card>
                <CardHeader>
                  <CardTitle>AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] overflow-y-auto">
                    {loading ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    ) : analysis ? (
                      <div className="space-y-2 text-sm whitespace-pre-line">{analysis}</div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                        <AlertCircle className="h-8 w-8 mb-2" />
                        <p>Click "Analyze Position" to get AI insights</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
