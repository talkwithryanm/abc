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
  metadataBase: new URL("https://flannelpeoplemediation.com"),
  openGraph: {
    title: "Flannel People Mediation - End Your Divorce in One 3-Hour Session",
    description:
      "No lawyers. No court battle. From home. Most couples finish in one session. $795 flat fee virtual divorce mediation for MN couples.",
    url: "https://flannelpeoplemediation.com",
    siteName: "Flannel People Mediation",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Flannel People Mediation - Virtual Divorce Mediation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flannel People Mediation - End Your Divorce in One 3-Hour Session",
    description:
      "No lawyers. No court battle. From home. Most couples finish in one session. $795 flat fee virtual divorce mediation for MN couples.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
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
