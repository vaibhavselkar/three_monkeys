import React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";


import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "ThreeMonkeys | Engineering Digital Excellence",
  description:
    "ThreeMonkeys builds scalable, secure, and powerful digital products that connect businesses to their customers. Web apps, mobile systems, gaming, and more.",
  keywords: [
    "software development",
    "web applications",
    "mobile apps",
    "hospital management",
    "restaurant systems",
    "gaming apps",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}
        </main>
        <Footer />
        <Analytics />
        <Chatbot />
      </body>
    </html>
  )
}
