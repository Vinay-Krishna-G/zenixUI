import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"
import type { TestimonialsContent } from "../../types"

export interface HanamiTestimonialsProps extends TestimonialsContent {}

export const HanamiTestimonials = forwardRef<HTMLElement, HanamiTestimonialsProps>(
  ({ headline, items }, ref) => {
    return (
      <section
        ref={ref}
        className="py-24 px-6 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
      >
        {headline && (
          <MotionPreset variant="relax" delay={0}>
            <h2 
              className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 mb-16"
              style={{ color: "var(--text-heading)" }}
            >
              {headline}
            </h2>
          </MotionPreset>
        )}

        <div className="flex flex-col gap-24 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <MotionPreset variant="delayed-presence" delay={index}>
                <blockquote className="max-w-3xl border-0 p-8">
                  <p 
                    className="text-2xl md:text-4xl font-medium leading-relaxed mb-8"
                    style={{ 
                      color: "var(--text-heading)", 
                      fontFamily: "var(--font-heading)" 
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer>
                    <strong 
                      className="block text-base font-semibold"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {item.author}
                    </strong>
                    {item.role && (
                      <span 
                        className="block text-sm opacity-70 mt-1"
                        style={{ color: "var(--text-body)" }}
                      >
                        {item.role}
                      </span>
                    )}
                  </footer>
                </blockquote>
              </MotionPreset>
            </div>
          ))}
        </div>
      </section>
    )
  }
)
HanamiTestimonials.displayName = "HanamiTestimonials"
