import React, { forwardRef } from "react"
import { MotionPreset } from "../behavior"

export interface HanamiAtmosphereProps {
  url?: string
  alt?: string
}

export const HanamiAtmosphere = forwardRef<HTMLElement, HanamiAtmosphereProps>(
  ({ url, alt }, ref) => {
    if (!url) return null

    return (
      <section ref={ref} className="relative w-full h-[80vh] overflow-hidden bg-surface-bg mt-12 mb-32">
        <MotionPreset variant="relax" delay={0} className="w-full h-full">
          {/* Base image */}
          <img 
            src={url} 
            alt={alt || "Atmosphere"} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 scale-105"
          />
          
          {/* Subtle light/shadow overlay sweeping across */}
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
            <div 
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-50"
              style={{
                animation: "sunlightSweep 40s ease-in-out infinite alternate"
              }}
            />
          </div>

          {/* Grain overlay for paper/linen feel */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes sunlightSweep {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(300%); }
            }
          `}} />
        </MotionPreset>
      </section>
    )
  }
)
HanamiAtmosphere.displayName = "HanamiAtmosphere"
