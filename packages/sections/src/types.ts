// packages/sections/src/types.ts
// All shared content types for section components.
// The website's types/experience.ts imports and re-exports from here.

export type ExperienceRadius = "none" | "sm" | "md" | "lg" | "full"

export interface NavLink {
  label: string
  href:  string
}

export interface NavContent {
  logo:  string
  links: NavLink[]
  cta:   { label: string; href: string }
}

export interface HeroContent {
  badge?:        string
  headline:      string
  subheadline:   string
  primaryCta:    { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export interface FeatureItem {
  icon:  string
  title: string
  body:  string
}

export interface FeaturesContent {
  headline: string
  items:    FeatureItem[]
}

export interface StatItem {
  value: string
  label: string
}

export interface StatsContent {
  items: StatItem[]
}

export interface PricingTier {
  name:     string
  price:    number
  period:   string
  features: string[]
  cta:      string
  featured: boolean
}

export interface PricingContent {
  headline: string
  tiers:    PricingTier[]
}

export interface FAQItem {
  question: string
  answer:   string
}

export interface FAQContent {
  headline: string
  items:    FAQItem[]
}

export interface CTAContent {
  headline: string
  body:     string
  cta:      { label: string; href: string }
}

export interface FooterContent {
  logo:      string
  tagline:   string
  copyright: string
  links:     NavLink[]
}
