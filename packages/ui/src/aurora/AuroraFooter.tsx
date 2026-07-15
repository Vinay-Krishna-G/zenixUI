import type { FooterContent } from "../types"
import { AuroraContainer } from "./components"
import * as React from "react"

interface AuroraFooterProps {
  content: FooterContent
}

export function AuroraFooter({ content }: AuroraFooterProps) {
  if (!content) return null;

  return (
    <footer className="bg-surface-bg border-t border-surface-border py-16 mt-20">
      <AuroraContainer>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="flex flex-col max-w-sm">
            <span className="text-white font-heading font-medium tracking-tight text-xl mb-4">
              {content.brandName}
            </span>
            <p className="text-text-muted text-sm font-body leading-relaxed mb-6">
              {content.brandTagline}
            </p>
            <div className="flex gap-4">
              {content.social.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="text-text-muted hover:text-white transition-colors text-sm"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            {content.links.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-white font-medium text-sm mb-6">{group.title}</span>
                <ul className="flex flex-col gap-4">
                  {group.items.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href} className="text-text-muted hover:text-white transition-colors text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5">
          <p className="text-text-muted text-xs font-mono mb-4 md:mb-0">
            {content.copyright}
          </p>
        </div>
      </AuroraContainer>
    </footer>
  )
}
