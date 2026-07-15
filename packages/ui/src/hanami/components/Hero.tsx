import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"

export interface HanamiHeroProps {
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
}

export const HanamiHero = forwardRef<HTMLElement, HanamiHeroProps>(
  ({ headline, subheadline, primaryCta }, ref) => {
    return (
      <section
        ref={ref}
        className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden bg-surface-bg"
      >
        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-start">
          <MotionPreset variant="relax" delay={0}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10"
              style={{ 
                color: "var(--text-heading)", 
                fontFamily: "var(--font-heading)",
                lineHeight: "var(--leading-tight)"
              }}
            >
              {headline}
            </h1>
          </MotionPreset>

          <MotionPreset variant="delayed-presence" delay={1}>
            <p 
              className="text-lg md:text-xl font-normal mb-16 max-w-xl"
              style={{ 
                color: "var(--text-body)", 
                fontFamily: "var(--font-body)",
                lineHeight: "var(--leading-relaxed)"
              }}
            >
              {subheadline}
            </p>
          </MotionPreset>

          <MotionPreset variant="delayed-presence" delay={2}>
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center font-medium px-8 py-4 rounded-[var(--radius-control)] transition-colors duration-500 hover:bg-brand-primary/90"
              style={{
                backgroundColor: "var(--brand-primary)",
                color: "var(--text-on-brand)",
              }}
            >
              {primaryCta.label}
            </a>
          </MotionPreset>
        </div>
      </section>
    )
  }
)
HanamiHero.displayName = "HanamiHero"
