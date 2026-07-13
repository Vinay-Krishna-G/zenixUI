# ZenixUI — Export Specification

## The Promise

Every exported project must satisfy this guarantee:

> **The exported project can survive if zenixui.com shuts down forever.**

This means:
- Zero `@zenix/*` dependencies in `package.json`
- All component source files are copied, not referenced
- The project is standard React and Next.js — nothing proprietary
- Any competent React developer can take ownership immediately

---

## What Export Produces

Export generates a downloadable `.zip` file. Its contents:

```
[experience-name]/
│
├── app/
│   ├── layout.tsx          ← Standard Next.js root layout
│   ├── page.tsx            ← Assembles sections in manifest order
│   ├── globals.css         ← User's CSS custom properties baked into :root
│   └── favicon.ico
│
├── components/
│   ├── Hero.tsx            ← Copied from packages/sections/src/hero/
│   ├── Features.tsx        ← Copied from packages/sections/src/features/
│   ├── Pricing.tsx         ← Copied from packages/sections/src/pricing/
│   ├── FAQ.tsx             ← Copied from packages/sections/src/faq/
│   ├── CTA.tsx             ← Copied from packages/sections/src/cta/
│   └── Footer.tsx          ← Copied from packages/sections/src/footer/
│
├── lib/
│   └── theme.ts            ← User's visual config as typed TypeScript constants
│
├── content/
│   └── home.ts             ← User's content (text, pricing tiers, FAQ items)
│
├── public/
│   └── (any uploaded images)
│
├── package.json            ← Zero @zenix/* dependencies
├── next.config.ts
├── tailwind.config.ts      ← References CSS custom properties
├── tsconfig.json
└── README.md
```

---

## File-by-File Specification

### `app/globals.css`

Contains the user's theme baked as CSS custom properties:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Brand — set by user in Studio */
  --brand-primary:       #6366f1;
  --brand-secondary:     #8b5cf6;
  --brand-foreground:    #ffffff;

  /* Surfaces */
  --surface-bg:          #0a0a0a;
  --surface-card:        #111111;
  --surface-elevated:    #1a1a1a;
  --surface-border:      #1f1f1f;

  /* Text */
  --text-heading:        #ffffff;
  --text-body:           #a1a1aa;
  --text-muted:          #52525b;

  /* Typography */
  --font-heading:        'Inter', sans-serif;
  --font-body:           'Inter', sans-serif;

  /* Radius */
  --radius-control:      12px;
  --radius-card:         20px;

  /* Spacing */
  --spacing-section:     96px;

  /* ... (full token set from design-language.md) */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--surface-bg);
  color: var(--text-body);
  font-family: var(--font-body);
}
```

### `lib/theme.ts`

The user's visual configuration as typed TypeScript. This file is the source of truth for `globals.css` generation.

```ts
export const theme = {
  colors: {
    primary:    "#6366f1",
    secondary:  "#8b5cf6",
    background: "#0a0a0a",
    card:       "#111111",
    border:     "#1f1f1f",
    heading:    "#ffffff",
    body:       "#a1a1aa",
    muted:      "#52525b",
  },
  fonts: {
    heading: "Inter",
    body:    "Inter",
  },
  radius: "md" as const,
} satisfies Theme
```

### `content/home.ts`

The user's content configuration:

```ts
export const content = {
  nav: {
    logo:  "Acme Inc.",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing",  href: "#pricing" },
    ],
    cta: { label: "Get Started", href: "#" },
  },
  hero: {
    headline:    "The product they've been waiting for.",
    subheadline: "Launch with confidence. Ship in days.",
    primaryCta:  { label: "Start free", href: "#" },
    secondaryCta:{ label: "See how it works", href: "#" },
  },
  // ... (full content object from experience's content.ts, with user's edits)
}
```

### `app/page.tsx`

Assembles sections in the order defined by the experience manifest:

```tsx
import { Hero }     from "@/components/Hero"
import { Features } from "@/components/Features"
import { Pricing }  from "@/components/Pricing"
import { FAQ }      from "@/components/FAQ"
import { CTA }      from "@/components/CTA"
import { Footer }   from "@/components/Footer"
import { content }  from "@/content/home"

export default function Page() {
  return (
    <main>
      <Hero     content={content.hero}     />
      <Features content={content.features} />
      <Pricing  content={content.pricing}  />
      <FAQ      content={content.faq}      />
      <CTA      content={content.cta}      />
      <Footer   content={content.footer}   />
    </main>
  )
}
```

### `package.json`

Zero `@zenix/*` dependencies. Standard Next.js project:

```json
{
  "name": "my-startup",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev":   "next dev",
    "build": "next build",
    "start": "next start",
    "lint":  "next lint"
  },
  "dependencies": {
    "next":    "^15.0.0",
    "react":   "^19.0.0",
    "react-dom":"^19.0.0"
  },
  "devDependencies": {
    "@types/node":    "^22.0.0",
    "@types/react":   "^19.0.0",
    "@types/react-dom":"^19.0.0",
    "typescript":     "^5.0.0",
    "tailwindcss":    "^3.4.0",
    "autoprefixer":   "^10.4.0",
    "postcss":        "^8.4.0"
  }
}
```

### `README.md`

```markdown
# [Project Name]

Generated with ZenixUI.

## Project Structure

/components — UI sections. Safe to modify freely.
/content    — All editable text, pricing, and data.
/lib/theme  — Colors, fonts, and visual config.
/app        — Next.js routes.

## Getting Started

Install dependencies:

    npm install
    # or pnpm install / yarn / bun install

Run the development server:

    npm run dev

Open http://localhost:3000 in your browser.

## This is your code

No proprietary runtime. No ZenixUI dependency.
Every file is standard React and Next.js.
Modify, delete, or add anything freely.
```

---

## Export Internals

### `lib/export/assembler.ts`

Responsible for collecting all files and their contents into a flat map:

```ts
type FileMap = Record<string, string>   // filename → file content

export function assembleProject(experience: ExperienceManifest, config: ExperienceConfig): FileMap {
  // 1. Collect section source files
  // 2. Apply theme to globals.css template
  // 3. Apply content to home.ts template
  // 4. Generate page.tsx from section order
  // 5. Copy static files (package.json, tsconfig, next.config, etc.)
  // Returns complete file map
}
```

The assembler has no knowledge of zipping or delivery mechanism.

### `lib/export/zip.ts`

Responsible only for converting a file map into a downloadable zip:

```ts
export async function downloadAsZip(files: FileMap, projectName: string): Promise<void> {
  // Uses jszip to create a zip from the file map
  // Triggers browser download
}
```

The zip module has no knowledge of experiences, themes, or content.

### Future targets (not in v1)

Because the assembler and zip are decoupled, future delivery methods require no changes to assembly logic:
- GitHub repo creation → new function consuming `FileMap`
- StackBlitz → new function consuming `FileMap`
- CodeSandbox → new function consuming `FileMap`

---

## Verification Checklist

Before any export is shipped, verify manually:

- [ ] `package.json` contains zero `@zenix/*` dependencies
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the dev server
- [ ] `npm run build` completes without errors
- [ ] The page renders and matches the Studio preview
- [ ] All user-customized content appears correctly
- [ ] All user-customized colors appear correctly
- [ ] A React developer unfamiliar with ZenixUI can understand the project in 5 minutes
