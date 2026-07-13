import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 flex flex-col items-center text-center overflow-hidden">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none z-0" 
        aria-hidden="true" 
      />
      
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-text-heading font-heading tracking-tight mb-6 leading-[1.1]">
          Launch-ready frontends.
        </h1>
        <p className="text-xl text-text-body mb-6 max-w-2xl mx-auto leading-relaxed">
          Customize visually.<br />
          Own the code.
        </p>
        <p className="text-sm font-medium text-brand-primary/80 mb-12 max-w-xl mx-auto">
          Exports a standard Next.js project. Best for developers, technical founders, and teams that want to own their code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#build-for" 
            className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold bg-brand-primary text-brand-foreground rounded-control shadow-[0_0_32px_rgba(99,102,241,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(99,102,241,0.3)] w-full sm:w-auto"
          >
            Browse Experiences
          </a>
          <Link 
            href="/studio/business-landing" 
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-transparent border border-surface-border text-text-heading rounded-control transition-all hover:bg-surface-elevated hover:border-text-muted w-full sm:w-auto"
          >
            See Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
