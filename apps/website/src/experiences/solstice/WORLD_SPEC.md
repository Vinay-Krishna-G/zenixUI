# Solstice (World 03)

**Identity:** Bold Creativity, Expressive Visual Sound.
**Target Audience:** Creative portfolios, design agencies, cutting-edge software, fashion labels.
**Pacing:** Dynamic, energetic, slightly unpredictable.

## 1. Visual Language
- **Typography:** Display fonts with extreme weights (e.g., very thick or very thin). High contrast.
- **Colors:** Vibrant, highly saturated accents. Often uses a dark background to make colors "pop" like neon, or bright stark white with pure black.
- **Shapes:** Asymmetric compositions. Broken grids. Overlapping elements that intentionally disrupt typical layouts.

## 2. Interaction Design (Behavior Preset: "Expressive")
- **Motion:** Snappy, elastic springs. High velocity. 
- **Hover States:** Dramatic scale changes, color inversions, or magnetic buttons.
- **Scroll:** Scroll-linked typography scaling or image reveal masks.

## 3. Signature Moment
- **"The Drop":** An introductory animation that hits with the impact of a beat dropping. When the user loads the page, elements don't just fade in; they slide into place with a satisfying, almost audible snap.
- **Magnetic Physics:** A custom cursor that strongly gravitates toward actionable elements, snapping to them and expanding.

## 4. Engineering Rules
- Complex SVG masking and CSS clip-paths.
- Must still maintain accessibility standards (contrast ratios, readable text) despite chaotic layouts.
- Re-use `BehaviorEngine` for the magnetic physics.
