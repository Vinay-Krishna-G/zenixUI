import React, { forwardRef } from "react"
import { Presence, Stillness, FocusGroup, FocusItem } from "../behavior"
import type { FeatureItem } from "../../types"

export interface HanamiCardsProps {
  headline: string
  items: FeatureItem[]
}

export const HanamiCards = forwardRef<HTMLElement, HanamiCardsProps>(
  ({ headline, items }, ref) => {
    return (
      <FocusGroup 
        as="section"
        ref={ref}
        className="py-32 sm:py-48 px-6 max-w-7xl mx-auto w-full"
      >
        <Stillness type="text" className="mb-16">
          <h2 
            className="text-3xl md:text-4xl font-normal tracking-normal"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)" 
            }}
          >
            {headline}
          </h2>
        </Stillness>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, index) => (
            <FocusItem key={item.title + index} className="h-full">
              <Presence 
                as="div" 
                className="flex flex-col h-full border"
                style={{ 
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--surface-border)",
                  color: "var(--text-body)"
                } as React.CSSProperties}
              >
                {item.icon && (
                  <div className="mb-6 text-brand-primary opacity-80 text-3xl">
                    {/* Render icon if it's a string, or an actual element if we upgrade later */}
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
              </Presence>
            </FocusItem>
          ))}
        </div>
      </FocusGroup>
    )
  }
)
HanamiCards.displayName = "HanamiCards"
