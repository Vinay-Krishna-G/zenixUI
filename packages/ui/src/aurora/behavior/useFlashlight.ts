"use client"
import React, { useRef, useState } from "react"

export function useFlashlight(ref: React.RefObject<HTMLElement | null>) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 })
  }

  return { mousePos, handleMouseMove, handleMouseLeave }
}
