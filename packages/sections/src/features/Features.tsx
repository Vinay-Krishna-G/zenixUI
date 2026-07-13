import type { FeaturesContent } from "../types"
import "./Features.css"

interface FeaturesProps {
  content: FeaturesContent
}

const iconMap: Record<string, string> = {
  Zap:     "⚡",
  Shield:  "🛡",
  Layers:  "◈",
  Star:    "✦",
  Globe:   "◉",
  Code:    "⌥",
  Bolt:    "↯",
  Chart:   "↗",
  Lock:    "⊠",
  Heart:   "♡",
}

export function Features({ content }: FeaturesProps) {
  return (
    <section className="section features" id="features">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-eyebrow">Features</p>
          <h2 className="section-headline">{content.headline}</h2>
        </header>

        <ul className="features-grid" role="list">
          {content.items.map((item, i) => (
            <li key={i} className="card features-card">
              <div className="features-icon" aria-hidden="true">
                {iconMap[item.icon] ?? "◆"}
              </div>
              <h3 className="features-title">{item.title}</h3>
              <p className="features-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
