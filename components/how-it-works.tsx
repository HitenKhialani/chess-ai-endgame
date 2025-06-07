"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { Play, BookOpen, Brain, Trophy, Target, Crown } from "lucide-react"
=======
import { Play, BookOpen, Brain, Trophy } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import Link from "next/link"

const steps = [
  {
<<<<<<< HEAD
    name: "Choose Your Level",
    description:
      "Select your skill level and preferred learning style. Our AI will create a personalized training plan just for you.",
    icon: Target,
  },
  {
    name: "Train with AI",
    description:
      "Play against our advanced AI engine, which adapts to your level and helps you improve with every game.",
    icon: Brain,
  },
  {
    name: "Master the Game",
    description:
      "Track your progress, learn from your mistakes, and gradually improve your rating with consistent practice.",
    icon: Crown,
=======
    icon: Play,
    title: "Play & Practice",
    description: "Start by playing against our AI or solving puzzles to assess your current skill level.",
    link: "/play",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Get instant feedback on your moves with detailed analysis and improvement suggestions.",
    link: "/analysis",
  },
  {
    icon: BookOpen,
    title: "Learn & Study",
    description: "Access comprehensive lessons on openings, tactics, and endgames tailored to your level.",
    link: "/learn",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor your improvement with detailed statistics and achieve your rating goals.",
    link: "/dashboard",
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  },
]

export default function HowItWorks() {
  return (
<<<<<<< HEAD
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00BFCF]">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#FFFFFF] sm:text-4xl">
            How Endgame Works
          </p>
          <p className="mt-6 text-lg leading-8 text-[#CFFAFE]">
            Start your journey to chess mastery in four simple steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-start">
                <div className="rounded-full bg-[#3F51B5] bg-opacity-20 p-2 ring-1 ring-inset ring-[#3F51B5]">
                  <step.icon className="h-6 w-6 text-[#00BFCF]" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-[#FFFFFF]">{step.name}</dt>
                <dd className="mt-2 leading-7 text-[#CFFAFE]">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
=======
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How Endgame Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered approach makes chess improvement systematic and effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                  <Link href={step.link}>
                    <Button variant="outline" size="sm">
                      Get Started
                    </Button>
                  </Link>
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
