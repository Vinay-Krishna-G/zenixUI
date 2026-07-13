# ZenixUI Quality Bar

This is the final checklist before every release. Every component, section, and experience must pass this gate.

## Visual
- [ ] Typography is consistent (One H1, one body size, consistent line-heights/weights).
- [ ] Strict 8px spacing rhythm (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). No arbitrary margins or paddings.
- [ ] Mobile-first responsiveness (check `sm`, `md`, `lg` breakpoints).
- [ ] Accessible contrast (all text passes WCAG AA contrast against backgrounds).
- [ ] No layout shifts (CLS is strictly managed, images have explicit heights/aspect ratios).

## Interaction
- [ ] Hover transitions feel instant but smooth (`duration-200` to `duration-300`).
- [ ] Keyboard accessible (all interactive elements reachable via Tab).
- [ ] Focus states are visible and intentional (no default browser blue rings, use custom focus rings).
- [ ] Buttons have consistent scaling, shadowing, and border glows.

## Copy
- [ ] Benefit-first (Speak in outcomes, not implementation).
- [ ] No buzzwords (e.g., "Next-gen synergy" → "Production-ready code").
- [ ] No filler (Every sentence must earn its place or be deleted).
- [ ] Active voice (e.g., "You own the code" instead of "The code is owned by you").

## Export
- [ ] Zero `@zenix` dependencies inside the generated project.
- [ ] Human-readable code (feels like a senior developer wrote it by hand).
- [ ] Builds successfully from scratch (`npm install && npm run build`).
- [ ] README is accurate, polished, and instructional.

## Performance
- [ ] Strict Lighthouse targets.
- [ ] CLS target (0.0).
- [ ] LCP target (< 2.5s).
- [ ] Bundle size optimized (no unnecessary heavyweight client libraries).
