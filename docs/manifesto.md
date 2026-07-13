# ZenixUI Manifesto

> "The greatest compliment ZenixUI can receive is that developers forget it was ever involved."

---

## What ZenixUI Is

ZenixUI is an experience platform for founders, freelancers, and early-stage teams who need a premium frontend quickly.

The promise is simple:

**Choose a launch-ready frontend. Customize it visually. Own the code.**

Not a framework. Not a component library. Not a no-code builder. A product with a single purpose: help you launch a premium Next.js frontend in hours, not weeks.

---

## What ZenixUI Is Not

**Not a component library.**
We don't sell buttons. We sell complete, production-ready experiences. If you want raw components, use Radix, shadcn/ui, or Headless UI.

**Not a template marketplace.**
Templates are static. You download them, then spend a week adapting them. ZenixUI gives you a configured, customized project that feels like your own from the first day.

**Not a website builder.**
We don't have drag-and-drop. We don't have a canvas. We have a Studio that lets you configure an experience visually—colors, fonts, content—and then export code that you own completely.

**Not a SaaS with lock-in.**
If zenixui.com shuts down tomorrow, every exported project continues to work perfectly. The exported code has zero ZenixUI dependencies. It is standard React and Next.js.

**Not a no-code platform.**
We are built for developers. We will never hide the code. We will never introduce proprietary runtimes.

---

## Who It Is For

- Solo founders who need to launch before funding runs out
- Freelancers delivering premium work to clients quickly
- Indie hackers who want to look more professional than the time they have allows
- Early-stage startups that need a frontend before hiring a designer
- Small agencies that want to stop rebuilding the same layouts from scratch

---

## The Product Loop

```
Browse curated experiences
        ↓
Select one that fits your product
        ↓
Customize visually in the Studio
(colors, fonts, content — no code required)
        ↓
Preview instantly
        ↓
Export a clean Next.js project
        ↓
Own every line of code
```

The customer never thinks about components, registries, tokens, or render trees. Those are our implementation details, not their problem.

---

## What We Refuse to Build (In v1)

Every idea that does not serve the core loop above is refused until v1 ships.

- No CLI
- No AI generation
- No drag-and-drop layout builder
- No user accounts
- No cloud storage
- No marketplace for third-party templates
- No plugin system
- No proprietary runtime in exported projects
- No more than two packages in the monorepo

---

## The Product Constitution

When a decision is unclear, apply these ten principles in order.

1. **Customer buys an Experience** — not components, not blocks, not templates
2. **Studio is the product** — without the Studio, this is Gumroad
3. **Export is ownership** — the customer owns every line of code
4. **Generated code must look handwritten** — a senior engineer should not be able to tell
5. **Zero vendor lock-in** — the exported project contains no `@zenix/*` dependencies, ever
6. **Earn every abstraction** — complexity must justify itself through real, existing duplication
7. **Simplicity over cleverness** — if a junior developer can't understand a folder in 5 minutes, redesign it
8. **The exported project must outlive ZenixUI** — if zenixui.com shuts down, customers are unaffected
9. **Every feature must have a customer** — founders, freelancers, agencies, or developers — name them
10. **Ship before expanding** — one vertical slice done beautifully beats five slices done adequately

---

## The Marketing Truth

We do not lead with export. We lead with ownership.

> "Launch your startup website in hours."
> "Choose. Customize. Own the code."
> "Export code you'll forget was generated."

The mechanism (export) is secondary. The benefit (ownership + speed) is primary.

---

## v1 North Star

A developer who has never seen ZenixUI should be able to:

1. Export a project in under 10 minutes
2. Open it in VS Code and understand the structure in under 5 minutes
3. Rename a component without breaking anything
4. Delete a section without breaking anything
5. Add their own section following the existing pattern
6. Deploy to Vercel in under 5 minutes

Without reading ZenixUI documentation.

If all six of these are true, the product promise has been kept.
