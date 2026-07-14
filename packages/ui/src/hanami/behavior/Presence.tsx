import React from "react"
import "./presence.css"
import "./spacing.css"

export interface PresenceProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  /**
   * If true, enables the space-responsive behavior (breathing space).
   * Defaults to true.
   */
  respondsToSpace?: boolean
  /**
   * If true, enables the presence-surface behavior (warmth overlay).
   * Defaults to true.
   */
  respondsToWarmth?: boolean
  as?: React.ElementType
  href?: string
}

/**
 * The Presence behavior primitive.
 * Elements wrapped in Presence will acknowledge the user's cursor
 * by gently expanding their spacing and warming their surface.
 */
export function Presence({
  children,
  respondsToSpace = true,
  respondsToWarmth = true,
  className = "",
  as: Component = "div",
  ...props
}: PresenceProps) {
  const classes = [
    respondsToSpace ? "space-responsive" : "",
    respondsToWarmth ? "presence-surface" : "",
    className
  ].filter(Boolean).join(" ")

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
