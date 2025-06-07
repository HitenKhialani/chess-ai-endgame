"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    rating: "1850 → 2100",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Endgame helped me break through my rating plateau. The AI analysis is incredibly detailed and the grandmaster insights are game-changing.",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    rating: "1200 → 1650",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a beginner, I was overwhelmed by chess theory. Endgame's personalized learning path made everything clear and enjoyable.",
    stars: 5,
  },
  {
    name: "Marcus Rodriguez",
    rating: "2000 → 2300",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The 'What would Magnus do?' feature is brilliant. It's like having a personal coach analyzing every position with you.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
<<<<<<< HEAD
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#00BFCF]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#FFFFFF] sm:text-4xl">
            Success Stories from Our Users
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-[#1a1a1a] p-8 text-sm leading-6">
                  <blockquote className="text-[#CFFAFE]">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-[#3F51B5]"
                      src={testimonial.avatar}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-[#FFFFFF]">{testimonial.name}</div>
                      <div className="text-[#00BFCF]">{testimonial.rating}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
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
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how players at all levels have improved their chess with Endgame.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-purple-600 font-medium">{testimonial.rating}</div>
                    </div>
                  </div>
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
