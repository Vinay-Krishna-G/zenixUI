# The ZenixUI Design Language

ZenixUI does not design products independently. While every world (Aurora, Hanami, Atlas) has a unique emotional footprint, they all share a singular design language that ensures they feel undeniably like ZenixUI.

This document defines the rules of that shared language.

---

## 1. Motion
How does ZenixUI move?

* **Never linear:** Every movement must have acceleration and deceleration (easing).
* **Never aggressive:** Elements should enter with grace, not speed.
* **Acknowledges interaction:** Motion should respond to user intent. Buttons scale down slightly on press to feel tactile; elements glow softly when hovered.
* **Explains hierarchy:** Motion should guide the eye to what matters next.
* **Never decorates:** We do not use bouncy, springy, or playful physics unless the emotion explicitly calls for it. Motion exists to clarify state, not to entertain.

## 2. Spacing
How does ZenixUI breathe?

* **Large outer spacing:** Generous padding around the edges of the screen framing the content.
* **Comfortable reading width:** Text lines should never exceed 65-75 characters.
* **Dense information only after trust:** Landing pages and heroes breathe deeply. Dashboards and technical specs can be dense, but only once the user has opted in.
* **White space creates emotion:** Space is not emptiness; it is a structural element used to communicate confidence.

## 3. Typography
How does ZenixUI speak?

* **Headlines create emotion:** The primary font sets the tone (e.g., editorial serif for warmth, geometric sans for technical precision).
* **Body creates clarity:** The secondary font must be fiercely legible and invisible.
* **Monospace creates trust:** Use monospace for data, code, or technical metadata.
* **Never more than two families:** Constrain choices to maintain discipline. One for voice, one for function.

## 4. Color
How does ZenixUI direct attention?

* **One dominant emotion:** The background and primary surface colors set the mood (e.g., deep slate for calm, warm linen for hospitality).
* **One restrained accent:** Accent colors are used sparingly—only for primary actions or critical highlights.
* **Color directs attention:** Contrast is a tool for wayfinding, not decoration.
* **Never decorate with gradients:** Gradients are only used to simulate physical lighting (ambient glows, edge highlights) or to gently direct the eye. Never use rainbow gradients just to fill space.

## 5. Interaction
How does ZenixUI react?

* Buttons must feel **physical, confident, and intentional**.
* Hover states should be subtle—a shift in border color, a slight elevation, or a soft glow.
* Focus states must be unapologetically clear and accessible.
* **Never:** playful for no reason, bouncy, or loud. Interactions should feel like interacting with high-end physical hardware.
* **The Core Principle:** A memorable interaction should change how the user feels, not simply what the user sees.
* **The Implementation Rule:** Every new interaction must first become a reusable behavioral primitive before becoming an experience-specific effect.
* **The Identity Law:** Every world should be identifiable even if all colors are removed. The spacing, typography, rhythm, motion, and interaction must reveal the world's identity independently of its palette.

## 6. Materials
ZenixUI is built on a foundation of physical materials. We do not design abstract shapes; we simulate reality.

* **Stone:** Vast, quiet, solid backgrounds that provide grounding.
* **Paper:** Elevated surfaces for reading and focused tasks.
* **Glass:** Translucent panels that refract light and create depth without adding weight.
* **Aluminum:** Sharp edges, subtle borders, and precision framing.
* **Air:** Breathing room between elements.
* **Light:** Ambient glows that simulate physical illumination to draw the eye.

---

## 7. The Guiding Sentences

Every world must have a single sentence that guides every decision. When in doubt about a design choice, read the sentence.

* **Aurora:** Confidence without arrogance.
* **Hanami:** Every visitor should feel expected.
* **Atlas:** Decisions deserve clarity.
* **Pulse:** Creativity should feel playful, never chaotic.
* **Forge:** Strength without aggression.

---

## The Emotional Matrix

Rather than designing layouts, we design **Emotional Operating Systems**. A developer chooses a world because of the emotion they want to communicate, not the industry they are in. Each world is an intersection of specific emotional dimensions built on top of the shared ZenixUI language.

| Dimension  | Aurora (v1) | Hanami (v2) | Atlas (v3) | Pulse (v4) | Forge (v5) |
| ---------- | ----------- | ----------- | ---------- | ---------- | ---------- |
| **Pace**   | Calm        | Gentle      | Deliberate | Energetic  | Strong     |
| **Density**| Medium      | Airy        | Dense      | Variable   | Compact    |
| **Contrast**| High       | Soft        | High       | Bold       | Extreme    |
| **Motion** | Precise     | Organic     | Reserved   | Expressive | Heavy      |
| **Typography** | Editorial + Technical | Human + Editorial | Corporate | Experimental | Monumental |

**Hanami** is our next world. By looking at this matrix, the requirements for Hanami become obvious: it must be gentle, airy, soft, organic, and deeply human.
