import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "ZenixUI — Launch a premium frontend in hours",
    template: "%s | ZenixUI",
  },
  description:
    "Choose a launch-ready Next.js frontend. Customize it visually. Export clean code you own completely. No vendor lock-in. No proprietary runtime.",
  keywords: [
    "Next.js templates",
    "React starter",
    "frontend starter kit",
    "landing page",
    "startup template",
    "portfolio template",
  ],
  openGraph: {
    type:        "website",
    title:       "ZenixUI — Launch a premium frontend in hours",
    description: "Choose. Customize. Own the code.",
    siteName:    "ZenixUI",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "ZenixUI — Launch a premium frontend in hours",
    description: "Choose. Customize. Own the code.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
