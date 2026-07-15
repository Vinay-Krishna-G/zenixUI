import React, { forwardRef } from "react"
import { Stillness, FocusGroup } from "../behavior"
import type { StoryContent } from "../../types"

export interface HanamiStoryProps extends StoryContent {}

export const HanamiStory = forwardRef<HTMLElement, HanamiStoryProps>(
  ({ headline, body }, ref) => {
    return (
      <FocusGroup 
        as="section"
        ref={ref}
        className="py-32 sm:py-48 px-6 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
      >
        <Stillness type="text" className="mb-12">
          <h2 
            className="text-2xl md:text-4xl font-normal tracking-normal leading-tight"
            style={{ 
              color: "var(--text-heading)", 
              fontFamily: "var(--font-heading)" 
            }}
          >
            {headline}
          </h2>
        </Stillness>

        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {body.map((paragraph, index) => (
            <Stillness 
              key={index}
              as="p"
              type="text"
              className="text-lg md:text-2xl font-normal leading-[1.8] opacity-90"
              style={{ color: "var(--text-body)", fontFamily: "var(--font-body)" }}
            >
              {paragraph}
            </Stillness>
          ))}
        </div>
      </FocusGroup>
    )
  }
)
HanamiStory.displayName = "HanamiStory"
