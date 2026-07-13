# ZenixUI — Architecture

## Overview

ZenixUI is a tiny npm workspace monorepo with exactly two runnable surfaces:

1. **`apps/website`** — The Next.js product: Experience Library, Studio, and marketing pages
2. **`packages/sections`** — Shared section components used by both the Studio preview and the exported project

Nothing else exists until it earns its place.

---

## Repository Structure

```
zenixUI/
│
├── apps/
│   └── website/                  ← The product
│
├── packages/
│   └── sections/                 ← Shared section components
│
├── docs/                         ← Single source of truth for all decisions
│
└── package.json                  ← npm workspace root
```

### Root `package.json`

```json
{
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev": "npm run dev --workspace=apps/website",
    "build": "npm run build --workspace=apps/website"
  }
}
```

No Turborepo. No Nx. No build orchestration layer. At this scale, it is unnecessary complexity.

---

## The Three Layers

```
Layer 1: packages/sections
━━━━━━━━━━━━━━━━━━━━━━━━━━
Shared React components (Hero, Features, Pricing, etc.)
Used by: the Studio preview AND the exported project.
Rule: zero @zenix/* imports inside section components.
Rule: CSS custom properties handle all visual decisions.
Rule: typed content props handle all content decisions.

Layer 2: apps/website
━━━━━━━━━━━━━━━━━━━━━
The product.
Experience Library (browse experiences)
Experience Detail (evaluate a specific experience)
Studio (configure and preview)
Export (generate and download the project)

Layer 3: Exported project (not in this repo)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The customer's Next.js project.
Contains: copied section source files + baked config.
Contains: zero @zenix/* dependencies.
Lives: on the customer's machine, in their repo.
```

---

## Experience Folder Structure

Each experience is fully self-contained. Adding a new experience is dropping a folder.

```
apps/website/src/experiences/
├── index.ts                    ← Static import registry
└── business-landing/
    ├── manifest.ts             ← ID, name, category, section order
    ├── theme.ts                ← Visual defaults (CSS custom property values)
    ├── content.ts              ← Content defaults (text, pricing, FAQ data)
    ├── preview.png             ← Screenshot shown in the library
    └── README.md               ← What this experience is for
```

The registry is a plain import array. No dynamic imports, no filesystem scanning:

```ts
// experiences/index.ts
import { manifest as businessLanding } from "./business-landing/manifest"
import { manifest as saasStartup }     from "./saas-startup/manifest"

export const experiences = [businessLanding, saasStartup]
```

Adding a new experience = one import + one array entry.

---

## Styling Architecture

### Two systems, never mixed

**Visual → CSS custom properties**

All colors, fonts, radius, spacing, and shadows are CSS custom properties defined in `:root`. The Studio updates these values in real time. Export bakes the final values into `globals.css`.

```css
:root {
  --brand-primary:     #6366f1;
  --brand-secondary:   #8b5cf6;
  --surface-bg:        #0a0a0a;
  --surface-card:      #111111;
  --surface-border:    #1f1f1f;
  --text-heading:      #ffffff;
  --text-body:         #a1a1aa;
  --font-heading:      'Inter', sans-serif;
  --font-body:         'Inter', sans-serif;
  --radius-sm:         6px;
  --radius-md:         12px;
  --radius-lg:         20px;
  --spacing-section:   96px;
}
```

**Content → typed JSON**

All text, images, pricing data, FAQ items, and CTAs live in a typed config object. The Studio renders editable fields for each key. Export serializes the user's choices to `content/home.ts`.

```ts
// content/home.ts (in exported project)
export const content = {
  hero: {
    headline:    "Build something great.",
    subheadline: "The premium frontend for your startup.",
    cta:         "Get Started",
  },
  pricing: { ... },
  faq:     { ... },
}
```

### Why they must never mix

A component that accepts `color="#3b82f6"` as a prop creates visual lock-in. CSS owns visual decisions. Props own content decisions. This separation is what makes the export model clean, and it is what allows the Studio preview to be pixel-accurate.

---

## Export Architecture

Export is not code generation. It is project assembly.

```
assembler.ts
  Knows: what files the exported project needs
  Does:  collects section source files, applies user config, builds file map

zip.ts
  Knows: a file map (filename → content)
  Does:  packages it as a .zip download
  Knows nothing about: ZenixUI, sections, experiences, config
```

The assembler and zip are decoupled so that future export targets (GitHub repo, StackBlitz, CodeSandbox) only require a new consumer of the assembler's output — not changes to the assembly logic itself.

---

## What Does NOT Exist

Do not create these. They are not refused because they are bad ideas. They are refused because they have not earned their place.

- No `packages/cli`
- No `packages/themes`
- No `packages/renderer`
- No `packages/effects`
- No `packages/registry`
- No `apps/playground` (separate preview app)
- No `turbo.json`
- No Turborepo
- No database
- No authentication

---

## Earning a New Package

Before creating any new entry in `packages/`, answer all five:

1. Why does this abstraction exist?
2. What real duplication does it remove today (not tomorrow)?
3. Could we solve this without a new package?
4. Will this still make sense after 10 experiences are in the library?
5. Does this improve the customer experience, or only the internal architecture?

If the answer to question 5 is "only internal" — challenge it before creating.
