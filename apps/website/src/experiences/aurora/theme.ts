import type { ExperienceTheme } from "@/types/experience"

export const defaultTheme: ExperienceTheme = {
  primaryColor:    "#ffffff", // High contrast white for primary actions
  secondaryColor:  "#a3a3a3", // Neutral gray for secondary elements
  backgroundColor: "#030405", // Deep atmospheric void (cool tint)
  cardColor:       "#06080a", // First elevation
  borderColor:     "#12181f", // Very subtle border
  headingColor:    "#ffffff",
  bodyColor:       "#8f9ba8", // Cooler neutral for body
  mutedColor:      "#424b54", // Cooler muted text
  headingFont:     "Inter",   // Will act as geometric sans
  bodyFont:        "Inter",
  radius:          "none",    // Sharp, precise edges by default for Architecture/Precision feel
}
