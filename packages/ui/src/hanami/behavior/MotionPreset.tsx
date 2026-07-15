"use client"
import React, { useEffect, useRef, useState } from "react"

interface MotionPresetProps {
  children: React.ReactNode
  variant: "relax" | "delayed-presence"
  className?: string
  as?: React.ElementType
  delay?: number // Index-based stagger multiplier
}

export function MotionPreset({ 
  children, 
  variant, 
  className = "", 
  as: Component = "div",
  delay = 0 
}: MotionPresetProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (variant === "relax") {
    return (
      <Component 
        ref={ref} 
        className={className}
        style={{
          letterSpacing: inView ? "normal" : "0.05em",
          transition: `letter-spacing 2s cubic-bezier(0.2, 0, 0, 1) ${delay * 100}ms`,
        }}
      >
        {children}
      </Component>
    )
  }

  if (variant === "delayed-presence") {
    // We add an implicit base delay of 300ms + (delay * 100)ms
    // to give that "patient" feel on scroll.
    const calculatedDelay = 300 + (delay * 100)
    
    return (
      <Component
        ref={ref}
        className={className}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 1.2s ease-out ${calculatedDelay}ms, transform 1.2s ease-out ${calculatedDelay}ms`,
        }}
      >
        {children}
      </Component>
    )
  }

  return <Component className={className}>{children}</Component>
}
