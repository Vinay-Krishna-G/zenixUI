import type { FeaturesContent } from "../types"

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
    <section className="py-24 sm:py-32 bg-surface-bg" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading max-w-2xl mx-auto font-heading">
            {content.headline}
          </h2>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {content.items.map((item, i) => (
            <li 
              key={i} 
              className="flex flex-col gap-4 p-7 bg-surface-card border border-surface-border rounded-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md"
            >
              <div 
                className="w-11 h-11 flex items-center justify-center shrink-0 bg-brand-primary/10 border border-brand-primary/20 rounded-md text-brand-primary text-xl"
                aria-hidden="true"
              >
                {iconMap[item.icon] ?? "◆"}
              </div>
              <h3 className="text-lg font-semibold text-text-heading leading-snug">
                {item.title}
              </h3>
              <p className="text-base text-text-body leading-relaxed flex-1">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
