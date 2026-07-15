# Hanami (World 01)

**Identity:** Quiet Luxury, Japanese Minimalism, Grace in Stillness.
**Target Audience:** Boutique hotels, luxury spas, wellness clinics, high-end restaurants, interior designers.
**Pacing:** Slow, intentional, unhurried.

## 1. Visual Language
- **Typography:** Elegant, high-contrast serif for headings (Newsreader) paired with a clean, unassuming sans-serif for body (Inter).
- **Colors:** Earthy, natural tones. Warm linen backgrounds, muted stone borders, and subtle terracotta/amber accents.
- **Shapes:** Soft rounded corners (Subtle/Soft), generous padding, and breathable whitespace.
- **Rhythm:** Elements should never feel packed. Asymmetrical layouts and negative margins (overlapping elements) create depth rather than density.

## 2. Interaction Design (Behavior Preset: "Still")
- **Motion:** Fade-ins with long durations, minimal translation. Elements gently materialize rather than sliding or springing.
- **Hover States:** Microscopic brightness adjustments or extremely slow transform scaling (e.g. 20s subtle zoom on images). No jarring movements.
- **Scroll:** Smooth parallax that respects the pacing.
- **Ambient:** Time-based subtle animations (e.g., sweeping light/shadow overlay or dust particles) rather than reactive cursor tracking.

## 3. Signature Moment
- **"The Atmosphere":** A full-bleed visual moment that relies entirely on time rather than user input. A slow, continuously animating light/shadow overlay that captures Hanami's "Still" personality without demanding interaction.

## 4. Image Recipe
To maintain the integrity of Hanami, photography must adhere to strict guidelines:
- **Tone:** Warm natural light, golden hour.
- **Subjects:** Organic textures, quiet interiors, minimal people.
- **Materials:** Wood, linen, stone, ceramic, handmade paper.
- **Forbidden:** Neon, tech offices, city skylines, cars, crowds, bright blue lighting, harsh contrast.

## 5. Engineering Rules
- Maintain extremely high contrast ratios for text readability.
- The "Editorial Hero" layout ensures typography remains readable on a clean surface, with imagery acting as a supporting reward below the fold.
- Use CSS grains and microscopic overlays for texture, completely avoiding heavy raster noise.
