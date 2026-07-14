// apps/website/src/types/experience.ts
// Experience types for the website layer: manifest, config, registry entry.
// Section content types are imported from @zenix/ui to avoid duplication.

export type {
  ExperienceRadius,
  NavLink,
  NavContent,
  HeroContent,
  FeatureItem,
  FeaturesContent,
  StatItem,
  StatsContent,
  PricingTier,
  PricingContent,
  FAQItem,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@zenix/ui"

import type {
  NavContent,
  HeroContent,
  FeaturesContent,
  StatsContent,
  PricingContent,
  FAQContent,
  CTAContent,
  FooterContent,
  ExperienceRadius,
} from "@zenix/ui"

// ─── Theme ───────────────────────────────────────────────────────────────────

export interface ExperienceTheme {
  primaryColor:    string
  secondaryColor:  string
  backgroundColor: string
  cardColor:       string
  borderColor:     string
  headingColor:    string
  bodyColor:       string
  mutedColor:      string
  headingFont:     string
  bodyFont:        string
  radius:          ExperienceRadius
}

// Content is now defined by the individual worlds (e.g. AuroraContent, HanamiContent)
// The platform does not enforce a rigid content interface.

// ─── Manifest ────────────────────────────────────────────────────────────────

export type ExperienceCategory = "Business" | "Startup" | "Portfolio" | "Agency"

export interface ExperienceManifest {
  id:          string
  name:        string
  description: string
  category:    ExperienceCategory
  tags:        string[]
  difficulty:  "Beginner" | "Intermediate" | "Advanced"
  sections:    string[]
  preview:     string
}

// ─── Config ──────────────────────────────────────────────────────────────────

export interface ExperienceConfig<TContent = any> {
  theme:   ExperienceTheme
  content: TContent
}

// ─── Experience Capability Interface ──────────────────────────────────────────

import type React from "react"

export interface Experience {
  manifest: ExperienceManifest
  theme:    ExperienceTheme
  content:  any

  // Capability: How it renders itself
  preview: React.ComponentType<{ config: ExperienceConfig }>

  // Capability: How it exposes controls to the Studio
  studio: {
    // Future expansion: controls, defaultState
  }

  // Capability: How it bundles itself into a ZIP
  exporter: {
    files: string[] // Paths relative to packages/ui/src
    generatePage: (config: ExperienceConfig) => string
    dependencies?: Record<string, string> // e.g. { "lucide-react": "^0.292.0" }
    // Future expansion: assets, fonts, metadata, seo, post processing
  }
}

