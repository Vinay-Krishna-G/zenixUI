import type { CTAContent } from "../types"

interface CTAProps {
  content: CTAContent
}

export function CTA({ content }: CTAProps) {
  return (
    <section className="py-24 sm:py-32 bg-surface-bg relative overflow-hidden" id="cta">
      {/* Background glow for CTA */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-heading mb-6 tracking-tight font-heading">
          {content.headline}
        </h2>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={content.primaryCta.href} 
            className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold bg-brand-primary text-brand-foreground rounded-control shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-brand-primary/30 w-full sm:w-auto"
          >
            {content.primaryCta.label}
          </a>
          
          {content.secondaryCta && (
            <a 
              href={content.secondaryCta.href} 
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-surface-card border border-surface-border text-text-heading rounded-control transition-all hover:bg-surface-elevated hover:border-text-muted w-full sm:w-auto"
            >
              {content.secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
