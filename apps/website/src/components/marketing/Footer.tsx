import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 bg-surface-card border-t border-surface-border text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-text-heading font-heading tracking-tight mb-2">
          ZenixUI
        </h2>
        <p className="text-base text-text-body leading-relaxed mb-12">
          Choose. Customize. Own the code.
        </p>

        <ul className="flex items-center justify-center gap-8 mb-16">
          <li>
            <Link href="/docs" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">
              Docs
            </Link>
          </li>
          <li>
            <a href="https://github.com/zenixui/zenix" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <Link href="/roadmap" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">
              Roadmap
            </Link>
          </li>
        </ul>

        <div className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} ZenixUI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
