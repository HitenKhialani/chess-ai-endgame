"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import { Puzzle, Target, Zap, Crown, Trophy, Clock, Star, ChevronRight, Brain, Sword, Swords, Flag } from "lucide-react"
=======
import { Puzzle, Target, Zap, Crown, Trophy, Clock, Star, ChevronRight } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import Link from "next/link"

const puzzleCategories = [
  {
<<<<<<< HEAD
    title: "Tactical Patterns",
    description: "Master common tactical patterns and combinations",
    icon: Swords,
    categories: [
      { name: "Pin", count: "150+", difficulty: "Beginner" },
      { name: "Fork", count: "200+", difficulty: "Beginner" },
      { name: "Skewer", count: "125+", difficulty: "Intermediate" },
      { name: "Double Attack", count: "175+", difficulty: "Intermediate" },
      { name: "Discovered Attack", count: "100+", difficulty: "Advanced" },
    ],
    href: "/puzzles/tactics"
  },
  {
    title: "Endgame Studies",
    description: "Practice critical endgame positions and techniques",
    icon: Flag,
    categories: [
      { name: "Pawn Endings", count: "100+", difficulty: "Beginner" },
      { name: "Rook Endings", count: "150+", difficulty: "Intermediate" },
      { name: "Queen vs Pawn", count: "75+", difficulty: "Advanced" },
      { name: "Minor Piece", count: "125+", difficulty: "Advanced" },
      { name: "Technical Wins", count: "100+", difficulty: "Expert" },
    ],
    href: "/puzzles/endgame"
  },
  {
    title: "Opening Traps",
    description: "Learn to spot and avoid common opening traps",
    icon: Target,
    categories: [
      { name: "Sicilian", count: "50+", difficulty: "Intermediate" },
      { name: "King's Indian", count: "40+", difficulty: "Advanced" },
      { name: "French", count: "45+", difficulty: "Intermediate" },
      { name: "Ruy Lopez", count: "60+", difficulty: "Advanced" },
      { name: "Queen's Gambit", count: "55+", difficulty: "Expert" },
    ],
    href: "/puzzles/openings"
  },
  {
    title: "Middlegame Strategy",
    description: "Improve your positional understanding and planning",
    icon: Brain,
    categories: [
      { name: "Pawn Structure", count: "80+", difficulty: "Intermediate" },
      { name: "Piece Activity", count: "90+", difficulty: "Advanced" },
      { name: "King Safety", count: "70+", difficulty: "Advanced" },
      { name: "Center Control", count: "85+", difficulty: "Expert" },
      { name: "Prophylaxis", count: "60+", difficulty: "Expert" },
    ],
    href: "/puzzles/strategy"
  },
  {
    title: "Grandmaster Puzzles",
    description: "Challenge yourself with puzzles from GM games",
    icon: Crown,
    categories: [
      { name: "Magnus Carlsen", count: "30+", difficulty: "Expert" },
      { name: "Garry Kasparov", count: "25+", difficulty: "Expert" },
      { name: "Bobby Fischer", count: "20+", difficulty: "Expert" },
      { name: "Mikhail Tal", count: "25+", difficulty: "Expert" },
      { name: "Anatoly Karpov", count: "20+", difficulty: "Expert" },
    ],
    href: "/puzzles/grandmaster"
  },
  {
    title: "Daily Challenges",
    description: "New puzzles every day based on your rating",
    icon: Zap,
    categories: [
      { name: "Today's Puzzle", count: "1", difficulty: "Varies" },
      { name: "Weekly Theme", count: "7", difficulty: "Varies" },
      { name: "Monthly Challenge", count: "30", difficulty: "Varies" },
      { name: "Rating Boosters", count: "10+", difficulty: "Varies" },
      { name: "Custom Sets", count: "∞", difficulty: "Custom" },
    ],
    href: "/puzzles/daily"
=======
    name: "Tactics",
    description: "Pins, forks, skewers, and discovered attacks",
    puzzles: 2500,
    difficulty: "All Levels",
    icon: Zap,
    color: "blue",
  },
  {
    name: "Checkmate",
    description: "Forced mate in 1, 2, 3, or more moves",
    puzzles: 1800,
    difficulty: "Beginner to Expert",
    icon: Crown,
    color: "purple",
  },
  {
    name: "Endgames",
    description: "Essential endgame positions and techniques",
    puzzles: 1200,
    difficulty: "Intermediate+",
    icon: Target,
    color: "green",
  },
  {
    name: "Opening Traps",
    description: "Common traps and tactical shots in openings",
    puzzles: 800,
    difficulty: "All Levels",
    icon: Trophy,
    color: "orange",
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  },
]

const dailyPuzzles = [
  {
    id: 1,
    title: "Mate in 2",
    difficulty: "Intermediate",
    rating: 1650,
    theme: "Back Rank Mate",
    solved: false,
  },
  {
    id: 2,
    title: "Win Material",
    difficulty: "Beginner",
    rating: 1200,
    theme: "Fork",
    solved: true,
  },
  {
    id: 3,
    title: "Tactical Shot",
    difficulty: "Advanced",
    rating: 2100,
    theme: "Deflection",
    solved: false,
  },
]

