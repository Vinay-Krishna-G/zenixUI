import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"

export interface HanamiHeroProps {
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  imageUrl?: string
}

export const HanamiHero = forwardRef<HTMLElement, HanamiHeroProps>(
  ({ headline, subheadline, primaryCta, imageUrl }, ref) => {
    return (
      <section
        ref={ref}
        className="pt-32 pb-0 px-6 overflow-hidden bg-surface-bg flex flex-col items-center text-center"
      >
        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
          <MotionPreset variant="relax" delay={0}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-tight"
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
              className="text-lg md:text-xl font-normal mb-12 max-w-2xl opacity-90"
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
              className="inline-flex items-center justify-center font-medium px-8 py-4 mb-[72px] rounded-[var(--radius-control)] transition-colors duration-500 hover:opacity-90"
              style={{
                backgroundColor: "var(--brand-primary)",
                color: "var(--text-on-brand)",
              }}
            >
              {primaryCta.label}
            </a>
          </MotionPreset>
        </div>

        {imageUrl && (
          <MotionPreset variant="relax" delay={3} className="w-full max-w-7xl mx-auto">
            <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-t-[var(--radius-card)] md:rounded-[var(--radius-card)] overflow-hidden shadow-sm">
              <img src={imageUrl} alt="Hero" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105" />
            </div>
          </MotionPreset>
        )}
      </section>
    )
  }
)
HanamiHero.displayName = "HanamiHero"
