import type { SocialProofContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraEyebrow,
  AuroraCard
} from "./components"
import { Quote } from "lucide-react"

interface AuroraSocialProofProps {
  content: SocialProofContent
}

export function AuroraSocialProof({ content }: AuroraSocialProofProps) {
  return (
    <AuroraSection className="py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.quotes.map((item, idx) => (
            <AuroraCard 
              key={idx} 
              className="p-8 sm:p-10 flex flex-col justify-between opacity-0 group relative overflow-hidden"
              style={{ animation: `fade-in-up 1s ease-out ${0.4 + idx * 0.1}s forwards` }}
            >
              {/* Subtle light effect on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[50px] -translate-y-1/2 translate-x-1/2 transition-opacity duration-700 opacity-0 group-hover:opacity-100 mix-blend-screen" />
              
              <Quote className="w-8 h-8 text-[#333333] mb-8" />
              
              <AuroraHeading as="blockquote" className="text-xl sm:text-2xl leading-relaxed mb-12">
                "{item.quote}"
              </AuroraHeading>

              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center">
                  <span className="text-xs font-mono text-[#a3a3a3]">
                    {item.author.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">{item.author}</span>
                  <span className="text-xs font-mono text-[#525252] uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            </AuroraCard>
          ))}
        </div>

      </AuroraContainer>
    </AuroraSection>
  )
}
