import type { PricingContent } from "../types"

interface PricingProps {
  content: PricingContent
}

export function Pricing({ content }: PricingProps) {
  return (
    <section className="py-24 sm:py-32 bg-surface-bg" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading max-w-2xl mx-auto mb-4 font-heading">
            {content.headline}
          </h2>
          <p className="text-lg text-text-body max-w-xl mx-auto">
            {content.subheadline}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {content.plans.map((plan, i) => {
            const isFeatured = plan.featured
            return (
              <div 
                key={i} 
                className={`relative flex flex-col p-8 rounded-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured 
                    ? "bg-surface-elevated border-brand-primary/50 shadow-lg scale-100 lg:scale-105 z-10" 
                    : "bg-surface-card border-surface-border shadow-md"
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-brand-primary text-brand-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text-heading mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 text-text-heading mb-4">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-sm font-medium text-text-muted">/mo</span>}
                  </div>
                  <p className="text-sm text-text-body leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-body leading-tight">
                      <span className="text-brand-primary shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={plan.cta.href} 
                  className={`inline-flex items-center justify-center h-11 px-6 rounded-control text-sm font-semibold transition-all w-full mt-auto ${
                    isFeatured 
                      ? "bg-brand-primary text-brand-foreground hover:opacity-90 shadow-md hover:shadow-lg" 
                      : "bg-transparent border border-surface-border text-text-heading hover:border-text-heading hover:bg-surface-elevated"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
