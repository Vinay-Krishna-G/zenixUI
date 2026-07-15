"use client"
import { useEffect } from "react"

export interface MotionData {
  time: number
  delta: number
  pointerX: number
  pointerY: number
}

type MotionSubscriber = (data: MotionData) => void
const subscribers = new Set<MotionSubscriber>()

let isRunning = false
let lastTime = 0
export let globalPointerX = -1000
export let globalPointerY = -1000

function loop(time: number) {
  if (!isRunning) return
  
  const delta = time - lastTime
  lastTime = time

  const data: MotionData = { time, delta, pointerX: globalPointerX, pointerY: globalPointerY }
  for (const subscriber of subscribers) {
    subscriber(data)
  }

  requestAnimationFrame(loop)
}

export function startMotionEngine() {
  if (isRunning) return
  isRunning = true
  lastTime = performance.now()
  requestAnimationFrame(loop)
}

export function stopMotionEngine() {
  isRunning = false
}

export function subscribeToMotion(callback: MotionSubscriber) {
  subscribers.add(callback)
  return () => {
    subscribers.delete(callback)
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    globalPointerX = e.clientX
    globalPointerY = e.clientY
  }, { passive: true })
}

export function useMotionEngine(callback: MotionSubscriber) {
  useEffect(() => {
    startMotionEngine()
    const unsubscribe = subscribeToMotion(callback)
    return () => {
      unsubscribe()
      if (subscribers.size === 0) {
        stopMotionEngine()
      }
    }
  }, [callback])
}
