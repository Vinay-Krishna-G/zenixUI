# ZenixUI — Coding Standards

These rules are enforced in code review. Every PR must pass all seven before merging. When in doubt, come back here.

---

## Rule 1 — 5-Minute Folder Test

**Can a junior developer understand this folder in 5 minutes?**

Open the folder. Read it cold. If you need to trace through two or more other folders to understand what this one does, the abstraction is too deep.

If the answer is no — redesign before building.

---

## Rule 2 — Deletion Test

**Can we delete this entire folder without breaking the product?**

If yes, it probably shouldn't exist yet.

Every folder, package, and file must be load-bearing. If a file can be deleted without consequence, delete it.

---

## Rule 3 — Today's Duplication Test

**Does this abstraction remove duplication that exists today?**

Not tomorrow. Not after 50 experiences. Not "eventually." Today.

If a utility exists to serve one use case, keep it local. Do not abstract it until the second real consumer appears.

---

## Rule 4 — Customer Benefit Test

**Can we explain this feature to a customer? Does the customer benefit from it directly?**

If the answer is "we'll need it later" or "it improves our architecture" — it is infrastructure. Delay it until the product demands it.

---

## Rule 5 — File Justification

**Every file must justify its existence.**

No `utils.ts` graveyard. No `helpers.ts` catch-all. No `types.ts` with 40 barely-related interfaces. If a file's purpose cannot be stated in one sentence, it needs to be split or deleted.

---

## Rule 6 — Earn Every Abstraction

**Every new package, hook, context, or shared utility must solve a real problem that already exists.**

Before creating a shared abstraction, answer:
1. Why does this exist?
2. What real duplication does it remove today?
3. Could we solve this without a new layer?
4. Will this still make sense after 10 experiences?
5. Does this improve customer experience, or only internal architecture?

If question 5 is "only internal" — challenge it before creating.

---

## Rule 7 — Every Feature Must Have a Customer

**Before building anything, name who benefits.**

- Founder launching their startup?
- Freelancer delivering to a client?
- Agency building for a customer?
- Developer customizing exported code?

If the answer is "us" or "architecture" or "future scale" — don't build it yet.

---

## Code Style Rules

### TypeScript

- Strict mode is always on. No `any`. No `@ts-ignore` without an explanation comment.
- Prefer `interface` for object shapes that describe data. Prefer `type` for unions and computed types.
- Export types from `@/types/` — do not scatter type definitions across component files.
- Use `satisfies` over `as` when asserting that a literal matches a type.

### React

- No class components.
- No `useEffect` for derived state — derive it in render.
- Prefer named exports for components.
- One component per file. A file named `Hero.tsx` exports exactly one component: `Hero`.
- Component props interfaces are defined above the component and named `[Component]Props`.

### CSS / Styling

- CSS custom properties for all visual decisions. No hardcoded hex values in JSX or CSS.
- No `style={{ color: '#6366f1' }}`. This breaks theming.
- No inline `px` values in JSX for spacing — use CSS custom properties or CSS classes.
- All section components must follow the `section` + `section-inner` wrapper pattern from `design-language.md`.

### Files and Folders

- Folders are lowercase-hyphenated. Files follow the convention of their content:
  - React components: `PascalCase.tsx`
  - Utilities and configs: `camelCase.ts`
  - Documentation: `kebab-case.md`
- No `index.ts` barrel files except in `packages/sections/src/index.ts` and `experiences/index.ts`. Barrel files hide dependencies.

### Imports

- Use absolute imports via `@/` path alias. No relative `../../..` climbing.
- Group imports: external → internal (types) → internal (components) → internal (utils).
- No circular imports. If A imports B and B imports A, split the shared concern into C.

---

## What "Done" Means for a Section Component

A section component is done when:

- [ ] It renders correctly at 320px, 768px, 1024px, and 1440px viewport widths
- [ ] It uses only CSS custom properties for visual decisions
- [ ] It accepts a typed `content` prop for all text and data
- [ ] It has no `@zenix/*` imports
- [ ] It can be deleted without affecting any other section
- [ ] It runs with `npm run build` without TypeScript errors or warnings
- [ ] It is accessible: headings in order, interactive elements keyboard-navigable, contrast passes WCAG AA

---

## What "Done" Means for a Pull Request

- [ ] All seven coding rules above are satisfied
- [ ] No `console.log` statements
- [ ] No commented-out code
- [ ] No `TODO` comments (create a GitHub issue instead)
- [ ] `npm run build` passes clean
- [ ] The change has been reviewed against the relevant doc (`experience-contract.md`, `export-spec.md`, etc.)
