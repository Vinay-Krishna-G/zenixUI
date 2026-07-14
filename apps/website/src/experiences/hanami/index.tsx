import { Experience } from "@/types/experience"
import { manifest } from "./manifest"
import { theme } from "./theme"
import { content } from "./content"
import { HanamiPreview } from "./preview"
import { RAW_COMPONENTS } from "@/lib/export/raw-components"

export const hanami: Experience = {
  manifest,
  theme,
  content,
  preview: HanamiPreview,
  studio: {},
  exporter: {
    files: [
      "hanami/components/index.tsx",
      "hanami/behavior/index.css",
      "hanami/behavior/timing.css",
      "hanami/behavior/presence.css",
      "hanami/behavior/spacing.css",
      "hanami/behavior/focus.css",
      "hanami/behavior/stillness.css",
    ],
    generatePage: (config) => {
      return `import { HanamiHero } from "@/components/index"
import { content } from "@/content/home"
import "@/behavior/index.css"

export default function Page() {
  return (
    <main>
      <HanamiHero 
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={content.hero.primaryCta}
      />
    </main>
  )
}
`
    },
    dependencies: {
      "lucide-react": "^0.300.0"
    }
  }
}
