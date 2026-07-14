import React, { forwardRef } from "react"
import { FocusGroup, FocusItem, Presence, Stillness } from "../behavior"
import type { GalleryContent } from "../../types"

export interface HanamiGalleryProps extends GalleryContent {}

export const HanamiGallery = forwardRef<HTMLElement, HanamiGalleryProps>(
  ({ headline, items }, ref) => {
    return (
      <FocusGroup 
        as="section"
        ref={ref}
        className="py-24 px-6 max-w-7xl mx-auto w-full"
      >
        {headline && (
          <Stillness type="text" className="mb-16">
            <h2 
              className="text-3xl md:text-5xl font-medium tracking-tight"
              style={{ 
                color: "var(--text-heading)", 
                fontFamily: "var(--font-heading)" 
              }}
            >
              {headline}
            </h2>
          </Stillness>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <FocusItem key={item.id || index} className="flex flex-col group">
              <Presence 
                as="div" 
                respondsToSpace={false}
                className="relative aspect-[4/5] overflow-hidden mb-4 rounded-card"
              >
                {item.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full"
                    style={{ 
                      background: `linear-gradient(145deg, var(--surface-card) 0%, var(--surface-border) 100%)`,
                      border: "1px solid var(--surface-border)"
                    }}
                  />
                )}
              </Presence>
              
              {item.caption && (
                <Stillness 
                  type="text" 
                  className="text-sm font-medium opacity-70"
                  style={{ color: "var(--text-body)" }}
                >
                  {item.caption}
                </Stillness>
              )}
            </FocusItem>
          ))}
        </div>
      </FocusGroup>
    )
  }
)
HanamiGallery.displayName = "HanamiGallery"
