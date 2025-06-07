"use client"

import { useState } from "react"
import { Chess } from "chess.js"
import { Chessboard } from "react-chessboard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Upload, Crown, Zap, TrendingUp, AlertCircle, Search, Database } from "lucide-react"
import Link from "next/link"

export default function AnalysisPage() {
  const [game, setGame] = useState(new Chess())
  const [fen, setFen] = useState(game.fen())
  const [pgn, setPgn] = useState("")
  const [analysis, setAnalysis] = useState("")
  const [activeTab, setActiveTab] = useState("upload")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const grandmasters = [
    "Magnus Carlsen - World Champion",
    "Hikaru Nakamura - Speed Chess King",
    "Fabiano Caruana - Classical Expert",
    "Alireza Firouzja - Rising Star"
  ]

  function onDrop(sourceSquare, targetSquare) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q"
      })

      if (move === null) return false

      setFen(game.fen())
      setPgn(game.pgn())
      return true
    } catch (error) {
      return false
    }
  }

  function handlePgnUpload(event) {
    const uploadedPgn = event.target.value
    try {
      const newGame = new Chess()
      newGame.loadPgn(uploadedPgn)
      setGame(newGame)
      setFen(newGame.fen())
      setPgn(uploadedPgn)
    } catch (error) {
      console.error("Invalid PGN format")
    }
  }

  function handleAnalyze() {
    // Placeholder for analysis logic
    setAnalysis("Analysis in progress...")
  }

  function handleSearch() {
    // Placeholder for database search
    setSearchResults([
      "Similar position found in Carlsen vs Nakamura, 2020",
      "Match found in World Championship 2021"
    ])
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Game Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Upload your game, analyze positions, and learn from the masters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Chess Board</CardTitle>
                <CardDescription>Make moves or upload a PGN to analyze</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square">
                  <Chessboard 
                    position={fen}
                    onPieceDrop={onDrop}
                    customBoardStyle={{
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Game Controls</CardTitle>
                <CardDescription>Upload PGN or analyze current position</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upload" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload">Upload Game</TabsTrigger>
                    <TabsTrigger value="analyze">Analyze</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="space-y-4">
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Paste your PGN here..."
                        value={pgn}
                        onChange={handlePgnUpload}
                      />
                      <div className="flex justify-end">
                        <Button onClick={() => setActiveTab("analyze")}>
                          <Upload className="mr-2" />
                          Analyze Game
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="analyze" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Search similar positions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="secondary" onClick={handleSearch}>
                          <Search className="mr-2" />
                          Search
                        </Button>
                      </div>
                      {searchResults.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Database className="h-4 w-4" />
                          <span>{result}</span>
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-2">
                        {grandmasters.map((gm, index) => (
                          <Button key={index} variant="outline" onClick={handleAnalyze}>
                            <Crown className="mr-2" />
                            What would {gm.split(" ")[0]} do?
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Analysis Features</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Brain className="h-8 w-8 mb-2" />
                    <CardTitle>AI Analysis</CardTitle>
                    <CardDescription>Get instant computer analysis</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <CardTitle>Statistics</CardTitle>
                    <CardDescription>View detailed game statistics</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <AlertCircle className="h-8 w-8 mb-2" />
                    <CardTitle>Mistakes</CardTitle>
                    <CardDescription>Find and learn from mistakes</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
