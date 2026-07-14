# Design Decisions Log

This document captures the human rationale, taste, and empirical evidence behind the specific design fixes made during our Polish Sprints. 

Eventually, when we have documented 50-100 real design decisions, these patterns will form the dataset for the **Experience Review Mode (v0)**.

## Format
Every decision must follow this format:

```text
Decision #XXX

World:
[Aurora / Hanami / Atlas]

Category:
[Navbar / Typography / Spacing / Interaction / etc]

Observation:
[What was wrong or drew attention?]

Hypothesis:
[What change will fix this without breaking something else?]

Change:
[Specific token, css, or layout changes]

Result:
[What actually happened?]

Decision:
[Keep / Revert]

## Post-Pass QA Checklist (Answer after every pass)
1. What is the first thing I see?
2. What is the second thing I see?
3. What did I stop noticing after 10 seconds?
4. Which element feels like it is trying too hard?
5. If I remove one element, does the page become stronger?
```

---

## Decisions

Decision #001

World:
Aurora

Category:
Navigation

Observation:
The navbar overlaps the Studio sidebar because it uses `fixed` positioning, which ignores the container bounds and breaks out of the preview area.

Hypothesis:
Changing `fixed` to `absolute` will constrain the navbar to the nearest relative container (the Studio preview wrapper) while keeping it anchored to the top of the page.

Change:
In `packages/ui/src/aurora/AuroraNav.tsx`, changed `<header className="fixed...` to `<header className="absolute...`.

Result:
The navbar is now correctly constrained within the preview bounds, fixing the overlap issue.

Decision:
Keep

Decision #002

World:
Aurora

Category:
Navigation

Observation:
A purple glowing orb in the navbar logo competes for attention with the main headline ("Intelligence, refined.") and adds unnecessary visual noise to a minimalist aesthetic.

Hypothesis:
Removing the glow completely will restore focus to the typography and the primary CTA, adhering to the "Calm Intelligence" atmosphere.

Change:
In `packages/ui/src/aurora/AuroraNav.tsx`, deleted the decorative `<span className="... bg-brand-primary/80 blur-[2px]" />` element.

Result:
The navbar feels much quieter. Visual hierarchy correctly cascades down to the hero text.

Decision:
Keep

Decision #003

World:
Aurora

Category:
Navigation

Observation:
The "Start building" CTA button had sharp corners (based on the Studio config), while the navbar capsule and its "Request Access" button had hardcoded `rounded-full` corners. This inconsistency breaks the "Intelligence, refined" atmosphere.

Hypothesis:
Binding the navbar and its button to the Studio's CSS variable radius tokens (`var(--radius-card)` and `var(--radius-control)`) will ensure that the entire world respects a single, cohesive design parameter.

Change:
In `packages/ui/src/aurora/AuroraNav.tsx`, changed `rounded-full` to `rounded-[var(--radius-card)]` for the glass container and `rounded-[var(--radius-control)]` for the CTA.

Result:
The corner rhythm is now completely harmonious across the entire page, instantly elevating the perceived quality.

Decision:
Keep

Decision #004

World:
Aurora

Category:
Hierarchy

Observation:
The solid white "Request Access" button in the navbar competed directly with the solid white "Start building" button in the Hero section. Because the navbar is fixed/absolute at the top of the viewport, the eye bounced between the two CTAs, diluting the central message.

Hypothesis:
Demoting the navbar CTA to a subtle ghost/outline button (`bg-white/[0.03] border-white/10`) will establish a clear primary/secondary hierarchy, allowing the Hero CTA to command the page.

Change:
In `packages/ui/src/aurora/AuroraNav.tsx`, changed the CTA anchor styles from a solid white background to a translucent background with a subtle border.

Result:
The Hero CTA is now unmistakably the primary action on the page.

Decision:
Keep

Decision #005

World:
Aurora

Category:
Atmosphere

Observation:
The glass panels (like the navbar) felt slightly mechanical and cut-out because the `border-white/10` stroke drew a hard line against the deep space of the background.

Hypothesis:
Softening the border to `border-white/5` will maintain the physical edge of the "glass" material without drawing unnecessary attention to the boundary itself.

Change:
In `packages/ui/src/aurora/components/index.tsx`, reduced `border-white/10` to `border-white/5` on `AuroraGlass`.

Result:
The glass now feels more like a refraction of the environment rather than a floating box. The darkness feels deeper.

Decision:
Keep

Decision #006

World:
Aurora

Category:
Atmosphere

Observation:
The interactive cursor light in the Hero section (`bg-brand-primary/10`, `w-[600px]`, `blur-[120px]`) felt too much like a distinct spotlight circle, which drew attention to the shape of the glow rather than illuminating the environment.

Hypothesis:
Making the light larger (`w-[800px]`), softer (`blur-[160px]`), and dimmer (`bg-brand-primary/5`) will transition it from a "spotlight" to true "atmospheric lighting", making the darkness feel more intentional.

