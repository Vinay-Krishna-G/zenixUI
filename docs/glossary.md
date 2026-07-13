# ZenixUI — Glossary

This document defines every term used in ZenixUI — in the codebase, in docs, in the Studio UI, and in customer-facing copy. When in doubt about a term, look here first.

Using consistent language matters because: (a) it prevents confusion between contributors, (b) AI assistants working in this repo will use these definitions, and (c) customer-facing language must match internal language.

---

## Core Terms

### Experience

The complete, production-ready frontend that a customer selects, customizes, and exports.

An experience is what the customer buys. Internally, it is composed of sections arranged in a specific order, governed by a manifest. Externally, it appears as a single, unified website.

**Customer-facing names:** "SaaS Startup", "Business Landing", "Agency", "Portfolio"
**Never call it:** template, theme, pack, kit, preset

---

### Section

A self-contained React component that represents one vertical slice of a web page.

Sections are the internal building blocks of experiences. The customer never thinks about sections — they think about the experience as a whole. Internally, we compose, reuse, and share sections across experiences.

**Examples:** Hero, Features, Stats, Pricing, FAQ, CTA, Footer
**Never call them:** blocks, components (in customer-facing copy), widgets, modules

---

### Studio

The visual configuration interface inside ZenixUI. The customer uses the Studio to customize their chosen experience before exporting.

The Studio is the product. Without it, ZenixUI is a template marketplace.

**Customer-facing language:** "Customize your experience"
**Never describe it as:** a code editor, a visual builder, a drag-and-drop tool, a theme editor

---

### Export

The action of generating and downloading a clean Next.js project containing the customer's customized experience.

Export is ownership. After export, the customer owns every file. ZenixUI is not involved at runtime.

**Customer-facing language:** "Get your code", "Download project", "Own the code"
**Never describe it as:** code generation, template download, deployment

---

### Theme

The visual configuration of an experience. Defined as a set of CSS custom property values.

Theme controls: colors, fonts, border radius, spacing, shadows. Theme does not control content.

**Internal type:** `ExperienceTheme`
**File in experience folder:** `theme.ts`
**Customer-facing label:** "Appearance"

---

### Content

The textual and data-driven configuration of an experience. Defined as a typed JSON object.

Content controls: headlines, subheadlines, CTA labels, pricing tier names and prices, FAQ items, navigation links, logo text. Content does not control visual appearance.

**Internal type:** `ExperienceContent`
**File in experience folder:** `content.ts`
**Customer-facing label:** "Content"

---

### Manifest

The metadata file for an experience. Declares the experience's ID, name, category, section order, and preview image path.

The manifest is the contract between the experience folder and the Experience Library. The static registry imports manifests, not experience components directly.

**File:** `manifest.ts` in each experience folder
**Type:** `ExperienceManifest`

---

### Registry

The static import array that lists all available experiences.

```ts
// experiences/index.ts
export const experiences = [businessLanding, saasStartup]
```

The registry is not a database. It is not a dynamic loader. It is a TypeScript array.

---

### Config

A combined object holding a specific customer's current theme and content choices for an experience. Created by merging `defaultTheme` + `defaultContent` with the user's customizations.

**Type:** `ExperienceConfig = { theme: ExperienceTheme, content: ExperienceContent }`
**Persisted in:** `localStorage` keyed by experience ID
**Written to export as:** `globals.css` (theme) + `content/home.ts` (content)

---

### Preview

A real-time render of the experience inside the Studio, reflecting the customer's current config.

The preview is not an iframe of a separate app. It renders the sections directly using `@zenix/sections` with CSS custom properties and content props applied.

---

### Workspace

The npm workspace that contains the ZenixUI repository. Composed of `apps/website` and `packages/sections`.

**Not to be confused with:** customer's workspace, VS Code workspace, any other usage of the word.

---

### Package

An entry in the `packages/` directory of the monorepo. Currently only one package exists: `packages/sections`.

New packages require justification through the five-question test in `coding-standards.md`.

---

### Export Target

The destination for an assembled project. In v1, the only export target is a zip file downloaded in the browser. Future targets (GitHub, StackBlitz, CodeSandbox) are Icebox items.

---

## Customer-Facing Label Translations

| Internal name | Customer-facing label |
|---|---|
| Experience | Experience (same — this one is fine) |
| Section | (never shown) |
| theme.primaryColor | Brand Color |
| theme.secondaryColor | Accent Color |
| theme.backgroundColor | Background |
| theme.headingColor | Heading Color |
| theme.bodyColor | Body Text Color |
| theme.headingFont | Heading Font |
| theme.bodyFont | Body Font |
| theme.radius: "none" | Sharp |
| theme.radius: "sm" | Subtle |
| theme.radius: "md" | Rounded |
| theme.radius: "lg" | Soft |
| theme.radius: "full" | Pill |
| content.hero.headline | Headline |
| content.hero.subheadline | Supporting Text |
| content.hero.primaryCta | Primary Button |
| content.hero.secondaryCta | Secondary Button |
| content.nav.logo | Logo / Brand Name |
| ExperienceConfig | (never shown) |
| manifest.id | (never shown) |

---

## Terms We Deliberately Avoid

| Term | Why we avoid it |
|---|---|
| Template | Implies static download; doesn't convey customization or ownership |
| Theme | Too narrow; we have both visual and content customization |
| Block | "Block editor" implies drag-and-drop builder (Gutenberg associations) |
| Component | Too technical for customer-facing language |
| Kit / Pack | Generic; no distinct meaning |
| Module | Ambiguous; used in too many contexts |
| Plugin | Implies extensibility system we don't have |
| Widget | Dated; consumer-tool feel |
| Code generation | Accurate internally, but triggers anxiety in customers ("what if the generated code is bad?") |
| Design system | Not what customers are buying |
| Experience Platform | Our internal framing; not customer language |
