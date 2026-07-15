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

## Post-Pass QA Checklist (Aurora - Craftsmanship)
1. What is the first thing I see?
2. What is the second thing I see?
3. What did I stop noticing after 10 seconds?
4. Which element feels like it is trying too hard?
5. If I remove one element, does the page become stronger?

## Post-Pass QA Checklist (Hanami - Hospitality)
1. If this were a real café, would I slow down or order and leave?
2. Does this page lower my heart rate?
3. If I remove all colors, does this still feel human?
4. Has the Comfort Budget been broken by too many interactions, animations, or cards?
5. Does every section quietly ask "Would you like to continue?" rather than shouting "LOOK HERE"?
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

Decision #012

World:
Hanami

Category:
Hospitality & Typography

Observation:
The Hanami hero used massive, aggressive headline sizes (`text-8xl`) with tight tracking (`tracking-tight`), inherited from standard SaaS playbooks. This felt like software shouting at the user rather than a café welcoming them.

Hypothesis:
Scaling the headline down (`text-6xl`), returning to normal tracking for the serif font, and opening up the vertical whitespace will lower the visual volume and create a sense of calm.

Change:
In `packages/ui/src/hanami/components/Hero.tsx`, reduced headline sizing, removed tight tracking, set font weight to normal, and restricted the subheadline width to `max-w-xl`.

Result:
The typography now speaks in a normal, conversational volume. It feels like an invitation rather than a billboard.

Decision:
Keep

---

Decision #013

World:
Hanami

Category:
Hospitality & Silence Budget

Observation:
The Cards section was using typical web layout spacing (`py-24`, `gap-8`) and aggressive typography (`text-5xl font-medium tracking-tight`). It felt like a standard feature grid focused on density rather than comfort, which broke the Silence Budget.

Hypothesis:
Dramatically increasing the white space (`py-32 sm:py-48`, `gap-12 lg:gap-16`) and softening the typography (`font-normal tracking-normal`) will force the user to slow down. By decreasing information density, we increase the perceived value and comfort of the remaining elements.

Change:
In `packages/ui/src/hanami/components/Cards.tsx`, increased all section padding and grid gaps, and normalized the heading and card titles to remove artificial urgency.

Result:
The section now breathes. Instead of rushing to scan the grid, the user is invited to comfortably read each card in its own distinct space.

Decision:
Keep

---

Decision #014

World:
Hanami

Category:
Hospitality & Humanity

Observation:
The Story section originally used a sans-serif body font with standard tracking/leading. I initially switched it to the serif heading font (`Newsreader`) to make it feel like a novel.

Hypothesis:
While the serif font looked beautiful, the user noted that three long paragraphs in serif might cause reading fatigue and feel "too literary." The contrast between a serif heading and a warm humanist sans (`Inter`) is actually more welcoming. By keeping the sans-serif body but retaining the increased size (`text-2xl`), open leading (`1.8`), and expanded vertical padding (`py-32 sm:py-48`), the text feels conversational without sacrificing readability.

Change:
In `packages/ui/src/hanami/components/Story.tsx`, reverted the body font to `var(--font-body)` while retaining the increased text size, open leading, and section padding.

Result:
The text feels conversational and intimate. It invites reading and avoids reading fatigue. It passes the Conversation Test.

Decision:
Keep

---

Decision #015

World:
Hanami

Category:
Hospitality & Imagination (Gallery)

Observation:
The Gallery originally used a generic symmetrical CSS grid where every image had equal weight (`aspect-[4/5]`) and standard spacing. This felt like a photo feed rather than a curated emotional space, failing to invite the user to "imagine themselves here."

Hypothesis:
Replacing the symmetrical grid with a highly editorial, asymmetrical layout will shift the tone. By making the first image dominate (`md:col-span-12 aspect-[21/9]`) and heavily offsetting the subsequent images (`md:mt-24`), we give each image tremendous breathing room. This honors the Silence Budget.

Change:
In `packages/ui/src/hanami/components/Gallery.tsx`, implemented a dynamic asymmetrical grid based on the index. The headline was centered and softened (`font-normal`), and the padding was dramatically increased (`py-32 sm:py-48`). Added a slow, subtle scale effect (`duration-1000`) on hover to make the images feel alive but unhurried.

Result:
The gallery now feels like a high-end editorial spread. It does not look like software. It creates a space for imagination rather than mere viewing.

Decision:
Keep

---

Decision #016

World:
Hanami

Category:
Hospitality & Invitation (CTA)

Observation:
The CTA originally looked like a standard marketing funnel completion point: a heavily bordered `var(--surface-card)` container, massive typography, and a button with a drop shadow. It felt like it was trying to force a conversion.

Hypothesis:
Removing the bounding box and drop shadow entirely, and relying purely on extreme whitespace (`py-48 md:py-64`) and softened typography, will remove the pressure. The user reaches the CTA because they feel understood, not because they are being squeezed by the UI layout. This honors the "Completion Without Pressure" rule.

Change:
In `packages/ui/src/hanami/components/CTA.tsx`, deleted the bordered `Stillness` background layer so the CTA flows seamlessly from the previous section. Reduced typography size/tracking, removed the button's elevation shadow, and doubled the padding.

Result:
The CTA now feels like a gentle signoff or an open door, rather than a checkout button. It invites rather than commands.

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
