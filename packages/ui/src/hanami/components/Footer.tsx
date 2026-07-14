import React, { forwardRef } from "react"
import { Stillness, FocusGroup, Presence } from "../behavior"
import type { FooterContent } from "../../types"

export interface HanamiFooterProps extends FooterContent {}

export const HanamiFooter = forwardRef<HTMLElement, HanamiFooterProps>(
  ({ brandName, brandTagline, copyright }, ref) => {
    return (
      <FocusGroup 
        as="footer"
        ref={ref}
        className="w-full border-t flex flex-col items-center pt-16 pb-8 px-6 text-center"
        style={{ borderColor: "var(--surface-border)" }}
      >
        <Stillness type="text" className="mb-4">
          <h3 
            className="text-2xl font-bold tracking-tight"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)" 
            }}
          >
            {brandName}
          </h3>
        </Stillness>
        
        <Stillness type="text" className="mb-12">
          <p 
            className="text-sm font-medium opacity-80"
            style={{ color: "var(--text-body)" }}
          >
            {brandTagline}
          </p>
        </Stillness>

        <Stillness 
          type="text" 
          className="text-xs font-normal opacity-50 mt-16"
          style={{ color: "var(--text-body)" }}
        >
          {copyright}
        </Stillness>
      </FocusGroup>
    )
  }
)
HanamiFooter.displayName = "HanamiFooter"
