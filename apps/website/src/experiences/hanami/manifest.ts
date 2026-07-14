import { ExperienceConfig } from "@/types/experience"

export const manifest: ExperienceConfig["manifest"] = {
  id: "hanami",
  name: "Hanami",
  description: "Every visitor should feel expected.",
  tags: ["Warm", "Hospitality", "Gentle"],
  category: "Agency",
  difficulty: "Beginner",
  sections: ["Hero", "Features", "Pricing", "FAQ", "CTA", "Footer"],
  preview: "/previews/hanami.png"
}
