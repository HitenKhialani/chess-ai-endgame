"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"
<<<<<<< HEAD
import { Brain, Crown, Zap, Target } from "lucide-react"
=======
import { Brain, Crown, Zap } from "lucide-react"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import Link from "next/link"

export default function Hero() {
  const [game] = useState(new Chess("rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3"))

  return (
<<<<<<< HEAD
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-[#3F51B5] bg-opacity-20 px-3 py-1 text-sm font-semibold leading-6 text-[#CFFAFE] ring-1 ring-inset ring-[#3F51B5]">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-[#CFFAFE]">
                <span>Just shipped v1.0</span>
                <Crown className="h-5 w-5 text-[#00BFCF]" />
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-6xl">
            Master Chess with AI-Powered Training
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#CFFAFE]">
            Elevate your game with personalized lessons, real-time analysis, and insights from the world's greatest grandmasters.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/play">
              <Button className="bg-[#3F51B5] hover:bg-[#3F51B5]/80 text-white text-lg h-12 px-8">
                Play Now
              </Button>
            </Link>
            <Link href="/learn" className="text-sm font-semibold leading-6 text-[#CFFAFE]">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-3 sm:gap-12">
            <div>
              <div className="flex items-center gap-x-3">
                <Brain className="h-6 w-6 text-[#00BFCF]" />
                <h3 className="text-sm font-semibold leading-7 text-[#FFFFFF]">AI Analysis</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#CFFAFE]">Get instant feedback on your moves and learn from your mistakes.</p>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Crown className="h-6 w-6 text-[#00BFCF]" />
                <h3 className="text-sm font-semibold leading-7 text-[#FFFFFF]">GM Insights</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#CFFAFE]">Learn strategies and techniques from top grandmasters.</p>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Target className="h-6 w-6 text-[#00BFCF]" />
                <h3 className="text-sm font-semibold leading-7 text-[#FFFFFF]">Personalized</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#CFFAFE]">Training adapted to your skill level and goals.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="aspect-square w-[36rem] rounded-xl bg-[#1a1a1a] shadow-lg ring-1 ring-[#3F51B5]">
              <Card className="w-full max-w-md bg-[#1a1a1a] border-[#3F51B5] rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-semibold text-[#FFFFFF]">Live Analysis</h3>
                    <p className="text-sm text-[#00BFCF]">Italian Game Opening</p>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Chessboard 
                      position={game.fen()} 
                      arePiecesDraggable={false} 
                      boardWidth={320}
                      customDarkSquareStyle={{ backgroundColor: '#8B4513' }}
                      customLightSquareStyle={{ backgroundColor: '#DEB887' }}
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#00BFCF]">Best Move:</span>
                      <span className="text-[#FFFFFF] font-mono">Nf3</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#00BFCF]">Evaluation:</span>
                      <span className="text-[#00BFCF] font-mono">+0.3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-purple-100 text-purple-800">
                <Crown className="mr-1 h-3 w-3" />
                AI-Powered Chess Training
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Endgame</span>
              </h1>

              <p className="text-xl text-purple-200 sm:text-2xl">Where AI Learning Begins</p>

              <p className="max-w-lg text-lg text-gray-300">
                Master chess with AI-powered analysis, personalized training, and insights from the world's greatest
                grandmasters. Elevate your game from beginner to master.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/play">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Training
                </Button>
              </Link>

              <Link href="/analysis">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Analyze Position
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3200+</div>
                <div className="text-sm text-purple-200">Stockfish Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-purple-200">GM Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-purple-200">Master Games</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Chessboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-purple-400/20">
              <CardContent className="p-6">
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-semibold text-white">Live Analysis</h3>
                  <p className="text-sm text-purple-200">Italian Game Opening</p>
                </div>

                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Chessboard position={game.fen()} arePiecesDraggable={false} boardWidth={320} />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Best Move:</span>
                    <span className="text-white font-mono">Nf3</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Evaluation:</span>
                    <span className="text-green-400 font-mono">+0.3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
  )
}
