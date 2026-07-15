"use client"
import React, { useEffect, useState } from "react"
import { useMousePosition } from "./useMousePosition"

export function AdaptiveCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show cursor only after first mouse move to prevent it from appearing in top-left corner
    const handleFirstMove = () => {
      setIsVisible(true)
      window.removeEventListener("mousemove", handleFirstMove)
    }
    window.addEventListener("mousemove", handleFirstMove)

    // Listen for hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = !!target.closest("a, button, [role='button'], input, select, textarea, [data-interactive='true']")
      setIsHovering(isInteractive)
    }

    window.addEventListener("mouseover", handleMouseOver)
    return () => {
      window.removeEventListener("mousemove", handleFirstMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // If running on a touch device or before first move, don't show custom cursor
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null
  }

  if (!isVisible) return null

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute rounded-full bg-white transition-all duration-300 ease-out"
          style={{
            transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
            width: "12px",
            height: "12px",
            opacity: isHovering ? 0.3 : 0.8,
            boxShadow: isHovering ? "0 0 15px 2px rgba(255,255,255,0.4)" : "none",
          }}
        />
        {isHovering && (
          <div
            className="absolute rounded-full border border-white/40 transition-all duration-500 ease-out"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              width: "40px",
              height: "40px",
            }}
          />
        )}
      </div>
      {/* 
        We also need to hide the default cursor system-wide when not hovering, 
        but in a React component, doing it globally via JS can be tricky.
        Usually, it's done via CSS: `body { cursor: none; }`
        and `a, button { cursor: none; }`
        We will inject this CSS globally.
      */}
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
