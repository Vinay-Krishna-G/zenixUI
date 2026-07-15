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
        className="py-32 sm:py-48 px-6 max-w-7xl mx-auto w-full"
      >
        {headline && (
          <Stillness type="text" className="mb-24 text-center">
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
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-y-32 md:gap-x-8">
          {items.map((item, index) => {
            const isDominant = index % 3 === 0;
            const isLeft = index % 3 === 1;
            const isRight = index % 3 === 2;

            return (
              <FocusItem 
                key={item.id || index} 
                className={`flex flex-col group ${
                  isDominant ? "md:col-span-12" : 
                  isLeft ? "md:col-span-5 md:col-start-2 md:mt-24" : 
                  "md:col-span-4 md:col-start-8"
                }`}
              >
                <Presence 
                  as="div" 
                  respondsToSpace={false}
                  className={`relative overflow-hidden mb-6 rounded-card ${
                    isDominant ? "aspect-[4/3] md:aspect-[21/9]" : 
                    isLeft ? "aspect-[4/5]" : 
                    "aspect-square md:aspect-[3/4]"
                  }`}
                >
                  {item.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={item.url} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
                    className="text-sm md:text-base font-normal opacity-70"
                    style={{ color: "var(--text-body)" }}
                  >
                    {item.caption}
                  </Stillness>
                )}
              </FocusItem>
            );
          })}
        </div>
      </FocusGroup>
    )
  }
)
HanamiGallery.displayName = "HanamiGallery"
