import { ExperienceConfig } from "@/types/experience"

export const content: ExperienceConfig["content"] = {
  hero: {
    headline: "We've been expecting you.",
    subheadline: "A digital sanctuary built on warmth, patience, and hospitality.",
    primaryCta: {
      label: "Step Inside",
      href: "#welcome"
    }
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
  stats: {
    items: [
      { value: "0ms", label: "Runtime overhead" },
      { value: "100%", label: "Code ownership" },
      { value: "∞", label: "Customizability" }
    ]
  },
  pricing: {
    headline: "Simple pricing.",
    subheadline: "No subscriptions.",
    plans: [
      {
        name: "Lifetime",
        price: "$199",
        description: "One time payment. Yours forever.",
        features: ["All components", "Figma files", "Lifetime updates"],
        cta: { label: "Purchase", href: "#" },
        featured: true
      }
    ]
  },
  faq: {
    headline: "Questions & Answers",
    subheadline: "Everything you need to know.",
    items: [
      {
        question: "Can I use this for client work?",
        answer: "Yes, you can use ZenixUI for unlimited client projects."
      }
    ]
  },
  cta: {
    headline: "Ready to start?",
    subheadline: "Join thousands of developers building better interfaces.",
    primaryCta: { label: "Get Access", href: "#" }
  },
  footer: {
    brandName: "Hanami",
    brandTagline: "Quiet confidence for the modern web.",
    copyright: "© 2026 ZenixUI. All rights reserved.",
    links: [],
    social: []
  }
}
