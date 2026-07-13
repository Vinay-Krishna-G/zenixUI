# ZenixUI — Roadmap

## v1 — Locked Scope

v1 scope is frozen. No new features enter v1.

All new ideas go to the **Icebox** section at the bottom of this document. Ideas in the Icebox are valid and may ship in v2, but they do not influence v1 implementation.

### v1 Features (all required for launch)

**Experience Library**
- [ ] "What are you building?" discovery filter
- [ ] Experience cards with preview images, name, description, category
- [ ] Experience detail page with full-page preview and section breakdown

**Studio**
- [ ] Two-panel layout: Appearance panel + Content panel + Live preview
- [ ] Appearance panel: brand color, accent color, background, heading/body colors, heading/body fonts, corner style
- [ ] Content panel: headline, supporting text, CTA buttons, pricing tiers, FAQ items, logo, navigation links
- [ ] Live preview reflecting all configuration changes in real time
- [ ] `localStorage` persistence (survives page refresh)
- [ ] Reset to experience defaults

**Export**
- [ ] Client-side zip generation
- [ ] Exported project: zero `@zenix/*` dependencies
- [ ] Exported project: runs with `npm install && npm run dev`
- [ ] Exported project: clean, handwritten-looking code
- [ ] Exported README with package-manager-agnostic instructions

**Marketing Website**
- [ ] Homepage hero: "Choose a launch-ready frontend. Customize it visually. Own the code."
- [ ] Experience gallery section on homepage
- [ ] How it works: 3-step explanation (Choose, Customize, Own)
- [ ] Navigation
- [ ] Footer
- [ ] Mobile responsive

**First Experience: Business Landing**
- [ ] Hero section
- [ ] Features section
- [ ] Stats section
- [ ] Pricing section
- [ ] FAQ section
- [ ] CTA section
- [ ] Footer section

### v1 Definition of Done

v1 is not done when the code works. v1 is done when all of these are true:

- [ ] A developer who has never seen ZenixUI can export a project in under 10 minutes
- [ ] The Studio can be used without reading documentation
- [ ] Preview in Studio matches the exported project exactly
- [ ] Exported project contains zero `@zenix/*` dependencies
- [ ] `npm install && npm run dev` runs without errors
- [ ] A React developer would believe the exported code was handwritten
- [ ] The exported project can survive if zenixui.com shuts down forever

---

## v2 — Planned (After v1 Ships)

These features are validated directions for v2. They do not influence v1.

- Second experience (SaaS Startup)
- Third experience (Portfolio or Agency)
- More content configuration options (testimonials, team section, gallery)
- Image upload in Studio (replace placeholder images with real ones)
- Google Fonts integration (live font browsing in Studio)

---

## Icebox

Ideas that have been proposed and are worth considering in the future. Not committed. Not scheduled. Not influencing v1.

Every idea added to the Icebox should include: who proposed it, what customer problem it solves, and what stage of the customer journey it serves.

### CLI tool
Export via terminal instead of web download.
Customer: developer who prefers CLI workflows.
Stage: Export.

### GitHub repository creation
Create a new GitHub repo directly from the Studio instead of downloading a zip.
Customer: developer who wants to skip the manual step.
Stage: Export.

### StackBlitz / CodeSandbox integration
Open the project directly in an online IDE.
Customer: developer who wants to try before committing.
Stage: Evaluate → Launch.

### User accounts and cloud sync
Save Studio configurations across devices and sessions.
Customer: anyone with multiple devices or long customization sessions.
Stage: Customize.

### Marketplace for third-party experiences
Allow other creators to submit experiences.
Customer: ZenixUI platform customers (not direct product users).
Stage: Discover → Evaluate.

### AI-assisted content generation
Generate headline, subheadline, and CTA based on a product description.
Customer: founder who hasn't figured out their copy yet.
Stage: Customize.

### Deployment integration
Deploy directly to Vercel or Netlify from the Studio.
Customer: non-developer founder who doesn't know how deployment works.
Stage: Deploy.

### Multi-page experiences
Experiences that include multiple routes (e.g., Landing + Pricing + About).
Customer: startup that needs more than one page.
Stage: Evaluate → Customize.

### Dark/light mode toggle in exported project
Add a pre-built theme switcher to the exported code.
Customer: developer who needs dark mode support.
Stage: Modify.
