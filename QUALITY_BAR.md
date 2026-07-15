# ZenixUI Quality Bar

Every world (experience) in ZenixUI must satisfy these requirements before being considered ready for production.
This is our product promise.

## 1. Identity
**Can I recognize it without reading the title?**
Every world must have a distinct visual language. You should be able to identify the world just by looking at the spacing, typography, and color harmony.

## 2. Motion
**Does motion reinforce the feeling?**
Motion should never be arbitrary. It must support the world's identity. 
- *Aurora*: Fluid, precise, continuous.
- *Hanami*: Unhurried, deliberate, inviting.

## 3. Typography
**Is typography unique?**
The choice of font, letter spacing, line height, and optical sizing must be intentional and distinct from defaults.

## 4. Layout
**Does spacing have personality?**
Negative space must be used purposefully to create tension, calm, or structure. Layouts should not feel like standard grids unless the grid itself is the personality.

## 5. Interactions
**At least one memorable interaction.**
Every world must contain at least one micro-interaction that surprises and delights the user (e.g., cursor tracking, breathing cards, parallax depth).

## 6. Export
**100% Reliability.**
- The world must export successfully.
- It must pass the Export CI pipeline without build errors.
- The exported Next.js project must perfectly match the Studio preview visually.

## 7. Accessibility
**Pass.**
- Minimum contrast ratios met.
- Keyboard navigable.
- Respects `prefers-reduced-motion`.

## 8. Responsive
**Pass.**
The experience must feel native and beautifully adapted on mobile, tablet, and desktop without broken horizontal scrolling or cramped touch targets.

## 9. Lighthouse
**90+ Score.**
Performance, Best Practices, SEO, and Accessibility must score 90+ out of the box for the exported Next.js application.

## World Design System

We are not building a Component Library. We are building a **World Design System**.
Every world must follow this cascade:
`Identity -> Behavior -> Forbidden -> Emotion -> Components`

To ensure the identity of each world remains focused, any new component or animation must adhere strictly to these constraints.

### Aurora

* **Identity**: Calm Intelligence
* **Behavior**: Purposeful Motion
* **Forbidden**: Never bounce, overshoot, wobble, or elastic.
* **Emotion**: Confidence

*Interaction Budget*: Aurora is allowed a maximum of 4 premium interactions (Cursor, Cards, Buttons, Navigation). Do not animate everything. Treat it like a native macOS application.

### Hanami

* **Identity**: Grace in Stillness
* **Behavior**: Motion Waits
* **Forbidden**: Never rush, pulse, flash, rotate, or shake.
* **Emotion**: Peace

---

## World Scoring

Every world must evaluate itself using the **World Score**.
The absolute most critical metric is the **3-Second Emotional Check**: "Can someone recognize the world after 3 seconds without seeing the title?"

**Categories (out of 10):**
1. **Identity** (Does it look unique?)
2. **Motion** (Does motion reinforce the feeling?)
3. **Typography** (Is the text setting distinct?)
4. **Interaction** (Are the micro-interactions memorable?)
5. **Recognition** (The 3-Second Emotional Check)

*If Recognition < 8, the world goes back to design.*
*If Total < 45/50, the world goes back to design.*
