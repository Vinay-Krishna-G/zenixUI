import {
  NavContent,
  HeroContent,
  FeaturesContent,
  StoryContent,
  GalleryContent,
  TestimonialsContent,
  CTAContent,
  FooterContent,
} from "../types"

export interface HanamiContent {
  nav: NavContent
  hero: HeroContent
  features: FeaturesContent
  story: StoryContent
  gallery: GalleryContent
  testimonials: TestimonialsContent
  cta: CTAContent
  footer: FooterContent
  atmosphere?: { url: string; alt: string }
}
