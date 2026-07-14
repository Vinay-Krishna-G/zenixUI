import React, { forwardRef } from "react"
import "../behavior/index.css"

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
        className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden focus-group"
      >
        {/* Stillness BG */}
        <div className="absolute inset-0 z-0 stillness-bg" style={{ backgroundColor: "var(--surface-bg)" }}>
          {/* Subtle noise or texture can go here in the future */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-start focus-item">
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 stillness-text"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)",
              lineHeight: "var(--leading-tight)"
            }}
          >
            {headline}
          </h1>

          <p 
            className="text-lg md:text-2xl font-normal mb-12 max-w-2xl"
            style={{ 
              color: "var(--text-body)", 
              fontFamily: "var(--font-body)",
              lineHeight: "var(--leading-relaxed)"
            }}
          >
            {subheadline}
          </p>

          <a 
            href={primaryCta.href}
            className="presence-surface space-responsive inline-flex items-center justify-center font-medium"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-brand)",
              /* Overriding the default space-padding for button specifically */
              '--space-padding': '16px 32px',
              '--space-radius': 'var(--radius-control)',
              '--space-elevation': '0px'
            } as React.CSSProperties}
          >
            {primaryCta.label}
          </a>
        </div>
      </section>
    )
  }
)
HanamiHero.displayName = "HanamiHero"
