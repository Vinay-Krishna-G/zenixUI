"use client"

import * as React from "react"
import type { HeroContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraButton, 
  AuroraBadge, 
  AuroraAmbientGlow 
} from "./components"

interface AuroraHeroProps {
  content: HeroContent
}

export function AuroraHero({ content }: AuroraHeroProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const containerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Calculate position relative to center of the hero section
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <AuroraSection className="min-h-[90vh] justify-center pt-32 transition-colors duration-1000 overflow-visible" id="aurora-hero">
      {/* The Unforgettable Interaction: Ambient Light Follows Cursor */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full pointer-events-none z-0 mix-blend-screen transition-transform duration-700 ease-out" 
        style={{ transform: `translate(calc(-50% + ${mousePosition.x * 0.15}px), calc(-50% + ${mousePosition.y * 0.15}px))` }}
        aria-hidden="true" 
      />
      
      <AuroraContainer className="flex flex-col items-center text-center mt-12 relative z-10" ref={containerRef as any}>
        {content.badge && (
          <AuroraBadge className="mb-12 opacity-0 translate-y-4 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
            {content.badge}
          </AuroraBadge>
        )}

        <AuroraHeading as="h1" className="text-6xl sm:text-7xl lg:text-8xl max-w-3xl mb-8 opacity-0 translate-y-8 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
          {content.headline}
        </AuroraHeading>

        <AuroraBody className="text-lg sm:text-xl max-w-xl mb-16 opacity-0 translate-y-8 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
          {content.subheadline}
        </AuroraBody>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center opacity-0 translate-y-8 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
          <AuroraButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </AuroraButton>
          
          {content.secondaryCta && (
            <AuroraButton href={content.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {content.secondaryCta.label}
            </AuroraButton>
          )}
        </div>
      </AuroraContainer>
    </AuroraSection>
  )
}
