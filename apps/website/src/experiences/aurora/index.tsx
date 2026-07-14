import type { Experience, ExperienceConfig } from "@/types/experience"
import type { AuroraContent } from "@zenix/ui"
import { manifest }       from "./manifest"
import { defaultTheme }   from "./theme"
import { content }        from "./content"

// ─── Preview Component ───────────────────────────────────────────────────────
import { 
  AuroraHero, 
  AuroraNav, 
  AuroraProof, 
  AuroraExplore, 
  AuroraMakeItYours, 
  AuroraSocialProof, 
  AuroraCTA 
} from "@zenix/ui"

function AuroraPreview({ config }: { config: ExperienceConfig<AuroraContent> }) {
  // We use the content from the config, which Studio can override
  const c = config.content
  
  return (
    <>
      <AuroraNav content={c.nav} />
      <main>
        <AuroraHero content={c.hero} />
        <AuroraProof content={c.proof} />
        <AuroraExplore content={c.explore} />
        <AuroraMakeItYours content={c.makeItYours} />
        <AuroraSocialProof content={c.socialProof} />
      </main>
      <AuroraCTA content={c.cta} />
    </>
  )
}

// ─── Experience Definition ───────────────────────────────────────────────────

export const aurora: Experience = {
  manifest,
  theme: defaultTheme,
  content: content,
  
  preview: AuroraPreview,
  
  studio: {},
  
  exporter: {
    files: [
      "aurora/components/index.tsx",
      "aurora/AuroraNav.tsx",
      "aurora/AuroraHero.tsx",
      "aurora/AuroraProof.tsx",
      "aurora/AuroraExplore.tsx",
      "aurora/AuroraMakeItYours.tsx",
      "aurora/AuroraSocialProof.tsx",
      "aurora/AuroraCTA.tsx"
    ],
    generatePage: (config) => {
      return `import { AuroraNav } from "@/components/AuroraNav"
import { AuroraHero } from "@/components/AuroraHero"
import { AuroraProof } from "@/components/AuroraProof"
import { AuroraExplore } from "@/components/AuroraExplore"
import { AuroraMakeItYours } from "@/components/AuroraMakeItYours"
import { AuroraSocialProof } from "@/components/AuroraSocialProof"
import { AuroraCTA } from "@/components/AuroraCTA"
import { content } from "@/content/home"

export default function Page() {
  return (
    <>
      <AuroraNav content={content.nav} />
      <main>
        <AuroraHero content={content.hero} />
        <AuroraProof content={content.proof} />
        <AuroraExplore content={content.explore} />
        <AuroraMakeItYours content={content.makeItYours} />
        <AuroraSocialProof content={content.socialProof} />
      </main>
      <AuroraCTA content={content.cta} />
    </>
  )
}
`
    },
    dependencies: {
      "lucide-react": "^0.473.0"
    }
  }
}
