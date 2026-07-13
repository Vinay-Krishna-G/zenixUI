import type { PricingContent } from "../types"
import "./Pricing.css"

interface PricingProps {
  content: PricingContent
}

export function Pricing({ content }: PricingProps) {
  return (
    <section className="section pricing" id="pricing">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-headline">{content.headline}</h2>
        </header>

        <ul className="pricing-grid" role="list">
          {content.tiers.map((tier, i) => (
            <li
              key={i}
              className={`card pricing-card ${tier.featured ? "pricing-card--featured" : ""}`}
            >
              {tier.featured && (
                <div className="pricing-badge" aria-label="Most popular">
                  Most popular
                </div>
              )}

              <div className="pricing-header">
                <h3 className="pricing-name">{tier.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{tier.price}</span>
                  <span className="pricing-period">/{tier.period}</span>
                </div>
              </div>

              <ul className="pricing-features" role="list">
                {tier.features.map((feature, j) => (
                  <li key={j} className="pricing-feature">
                    <span className="pricing-check" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`btn pricing-cta ${tier.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {tier.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
