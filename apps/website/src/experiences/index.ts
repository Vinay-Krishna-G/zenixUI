import type { Experience } from "@/types/experience"
import { businessLanding } from "./business-landing"
import { aurora } from "./aurora"

// ─── Registry ────────────────────────────────────────────────────────────────
// Add new experiences here as they are built.
// Order determines display order in the Experience Library.

export const experiences: Experience[] = [
  aurora,
  businessLanding,
]
