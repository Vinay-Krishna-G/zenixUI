"use client"
import * as React from "react"
import { useFlashlight } from "../behavior/useFlashlight"

// ============================================================================
// AURORA VISUAL LANGUAGE & COMPONENTS
// Built on physical materials: Stone, Glass, Aluminum, Paper, Light, Air
// ============================================================================

// --- 1. SURFACES & MATERIALS (Stone & Glass) ---

/**
 * AuroraSection: The foundation (Stone). 
 * Vast, quiet, dark, providing breathing room (Air).
 */
export function AuroraSection({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={`relative overflow-hidden bg-surface-bg py-24 sm:py-32 flex flex-col items-center ${className}`}>
      {children}
    </section>
  )
}

/**
 * AuroraContainer: Content boundaries.
 */
export const AuroraContainer = React.forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <div ref={ref} className={`relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full ${className}`}>
        {children}
      </div>
    )
  }
)
AuroraContainer.displayName = "AuroraContainer"

/**
 * AuroraCard: Elevated surfaces (Paper on Stone).
 * Subtle aluminum borders, deep ambient shadows. Breathing and Flashlight effects.
 */
export function AuroraCard({ children, className = "", style, index = 0 }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, index?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  useFlashlight(ref)

  return (
    <div 
      ref={ref}
      style={{
        ...style,
      } as React.CSSProperties}
      className={`group relative overflow-hidden bg-surface-card border border-surface-border shadow-[0_4px_40px_rgba(0,0,0,0.8)] rounded-[var(--radius-card)] transition-all duration-700 ease-out hover:shadow-[0_8px_60px_rgba(0,0,0,0.95)] hover:border-white/10 hover:bg-surface-elevated ${className}`}
    >
      {/* Flashlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          opacity: "var(--flashlight-opacity, 0)",
          background: "radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255,255,255,0.06), transparent 40%)"
        }}
      />
      
      {/* Breathing Effect (pseudo-element to avoid moving content) */}
      <div className="pointer-events-none absolute inset-0 z-0 rounded-[var(--radius-card)] opacity-50 transition-opacity duration-1000 group-hover:opacity-0 mix-blend-screen"
           style={{
             boxShadow: "inset 0 0 40px rgba(255,255,255,0.02)",
             animation: "aurora-breathe 8s ease-in-out infinite alternate",
             animationDelay: `-${index * 0.8}s`
           }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}

/**
 * AuroraGlass: Translucent panels (Glass).
 * Refracts light, sharp aluminum edges.
 */
export function AuroraGlass({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${className}`}>
      {children}
    </div>
  )
}

// --- 2. TYPOGRAPHY (Precision) ---

export function AuroraHeading({ children, className = "", as: Component = "h2" }: { children: React.ReactNode, className?: string, as?: any }) {
  return (
    <Component className={`font-heading font-medium tracking-[-0.04em] text-text-heading leading-[1.05] ${className}`}>
      {children}
    </Component>
  )
}

export function AuroraEyebrow({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`block font-body text-[11px] font-medium tracking-widest uppercase text-text-muted ${className}`}>
      {children}
    </span>
  )
}

export function AuroraBody({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`font-body font-light text-text-body leading-[1.7] ${className}`}>
      {children}
    </p>
  )
}

// --- 3. INTERACTION & COMPONENTS (Tactility & Light) ---

/**
 * AuroraButton: Precision machinery. 
 * Stable depth, distinct from flat UI, non-bouncy.
 */
export function AuroraButton({ 
  children, href, variant = "primary", className = "" 
}: { 
  children: React.ReactNode, href?: string, variant?: "primary" | "secondary", className?: string 
}) {
  const baseClasses = "group relative inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium font-body transition-all duration-500 ease-out overflow-hidden rounded-none"
  
  const variants = {
    primary: `
      bg-brand-primary text-brand-foreground 
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),_0_0_20px_rgba(255,255,255,0.05)] 
      hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_0_40px_rgba(255,255,255,0.15)] 
      active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),_0_0_10px_rgba(255,255,255,0.05)]
      hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)]
      rounded-[var(--radius-control)]
    `,
    secondary: `
      bg-transparent text-text-body border border-surface-border 
      hover:bg-surface-elevated hover:text-text-heading hover:border-white/30 
      hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_20px_rgba(0,0,0,0.5)]
      active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
      rounded-[var(--radius-control)]
    `
  }

  const Tag = href ? "a" : "button"
  
  return (
    <Tag href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_forwards]" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  )
}

export function AuroraBadge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-control)] border border-white/10 bg-white/[0.02] backdrop-blur-md text-text-body text-[11px] font-medium tracking-[0.2em] uppercase ${className}`}>
      <span className="w-1 h-1 bg-brand-primary rounded-full" aria-hidden="true" />
      {children}
    </div>
  )
}

// --- 4. EFFECTS (Light) ---

export function AuroraAmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute w-[600px] h-[300px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen ${className}`} aria-hidden="true" />
  )
}
