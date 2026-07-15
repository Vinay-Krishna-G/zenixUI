import { HanamiContent } from "@zenix/ui"

export const content: HanamiContent = {
  hero: {
    headline: "We've been expecting you.",
    subheadline: "A digital sanctuary built on warmth, patience, and hospitality.",
    primaryCta: {
      label: "Step Inside",
      href: "#welcome"
    },
    imageUrl: "/images/hanami/hero.png"
  },
  features: {
    headline: "Thoughtfully crafted.",
    items: [
      {
        icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 12h4l3-9 5 18 3-9h5'/></svg>",
        title: "Calm Architecture",
        body: "Built without the noise of typical frameworks. Every element is designed to respect your focus and time.",
      },
      {
        icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='M8 12h8'/></svg>",
        title: "Tactile Materials",
        body: "Digital surfaces that feel physical. We simulate the warmth of linen, paper, and wood.",
      },
      {
        icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2v20'/><path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/></svg>",
        title: "Intentional Stillness",
        body: "Motion is used sparingly. True confidence is found in the things that refuse to move.",
      }
    ]
  },
  nav: {
    logo: "Hanami",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    cta: { label: "Get Started", href: "#welcome" }
  },
  story: {
    headline: "We believe hospitality begins long before someone walks through the door.",
    body: [
      "Every digital interaction is an opportunity to make someone feel expected. We don't just build websites; we design spaces that respect your time, your focus, and your intention.",
      "By removing the noise and artificial urgency of modern software, we create room for genuine connection."
    ],
    imageUrl: "/images/hanami/story.png"
  },
  gallery: {
    headline: "Atmosphere",
    items: [
      { id: "1", url: "/images/hanami/gallery.png", alt: "Warm interior lighting", caption: "Soft illumination" },
      { id: "2", url: "/images/hanami/gallery.png", alt: "Tactile surfaces", caption: "Natural materials" },
      { id: "3", url: "/images/hanami/gallery.png", alt: "Quiet space", caption: "Room to breathe" }
    ]
  },
  testimonials: {
    headline: "Quiet Confidence",
    items: [
      {
        quote: "It felt less like using a piece of software, and more like being welcomed into a carefully curated room.",
        author: "Elena R.",
        role: "Guest"
      }
    ]
  },
  cta: {
    headline: "Begin your visit",
    subheadline: "We've been expecting you. Stay as long as you'd like.",
    primaryCta: { label: "Step Inside", href: "#" }
  },
  footer: {
    brandName: "Hanami",
    brandTagline: "Quiet confidence for the modern web.",
    copyright: "© 2026 ZenixUI. All rights reserved.",
    links: [],
    social: []
  },
  atmosphere: {
    url: "/images/hanami/atmosphere.png",
    alt: "Soft linen with warm sunlight"
  }
}
