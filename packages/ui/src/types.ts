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
  name:        string
  price:       string
  description: string
  features:    string[]
  cta:         { label: string; href: string }
  featured:    boolean
}

export interface PricingContent {
  headline:    string
  subheadline: string
  plans:       PricingTier[]
}

export interface FAQItem {
  question: string
  answer:   string
}

export interface FAQContent {
  headline:    string
  subheadline: string
  items:       FAQItem[]
}

export interface CTAContent {
  headline:     string
  subheadline:  string
  primaryCta:   { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export interface FooterLinkGroup {
  title: string
  items: NavLink[]
}

export interface FooterSocial {
  platform: string
  href:     string
}

export interface FooterContent {
  brandName:    string
  brandTagline: string
  copyright:    string
  links:        FooterLinkGroup[]
  social:       FooterSocial[]
}
