import type { ProofContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraEyebrow,
  AuroraCard
} from "./components"
import { FolderTree, Code2, CheckSquare } from "lucide-react"
import * as React from "react"

interface AuroraProofProps {
  content: ProofContent
}

export function AuroraProof({ content }: AuroraProofProps) {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.items.map((item, index) => (
            <AuroraCard 
              key={index} 
              index={index}
              className="p-8 flex flex-col justify-between opacity-0 min-h-[400px]"
              style={{ animation: `fade-in-up 1s ease-out ${0.4 + index * 0.1}s forwards` }}
            >
              <div className="mb-12">
                <AuroraHeading as="h3" className="text-2xl mb-4 flex items-center gap-3">
                  {item.visual === "folder" && <FolderTree className="w-5 h-5 text-brand-primary" />}
                  {item.visual === "code" && <Code2 className="w-5 h-5 text-brand-primary" />}
                  {item.visual === "checklist" && <CheckSquare className="w-5 h-5 text-brand-primary" />}
                  {item.title}
                </AuroraHeading>
                <AuroraBody className="text-base">
                  {item.description}
                </AuroraBody>
              </div>

              {/* Visualizations */}
              <div className="mt-auto">
                {item.visual === "folder" && (
                  <div className="font-mono text-xs text-[#525252] bg-[#030303] p-6 border border-[#1f1f1f] rounded-none group h-[160px] flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2 text-[#a3a3a3] transition-colors group-hover:text-brand-primary">
                      <span className="opacity-50">├──</span> app/
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-[#a3a3a3]">
                      <span className="opacity-50">├──</span> components/
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-[#a3a3a3]">
                      <span className="opacity-50">├──</span> content/
                    </div>
                    <div className="flex items-center gap-2 text-[#a3a3a3]">
                      <span className="opacity-50">└──</span> public/
                    </div>
                  </div>
                )}

                {item.visual === "code" && (
                  <div className="font-mono text-[11px] leading-relaxed text-[#a3a3a3] bg-[#030303] p-6 border border-[#1f1f1f] rounded-none h-[160px] flex flex-col justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                    <div><span className="text-brand-secondary">export default</span> <span className="text-brand-primary">function</span> <span className="text-white">Hero</span>() {'{'}</div>
                    <div className="ml-4"><span className="text-brand-secondary">return</span> (</div>
                    <div className="ml-8"><span className="text-brand-primary">&lt;h1&gt;</span>{'{'}content.hero.title{'}'}<span className="text-brand-primary">&lt;/h1&gt;</span></div>
                    <div className="ml-4">)</div>
                    <div>{'}'}</div>
                  </div>
                )}

                {item.visual === "checklist" && (
                  <div className="font-body text-sm text-[#a3a3a3] bg-[#030303] p-6 border border-[#1f1f1f] rounded-none h-[160px] flex flex-col justify-center gap-3">
                    {(item.checklist || []).map((check, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-4 h-4 rounded-full border border-brand-primary/50 flex items-center justify-center bg-brand-primary/10 group-hover:bg-brand-primary/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        </div>
                        <span className="group-hover:text-white transition-colors">{check}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AuroraCard>
          ))}
        </div>

      </AuroraContainer>
    </AuroraSection>
  )
}
