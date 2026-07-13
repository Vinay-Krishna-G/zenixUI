import type { ExperienceConfig } from "@/types/experience"

export const defaultContent: ExperienceConfig["content"] = {
  nav: {
    logo: "ZenixUI",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Get Started", href: "#pricing" },
  },
  hero: {
    badge: "ZenixUI v1 Release",
    headline: "Ship Premium Frontends in Hours",
    subheadline: "Stop writing boilerplate. Browse beautifully crafted experiences, customize them visually, and export clean Next.js + Tailwind code you truly own.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "View Components", href: "#features" },
  },
  features: {
    headline: "Everything you need to launch",
    items: [
      { icon: "Zap", title: "Instant Export", body: "Download a fully configured Next.js project in one click. No lock-in, no proprietary libraries." },
      { icon: "Layers", title: "Tailwind v4", body: "Built on the latest standard. Every exported file is styled with clean, predictable utility classes." },
      { icon: "Code", title: "Clean Code", body: "The exported code looks like you wrote it yourself. It's meant to be modified and extended." },
    ]
  },
  stats: {
    items: [
      { value: "0", label: "Vendor Lock-in" },
      { value: "100%", label: "Code Ownership" },
      { value: "v4", label: "Tailwind CSS" },
    ]
  },
  pricing: {
    headline: "Simple, transparent pricing",
    subheadline: "Start building today. No hidden fees, no subscriptions.",
    plans: [
      {
        name: "Starter",
        price: "$0",
        description: "Perfect for testing the waters and building your first project.",
        features: ["Access to free experiences", "Standard components", "Community support"],
        cta: { label: "Start Free", href: "#" },
        featured: false,
      },
      {
        name: "Pro",
        price: "$49",
        description: "Everything you need for a professional production app.",
        features: ["All premium experiences", "Advanced components", "Priority support", "Early access to new features"],
        cta: { label: "Get Pro", href: "#" },
        featured: true,
      }
    ]
  },
  faq: {
    headline: "Frequently asked questions",
    subheadline: "Everything you need to know about ZenixUI.",
    items: [
      { question: "Is this a website builder?", answer: "No. ZenixUI is an Experience Platform. We give you a starting point, but you export the actual source code and host it anywhere." },
      { question: "Can I use my own Tailwind config?", answer: "Yes! The exported project is a standard Next.js + Tailwind v4 project. You can modify globals.css and the config exactly as you normally would." },
    ]
  },
  cta: {
    headline: "Ready to own your code?",
    subheadline: "Join hundreds of developers shipping faster with ZenixUI.",
    primaryCta: { label: "Export Project", href: "#" },
    secondaryCta: { label: "Read the Docs", href: "/docs" },
  },
  footer: {
    brandName: "ZenixUI",
    brandTagline: "Premium frontends for modern startups.",
    copyright: "© 2026 ZenixUI. All rights reserved.",
    links: [
      { title: "Product", items: [{ label: "Experiences", href: "#" }, { label: "Pricing", href: "#" }] },
      { title: "Company", items: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }] }
    ],
    social: [
      { platform: "Twitter", href: "#" },
      { platform: "GitHub", href: "#" }
    ]
  }
}