Change:
In `packages/ui/src/aurora/AuroraHero.tsx`, increased dimensions and blur, and decreased opacity from 10% to 5%.

Result:
The space feels vastly deeper and quieter. The light now washes over the typography rather than competing with it.

Decision:
Keep

Decision #007

World:
Aurora

Category:
Atmosphere

Observation:
The dark theme was built on neutral grays (`#030303`, `#0a0a0a`), making the shadows and surfaces feel slightly flat and lifeless.

Hypothesis:
Injecting a very subtle cool/blue tint into the dark values (`#030405` canvas, `#06080a` section, `#0a0d10` elevated) will create optical depth, making the darkness feel like a physical space rather than a flat hex color.

Change:
In `apps/website/src/experiences/aurora/theme.ts` and `Studio.tsx`, recalibrated the default dark colors to use a cool tint.

Result:
The world feels much deeper and more premium. Shadows feel volumetric because they are reacting to a cool environment.

Decision:
Keep

Decision #008

World:
Aurora

Category:
Atmosphere

Observation:
The Hero layout used `max-w-4xl` for the headline and `max-w-2xl` for the body. This felt like a standard webpage trying to fill horizontal space, rather than a curated, premium "poster" with intentional whitespace.

Hypothesis:
Narrowing the readable measure to `max-w-3xl` for the headline and `max-w-xl` for the body, while slightly increasing the vertical gaps (`mb-10` → `mb-12`, `mb-14` → `mb-16`), will create a more confident, upright vertical rhythm.

Change:
In `packages/ui/src/aurora/AuroraHero.tsx`, reduced max-widths and increased bottom margins.

Result:
The hero section now breathes. It feels like an art-directed poster rather than a responsive fluid container stretching to fill space.

Decision:
Keep

Decision #009

World:
Aurora

Category:
Typography

Observation:
The `AuroraHeading` and `AuroraBody` used standard web defaults (`tracking-[-0.03em]`, `leading-relaxed`). The `AuroraBadge` used hardcoded colors and shape (`rounded-none`, `#1f1f1f`). The typography felt a bit generic and lacked editorial rigor.

Hypothesis:
Tightening the heading tracking (`-0.04em`), opening the body leading (`1.7`), and binding the badge to design tokens (`var(--radius-control)`, `border-white/10`) will create a more deliberate, high-end editorial feel that aligns with the "Calm Intelligence" poster aesthetic.

Change:
In `packages/ui/src/aurora/components/index.tsx`, adjusted typography metrics (tracking, leading) and badge tokens.

Result:
The reading rhythm is more precise and deliberate. The typography now feels like it was set by a typographer rather than inherited from a CSS framework.

Decision:
Keep

Decision #010

World:
Aurora

Category:
Interaction

Observation:
Buttons and cards used standard Tailwind `transition-all` (`duration-150`). This felt snappy but mechanical, like a typical SaaS dashboard rather than a high-end physical object.

Hypothesis:
Slowing the transitions down (`duration-300 ease-out` for buttons, `duration-500 ease-out` for large cards) will give interactions a sense of weight and physical momentum.

Change:
In `components/index.tsx` (AuroraButton) and `AuroraExplore.tsx`, lengthened transition durations and added `ease-out`.

Result:
Interactions now feel deliberate and luxurious. The world reacts smoothly to the user.

Decision:
Keep

Decision #011

World:
Aurora

Category:
Spacing & Mobile

Observation:
Sections like Explore and Make It Yours used a hardcoded `py-32` spacing. While this provided good breathing room on desktop, it resulted in excessive, disconnected gaps on smaller mobile viewports.

Hypothesis:
Using responsive spacing (`py-24 sm:py-32`) will maintain the poster-like rhythm on desktop while preventing elements from feeling detached on mobile.

Change:
In `AuroraExplore.tsx` and `AuroraMakeItYours.tsx`, replaced `py-32` with `py-24 sm:py-32`.

Result:
The vertical rhythm scales down elegantly. Content feels connected regardless of the device.

Decision:
Keep

---

## Post-Pass QA (Atmosphere & Polish Sprint 1)

1. **What is the first thing I see?**
   The large, precise headline "Intelligence, refined." bathed in a very soft, deep light.
2. **What is the second thing I see?**
   The primary "Start building" CTA button.
3. **What did I stop noticing after 10 seconds?**
   The background grid lines and the glass borders. They recede into the atmosphere perfectly.
4. **Which element feels like it is trying too hard?**
   The hero interactive light still moves a bit fast when tracking the cursor (`duration-700`). We might need to look at cursor physics in the R&D lab later.
5. **If I remove one element, does the page become stronger?**
   No, the page is currently in a state of high restraint. Any further subtraction would start removing core content.

*(New decisions will be appended here during the Aurora and Hanami Polish Sprints)*
