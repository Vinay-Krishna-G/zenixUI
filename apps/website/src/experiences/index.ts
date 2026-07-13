import type { ExperienceEntry } from "@/types/experience"
import { manifest }       from "./business-landing/manifest"
import { defaultTheme }   from "./business-landing/theme"
import { defaultContent } from "./business-landing/content"

const businessLanding: ExperienceEntry = { manifest, defaultTheme, defaultContent }

// ─── Registry ────────────────────────────────────────────────────────────────
// Add new experiences here as they are built.
// Order determines display order in the Experience Library.

export const experiences: ExperienceEntry[] = [
  businessLanding,
]
