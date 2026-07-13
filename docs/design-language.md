# ZenixUI — Design Language

This document defines the visual system that all section components must use. No pixel values, color hex codes, or font names are hardcoded in component JSX. Everything goes through this token system.

---

## CSS Custom Properties

These are the only values that section components may reference for visual decisions.

### Colors

```css
:root {
  /* Brand */
  --brand-primary:       #6366f1;   /* Main CTA color, links, highlights */
  --brand-secondary:     #8b5cf6;   /* Gradients, accents */
  --brand-foreground:    #ffffff;   /* Text on top of primary color */

  /* Surfaces */
  --surface-bg:          #0a0a0a;   /* Page background */
  --surface-card:        #111111;   /* Card backgrounds */
  --surface-elevated:    #1a1a1a;   /* Hover states, dropdowns */
  --surface-border:      #1f1f1f;   /* Borders, dividers */

  /* Text */
  --text-heading:        #ffffff;   /* H1, H2, H3 */
  --text-body:           #a1a1aa;   /* Paragraphs, descriptions */
  --text-muted:          #52525b;   /* Captions, placeholders, secondary labels */
  --text-on-brand:       #ffffff;   /* Text placed on top of --brand-primary */
}
```

### Typography

```css
:root {
  --font-heading:        'Inter', sans-serif;
  --font-body:           'Inter', sans-serif;

  /* Scale — do not change these in section components */
  --text-xs:    0.75rem;    /* 12px */
  --text-sm:    0.875rem;   /* 14px */
  --text-base:  1rem;       /* 16px */
  --text-lg:    1.125rem;   /* 18px */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px */
  --text-3xl:   1.875rem;   /* 30px */
  --text-4xl:   2.25rem;    /* 36px */
  --text-5xl:   3rem;       /* 48px */
  --text-6xl:   3.75rem;    /* 60px */
}
```

### Border Radius

Radius has named steps so the Studio can offer "Sharp", "Soft", "Rounded" rather than raw pixel values.

```css
:root {
  --radius-none: 0px;
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-full: 9999px;

  /* Active radius — components use this, Studio updates it */
  --radius-control:  var(--radius-md);   /* Buttons, inputs, badges */
  --radius-card:     var(--radius-lg);   /* Cards, panels */
}
```

### Spacing

Section-level spacing is standardized so vertical rhythm is consistent across all experiences.

```css
:root {
  --spacing-section:  96px;    /* Top/bottom padding on every section */
  --spacing-content:  64px;    /* Internal content gaps */
  --spacing-element:  24px;    /* Between related elements */
}
```

### Shadows

```css
:root {
  --shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
  --shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);
  --shadow-glow: 0 0 24px rgb(99 102 241 / 0.3);   /* Brand glow effect */
}
```

---

## Typography Rules

### Heading font usage

| Element | Token | Weight |
|---|---|---|
| Page hero headline | `--text-5xl` / `--text-6xl` | 700 |
| Section headline | `--text-3xl` / `--text-4xl` | 700 |
| Card title | `--text-xl` / `--text-2xl` | 600 |
| Label / eyebrow | `--text-sm` | 500, uppercase, tracked |

### Body font usage

| Element | Token | Weight |
|---|---|---|
| Paragraph / description | `--text-base` / `--text-lg` | 400 |
| Caption / muted | `--text-sm` | 400 |
| Button | `--text-sm` | 500 |
| Navigation link | `--text-sm` | 500 |

### Line heights

```css
--leading-tight:   1.1;   /* Hero headlines */
--leading-snug:    1.3;   /* Section headlines */
--leading-normal:  1.5;   /* Body text */
--leading-relaxed: 1.7;   /* Long-form descriptions */
```

---

## Motion

Motion should be purposeful, not decorative. The default feeling must be **snappy and professional**.

```css
:root {
  --duration-fast:    120ms;   /* Hover states, color transitions */
  --duration-normal:  200ms;   /* Panel opens, tab switches */
  --duration-slow:    350ms;   /* Page transitions, modal entry */

  --ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);   /* General use */
  --ease-decelerate:  cubic-bezier(0, 0, 0.2, 1);     /* Elements entering */
  --ease-accelerate:  cubic-bezier(0.4, 0, 1, 1);     /* Elements leaving */
}
```

**Rules for motion:**
- Hover transitions: `--duration-fast` + `--ease-standard`
- Entry animations: `--duration-normal` + `--ease-decelerate`
- Never exceed `--duration-slow` for UI transitions
- Never use bouncy or spring physics in section animations
- Respect `prefers-reduced-motion` on all transitions

---

## Component Patterns

### Buttons

```tsx
// Primary button — always uses brand tokens
<button className="btn-primary">
  Get Started
</button>

// CSS
.btn-primary {
  background:    var(--brand-primary);
  color:         var(--brand-foreground);
  border-radius: var(--radius-control);
  font-size:     var(--text-sm);
  font-weight:   500;
  transition:    opacity var(--duration-fast) var(--ease-standard);
}
.btn-primary:hover { opacity: 0.88; }
```

### Cards

```tsx
<div className="card">...</div>

// CSS
.card {
  background:    var(--surface-card);
  border:        1px solid var(--surface-border);
  border-radius: var(--radius-card);
  padding:       var(--spacing-element);
}
```

### Section wrapper

Every section must wrap its content in this pattern for consistent vertical rhythm:

```tsx
<section className="section">
  <div className="section-inner">
    {/* content */}
  </div>
</section>

// CSS
.section {
  padding-top:    var(--spacing-section);
  padding-bottom: var(--spacing-section);
  background:     var(--surface-bg);
}

.section-inner {
  max-width:      1200px;
  margin:         0 auto;
  padding-inline: 24px;
}
```

---

## What Is Forbidden in Component Code

| ❌ Forbidden | ✅ Use instead |
|---|---|
| `color: #6366f1` | `color: var(--brand-primary)` |
| `font-family: 'Inter'` | `font-family: var(--font-heading)` |
| `border-radius: 12px` | `border-radius: var(--radius-card)` |
| `padding: 96px 0` | `padding: var(--spacing-section) 0` |
| `transition: 0.2s ease` | `transition: var(--duration-normal) var(--ease-standard)` |

If a value is hardcoded in component code, the Studio cannot change it and the exported project cannot be themed. Every hardcoded value is a broken feature.
