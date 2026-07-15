# ZenixUI Manifesto

ZenixUI is not a component library. It is a **World Design System**.
This document outlines our engineering and product philosophy. It guides every decision, every component, and every architecture choice we make.

## Why ZenixUI Exists
We believe that beautiful, native-feeling, memorable digital experiences shouldn't require months of custom engineering. We exist to close the gap between prototype and premium engineering product by encoding brand behavior into reusable worlds.

## Problems With Existing Builders
Existing tools focus on layout, not feeling.
- They treat websites as collections of boxes, buttons, and sections.
- They optimize for generic components that can be used anywhere, which inevitably leads to everything looking the same.
- They produce bloated, proprietary runtime code that locks users into their platform.
- They fail to establish an emotional connection because they lack a unified point of view.

## What Is A World?
A "World" is not a template. A template is a static layout. A World is a cohesive **personality**.
Worlds are designed around a strict cascade:
`Identity -> Behavior -> Forbidden -> Emotion -> Components`

Instead of asking "What components do we need?", we ask "How does this world behave?"
- **Aurora (World 01)** represents Technology. Its behavior is *Calm Intelligence*.
- **Hanami (World 02)** represents Hospitality. Its behavior is *Grace in Stillness*.
- **Solstice (World 03)** represents Creativity. Its behavior is *Expressive Freedom*.

Each world contains a **Signature Moment**—a single unforgettable interaction that defines it.

## Ownership
Our ultimate customer promise is **Ownership**.
- Choose a world.
- Make it yours.
- Export it.
- **Own the code.**

We do not lock users into our platform. When a user clicks Export, they receive a pristine, standard Next.js application. No proprietary abstractions. No opaque runtimes. 

## Behavior
We don't design "animations." We design software behavior.
Motion must be purposeful, performant, and emotionally resonant.
If a feature were removed, would the user still understand the world's personality? If yes, the feature is decorative. If no, it is foundational.

## Engineering Principles
- **No Perceived Lag:** Core interactions must feel native. We bypass React state for high-frequency motion (like cursors) and rely on GPU-accelerated CSS transforms orchestrated by a single `MotionEngine`.
- **Export Reliability (Priority 0):** If export fails, the entire product promise fails. Every commit must pass automated Export CI.
- **Deterministic Outcomes:** Server-Side Rendering (SSR) hydration must match the client. Randomness should be seeded or derived from deterministic properties (like an index).
- **Name for Today:** Software is named for what it *does today*, not what it might do tomorrow.

## Design Principles
- **Attention Budget:** Every screen has a finite amount of attention. If a new element competes with the hero, it is demoted.
- **Interaction Budget:** Not everything should compete for attention. Premium interactions are strictly capped (e.g., maximum 4 per world) to preserve their specialness.
- **The 3-Second Recognition Test:** A user must recognize the world within 3 seconds of opening it, without reading the title.
- **The 30-Second Memory Test:** After using the world for 30 seconds and closing the laptop, what do they remember? If they only remember "nice animations," we have failed. They must remember the emotion.

## Non-Goals
We draw power from our constraints.
- We are not Wix.
- We are not Framer.
- We are not Webflow.
- We are not a drag-and-drop page builder.
- We don't generate proprietary runtime code.
- We don't build generic component libraries. 
