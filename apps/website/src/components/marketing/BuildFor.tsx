"use client"

import { useState } from "react"
import { ExperienceGrid } from "./ExperienceGrid"

const CATEGORIES = [
  "Startup",
  "SaaS",
  "Agency",
  "Portfolio",
  "Restaurant",
  "Healthcare"
]

export function BuildFor() {
  const [activeCategory, setActiveCategory] = useState<string>("Business") // We only have Business right now, but pretend it's Startup/SaaS mapped

  return (
    <section className="py-24 border-t border-surface-border bg-surface-bg" id="build-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-heading font-heading mb-8">
            I'm building a...
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === "Startup" || cat === "Agency" ? "Business" : cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === (cat === "Startup" || cat === "Agency" ? "Business" : cat)
                    ? "bg-brand-primary text-brand-foreground border-brand-primary shadow-[0_0_16px_rgba(99,102,241,0.3)]"
                    : "bg-surface-card text-text-muted border-surface-border hover:text-text-heading hover:border-text-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <ExperienceGrid category={activeCategory} />
      </div>
    </section>
  )
}
