import type { CTAContent } from "../types"
import "./CTA.css"

interface CTAProps {
  content: CTAContent
}

export function CTA({ content }: CTAProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-headline">
      <div className="section-inner cta-inner">
        <div className="cta-glow" aria-hidden="true" />
        <div className="cta-content">
          <h2 id="cta-headline" className="cta-headline">
            {content.headline}
          </h2>
          <p className="cta-body">{content.body}</p>
          <a href={content.cta.href} className="btn btn-primary cta-btn">
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
