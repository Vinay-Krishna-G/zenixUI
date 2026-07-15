# ZenixUI Quality Bar

Every world (experience) in ZenixUI must satisfy these strict requirements before being considered ready for production.

---

## 1. Engineering Quality

Our baseline product promise is a pristine, premium engineering output.

### 1.1 Export Reliability
**100% Reliability.**
- The world must export successfully.
- It must pass the Export CI pipeline without build errors.
- The exported Next.js project must perfectly match the Studio preview visually.

### 1.2 Performance & Lighthouse
**90+ Score.**
- Performance, Best Practices, SEO, and Accessibility must score 90+ out of the box for the exported Next.js application.

### 1.3 Accessibility
**Pass.**
- Minimum contrast ratios met.
- Keyboard navigable.
- Respects `prefers-reduced-motion`.

### 1.4 Responsive Layout
**Native Feel.**
- The experience must feel native and beautifully adapted on mobile, tablet, and desktop without broken horizontal scrolling or cramped touch targets.

---

## 2. Experience Quality

We design behavior, not just layouts. 

### 2.1 The Foundation Gate
Before adding any new feature, animation, or component, answer this question:
> **"If this feature were removed, would the user still understand the world's personality?"**

If **yes**, the feature is decorative. Reconsider it.
If **no**, the feature is foundational. Build it.

### 2.2 The 3-Second Recognition Test
**Can someone recognize the world after 3 seconds without seeing the title?**
Every world must have a distinct visual language. You should be able to identify the world just by looking at the spacing, typography, and color harmony.

### 2.3 The 30-Second Memory Test
**After using the world for 30 seconds, close the laptop. What do you remember?**
- If the answer is "nice animations", we have failed.
- The user must remember the *emotion* (e.g., "It feels intelligent", "It is peaceful").

### 2.4 Interaction Budget
Premium interactions must be strictly capped.
**No more than 4 premium interactions per world.** 
Not everything should compete for attention. Demote elements that distract from the world's primary feeling.

### 2.5 Typography & Layout Personality
Negative space must be used purposefully to create tension, calm, or structure. The choice of font, letter spacing, line height, and optical sizing must be intentional and distinct from defaults.

---

## World Design System

Every world must follow this cascade:
`Identity -> Behavior -> Forbidden -> Emotion -> Components`

### Aurora (World 01)
* **Identity**: Calm Intelligence
* **Behavior**: Purposeful Motion
* **Forbidden**: Never bounce, overshoot, wobble, or elastic.
* **Emotion**: Confidence
* **Signature Moment**: Cursor + Light

### Hanami (World 02)
* **Identity**: Grace in Stillness
* **Behavior**: Motion Waits
* **Forbidden**: Never rush, pulse, flash, rotate, or shake.
* **Emotion**: Peace
* **Signature Moment**: Time slowing down

---

## World Scoring (Out of 50)
Every world is evaluated out of 10 points for each of the following:

1. **Identity** (Does it look unique?)
2. **Motion** (Does motion reinforce the feeling?)
3. **Typography** (Is the text setting distinct?)
4. **Interaction** (Are the micro-interactions memorable?)
5. **Recognition** (The 3-Second & 30-Second Emotional Checks)

*If Recognition < 8, the world goes back to design.*
*If Total < 45/50, the world goes back to design.*
