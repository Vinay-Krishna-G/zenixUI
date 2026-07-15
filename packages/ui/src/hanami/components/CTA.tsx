import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"
import type { CTAContent } from "../../types"

export interface HanamiCTAProps extends CTAContent {}

export const HanamiCTA = forwardRef<HTMLElement, HanamiCTAProps>(
  ({ headline, subheadline, primaryCta }, ref) => {
    return (
      <section
        ref={ref}
        className="py-48 md:py-64 px-6 w-full flex flex-col items-center justify-center text-center relative"
      >
        <div className="relative z-10 max-w-xl flex flex-col items-center">
          <MotionPreset variant="relax" delay={0}>
            <h2 
              className="text-3xl md:text-5xl font-normal mb-8"
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
          </MotionPreset>

          <MotionPreset variant="delayed-presence" delay={1}>
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center font-medium px-8 py-4 rounded-[var(--radius-control)] transition-colors duration-500 hover:bg-brand-primary/90"
              style={{
                backgroundColor: "var(--brand-primary)",
                color: "var(--text-on-brand)"
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
HanamiCTA.displayName = "HanamiCTA"
