import { Experience } from "@/types/experience"
import { manifest } from "./manifest"
import { theme } from "./theme"
import { content } from "./content"
import { editor } from "./editor"
import { HanamiPreview } from "./preview"
import { RAW_COMPONENTS } from "@/lib/export/raw-components"

export const hanami: Experience = {
  manifest,
  theme,
  content,
  preview: HanamiPreview,
  studio: {},
  editor,
  exporter: {
    files: [
      "hanami/components/index.tsx",
      "hanami/components/Hero.tsx",
      "hanami/components/Story.tsx",
      "hanami/components/Cards.tsx",
      "hanami/components/Gallery.tsx",
      "hanami/components/Testimonials.tsx",
      "hanami/components/CTA.tsx",
      "hanami/components/Footer.tsx",
      "hanami/behavior/index.ts",
      "hanami/behavior/MotionPreset.tsx",
      "hanami/behavior/Presence.tsx",
      "hanami/behavior/Stillness.tsx",
      "hanami/behavior/Focus.tsx",
      "hanami/behavior/index.css",
      "hanami/behavior/timing.css",
      "hanami/behavior/presence.css",
      "hanami/behavior/spacing.css",
      "hanami/behavior/focus.css",
      "hanami/behavior/stillness.css",
    ],
    generatePage: (config) => {
      return `import { 
  HanamiHero, 
  HanamiStory,
  HanamiCards,
  HanamiGallery,
  HanamiTestimonials,
  HanamiCTA,
  HanamiFooter
} from "@/components/index"
import { content } from "@/content/home"
import "@/behavior/index.css"

export default function Page() {
  return (
    <div 
      className="w-full min-h-screen transition-colors duration-1000 ease-in-out"
      style={{ 
        backgroundColor: "var(--surface-bg)",
        color: "var(--text-body)" 
      }}
    >
      <HanamiHero {...content.hero} />
      <HanamiStory {...content.story} />
      <HanamiCards {...content.features} />
      <HanamiGallery {...content.gallery} />
      <HanamiTestimonials {...content.testimonials} />
      <HanamiCTA {...content.cta} />
      <HanamiFooter {...content.footer} />
    </div>
  )
}
`
    },
    dependencies: {
      "lucide-react": "^0.473.0"
    }
  }
}
