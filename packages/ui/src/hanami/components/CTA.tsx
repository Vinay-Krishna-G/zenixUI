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
        className="py-48 md:py-64 px-6 w-full flex flex-col items-center justify-center text-center relative"
      >
        <div className="relative z-10 max-w-xl flex flex-col items-center">
          <Stillness type="text">
            <h2 
              className="text-3xl md:text-5xl font-normal tracking-normal mb-8"
              style={{ 
                color: "var(--text-heading)", 
                fontFamily: "var(--font-heading)" 
              }}
            >
              {headline}
            </h2>
            <p 
              className="text-lg md:text-xl font-normal opacity-90 mb-16"
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
              '--space-elevation': '0px'
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
