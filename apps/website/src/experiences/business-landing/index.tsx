import type { Experience, ExperienceConfig } from "@/types/experience"
import { manifest }       from "./manifest"
import { defaultTheme }   from "./theme"
import { defaultContent } from "./content"

// ─── Preview Component ───────────────────────────────────────────────────────
import { Hero } from "@zenix/ui"

function BusinessLandingPreview({ config }: { config: ExperienceConfig }) {
  // In a real implementation, this would render the full page:
  // <Nav /> <Hero /> <Features /> ...
  // For v1, we just render the Hero as the generic preview.
  return <Hero content={config.content.hero} />
}

// ─── Experience Definition ───────────────────────────────────────────────────

export const businessLanding: Experience = {
  manifest,
  theme: defaultTheme,
  content: defaultContent,
  
  preview: BusinessLandingPreview,
  
  studio: {}, // To be expanded with specific controls
  
  exporter: {
    files: [
      "hero/Hero.tsx",
      "features/Features.tsx",
      "stats/Stats.tsx",
      "pricing/Pricing.tsx",
      "faq/FAQ.tsx",
      "cta/CTA.tsx",
      "footer/Footer.tsx"
    ],
    generatePage: (config) => {
      // In a real app, this generates the full page imports based on sections.
      // For v1, we generate the sections declared in the manifest.
      return `import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Stats } from "@/components/Stats"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { content } from "@/content/home"

export default function Page() {
  return (
    <main>
      <Hero content={content.hero} />
      <Features content={content.features} />
      <Stats content={content.stats} />
      <Pricing content={content.pricing} />
      <FAQ content={content.faq} />
      <CTA content={content.cta} />
      <Footer content={content.footer} />
    </main>
  )
}
`
    }
  }
}
