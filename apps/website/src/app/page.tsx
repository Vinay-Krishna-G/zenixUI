import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { BuildFor } from "@/components/marketing/BuildFor"
import { Why } from "@/components/marketing/Why"
import { HowItWorks } from "@/components/marketing/HowItWorks"
import { FAQ } from "@/components/marketing/FAQ"
import { Footer } from "@/components/marketing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-bg flex flex-col">
      <Navbar />
      <Hero />
      <BuildFor />
      <Why />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  )
}
