import type { HeroContent } from "../types"
import "./Hero.css"

interface HeroProps {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero">
      <div className="section-inner hero-inner">
        {content.badge && (
          <div className="hero-badge" aria-label="Badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {content.badge}
          </div>
        )}

        <h1 className="hero-headline">{content.headline}</h1>

        <p className="hero-subheadline">{content.subheadline}</p>

        <div className="hero-actions">
          <a href={content.primaryCta.href} className="btn btn-primary">
            {content.primaryCta.label}
          </a>
          {content.secondaryCta && (
            <a href={content.secondaryCta.href} className="btn btn-ghost">
              {content.secondaryCta.label}
            </a>
          )}
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="hero-glow" aria-hidden="true" />
    </section>
  )
}
