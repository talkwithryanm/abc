import type React from "react"
import type { Metadata } from "next"
import { Figtree, Sanchez } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "500", "800", "900"],
  display: "swap",
})

const sanchez = Sanchez({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Flannel People Mediation - Flat Fee Virtual Divorce Mediation MN",
  description:
    "End your divorce in one calm, private 3-hour Zoom session. $795 each. No lawyers, no court. Most MN couples finish in one session with peace.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${sanchez.variable} font-display antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
