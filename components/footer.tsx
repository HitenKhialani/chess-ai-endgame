import Link from "next/link"
import { Crown } from "lucide-react"

<<<<<<< HEAD
export default function Footer() {
  return (
    <footer className="bg-[#13151a] border-t border-[#374151]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-[#4f46e5]" />
            <span className="text-xl font-bold">Endgame</span>
          </div>

          <div className="mt-4 flex space-x-8 md:mt-0">
            <Link href="/play" className="text-sm text-gray-300 hover:text-white">
              Play
            </Link>
            <Link href="/learn" className="text-sm text-gray-300 hover:text-white">
              Learn
            </Link>
            <Link href="/puzzles" className="text-sm text-gray-300 hover:text-white">
              Puzzles
            </Link>
            <Link href="/analysis" className="text-sm text-gray-300 hover:text-white">
              Analysis
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[#374151] pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Endgame. Where AI Learning Begins.
=======
const navigation = {
  main: [
    { name: "Play", href: "/play" },
    { name: "Learn", href: "/learn" },
    { name: "Puzzles", href: "/puzzles" },
    { name: "Analysis", href: "/analysis" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.main.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300 text-sm">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Crown className="h-6 w-6 text-purple-400" />
            <span className="text-lg font-bold">Endgame</span>
          </div>
          <p className="text-center text-xs leading-5 text-gray-400 md:text-left mt-2">
            &copy; 2024 Endgame. Where AI Learning Begins.
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
          </p>
        </div>
      </div>
    </footer>
  )
}
