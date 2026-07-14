import type { CTAContent } from "../types"
import { 
  AuroraSection, 
  AuroraContainer, 
  AuroraHeading, 
  AuroraBody, 
  AuroraButton, 
  AuroraAmbientGlow 
} from "./components"

interface AuroraCTAProps {
  content: CTAContent
}

export function AuroraCTA({ content }: AuroraCTAProps) {
  return (
    <AuroraSection className="justify-center pt-32 pb-32">
      <AuroraContainer className="text-center flex flex-col items-center">
        <AuroraHeading className="text-4xl sm:text-5xl lg:text-6xl mb-6">
          {content.headline}
        </AuroraHeading>
        
        <AuroraBody className="text-lg sm:text-xl max-w-2xl mb-12">
          {content.subheadline}
        </AuroraBody>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <AuroraButton href={content.primaryCta.href} variant="primary" className="h-14 px-10 w-full sm:w-auto">
            {content.primaryCta.label}
          </AuroraButton>
          
          {content.secondaryCta && (
            <AuroraButton href={content.secondaryCta.href} variant="secondary" className="h-14 px-10 w-full sm:w-auto">
              {content.secondaryCta.label}
            </AuroraButton>
          )}
        </div>
      </AuroraContainer>
    </AuroraSection>
  )
}
