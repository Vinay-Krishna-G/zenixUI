"use client"
import React, { useRef, useEffect } from "react"
import { useMotionEngine, globalPointerX, globalPointerY } from "./MotionEngine"

export function useFlashlight(ref: React.RefObject<HTMLElement | null>) {
  const currentX = useRef(-1000)
  const currentY = useRef(-1000)
  const isHovered = useRef(false)
  const targetX = useRef(-1000)
  const targetY = useRef(-1000)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handlePointerEnter = (e: PointerEvent) => {
      isHovered.current = true
      const rect = el.getBoundingClientRect()
      // Immediately set the target
      targetX.current = e.clientX - rect.left
      targetY.current = e.clientY - rect.top
      // If coming from nowhere, teleport to entry point to avoid flying across screen
      if (currentX.current === -1000) {
        currentX.current = targetX.current
        currentY.current = targetY.current
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      targetX.current = e.clientX - rect.left
      targetY.current = e.clientY - rect.top
    }

    const handlePointerLeave = () => {
      isHovered.current = false
    }

    el.addEventListener("pointerenter", handlePointerEnter)
    el.addEventListener("pointermove", handlePointerMove)
    el.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      el.removeEventListener("pointerenter", handlePointerEnter)
      el.removeEventListener("pointermove", handlePointerMove)
      el.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [ref])

  useMotionEngine(() => {
    if (!ref.current) return

    if (isHovered.current) {
      // Ease towards target
      const ease = 0.08
      currentX.current += (targetX.current - currentX.current) * ease
      currentY.current += (targetY.current - currentY.current) * ease
      
      ref.current.style.setProperty("--mouse-x", `${currentX.current}px`)
      ref.current.style.setProperty("--mouse-y", `${currentY.current}px`)
      // Fade in
      ref.current.style.setProperty("--flashlight-opacity", "1")
    } else {
      // Optionally ease away or just fade out
      ref.current.style.setProperty("--flashlight-opacity", "0")
    }
  })

  return {} // No longer returns state to avoid re-renders
}
