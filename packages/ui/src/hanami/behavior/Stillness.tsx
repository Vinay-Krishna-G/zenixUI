import React from "react"
import "./stillness.css"

export interface StillnessProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  /**
   * Defines what kind of stillness to enforce.
   * - 'anchor': General container that refuses to shift or fade.
   * - 'text': Typography that refuses to change spacing/opacity.
   * - 'bg': Backgrounds that stay perfectly grounded.
   */
  type?: "anchor" | "text" | "bg"
  as?: React.ElementType
}

/**
 * The Stillness behavior primitive.
 * Elements wrapped in Stillness are deliberately immune to 
 * active-contexts, focus-groups, and presence shifts.
 * This creates a foundation of confidence.
 */
export function Stillness({
  children,
  type = "anchor",
  className = "",
  as: Component = "div",
  ...props
}: StillnessProps) {
  const stillnessClass = `stillness-${type}`
  const classes = [stillnessClass, className].filter(Boolean).join(" ")

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
