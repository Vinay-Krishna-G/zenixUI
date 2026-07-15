"use client"
import React, { useEffect, useRef } from "react"
import { useMotionEngine } from "./MotionEngine"

export function AdaptiveCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // We keep tracking hover state in React because it only updates rarely (on enter/leave)
  const [isHovering, setIsHovering] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  // Current interpolated positions
  const currentX = useRef(-1000)
  const currentY = useRef(-1000)

  useEffect(() => {
    const handleFirstMove = () => {
      setIsVisible(true)
      window.removeEventListener("pointermove", handleFirstMove)
    }
    window.addEventListener("pointermove", handleFirstMove)

    // Listen for hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = !!target.closest("a, button, [role='button'], input, select, textarea, [data-interactive='true']")
      setIsHovering(isInteractive)
    }

    window.addEventListener("mouseover", handleMouseOver)
    return () => {
      window.removeEventListener("pointermove", handleFirstMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  useMotionEngine(({ pointerX, pointerY }) => {
    if (!isVisible) return

    // Interpolation (spring physics / easing)
    // Adjust interpolation factor (e.g., 0.6) for tighter or looser attachment
    // 1.0 means instant. The user requested 2-4 pixels maximum delay, so very tight.
    const ease = 0.6 
    currentX.current += (pointerX - currentX.current) * ease
    currentY.current += (pointerY - currentY.current) * ease

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%)`
    }
  })

  // If running on a touch device, don't show custom cursor
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          ref={dotRef}
          className="absolute rounded-full bg-white transition-all duration-300 ease-out will-change-transform"
          style={{
            transform: `translate3d(-1000px, -1000px, 0) translate(-50%, -50%) scale(1)`,
            width: "12px",
            height: "12px",
            opacity: isHovering ? 0.3 : 0.8,
            boxShadow: isHovering ? "0 0 15px 2px rgba(255,255,255,0.4)" : "none",
          }}
        />
        {isHovering && (
          <div
            ref={ringRef}
            className="absolute rounded-full border border-white/40 transition-all duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(-1000px, -1000px, 0) translate(-50%, -50%)`,
              width: "40px",
              height: "40px",
            }}
          />
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) and (pointer: fine) {
          body, a, button, input, select, textarea, [role="button"], [data-interactive="true"] {
            cursor: none !important;
          }
        }
        
        @keyframes aurora-breathe {
          0%, 100% {
            box-shadow: inset 0 0 40px rgba(255,255,255,0.02);
            opacity: 0.5;
          }
          50% {
            box-shadow: inset 0 0 80px rgba(255,255,255,0.08);
            opacity: 1;
          }
        }
      `}} />
    </>
  )
}
