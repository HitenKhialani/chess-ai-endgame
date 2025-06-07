"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Crown, Zap, Brain, Target, Users } from "lucide-react"
import Link from "next/link"

const aiOpponents = [
  {
    name: "Beginner Bot",
    rating: "800-1200",
    description: "Perfect for learning the basics",
    icon: Target,
    difficulty: "Easy",
    color: "green",
  },
  {
    name: "Intermediate Bot",
    rating: "1200-1800",
    description: "Challenging but fair gameplay",
    icon: Brain,
    difficulty: "Medium",
    color: "yellow",
  },
  {
    name: "Advanced Bot",
    rating: "1800-2400",
    description: "Strong tactical play",
    icon: Zap,
    difficulty: "Hard",
    color: "orange",
  },
  {
    name: "Stockfish Master",
    rating: "3200+",
    description: "Ultimate chess challenge",
    icon: Crown,
    difficulty: "Extreme",
    color: "red",
  },
]

const grandmasterStyles = [
  {
    name: "Magnus Carlsen",
    style: "Positional Mastery",
    description: "World Champion's endgame excellence",
    rating: "2830",
  },
  {
    name: "Hikaru Nakamura",
    style: "Speed & Tactics",
    description: "Blitz specialist with sharp calculations",
    rating: "2780",
  },
  {
    name: "Fabiano Caruana",
    style: "Opening Theory",
    description: "Deep preparation and precise play",
    rating: "2800",
  },
  {
    name: "Garry Kasparov",
    style: "Aggressive Attack",
    description: "Legendary attacking style",
    rating: "2851",
  },
]

export default function PlayPage() {
  const [selectedBot, setSelectedBot] = useState<string | null>(null)
  const [selectedGM, setSelectedGM] = useState<string | null>(null)

  return (
<<<<<<< HEAD
    <main className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Play Chess</h1>
          <p className="text-lg text-gray-400">
            Challenge AI opponents or learn from grandmaster playing styles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">AI Opponents</h2>
              <div className="text-sm text-gray-400">Grandmaster Styles</div>
            </div>

            {aiOpponents.map((opponent) => (
              <Card key={opponent.name} className="bg-[#1f2937] border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-[#13151a] ${opponent.color}`}>
                        <opponent.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{opponent.name}</h3>
                        <p className="text-sm text-gray-400">{opponent.description}</p>
                      </div>
                    </div>
                    <Badge className={`${opponent.color} bg-[#13151a]`}>
                      {opponent.difficulty}
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Rating: <span className="text-white">{opponent.rating}</span>
                    </div>
                    <Link href={`/game?opponent=${opponent.name.toLowerCase().replace(" ", "-")}`}>
                      <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">
=======
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Play Chess</h1>
        <p className="text-lg text-muted-foreground">Challenge AI opponents or learn from grandmaster playing styles</p>
      </div>

      <Tabs defaultValue="ai-bots" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ai-bots">AI Opponents</TabsTrigger>
          <TabsTrigger value="gm-styles">Grandmaster Styles</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-bots" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiOpponents.map((bot) => (
              <Card
                key={bot.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedBot === bot.name ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedBot(bot.name)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <bot.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{bot.name}</CardTitle>
                        <CardDescription>{bot.description}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={bot.color === "green" ? "default" : "secondary"}
                      className={
                        bot.color === "green"
                          ? "bg-green-100 text-green-800"
                          : bot.color === "yellow"
                            ? "bg-yellow-100 text-yellow-800"
                            : bot.color === "orange"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                      }
                    >
                      {bot.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating: {bot.rating}</span>
                    <Link href={`/game?opponent=${bot.name.toLowerCase().replace(" ", "-")}`}>
                      <Button size="sm">
                        <Bot className="mr-2 h-4 w-4" />
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                        Play Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
<<<<<<< HEAD

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Quick Start</h2>
            <p className="text-gray-400">Jump into a game immediately with recommended settings</p>

            <div className="grid grid-cols-1 gap-4">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-4 border-[#374151] hover:border-[#4f46e5]/50">
                <Target className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">Beginner Game</div>
                  <div className="text-sm text-gray-400">Perfect for new players</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start text-left h-auto py-4 border-[#374151] hover:border-[#4f46e5]/50">
                <Brain className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">Intermediate Game</div>
                  <div className="text-sm text-gray-400">For experienced players</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start text-left h-auto py-4 border-[#374151] hover:border-[#4f46e5]/50">
                <Zap className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">Analysis Mode</div>
                  <div className="text-sm text-gray-400">Practice with engine analysis</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
=======
        </TabsContent>

        <TabsContent value="gm-styles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grandmasterStyles.map((gm) => (
              <Card
                key={gm.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedGM === gm.name ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedGM(gm.name)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gold-100 rounded-lg">
                        <Crown className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{gm.name}</CardTitle>
                        <CardDescription>{gm.style}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{gm.rating}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{gm.description}</p>
                  <Link href={`/game?style=${gm.name.toLowerCase().replace(" ", "-")}`}>
                    <Button size="sm" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Play {gm.name} Style
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Jump into a game immediately with recommended settings</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Link href="/game?quick=beginner" className="flex-1">
            <Button className="w-full" variant="outline">
              <Target className="mr-2 h-4 w-4" />
              Beginner Game
            </Button>
          </Link>
          <Link href="/game?quick=intermediate" className="flex-1">
            <Button className="w-full">
              <Brain className="mr-2 h-4 w-4" />
              Intermediate Game
            </Button>
          </Link>
          <Link href="/game?quick=analysis" className="flex-1">
            <Button className="w-full" variant="outline">
              <Zap className="mr-2 h-4 w-4" />
              Analysis Mode
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  )
}
