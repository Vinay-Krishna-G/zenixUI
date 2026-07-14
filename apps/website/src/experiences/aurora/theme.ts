import type { ExperienceTheme } from "@/types/experience"

export const defaultTheme: ExperienceTheme = {
  primaryColor:    "#ffffff", // High contrast white for primary actions
  secondaryColor:  "#a3a3a3", // Neutral gray for secondary elements
  backgroundColor: "#030303", // Void dark
  cardColor:       "#0a0a0a", // Slightly elevated dark
  borderColor:     "#1f1f1f", // Subtle borders
  headingColor:    "#ffffff",
  bodyColor:       "#a3a3a3",
  mutedColor:      "#525252",
  headingFont:     "Inter",   // Will act as geometric sans
  bodyFont:        "Inter",
  radius:          "none",    // Sharp, precise edges by default for Architecture/Precision feel
}
