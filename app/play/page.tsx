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

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Play Chess</h1>
          <p className="text-lg text-gray-400">
            Challenge AI opponents and test your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiOpponents.map((opponent) => (
            <Card key={opponent.name} className="bg-[#1f2937] border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-[#13151a] ${opponent.color}`}>
                      <opponent.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{opponent.name}</h3>
                      <p className="text-sm text-gray-400">{opponent.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className={`${opponent.color} bg-[#13151a]`}>
                    {opponent.difficulty}
                  </Badge>
                  <div className="text-sm text-gray-400">
                    Rating: <span className="text-white">{opponent.rating}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href={`/game?opponent=${opponent.name.toLowerCase().replace(" ", "-")}`} className="w-full">
                    <Button className="bg-[#4f46e5] hover:bg-[#4338ca] w-full">
                      Play Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
