"use client"
import React, { useRef, useEffect, useState } from "react"
import { ExperienceConfig } from "@/types/experience"
import { HanamiHero } from "@zenix/ui"

export function HanamiPreview({ config }: { config: ExperienceConfig }) {
  // To implement the "Welcome Effect" we add the active-context 
  // when the user's cursor is in the preview, or simply let CSS handle :hover
  return (
    <div className="font-sans antialiased text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <HanamiHero 
        headline={config.content.hero.headline}
        subheadline={config.content.hero.subheadline}
        primaryCta={config.content.hero.primaryCta}
      />
    </div>
  )
}
