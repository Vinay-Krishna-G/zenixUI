import type { MakeItYoursContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraCard
} from "./components"
import { Settings2, Download, TerminalSquare } from "lucide-react"
import * as React from "react"

interface AuroraMakeItYoursProps {
  content: MakeItYoursContent
}

export function AuroraMakeItYours({ content }: AuroraMakeItYoursProps) {
  return (
    <AuroraSection className="py-24 sm:py-32">
      <AuroraContainer>
        
        <div className="flex flex-col items-center text-center mb-24">
          <AuroraHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-3xl mb-6 opacity-0 translate-y-8 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
            {content.headline}
          </AuroraHeading>
          <AuroraBody className="text-xl max-w-2xl opacity-0 translate-y-8 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
            {content.subheadline}
          </AuroraBody>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.items.map((item, idx) => (
            <AuroraCard 
              key={idx} 
              className="p-8 flex flex-col justify-between opacity-0 min-h-[440px]"
              style={{ animation: `fade-in-up 1s ease-out ${0.4 + idx * 0.1}s forwards` }}
            >
              <div className="mb-12">
                <AuroraHeading as="h3" className="text-2xl mb-4 flex items-center gap-3">
                  {item.visual === "customize" && <Settings2 className="w-5 h-5 text-brand-primary" />}
                  {item.visual === "export" && <Download className="w-5 h-5 text-brand-primary" />}
                  {item.visual === "continue" && <TerminalSquare className="w-5 h-5 text-brand-primary" />}
                  {item.title}
                </AuroraHeading>
                <AuroraBody className="text-base">
                  {item.description}
                </AuroraBody>
              </div>

              {/* Visualizations */}
              <div className="mt-auto">
                {item.visual === "customize" && (
                  <div className="flex flex-col gap-4 bg-[var(--surface-bg)] p-6 border border-[var(--surface-border)] rounded-[var(--radius-control)] h-[180px] justify-center relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted font-mono">Theme</span>
                      <div className="w-8 h-4 rounded-full bg-[var(--surface-border)] flex items-center p-0.5">
                        <div className="w-3 h-3 rounded-full bg-brand-primary translate-x-4" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted font-mono">Primary</span>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-white border border-[var(--surface-border)]" />
                        <div className="w-4 h-4 rounded-full bg-brand-primary border border-brand-primary" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted font-mono">Radius</span>
                      <div className="h-1 w-20 bg-[var(--surface-border)] rounded-full relative">
                        <div className="absolute top-1/2 left-0 w-1/4 h-1 bg-brand-primary -translate-y-1/2 rounded-full" />
                        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-lg" />
                      </div>
                    </div>
                  </div>
                )}

                {item.visual === "export" && (
                  <div className="font-mono text-xs text-text-muted bg-[var(--surface-bg)] p-6 border border-[var(--surface-border)] rounded-[var(--radius-control)] h-[180px] flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2 text-text-body">
                      <span className="opacity-50">├──</span> app/
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-text-body">
                      <span className="opacity-50">├──</span> components/
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-text-body">
                      <span className="opacity-50">├──</span> content/
                    </div>
                    <div className="flex items-center gap-2 text-text-body">
                      <span className="opacity-50">└──</span> public/
                    </div>
                  </div>
                )}

                {item.visual === "continue" && (
                  <div className="font-mono text-[11px] leading-relaxed text-text-body bg-[var(--surface-bg)] p-6 border border-[var(--surface-border)] rounded-[var(--radius-control)] h-[180px] flex flex-col justify-center">
                    <div><span className="text-brand-secondary">export default</span> <span className="text-brand-primary">function</span> <span className="text-white">Hero</span>() {'{'}</div>
                    <div className="ml-4 text-text-muted italic">// Continue in Cursor or VS Code...</div>
                    <div className="ml-4"><span className="text-brand-secondary">return</span> (</div>
                    <div className="ml-8"><span className="text-brand-primary">&lt;h1&gt;</span>{'{'}content.hero.title{'}'}<span className="text-brand-primary">&lt;/h1&gt;</span></div>
                    <div className="ml-4">)</div>
                    <div>{'}'}</div>
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
