import type { FooterContent } from "../types"
import "./Footer.css"

interface FooterProps {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{content.logo}</span>
          {content.tagline && (
            <p className="footer-tagline">{content.tagline}</p>
          )}
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul role="list">
            {content.links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-copy">{content.copyright}</p>
      </div>
    </footer>
  )
}
