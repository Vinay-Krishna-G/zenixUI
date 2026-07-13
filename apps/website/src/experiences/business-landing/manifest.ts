import type { ExperienceManifest } from "@/types/experience"

export const manifest: ExperienceManifest = {
  id:          "business-landing",
  name:        "Business Landing",
  description: "A conversion-optimized landing page designed for B2B SaaS and high-ticket service businesses.",
  category:    "Business",
  tags:        ["business", "SaaS", "startup"],
  difficulty:  "Beginner",
  sections:    ["nav", "hero", "features", "stats", "pricing", "faq", "cta", "footer"],
  preview:     "/previews/business-landing.png",
}
