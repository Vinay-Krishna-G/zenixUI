# ZenixUI Visual Language

This document defines the core visual identity of ZenixUI itself (the website, studio, and marketing). This is our brand's DNA.

## Core Philosophy
**Recognizable, but not overwhelming.** We want people to see a screenshot and instantly know "That's ZenixUI." We achieve this through rigorous consistency, not excessive flair.

---

## 1. Colors

**Primary Accent**
- **Brand Indigo**: `#6366f1` (Tailwind Indigo-500)
- **Brand Glow**: `#6366f1` with `blur-[100px]` and 15% opacity.
- *Usage*: Primary buttons, active states, subtle background flares.

**Surfaces (Dark Mode Native)**
- **Background**: `#0a0a0a` (Deepest neutral, not pure black)
- **Card/Elevated**: `#111111` to `#1a1a1a`
- **Borders**: `#222222` (Very subtle definition)
- *Usage*: The entire app runs in dark mode to give the Studio a professional, pro-tool feel (like Figma or VSCode).

**Typography Colors**
- **Heading**: `#ffffff` (Pure white for contrast)
- **Body**: `#a1a1aa` (Zinc-400 for readable, softer paragraphs)
- **Muted**: `#52525b` (Zinc-600 for metadata and borders)

---

## 2. Typography

We use a single highly functional, modern sans-serif: **Inter**.
- **Headings**: `font-extrabold` (800) or `font-bold` (700) with `tracking-tight`.
- **Body**: `font-normal` (400) or `font-medium` (500) with `leading-relaxed`.
- *Why*: It feels engineered, clean, and invisible. It doesn't distract from the user's exported code.

---

## 3. Shapes & Radii

We use two primary corner styles to create a hierarchy between "controls" and "containers".
- **Controls (Buttons, Inputs)**: `rounded-xl` (12px)
- **Containers (Cards, Modals, Studio Panels)**: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- *Why*: The slightly softer corners feel modern and premium compared to standard 4px radii, but aren't so pill-shaped that they feel childish.

---

## 4. Motion & Elevation

**Elevation**
- We avoid heavy drop shadows in dark mode.
- Instead, we use **subtle borders (`border-[#222]`)** and **inner glows**.
- Featured cards get a `shadow-[0_0_32px_rgba(99,102,241,0.15)]` (Brand Glow).

**Motion**
- **Micro-interactions**: Everything interactive scales down slightly on click (`active:scale-[0.98]`).
- **Hover**: Cards translate up `hover:-translate-y-0.5` with a slight border color shift to `border-indigo-500/30`.
- *Why*: It feels responsive, tactile, and alive.

---

## 5. Components

**Buttons**
- Primary: Solid Indigo, white text, subtle glow on hover.
- Secondary: Transparent, Zinc-400 text, Zinc-800 border. Hovers to Zinc-200 text and slightly lighter border.

**Forms**
- Inputs use `#141414` background, `border-[#333]`, and `text-sm`. They focus with a `ring-indigo-500` outline.

---

## Conclusion
The ZenixUI website must feel like a high-end macOS application ported to the web. Dark, precise, subtly glowing, and engineered.
