"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Crown, ChevronRight, Play, Clock, Star, Target, Brain } from "lucide-react"
import Link from "next/link"

const openings = [
  {
    name: "Ruy Lopez",
    description: "A classic opening that develops pieces naturally and fights for the center",
    moves: ["1.e4 e5", "2.Nf3 Nc6", "3.Bb5"],
    difficulty: "Intermediate",
    popularity: 95,
    winRate: 52,
  },
  {
    name: "Sicilian Defense",
    description: "A sharp, aggressive defense that leads to complex tactical positions",
    moves: ["1.e4 c5"],
    difficulty: "Advanced",
    popularity: 90,
    winRate: 48,
  },
  {
    name: "Italian Game",
    description: "A solid opening that emphasizes quick development and central control",
    moves: ["1.e4 e5", "2.Nf3 Nc6", "3.Bc4"],
    difficulty: "Beginner",
    popularity: 85,
    winRate: 50,
  },
  {
    name: "French Defense",
    description: "A solid defense that leads to closed, strategic positions",
    moves: ["1.e4 e6"],
    difficulty: "Intermediate",
    popularity: 80,
    winRate: 49,
  },
  {
    name: "King's Indian Defense",
    description: "A hypermodern opening that allows White to establish a large center",
    moves: ["1.d4 Nf6", "2.c4 g6"],
    difficulty: "Advanced",
    popularity: 75,
    winRate: 51,
  },
  {
    name: "London System",
    description: "A solid system-based opening that's easy to learn and hard to refute",
    moves: ["1.d4 d5", "2.Bf4"],
    difficulty: "Beginner",
    popularity: 70,
    winRate: 53,
  },
]

const middlegameTopics = [
  {
    name: "Pawn Structures",
    description: "Understanding pawn chains and weaknesses",
    lessons: 6,
    duration: "45 min",
    difficulty: "Intermediate",
  },
  {
    name: "Piece Coordination",
    description: "Making your pieces work together",
    lessons: 8,
    duration: "60 min",
    difficulty: "Beginner",
  },
  {
    name: "Tactical Motifs",
    description: "Pins, forks, skewers, and more",
    lessons: 12,
    duration: "90 min",
    difficulty: "All Levels",
  },
  {
    name: "Positional Play",
    description: "Long-term planning and strategy",
    lessons: 10,
    duration: "75 min",
    difficulty: "Advanced",
  },
]

const endgameTopics = [
  {
    name: "King and Pawn Endgames",
    description: "Essential endgame knowledge",
    lessons: 8,
    duration: "50 min",
    difficulty: "Beginner",
  },
  {
    name: "Rook Endgames",
    description: "The most common endgame type",
    lessons: 12,
    duration: "80 min",
    difficulty: "Intermediate",
  },
  {
    name: "Queen vs Pawn",
    description: "Precise technique required",
    lessons: 6,
    duration: "40 min",
    difficulty: "Advanced",
  },
  {
    name: "Minor Piece Endgames",
    description: "Bishop and knight endgames",
    lessons: 10,
    duration: "65 min",
    difficulty: "Intermediate",
  },
]

const courses = [
  {
    title: "Opening Fundamentals",
    description: "Learn the key principles of chess openings and how to apply them",
    duration: "2 hours",
    level: "Beginner",
    lessons: 8,
    progress: 75,
    icon: BookOpen,
  },
  {
    title: "Tactical Patterns",
    description: "Master common tactical patterns and combinations",
    duration: "3 hours",
    level: "Intermediate",
    lessons: 12,
    progress: 50,
    icon: Target,
  },
  {
    title: "Endgame Essentials",
    description: "Study essential endgame positions and techniques",
    duration: "2.5 hours",
    level: "Advanced",
    lessons: 10,
    progress: 25,
    icon: Crown,
  },
  {
    title: "Strategic Planning",
    description: "Develop your strategic thinking and planning skills",
    duration: "4 hours",
    level: "Advanced",
    lessons: 15,
    progress: 0,
    icon: Brain,
  },
]

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Chess Learning Center</h1>
        <p className="text-xl text-muted-foreground">
          Master chess with structured courses and interactive lessons
        </p>
      </div>

      <Tabs defaultValue="courses" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
          <TabsTrigger value="courses">
            <BookOpen className="w-4 h-4 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="openings">
            <Play className="w-4 h-4 mr-2" />
            Openings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <course.icon className="w-5 h-5 text-primary" />
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                    <Badge variant={course.level === "Beginner" ? "default" : course.level === "Intermediate" ? "secondary" : "outline"}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div>
                        {course.lessons} Lessons
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <Button className="w-full">
                      {course.progress === 0 ? "Start Course" : "Continue Learning"}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="openings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((opening) => (
              <Card key={opening.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{opening.name}</CardTitle>
                    <Badge variant={opening.difficulty === "Beginner" ? "default" : opening.difficulty === "Intermediate" ? "secondary" : "outline"}>
                      {opening.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{opening.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Main Line</div>
                      <div className="text-sm font-mono bg-muted p-2 rounded">
                        {opening.moves.join(" ")}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          Popularity
                        </div>
                        <Progress value={opening.popularity} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Crown className="w-4 h-4 text-purple-500" />
                          Win Rate
                        </div>
                        <Progress value={opening.winRate} />
                      </div>
                    </div>
                    <Button className="w-full">
                      Study Opening
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