const userStats = {
  puzzlesSolved: 1247,
  currentStreak: 12,
  bestStreak: 28,
  accuracy: 87,
  rating: 1680,
}

export default function PuzzlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
<<<<<<< HEAD
    <div className="py-12 bg-[#121212]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-[#FFFFFF] sm:text-4xl md:text-5xl">
            Chess Puzzles
          </h1>
          <p className="mx-auto max-w-[700px] text-[#CFFAFE] md:text-xl">
            Enhance your tactical vision and strategic understanding with our comprehensive collection of chess puzzles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {puzzleCategories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card className="h-full bg-[#1a1a1a] border-[#3F51B5] hover:border-[#00BFCF] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-[#3F51B5] bg-opacity-20 rounded-full">
                      <category.icon className="h-6 w-6 text-[#00BFCF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#FFFFFF]">
                        {category.title}
                      </h3>
                      <p className="text-sm text-[#CFFAFE]">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {category.categories.map((subCategory) => (
                      <div
                        key={subCategory.name}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#121212] hover:bg-[#3F51B5] hover:bg-opacity-10 transition-colors"
                      >
                        <span className="text-[#FFFFFF]">{subCategory.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-[#00BFCF] border-[#00BFCF]">
                            {subCategory.count}
                          </Badge>
                          <Badge variant="outline" className="text-[#CFFAFE] border-[#3F51B5]">
                            {subCategory.difficulty}
                          </Badge>
                        </div>
                      </div>
=======
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Chess Puzzles</h1>
        <p className="text-lg text-muted-foreground">Sharpen your tactical skills with thousands of puzzles</p>
      </div>

      {/* User Stats */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{userStats.puzzlesSolved}</div>
              <div className="text-sm text-muted-foreground">Puzzles Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{userStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{userStats.bestStreak}</div>
              <div className="text-sm text-muted-foreground">Best Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{userStats.accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{userStats.rating}</div>
              <div className="text-sm text-muted-foreground">Puzzle Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="daily">Daily Puzzles</TabsTrigger>
          <TabsTrigger value="custom">Custom Positions</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {puzzleCategories.map((category) => (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.name ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          category.color === "blue"
                            ? "bg-blue-100"
                            : category.color === "purple"
                              ? "bg-purple-100"
                              : category.color === "green"
                                ? "bg-green-100"
                                : "bg-orange-100"
                        }`}
                      >
                        <category.icon
                          className={`h-6 w-6 ${
                            category.color === "blue"
                              ? "text-blue-600"
                              : category.color === "purple"
                                ? "text-purple-600"
                                : category.color === "green"
                                  ? "text-green-600"
                                  : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{category.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{category.puzzles.toLocaleString()} puzzles</span>
                    <Link href={`/puzzles/${category.name.toLowerCase()}`}>
                      <Button size="sm">
                        <Puzzle className="mr-2 h-4 w-4" />
                        Start Solving
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="daily" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-600" />
                Daily Challenge
              </CardTitle>
              <CardDescription>Solve today's featured puzzles to maintain your streak</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dailyPuzzles.map((puzzle) => (
                  <div key={puzzle.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          puzzle.solved ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {puzzle.solved ? "✓" : puzzle.id}
                      </div>
                      <div>
                        <div className="font-semibold">{puzzle.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {puzzle.theme} • Rating: {puzzle.rating}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={
                          puzzle.difficulty === "Beginner"
                            ? "default"
                            : puzzle.difficulty === "Intermediate"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {puzzle.difficulty}
                      </Badge>
                      <Link href={`/puzzles/daily/${puzzle.id}`}>
                        <Button size="sm" variant={puzzle.solved ? "outline" : "default"}>
                          {puzzle.solved ? "Review" : "Solve"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Custom Position</CardTitle>
              <CardDescription>Set up any chess position and get AI analysis and solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-dashed border-2 border-gray-300 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Puzzle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Position Editor</h3>
                    <p className="text-sm text-muted-foreground mb-4">Drag and drop pieces to create your position</p>
                    <Link href="/puzzles/editor">
                      <Button>Open Editor</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-dashed border-2 border-gray-300 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">FEN Import</h3>
                    <p className="text-sm text-muted-foreground mb-4">Import a position using FEN notation</p>
                    <Link href="/puzzles/import">
                      <Button variant="outline">Import FEN</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Would Magnus Do?</CardTitle>
                  <CardDescription>Get insights from grandmaster playing styles for any position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Magnus Carlsen", "Hikaru Nakamura", "Garry Kasparov", "Bobby Fischer"].map((gm) => (
                      <Button key={gm} variant="outline" size="sm" className="text-xs">
                        <Crown className="mr-1 h-3 w-3" />
                        {gm.split(" ")[0]}
                      </Button>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                    ))}
                  </div>
                </CardContent>
              </Card>
<<<<<<< HEAD
            </Link>
          ))}
        </div>
      </div>
=======
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Puzzle Rush
          </CardTitle>
          <CardDescription>Solve as many puzzles as you can in 5 minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Best Score: 23 puzzles</div>
              <div className="text-sm text-muted-foreground">Average: 18 puzzles</div>
            </div>
            <Link href="/puzzles/rush">
              <Button size="lg">
                <Zap className="mr-2 h-5 w-5" />
                Start Puzzle Rush
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
    </div>
  )
}
