import type { StatsContent } from "../types"
import "./Stats.css"

interface StatsProps {
  content: StatsContent
}

export function Stats({ content }: StatsProps) {
  return (
    <section className="stats" aria-label="Key statistics">
      <div className="section-inner">
        <ul className="stats-grid" role="list">
          {content.items.map((item, i) => (
            <li key={i} className="stats-item">
              <span className="stats-value">{item.value}</span>
              <span className="stats-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
