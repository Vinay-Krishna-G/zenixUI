import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"
import type { FeatureItem } from "../../types"

export interface HanamiCardsProps {
  headline: string
  items: FeatureItem[]
}

export const HanamiCards = forwardRef<HTMLElement, HanamiCardsProps>(
  ({ headline, items }, ref) => {
    return (
      <section
        ref={ref}
        className="py-32 sm:py-48 px-6 max-w-7xl mx-auto w-full"
      >
        <MotionPreset variant="relax" delay={0}>
          <h2 
            className="text-3xl md:text-4xl font-normal mb-16"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)" 
            }}
          >
            {headline}
          </h2>
        </MotionPreset>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, index) => (
            <div key={item.title + index} className="h-full">
              <MotionPreset variant="delayed-presence" delay={index} className="h-full">
                <div 
                  className="flex flex-col h-full border p-8 rounded-[var(--radius-card)] transition-colors duration-700 hover:bg-surface-elevated"
                  style={{ 
                    backgroundColor: "var(--surface-card)",
                    borderColor: "var(--surface-border)",
                    color: "var(--text-body)"
                  }}
                >
                  {item.icon && (
                    <div className="mb-6 text-brand-primary opacity-80 text-3xl">
                      <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </div>
                  )}
                  <h3 
                    className="text-xl font-normal mb-4"
                    style={{ color: "var(--text-heading)", fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="leading-relaxed opacity-90">
                    {item.body}
                  </p>
                </div>
              </MotionPreset>
            </div>
          ))}
        </div>
      </section>
    )
  }
)
HanamiCards.displayName = "HanamiCards"
