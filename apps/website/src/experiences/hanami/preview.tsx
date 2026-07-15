import React from "react"
import { ExperienceConfig } from "@/types/experience"
import { 
  HanamiHero, 
  HanamiStory,
  HanamiCards, 
  HanamiGallery,
  HanamiAtmosphere,
  HanamiTestimonials,
  HanamiCTA,
  HanamiFooter,
  HanamiContent 
} from "@zenix/ui"

export function HanamiPreview({ config }: { config: ExperienceConfig<HanamiContent> }) {
  const c = config.content
  return (
    <div 
      className="w-full min-h-screen transition-colors duration-1000 ease-in-out"
      style={{ 
        backgroundColor: "var(--surface-bg)",
        color: "var(--text-body)" 
      }}
    >
      <HanamiHero {...c.hero} />
      <HanamiStory {...c.story} />
      <HanamiCards {...c.features} />
      <HanamiAtmosphere {...c.atmosphere} />
      <HanamiGallery {...c.gallery} />
      <HanamiTestimonials {...c.testimonials} />
      <HanamiCTA {...c.cta} />
      <HanamiFooter {...c.footer} />
    </div>
  )
}
