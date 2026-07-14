import React, { forwardRef } from "react"
import { Presence, Stillness, FocusGroup } from "../behavior"
import type { CTAContent } from "../../types"

export interface HanamiCTAProps extends CTAContent {}

export const HanamiCTA = forwardRef<HTMLElement, HanamiCTAProps>(
  ({ headline, subheadline, primaryCta }, ref) => {
    return (
      <FocusGroup 
        as="section"
        ref={ref}
        className="py-32 px-6 w-full flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <Stillness 
          type="bg" 
          className="absolute inset-0 z-0 border-y" 
          style={{ 
            backgroundColor: "var(--surface-card)",
            borderColor: "var(--surface-border)"
          }}
        />
        
        <div className="relative z-10 max-w-2xl flex flex-col items-center py-12">
          <Stillness type="text">
            <h2 
              className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
              style={{ 
                color: "var(--text-heading)", 
                fontFamily: "var(--font-heading)" 
              }}
            >
              {headline}
            </h2>
            <p 
              className="text-lg md:text-2xl font-normal opacity-90 mb-12"
              style={{ color: "var(--text-body)" }}
            >
              {subheadline}
            </p>
          </Stillness>

          <Presence 
            as="a"
            href={primaryCta.href}
            className="inline-flex items-center justify-center font-medium"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-brand)",
              '--space-padding': '16px 36px',
              '--space-radius': 'var(--radius-control)',
              '--space-elevation': '0 4px 24px rgba(0,0,0,0.05)'
            } as React.CSSProperties}
          >
            {primaryCta.label}
          </Presence>
        </div>
      </FocusGroup>
    )
  }
)
HanamiCTA.displayName = "HanamiCTA"
