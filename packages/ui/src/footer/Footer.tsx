import type { FooterContent } from "../types"

interface FooterProps {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-surface-bg border-t border-surface-border pt-16 pb-8" id="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="inline-block text-xl font-bold tracking-tight text-text-heading mb-4 hover:opacity-80 transition-opacity">
              {content.brandName}
            </a>
            <p className="text-sm text-text-body max-w-xs leading-relaxed">
              {content.brandTagline}
            </p>
          </div>
          
          {content.links.map((group, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-sm text-text-body hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface-border gap-4">
          <p className="text-sm text-text-muted">
            {content.copyright}
          </p>
          
          <ul className="flex items-center gap-6">
            {content.social.map((social, i) => (
              <li key={i}>
                <a 
                  href={social.href} 
                  aria-label={social.platform} 
                  className="text-sm text-text-muted hover:text-text-heading transition-colors"
                >
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
