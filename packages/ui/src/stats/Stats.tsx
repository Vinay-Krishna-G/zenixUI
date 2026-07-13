import type { StatsContent } from "../types"

interface StatsProps {
  content: StatsContent
}

export function Stats({ content }: StatsProps) {
  return (
    <section className="py-24 sm:py-32 bg-surface-bg border-y border-surface-border" id="stats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul 
          className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-surface-border text-center" 
          role="list"
        >
          {content.items.map((item, i) => (
            <li key={i} className="flex flex-col gap-2 pt-12 sm:pt-0 sm:px-6 first:pt-0">
              <span className="text-5xl font-extrabold text-brand-primary tracking-tight font-heading">
                {item.value}
              </span>
              <span className="text-sm font-semibold text-text-heading uppercase tracking-wide">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
