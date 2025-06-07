"use client"

import { useState } from "react"
import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import { Brain, Upload, Crown, Zap, TrendingUp, AlertCircle, Search, Database } from "lucide-react"
import Link from "next/link"
=======
import { Brain, Upload, Crown, Zap, TrendingUp, AlertCircle } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa

export default function AnalysisPage() {
  const [game, setGame] = useState(new Chess())
  const [fen, setFen] = useState("")
  const [pgnInput, setPgnInput] = useState("")
  const [fenInput, setFenInput] = useState("")
  const [analysis, setAnalysis] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const analyzePosition = async () => {
    setLoading(true)
    try {
      // Simulate AI analysis
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setAnalysis({
        evaluation: "+0.3",
        bestMove: "Nf3",
        explanation: "This move develops the knight to its best square, controlling the center and preparing castling.",
        alternatives: [
          { move: "d3", eval: "+0.1", note: "Solid but passive" },
          { move: "Bc4", eval: "+0.2", note: "Aggressive development" },
        ],
        magnusWould: "Magnus would likely play Nf3 here, focusing on solid development and maintaining flexibility.",
        weaknesses: ["Underdeveloped kingside", "Potential back rank weakness"],
        strengths: ["Good pawn structure", "Active pieces"],
      })
    } catch (error) {
      console.error("Analysis error:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadPGN = () => {
    try {
      const newGame = new Chess()
      newGame.loadPgn(pgnInput)
      setGame(newGame)
      setFen(newGame.fen())
    } catch (error) {
      console.error("Invalid PGN:", error)
    }
  }

  const loadFEN = () => {
    try {
      const newGame = new Chess(fenInput)
      setGame(newGame)
      setFen(newGame.fen())
    } catch (error) {
      console.error("Invalid FEN:", error)
    }
  }

  return (
<<<<<<< HEAD
    <main className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Game Analysis</h1>
          <p className="text-lg text-gray-400">
            Get deep insights into your games with AI-powered analysis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="bg-[#1f2937] border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-[#13151a] text-[#4f46e5]">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Upload PGN</h3>
                  <p className="text-sm text-gray-400">Import your games for analysis</p>
                </div>
              </div>
              <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">
                Upload Game
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-[#13151a] text-[#4f46e5]">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Analysis</h3>
                  <p className="text-sm text-gray-400">Analyze positions in real-time</p>
                </div>
              </div>
              <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">
                Start Analysis
              </Button>
=======
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Position Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Get deep AI analysis of any chess position with grandmaster insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import Position
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="fen">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="fen">FEN</TabsTrigger>
                  <TabsTrigger value="pgn">PGN</TabsTrigger>
                </TabsList>

                <TabsContent value="fen" className="space-y-3">
                  <Textarea
                    placeholder="Enter FEN notation..."
                    value={fenInput}
                    onChange={(e) => setFenInput(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={loadFEN} className="w-full">
                    Load Position
                  </Button>
                </TabsContent>

                <TabsContent value="pgn" className="space-y-3">
                  <Textarea
                    placeholder="Enter PGN..."
                    value={pgnInput}
                    onChange={(e) => setPgnInput(e.target.value)}
                    rows={6}
                  />
                  <Button onClick={loadPGN} className="w-full">
                    Load Game
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={analyzePosition} disabled={loading} className="w-full mb-4">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Analyze Position
                  </>
                )}
              </Button>

              {analysis && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Evaluation:</span>
                    <Badge variant={analysis.evaluation.startsWith("+") ? "default" : "destructive"}>
                      {analysis.evaluation}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Best Move:</span>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">{analysis.bestMove}</code>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-600" />
                Grandmaster Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Magnus Carlsen", "Hikaru Nakamura", "Garry Kasparov", "Bobby Fischer"].map((gm) => (
                <Button key={gm} variant="outline" size="sm" className="w-full justify-start">
                  <Crown className="mr-2 h-4 w-4" />
                  What would {gm.split(" ")[0]} do?
                </Button>
              ))}
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            </CardContent>
          </Card>
        </div>

<<<<<<< HEAD
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Analysis Features</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-[#1f2937] border-[#374151]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#13151a] text-green-500">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Engine Analysis</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Stockfish 16 engine evaluation with detailed line analysis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1f2937] border-[#374151]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#13151a] text-yellow-500">
                    <Crown className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">GM Insights</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Learn how grandmasters would play in any position
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1f2937] border-[#374151]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#13151a] text-blue-500">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Opening Explorer</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Explore master games and popular variations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/analysis/new">
            <Button size="lg" className="bg-[#4f46e5] hover:bg-[#4338ca]">
              Start New Analysis
            </Button>
          </Link>
        </div>
      </div>
    </main>
=======
        {/* Chessboard */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Position</CardTitle>
              <CardDescription>{game.turn() === "w" ? "White" : "Black"} to move</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-[500px] mx-auto">
                <Chessboard position={game.fen()} arePiecesDraggable={false} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Results */}
        <div>
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="moves">Moves</TabsTrigger>
            </TabsList>

            <TabsContent value="analysis">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : analysis ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Best Move Explanation</h4>
                        <p className="text-sm text-muted-foreground">{analysis.explanation}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Alternative Moves</h4>
                        <div className="space-y-2">
                          {analysis.alternatives.map((alt: any, index: number) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded"
                            >
                              <code className="text-sm">{alt.move}</code>
                              <div className="text-right">
                                <div className="text-sm font-medium">{alt.eval}</div>
                                <div className="text-xs text-muted-foreground">{alt.note}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Crown className="h-4 w-4 text-yellow-600" />
                          Magnus Would Say
                        </h4>
                        <p className="text-sm text-muted-foreground">{analysis.magnusWould}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-600">
                            <TrendingUp className="h-4 w-4" />
                            Strengths
                          </h4>
                          <ul className="text-sm space-y-1">
                            {analysis.strengths.map((strength: string, index: number) => (
                              <li key={index} className="text-muted-foreground">
                                • {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            Weaknesses
                          </h4>
                          <ul className="text-sm space-y-1">
                            {analysis.weaknesses.map((weakness: string, index: number) => (
                              <li key={index} className="text-muted-foreground">
                                • {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                      <Brain className="h-12 w-12 mb-4" />
                      <p>Click "Analyze Position" to get detailed insights</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="moves">
              <Card>
                <CardHeader>
                  <CardTitle>Move History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 overflow-y-auto">
                    {game.history().length > 0 ? (
                      <div className="space-y-1">
                        {game.history().map((move, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                          >
                            <span className="text-sm">
                              {Math.floor(index / 2) + 1}
                              {index % 2 === 0 ? "." : "..."} {move}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground">No moves in current position</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  )
}
