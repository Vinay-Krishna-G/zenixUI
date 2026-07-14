import type { NavContent } from "../types"
import { AuroraGlass } from "./components"

interface AuroraNavProps {
  content: NavContent
}

export function AuroraNav({ content }: AuroraNavProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <AuroraGlass className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-[var(--radius-card)]">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-[#ffffff] font-heading font-medium tracking-tight text-lg flex items-center gap-2">
            {content.logo}
          </a>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {content.links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-sm font-body text-[#a3a3a3] hover:text-[#ffffff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a 
            href={content.cta.href}
            className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium font-body bg-white/[0.03] border border-white/10 text-white hover:bg-white/10 rounded-[var(--radius-control)] transition-all active:scale-[0.98]"
          >
            {content.cta.label}
          </a>
        </div>

      </AuroraGlass>
    </header>
  )
}
