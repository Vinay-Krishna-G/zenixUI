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

export interface ProofItem {
  title: string
  description: string
  visual: "folder" | "code" | "checklist"
  codeSnippet?: string
}

export interface ProofContent {
  eyebrow: string
  headline: string
  subheadline: string
  items: ProofItem[]
}

export interface ExploreItem {
  title: string
  category: string
  status: "Live" | "Coming Soon"
  href: string
}

export interface ExploreContent {
  eyebrow: string
  headline: string
  subheadline: string
  items: ExploreItem[]
}

export interface MakeItYoursItem {
  title: string
  description: string
  visual: "customize" | "export" | "continue"
}

export interface MakeItYoursContent {
  headline: string
  subheadline: string
  items: MakeItYoursItem[]
}

export interface SocialProofQuote {
  quote: string
  author: string
  role: string
}

export interface SocialProofContent {
  eyebrow: string
  headline: string
  subheadline: string
  quotes: SocialProofQuote[]
}

export interface StoryContent {
  headline: string
  body: string[]
}

export interface GalleryItem {
  id: string
  url: string
  alt: string
  caption?: string
}

export interface GalleryContent {
  headline?: string
  items: GalleryItem[]
}

export interface TestimonialItem {
  quote: string
  author: string
  role?: string
}

export interface TestimonialsContent {
  headline: string
  items: TestimonialItem[]
}
