"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Crown, Menu, X } from "lucide-react"

const navigation = [
  { name: "Play", href: "/play" },
  { name: "Learn", href: "/learn" },
  { name: "Puzzles", href: "/puzzles" },
  { name: "Analysis", href: "/analysis" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<<<<<<< HEAD
    <header className="bg-[#13151a]/80 backdrop-blur-sm border-b border-[#374151] sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Crown className="h-8 w-8 text-[#4f46e5]" />
            <span className="text-xl font-bold text-white">Endgame</span>
=======
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Crown className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">Endgame</span>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(true)}>
<<<<<<< HEAD
            <Menu className="h-6 w-6 text-gray-300" />
=======
            <Menu className="h-6 w-6" />
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
<<<<<<< HEAD
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
=======
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
<<<<<<< HEAD
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white" asChild>
=======
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-50"
        >
<<<<<<< HEAD
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1f2937] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#374151]">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <Crown className="h-8 w-8 text-[#4f46e5]" />
                <span className="text-xl font-bold text-white">Endgame</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-300" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#374151]">
=======
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <Crown className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-bold text-gray-900">Endgame</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
<<<<<<< HEAD
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-[#13151a]"
=======
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    href="/login"
<<<<<<< HEAD
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-[#13151a]"
=======
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
<<<<<<< HEAD
                    className="-mx-3 block rounded-lg bg-[#4f46e5] px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#4338ca]"
=======
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
