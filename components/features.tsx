"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
<<<<<<< HEAD
import { Brain, Crown, Target, Zap, Layout, Users } from "lucide-react"
import Link from "next/link"
import type { Url } from "next/dist/shared/lib/router/router"

const features = [
  {
    name: "AI Analysis",
    description:
      "Get instant feedback on your moves with our advanced AI engine. Understand your mistakes and learn how to improve.",
    icon: Brain,
    href: "/analysis" as Url
  },
  {
    name: "Opening Explorer",
    description:
      "Study and master chess openings with our comprehensive database. Learn from grandmaster games and understand key positions.",
    icon: Layout,
    href: "/openings" as Url
  },
  {
    name: "Community",
    description:
      "Join a vibrant community of chess enthusiasts. Share insights, participate in tournaments, and learn from each other.",
    icon: Users,
    href: "/community" as Url
=======
import { Brain, BookOpen, Puzzle, Target, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Get instant feedback on your moves with Stockfish 16 engine analysis and personalized improvement suggestions.",
    badge: "3200+ ELO",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "Master openings, middlegames, and endgames with lessons from world-class grandmasters and theory.",
    badge: "500+ Lessons",
  },
  {
    icon: Puzzle,
    title: "Tactical Puzzles",
    description: "Solve thousands of puzzles ranging from beginner to master level with detailed explanations.",
    badge: "10K+ Puzzles",
  },
  {
    icon: Target,
    title: "Custom Positions",
    description: "Create any chess position and get AI analysis with multiple grandmaster perspectives.",
    badge: "Unlimited",
  },
  {
    icon: Users,
    title: "Grandmaster Insights",
    description: "Learn how Magnus, Hikaru, and other top GMs would play in any position with style analysis.",
    badge: "20+ GMs",
  },
  {
    icon: TrendingUp,
    title: "Rating Improvement",
    description: "Track your progress with detailed statistics and personalized training plans to boost your rating.",
    badge: "Proven Results",
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  },
]

export default function Features() {
  return (
<<<<<<< HEAD
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00BFCF]">Train Smarter</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#FFFFFF] sm:text-4xl">
            Everything you need to master chess
          </p>
          <p className="mt-6 text-lg leading-8 text-[#CFFAFE]">
            From opening theory to endgame tactics, our AI-powered platform provides comprehensive training to elevate your chess game.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#FFFFFF]">
                  <feature.icon className="h-5 w-5 flex-none text-[#00BFCF]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-[#CFFAFE]">{feature.description}</p>
                  <p className="mt-6">
                    <Link href={feature.href} className="text-sm font-semibold leading-6 text-[#00BFCF]">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
=======
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Master Chess
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From beginner to grandmaster, our AI-powered platform provides comprehensive tools for chess improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  )
}
