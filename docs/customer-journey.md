# ZenixUI — Customer Journey

Every feature in ZenixUI must serve at least one stage of this journey. If a feature cannot be mapped to a stage, it should not be built.

---

## The Journey

```
Discover → Evaluate → Customize → Export → Launch → Modify → Deploy
```

---

## Stage 1: Discover

**The customer learns ZenixUI exists.**

**Entry points:** Word of mouth, Twitter/X, ProductHunt, search, a developer's blog post.

**What they need to see immediately:**
- What ZenixUI is (one sentence)
- What it produces (a real Next.js project)
- Who it is for (founders, freelancers, agencies)

**What kills this stage:**
- Jargon-heavy explanations ("Experience Platform", "CSS token system")
- Requiring an account before seeing anything
- Slow page load
- No visual proof — screenshots or video of actual output

**Features that serve this stage:**
- Homepage hero with clear headline and subheadline
- A gallery of experience previews (visible without login)
- One-line value proposition above the fold

---

## Stage 2: Evaluate

**The customer decides whether ZenixUI is right for their project.**

**What they need:**
- Browse multiple experiences
- Find one that fits their product type
- Understand what's included (sections, features)
- Trust the quality (the design must look professional)

**What kills this stage:**
- Too many choices presented at once (decision fatigue)
- Experiences that look generic or dated
- No way to filter by project type
- No detail page to inspect the experience before committing

**Discovery UX principle:**
Do not show all experiences as a flat grid. Ask first: *"What are you building?"*
- Startup
- Business
- Portfolio
- Agency
- Landing Page

Then show 2–3 curated matches. Less overwhelming. More confident decision.

**Features that serve this stage:**
- "What are you building?" onboarding filter
- Experience cards with preview images, name, category
- Experience detail page with full-page preview
- Section breakdown ("includes Hero, Pricing, FAQ, Footer")

---

## Stage 3: Customize

**The customer makes it theirs.**

**What they need:**
- Change their brand color and see it applied immediately
- Set their logo and company name
- Edit their headline, CTA, and key content
- Trust that the preview is accurate — what they see is what they get

**What kills this stage:**
- Studio that feels like a developer tool (prop names, JSON syntax)
- Preview that doesn't match the actual exported result
- Too many options (overwhelm)
- Losing their work if they close the tab (no persistence)

**Studio principle — Canva, not React:**
Every label in the Studio is customer language. "Brand Color" not `primaryColor`. "Headline" not `hero.headline`. "Corner Style" not `radius`.

**Features that serve this stage:**
- Visual panel: brand color, secondary color, background, fonts, corner style
- Content panel: headline, supporting text, CTA label, pricing tiers, FAQ items
- Live preview updating in real time
- `localStorage` persistence (work survives page refresh)

---

## Stage 4: Export

**The customer receives their project.**

**What they need:**
- A zip file they can open immediately
- A README that tells them exactly what to do next
- Confidence that this is their code, not a rental

**What kills this stage:**
- Slow export (should feel instant)
- Confusing project structure
- Any `@zenix/*` import in `package.json`
- A README that's promotional rather than practical

**Features that serve this stage:**
- One-click export button
- Instant client-side zip generation (no server round-trip)
- Clean, standard project structure
- Package-manager-agnostic instructions in README

---

## Stage 5: Launch

**The customer gets the project running locally.**

**What they need:**
- `npm install` to work
- `npm run dev` to work
- The page to look like the Studio preview

**What kills this stage:**
- Dependency conflicts
- Missing environment variables
- A page that looks different from the preview
- Build errors

**Features that serve this stage:**
- Zero `@zenix/*` dependencies in exported `package.json`
- CSS custom properties matching exactly between Studio and exported `globals.css`
- No missing imports or unresolved modules

---

## Stage 6: Modify

**The customer starts adapting the project to their real content.**

**What they need:**
- A project structure they understand intuitively
- Section files they can edit without breaking other sections
- Content separated from layout so changing text doesn't touch components

**What kills this stage:**
- Opaque generated abstractions they don't understand
- Tightly coupled components where editing one breaks another
- Content hardcoded inside component JSX

**Features that serve this stage:**
- `content/home.ts` for all text — change words, never touch components
- `lib/theme.ts` for all visual config — change colors, never touch CSS directly
- Section components that are self-contained and independently deletable
- A clear project README that explains what to modify where

---

## Stage 7: Deploy

**The customer publishes their site.**

**What they need:**
- A project that builds without errors (`npm run build`)
- A project that deploys to Vercel/Netlify with zero configuration
- No ZenixUI service dependency at runtime

**What kills this stage:**
- Build errors
- Runtime errors caused by missing environment variables
- Any reference to a ZenixUI CDN, API, or service

**Features that serve this stage:**
- Standard `next.config.ts` with no proprietary plugins
- All assets self-hosted (no external ZenixUI asset URLs)
- `npm run build` verified during our own QA before release

---

## Feature Evaluation

When a new feature is proposed, map it to this journey. A feature that cannot be placed on the journey is not a product feature — it is infrastructure.

| Feature | Stage | Customer benefit |
|---|---|---|
| Experience gallery | Evaluate | Browse and find the right experience |
| "What are you building?" filter | Evaluate | Reduce decision fatigue |
| Studio color picker | Customize | Set brand identity without code |
| localStorage persistence | Customize | Don't lose work between sessions |
| Export zip | Export | Receive the project instantly |
| Package-manager-agnostic README | Launch | Use the tools they already know |
| Self-contained section components | Modify | Edit freely without breaking things |
| Zero @zenix/* dependencies | Launch + Deploy | Full ownership, no lock-in |
