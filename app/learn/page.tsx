"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import { BookOpen, Crown, ChevronRight, Play, Clock, Star, Target, Brain } from "lucide-react"
=======
import { BookOpen, Crown, ChevronRight, Play, Clock, Star } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import Link from "next/link"

const openings = [
  {
    name: "Italian Game",
    description: "Classic opening focusing on rapid development",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    difficulty: "Beginner",
    lessons: 8,
    completed: 6,
    rating: 4.8,
  },
  {
    name: "Ruy Lopez",
    description: "One of the oldest and most analyzed openings",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    difficulty: "Intermediate",
    lessons: 12,
    completed: 3,
    rating: 4.9,
  },
  {
    name: "Sicilian Defense",
    description: "Sharp and complex defense for Black",
    moves: "1.e4 c5",
    difficulty: "Advanced",
    lessons: 15,
    completed: 0,
    rating: 4.7,
  },
  {
    name: "Queen's Gambit",
    description: "Strategic opening controlling the center",
    moves: "1.d4 d5 2.c4",
    difficulty: "Intermediate",
    lessons: 10,
    completed: 2,
    rating: 4.8,
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

<<<<<<< HEAD
const courses = [
  {
    title: "Opening Fundamentals",
    description: "Master the essential opening principles and popular variations",
    lessons: 25,
    level: "Beginner",
    icon: Target,
    color: "text-green-500",
  },
  {
    title: "Middlegame Strategy",
    description: "Learn positional play and tactical patterns",
    lessons: 40,
    level: "Intermediate",
    icon: Brain,
    color: "text-yellow-500",
  },
  {
    title: "Advanced Tactics",
    description: "Complex combinations and sacrificial themes",
    lessons: 35,
    level: "Advanced",
    icon: BookOpen,
    color: "text-orange-500",
  },
  {
    title: "Grandmaster Endgames",
    description: "Study winning techniques from world champions",
    lessons: 30,
    level: "Master",
    icon: Crown,
    color: "text-red-500",
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Learn Chess</h1>
          <p className="text-lg text-gray-400">
            Comprehensive lessons from beginner to master level
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <Card key={course.title} className="bg-[#1f2937] border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-[#13151a] ${course.color}`}>
                      <course.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-gray-400">{course.description}</p>
                    </div>
                  </div>
                  <Badge className={`${course.color} bg-[#13151a]`}>
                    {course.level}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {course.lessons} Lessons
                  </div>
                  <Link 
                    href={`/learn/${course.title
                      .toLowerCase()
                      .replace("opening fundamentals", "openings")
                      .replace("middlegame strategy", "middlegame")
                      .replace("advanced tactics", "tactics")
                      .replace("grandmaster endgames", "endgames")
                      .replace(/\s+/g, "-")}`}
                  >
                    <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="bg-[#1f2937] border-[#374151]">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Interactive Lessons</div>
            </CardContent>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151]">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-400">GM Instructors</div>
            </CardContent>
          </Card>

          <Card className="bg-[#1f2937] border-[#374151]">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-400">Active Students</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
=======
export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Learn Chess</h1>
        <p className="text-lg text-muted-foreground">
          Master chess fundamentals with comprehensive lessons from beginner to grandmaster level
        </p>
      </div>

      <Tabs defaultValue="openings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="openings">Openings</TabsTrigger>
          <TabsTrigger value="middlegame">Middlegame</TabsTrigger>
          <TabsTrigger value="endgame">Endgame</TabsTrigger>
        </TabsList>

        <TabsContent value="openings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((opening) => (
              <Card key={opening.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{opening.name}</CardTitle>
                      <CardDescription className="mb-3">{opening.description}</CardDescription>
                      <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{opening.moves}</code>
                    </div>
                    <Badge
                      variant={
                        opening.difficulty === "Beginner"
                          ? "default"
                          : opening.difficulty === "Intermediate"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {opening.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>
                          {opening.completed}/{opening.lessons} lessons
                        </span>
                      </div>
                      <Progress value={(opening.completed / opening.lessons) * 100} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{opening.rating}</span>
                      </div>
                      <Link href={`/learn/opening/${opening.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button size="sm">
                          {opening.completed > 0 ? "Continue" : "Start"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="middlegame" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {middlegameTopics.map((topic) => (
              <Card key={topic.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{topic.name}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{topic.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {topic.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {topic.duration}
                      </div>
                    </div>
                  </div>
                  <Link href={`/learn/middlegame/${topic.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="endgame" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endgameTopics.map((topic) => (
              <Card key={topic.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{topic.name}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{topic.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {topic.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {topic.duration}
                      </div>
                    </div>
                  </div>
                  <Link href={`/learn/endgame/${topic.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Start Learning
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
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-purple-600" />
            Grandmaster Masterclasses
          </CardTitle>
          <CardDescription>Exclusive lessons from world-class players</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Magnus Carlsen</h4>
                <p className="text-sm text-muted-foreground mb-3">Endgame Mastery</p>
                <Button size="sm" className="w-full">
                  <Crown className="mr-2 h-4 w-4" />
                  Premium
                </Button>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Hikaru Nakamura</h4>
                <p className="text-sm text-muted-foreground mb-3">Speed Chess Tactics</p>
                <Button size="sm" className="w-full">
                  <Crown className="mr-2 h-4 w-4" />
                  Premium
                </Button>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Garry Kasparov</h4>
                <p className="text-sm text-muted-foreground mb-3">Attacking Principles</p>
                <Button size="sm" className="w-full">
                  <Crown className="mr-2 h-4 w-4" />
                  Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  )
}
