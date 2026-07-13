import type { ExperienceManifest } from "@/types/experience"

export const manifest: ExperienceManifest = {
  id:          "business-landing",
  name:        "Business Landing",
  description: "A professional landing page for established businesses and agencies.",
  category:    "Business",
  tags:        ["business", "landing", "professional"],
  sections:    ["Hero", "Features", "Stats", "Pricing", "FAQ", "CTA", "Footer"],
  preview:     "/previews/business-landing.png",
}
