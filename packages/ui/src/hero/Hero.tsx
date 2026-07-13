import type { HeroContent } from "../types"

interface HeroProps {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-bg py-24 sm:py-32 lg:py-40 text-center">
      <div className="relative z-10 flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {content.badge && (
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-semibold tracking-wide uppercase"
            aria-label="Badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" aria-hidden="true" />
            {content.badge}
          </div>
        )}

        <h1 className="text-5xl sm:text-6xl font-extrabold text-text-heading font-heading tracking-tight leading-[1.1] max-w-4xl mb-6 bg-gradient-to-br from-text-heading to-text-body bg-clip-text text-transparent">
          {content.headline}
        </h1>

        <p className="text-xl text-text-body leading-relaxed max-w-2xl mb-12">
          {content.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <a 
            href={content.primaryCta.href} 
            className="inline-flex items-center justify-center gap-2 px-8 h-12 w-full sm:w-auto text-base font-medium font-body bg-brand-primary text-brand-foreground rounded-control transition-all hover:opacity-90 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)] active:scale-[0.98]"
          >
            {content.primaryCta.label}
          </a>
          {content.secondaryCta && (
            <a 
              href={content.secondaryCta.href} 
              className="inline-flex items-center justify-center gap-2 px-8 h-12 w-full sm:w-auto text-base font-medium font-body bg-transparent text-text-body border border-surface-border rounded-control transition-all hover:bg-surface-elevated hover:text-text-heading hover:border-brand-primary active:scale-[0.98]"
            >
              {content.secondaryCta.label}
            </a>
          )}
        </div>
      </div>

      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] bg-brand-primary/15 blur-[100px] rounded-full pointer-events-none z-0" 
        aria-hidden="true" 
      />
    </section>
  )
}
