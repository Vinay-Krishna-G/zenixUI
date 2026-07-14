import React from "react"
import "./focus.css"

export interface FocusGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: React.ElementType
}

/**
 * FocusGroup defines a boundary for attention.
 * When a user interacts with a FocusGroup (or it becomes the active context),
 * it manages the visual noise of its child FocusItems.
 */
export const FocusGroup = React.forwardRef<HTMLElement, FocusGroupProps>(
  ({ children, className = "", as: Component = "div", ...props }, ref) => {
    return (
      <Component ref={ref} className={`focus-group ${className}`} {...props}>
        {children}
      </Component>
    )
  }
)
FocusGroup.displayName = "FocusGroup"

export interface FocusItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: React.ElementType
}

/**
 * FocusItem is a child of a FocusGroup.
 * It gently fades/desaturates when a sibling receives attention,
 * and remains clear when it is the center of attention.
 */
export function FocusItem({
  children,
  className = "",
  as: Component = "div",
  ...props
}: FocusItemProps) {
  return (
    <Component className={`focus-item ${className}`} {...props}>
      {children}
    </Component>
  )
}
