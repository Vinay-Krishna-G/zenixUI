import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-surface-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold font-heading tracking-tight text-text-heading">
            ZenixUI
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#build-for" className="text-sm font-medium text-text-muted hover:text-text-heading transition-colors">
              Experiences
            </Link>
            <Link href="/docs" className="text-sm font-medium text-text-muted hover:text-text-heading transition-colors">
              Docs
            </Link>
            <a href="https://github.com/zenixui/zenix" className="text-sm font-medium text-text-muted hover:text-text-heading transition-colors">
              GitHub
            </a>
          </nav>
        </div>

        <Link 
          href="/studio/business-landing" 
          className="inline-flex items-center justify-center h-9 px-4 text-sm font-semibold bg-brand-primary text-brand-foreground rounded-control shadow-[0_0_16px_rgba(99,102,241,0.15)] transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:-translate-y-0.5"
        >
          Launch Studio
        </Link>
      </div>
    </header>
  )
}
