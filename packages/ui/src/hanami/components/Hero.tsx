import React, { forwardRef } from "react"
import { Presence, Stillness, FocusGroup, FocusItem } from "../behavior"

export interface HanamiHeroProps {
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
}

export const HanamiHero = forwardRef<HTMLElement, HanamiHeroProps>(
  ({ headline, subheadline, primaryCta }, ref) => {
    return (
      <FocusGroup 
        as="section"
        ref={ref}
        className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden"
      >
        <Stillness 
          type="bg" 
          className="absolute inset-0 z-0" 
          style={{ backgroundColor: "var(--surface-bg)" }}
        />

        <FocusItem className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-start">
          <Stillness 
            as="h1"
            type="text"
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-normal mb-10"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)",
              lineHeight: "var(--leading-tight)"
            }}
          >
            {headline}
          </Stillness>

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

          <Presence 
            as="a"
            href={primaryCta.href}
            className="inline-flex items-center justify-center font-medium"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-brand)",
              '--space-padding': '16px 32px',
              '--space-radius': 'var(--radius-control)',
              '--space-elevation': '0px'
            } as React.CSSProperties}
          >
            {primaryCta.label}
          </Presence>
        </FocusItem>
      </FocusGroup>
    )
  }
)
HanamiHero.displayName = "HanamiHero"
