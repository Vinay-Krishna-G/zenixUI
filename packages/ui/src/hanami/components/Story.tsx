import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"
import type { StoryContent } from "../../types"

export interface HanamiStoryProps extends StoryContent {}

export const HanamiStory = forwardRef<HTMLElement, HanamiStoryProps>(
  ({ headline, body, imageUrl }, ref) => {
    return (
      <section
        ref={ref}
        className="pt-24 pb-32 px-6 max-w-6xl mx-auto w-full"
      >
        <div className={`grid gap-16 items-center ${imageUrl ? 'md:grid-cols-2' : 'max-w-4xl mx-auto text-center'}`}>
          {imageUrl && (
            <MotionPreset variant="relax" delay={0}>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <img src={imageUrl} alt="Story" className="w-full h-full object-cover rounded-sm shadow-sm" />
              </div>
            </MotionPreset>
          )}

          <div className="flex flex-col">
            <MotionPreset variant="relax" delay={imageUrl ? 1 : 0}>
          <h2 
            className="text-2xl md:text-4xl font-normal leading-tight mb-12"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)" 
            }}
          >
            {headline}
          </h2>
        </MotionPreset>

            <div className={`flex flex-col gap-8 ${!imageUrl && 'max-w-2xl mx-auto'}`}>
              {body.map((paragraph, index) => (
                <MotionPreset variant="delayed-presence" delay={index + (imageUrl ? 2 : 1)} key={index}>
                  <p
                    className="text-lg md:text-2xl font-normal leading-[1.8] opacity-90"
                    style={{ color: "var(--text-body)", fontFamily: "var(--font-body)" }}
                  >
                    {paragraph}
                  </p>
                </MotionPreset>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
HanamiStory.displayName = "HanamiStory"
