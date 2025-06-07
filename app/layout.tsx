<<<<<<< HEAD
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
=======
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Endgame - AI Chess Training",
  description: "Master chess with AI-powered training and analysis",
=======
  title: "Endgame - Where AI Learning Begins",
  description:
    "Master chess with AI-powered analysis, personalized training, and insights from the world's greatest grandmasters.",
    generator: 'v0.dev'
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
}

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#121212] text-[#CFFAFE] antialiased`}>
        <Navbar />
        {children}
        <Footer />
=======
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
      </body>
    </html>
  )
}
