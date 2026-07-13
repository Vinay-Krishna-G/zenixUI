export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose",
      description: "Browse our library of premium, conversion-optimized experiences tailored to your industry."
    },
    {
      number: "02",
      title: "Customize",
      description: "Use the Studio to visually tweak colors, fonts, shapes, and copy until it perfectly matches your brand."
    },
    {
      number: "03",
      title: "Own",
      description: "Click export. Receive a zip file containing a clean, production-ready Next.js + Tailwind v4 project."
    }
  ]

  return (
    <section className="py-24 bg-surface-card border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-3xl font-bold text-text-heading font-heading">
            How it works
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-surface-border" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface-elevated border border-brand-primary/30 flex items-center justify-center text-brand-primary font-bold mb-6 z-10 shadow-[0_0_16px_rgba(99,102,241,0.15)]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3">{step.title}</h3>
              <p className="text-base text-text-body leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
