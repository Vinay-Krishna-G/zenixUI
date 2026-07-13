# ZenixUI — Experience Contract

Every experience in `apps/website/src/experiences/` must satisfy this contract exactly. This is the API that makes experiences interchangeable, composable, and drop-in-extensible.

---

## Folder Structure

```
experiences/
└── business-landing/
    ├── manifest.ts     ← required
    ├── theme.ts        ← required
    ├── content.ts      ← required
    ├── preview.png     ← required (1200×800px, actual screenshot)
    └── README.md       ← required
```

No additional files. If you need a section-specific utility, it belongs in `packages/sections`, not the experience folder.

---

## `manifest.ts`

Describes the experience to the Library and Studio.

```ts
import type { ExperienceManifest } from "@/types/experience"

export const manifest: ExperienceManifest = {
  id:          "business-landing",           // kebab-case, URL-safe, unique
  name:        "Business Landing",           // Display name
  description: "A professional landing page for established businesses and agencies.",
  category:    "Business",                   // Used for filtering: Business | Startup | Portfolio | Agency
  tags:        ["business", "landing", "professional"],
  sections:    [                             // Ordered list — defines render and export order
    "Hero",
    "Features",
    "Stats",
    "Pricing",
    "FAQ",
    "CTA",
    "Footer",
  ],
  preview:     "./preview.png",
}
```

### Rules
- `id` must be unique across all experiences. It is used in the URL, localStorage key, and export folder name.
- `sections` order is the render order. The Studio and the exported project render in this exact order.
- `preview.png` must be a real screenshot of the rendered experience, not a placeholder.

---

## `theme.ts`

Visual defaults only. No content. No layout. No logic.

```ts
import type { ExperienceTheme } from "@/types/experience"

export const defaultTheme: ExperienceTheme = {
  // Colors
  primaryColor:    "#6366f1",
  secondaryColor:  "#8b5cf6",
  backgroundColor: "#0a0a0a",
  cardColor:       "#111111",
  borderColor:     "#1f1f1f",
  headingColor:    "#ffffff",
  bodyColor:       "#a1a1aa",
  mutedColor:      "#52525b",

  // Typography
  headingFont:     "Inter",
  bodyFont:        "Inter",

  // Shape
  radius:          "md",    // "none" | "sm" | "md" | "lg" | "full"
}
```

### Rules
- Every key maps 1:1 to a CSS custom property (defined in `design-language.md`).
- No pixel values. No hex colors embedded in component JSX. CSS custom properties only.
- This file is what the Studio's "Appearance" panel reads and writes.
- This file is what the export bakes into `globals.css`.

---

## `content.ts`

Content defaults only. No colors. No fonts. No layout.

```ts
import type { ExperienceContent } from "@/types/experience"

export const defaultContent: ExperienceContent = {
  nav: {
    logo:  "Acme",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing",  href: "#pricing" },
      { label: "About",    href: "#about" },
    ],
    cta: { label: "Get Started", href: "#" },
  },
  hero: {
    badge:       "Now in public beta",
    headline:    "Build something great.",
    subheadline: "The premium frontend for your startup. Customize visually. Own the code.",
    primaryCta:  { label: "Get Started", href: "#" },
    secondaryCta:{ label: "See Examples", href: "#" },
  },
  features: {
    headline: "Everything you need to launch",
    items: [
      { icon: "Zap",    title: "Fast by default",    body: "Optimized for Core Web Vitals out of the box." },
      { icon: "Shield", title: "Secure and reliable", body: "Built with security best practices from day one." },
      { icon: "Layers", title: "Fully customizable",  body: "Every color, font, and word is yours to change." },
    ],
  },
  pricing: {
    headline: "Simple, transparent pricing",
    tiers: [
      {
        name:     "Starter",
        price:    0,
        period:   "forever",
        features: ["5 projects", "Basic analytics", "Community support"],
        cta:      "Start for free",
        featured: false,
      },
      {
        name:     "Pro",
        price:    49,
        period:   "per month",
        features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domain"],
        cta:      "Start free trial",
        featured: true,
      },
    ],
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      { question: "Do I own the code?", answer: "Yes. Every exported file belongs to you. No ZenixUI dependency is included." },
      { question: "Can I modify the design?", answer: "Completely. Every file is standard React and Next.js. Modify anything." },
    ],
  },
  cta: {
    headline: "Ready to launch?",
    body:     "Join thousands of founders who ship faster with ZenixUI.",
    cta:      { label: "Get Started Free", href: "#" },
  },
  footer: {
    logo:      "Acme",
    tagline:   "Built with ZenixUI.",
    copyright: "© 2025 Acme. All rights reserved.",
    links: [
      { label: "Privacy",  href: "/privacy" },
      { label: "Terms",    href: "/terms" },
    ],
  },
}
```

### Rules
- Every string in this file is user-editable in the Studio's "Content" panel.
- This file is what the export writes to `content/home.ts` in the exported project.
- No style decisions live here. If you're tempted to add `color` or `size` — it belongs in `theme.ts`.

---

## `README.md`

A brief note for contributors explaining what this experience is and who it's for.

```markdown
# Business Landing

A professional landing page for established businesses and agencies.

## Who it's for
Businesses that need a credible, premium web presence quickly.
Agencies pitching to enterprise clients.

## Sections
- Hero — strong headline with dual CTA
- Features — three-column grid
- Stats — social proof numbers
- Pricing — two-tier comparison
- FAQ — common objections addressed
- CTA — conversion close
- Footer — standard links and copyright

## Design Notes
This experience uses a dark background with a high-contrast light accent.
The radius is set to "md" by default (12px). Adjust in theme.ts.
```

---

## Static Registry

After creating an experience, register it in the index:

```ts
// apps/website/src/experiences/index.ts
import { manifest as businessLanding } from "./business-landing/manifest"
import { manifest as saasStartup }     from "./saas-startup/manifest"

export const experiences = [
  businessLanding,
  saasStartup,
]
```

Order in this array = default order in the Experience Library.

---

## TypeScript Types

```ts
// apps/website/src/types/experience.ts

export type ExperienceRadius = "none" | "sm" | "md" | "lg" | "full"

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

export interface ExperienceManifest {
  id:          string
  name:        string
  description: string
  category:    "Business" | "Startup" | "Portfolio" | "Agency"
  tags:        string[]
  sections:    string[]
  preview:     string
}

export interface ExperienceConfig {
  theme:   ExperienceTheme
  content: ExperienceContent   // defined per-experience, typed in content.ts
}
```
