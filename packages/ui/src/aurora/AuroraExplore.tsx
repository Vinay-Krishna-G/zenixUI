import type { ExploreContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraEyebrow,
} from "./components"
import { ArrowUpRight } from "lucide-react"

interface AuroraExploreProps {
  content: ExploreContent
}

export function AuroraExplore({ content }: AuroraExploreProps) {
  return (
    <AuroraSection className="py-24 sm:py-32">
      <AuroraContainer>
        
        <div className="flex flex-col items-center text-center mb-20">
          <AuroraEyebrow className="mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
            {content.eyebrow}
          </AuroraEyebrow>
          <AuroraHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-3xl mb-6 opacity-0 translate-y-8 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
            {content.headline}
          </AuroraHeading>
          <AuroraBody className="text-xl max-w-2xl opacity-0 translate-y-8 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
            {content.subheadline}
          </AuroraBody>
        </div>

        {/* Living Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--surface-border)] max-w-6xl mx-auto border border-[var(--surface-border)]">
          {content.items.map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              className="group relative bg-[var(--surface-card)] min-h-[300px] sm:min-h-[400px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:bg-[var(--surface-elevated)]"
            >
              {/* Subtle hover reveal for background abstract shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-transparent group-hover:from-brand-primary/5 transition-all duration-700 ease-out" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#525252] group-hover:text-brand-primary transition-colors">
                  {String(idx + 1).padStart(2, '0')} — {item.category}
                </span>
                
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-[#a3a3a3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  {item.status}
                </span>
              </div>

              <div className="relative z-10 mt-auto flex items-end justify-between">
                <AuroraHeading as="h3" className="text-3xl sm:text-4xl transition-colors group-hover:text-white">
                  {item.title}
                </AuroraHeading>
                
                <div className="w-10 h-10 rounded-full border border-[var(--surface-border)] flex items-center justify-center bg-[var(--surface-bg)] text-text-muted transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </AuroraContainer>
    </AuroraSection>
  )
}
