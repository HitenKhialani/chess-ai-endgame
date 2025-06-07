"use client"

import { useState, useEffect, useCallback } from "react"
import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import { AlertCircle, Brain, ChevronRight, RotateCcw, Zap, ChevronLeft } from "lucide-react"
=======
import { AlertCircle, Brain, ChevronRight, RotateCcw, Zap } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa

export default function ChessTrainer() {
  const [game, setGame] = useState(new Chess())
  const [fen, setFen] = useState("")
  const [moveHistory, setMoveHistory] = useState<string[]>([])
  const [analysis, setAnalysis] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [orientation, setOrientation] = useState("white")
<<<<<<< HEAD
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1)
=======
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa

  useEffect(() => {
    setFen(game.fen())
    setMoveHistory(game.history())
<<<<<<< HEAD
    setCurrentMoveIndex(game.history().length - 1)
=======
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  }, [game])

  const makeMove = useCallback(
    (move: any) => {
      try {
        const result = new Chess(fen)
        const moveResult = result.move(move)

        if (moveResult) {
          setGame(result)
          return true
        }
      } catch (e) {
        return false
      }
      return false
    },
    [fen],
  )

<<<<<<< HEAD
  const goToMove = (index: number) => {
    const newGame = new Chess()
    const moves = game.history()
    
    // Play all moves up to the target index
    for (let i = 0; i <= index; i++) {
      newGame.move(moves[i])
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

=======
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to queen for simplicity
    })

    if (!move) return false

    // If move is valid and it's player's turn, request AI move
    setTimeout(() => {
      makeAIMove()
    }, 300)

    return true
  }

  const makeAIMove = async () => {
    if (game.isGameOver() || game.isDraw()) return

    setLoading(true)
    try {
      const response = await fetch("/api/suggest-move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fen: game.fen() }),
      })

      const data = await response.json()

      if (data.move) {
        makeMove(data.move)
      }
    } catch (error) {
      console.error("Error getting AI move:", error)
    } finally {
      setLoading(false)
    }
  }

  const analyzePosition = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/analyze-position", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fen: game.fen() }),
      })

      const data = await response.json()
      setAnalysis(data.analysis || "Analysis not available")
    } catch (error) {
      console.error("Error analyzing position:", error)
      setAnalysis("Error analyzing position")
    } finally {
      setLoading(false)
    }
  }

  const resetGame = () => {
    setGame(new Chess())
    setAnalysis("")
<<<<<<< HEAD
    setCurrentMoveIndex(-1)
=======
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  }

  const flipBoard = () => {
    setOrientation(orientation === "white" ? "black" : "white")
  }

  const gameStatus = () => {
    if (game.isCheckmate()) return "Checkmate!"
    if (game.isDraw()) return "Draw!"
    if (game.isCheck()) return "Check!"
    return game.turn() === "w" ? "White to move" : "Black to move"
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Chess Board</CardTitle>
            <CardDescription>{gameStatus()}</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[600px] mx-auto"
            >
              <Chessboard position={fen} onPieceDrop={onDrop} boardOrientation={orientation} animationDuration={200} />
            </motion.div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 justify-center">
            <Button onClick={resetGame} variant="outline" size="sm">
              <RotateCcw className="mr-2 h-4 w-4" /> New Game
            </Button>
            <Button onClick={flipBoard} variant="outline" size="sm">
              Flip Board
            </Button>
<<<<<<< HEAD
            <Button onClick={goToPreviousMove} disabled={currentMoveIndex === -1} variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={goToNextMove} disabled={currentMoveIndex >= moveHistory.length - 1} variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button onClick={analyzePosition} disabled={loading} size="sm">
              <Brain className="mr-2 h-4 w-4" /> Analyze Position
            </Button>
            <Button onClick={() => makeAIMove()} disabled={loading || game.isGameOver() || currentMoveIndex !== moveHistory.length - 1} size="sm">
=======
            <Button onClick={analyzePosition} disabled={loading} size="sm">
              <Brain className="mr-2 h-4 w-4" /> Analyze Position
            </Button>
            <Button onClick={() => makeAIMove()} disabled={loading || game.isGameOver()} size="sm">
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
              <Zap className="mr-2 h-4 w-4" /> Suggest Move
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="moves">
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
                    <div className="grid grid-cols-2 gap-1">
                      {moveHistory.map((move, index) => (
                        <div
                          key={index}
                          className={`p-2 ${index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""} rounded`}
                        >
                          {index % 2 === 0 ? `${Math.floor(index / 2) + 1}.` : ""} {move}
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
                <CardTitle>Position Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] overflow-y-auto">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : analysis ? (
                    <div className="space-y-2">
                      <p>{analysis}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                      <AlertCircle className="h-8 w-8 mb-2" />
                      <p>Click "Analyze Position" to get insights</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Training</CardTitle>
            <CardDescription>Improve your chess skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-between">
                Opening Trainer <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Endgame Practice <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Tactics Puzzles <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
