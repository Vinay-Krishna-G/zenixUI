"use client"

import { useState, useEffect } from "react"
import type { ExperienceConfig, ExperienceEntry } from "@/types/experience"
import { Hero } from "@zenix/ui"
import { assembleProject } from "@/lib/export/assembler"
import { downloadAsZip } from "@/lib/export/zip"

interface StudioProps {
  entry: ExperienceEntry
}

export function Studio({ entry }: StudioProps) {
  // 1. Initialize state
  const [config, setConfig] = useState<ExperienceConfig>(() => {
    return { theme: entry.defaultTheme, content: entry.defaultContent }
  })
  
  const [activeTab, setActiveTab] = useState<"appearance" | "content">("appearance")

  // 2. Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`zenix_config_${entry.manifest.id}`)
    if (saved) {
      try {
        setConfig(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse saved config", e)
      }
    }
  }, [entry.manifest.id])

  // 3. Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(`zenix_config_${entry.manifest.id}`, JSON.stringify(config))
  }, [config, entry.manifest.id])

  // Handlers for updating config
  const updateTheme = (key: keyof ExperienceConfig["theme"], value: string) => {
    setConfig(prev => ({ ...prev, theme: { ...prev.theme, [key]: value } }))
  }

  const updateHero = (key: keyof ExperienceConfig["content"]["hero"], value: string | { label: string, href: string }) => {
    setConfig(prev => ({
      ...prev,
      content: { ...prev.content, hero: { ...prev.content.hero, [key]: value } }
    }))
  }

  const handleExport = async () => {
    try {
      const files = assembleProject(entry, config)
      await downloadAsZip(files, entry.manifest.id)
    } catch (e) {
      console.error("Export failed", e)
      alert("Failed to export project. Check console for details.")
    }
  }

  // The CSS custom properties mapping
  const cssVars = {
    "--brand-primary":       config.theme.primaryColor,
    "--brand-secondary":     config.theme.secondaryColor,
    "--brand-foreground":    "#ffffff",
    "--surface-bg":          config.theme.backgroundColor,
    "--surface-card":        config.theme.cardColor,
    "--surface-elevated":    "#1a1a1a",
    "--surface-border":      config.theme.borderColor,
    "--text-heading":        config.theme.headingColor,
    "--text-body":           config.theme.bodyColor,
    "--text-muted":          config.theme.mutedColor,
    "--text-on-brand":       "#ffffff",
    "--font-heading":        config.theme.headingFont,
    "--font-body":           config.theme.bodyFont,
    "--radius-control":      config.theme.radius === "none" ? "0px" : config.theme.radius === "sm" ? "6px" : config.theme.radius === "md" ? "12px" : config.theme.radius === "lg" ? "20px" : "9999px",
    "--radius-card":         config.theme.radius === "none" ? "0px" : config.theme.radius === "sm" ? "12px" : config.theme.radius === "md" ? "20px" : config.theme.radius === "lg" ? "24px" : "32px",
  } as React.CSSProperties

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-[#222] bg-[#141414] flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-[#222] flex items-center justify-between">
          <h1 className="font-semibold text-sm">Studio</h1>
          <button 
            onClick={handleExport}
            className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded transition-colors font-medium cursor-pointer"
          >
            Export
          </button>
        </div>

        <div className="flex border-b border-[#222]">
          <button 
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "appearance" ? "border-indigo-500 text-white" : "border-transparent text-zinc-400 hover:text-zinc-200"}`}
            onClick={() => setActiveTab("appearance")}
          >
            Appearance
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "content" ? "border-indigo-500 text-white" : "border-transparent text-zinc-400 hover:text-zinc-200"}`}
            onClick={() => setActiveTab("content")}
          >
            Content
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          {activeTab === "appearance" ? (
            <>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Brand Color</label>
                <div className="flex gap-2 items-center">
                  <input type="color" value={config.theme.primaryColor} onChange={e => updateTheme("primaryColor", e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                  <input type="text" value={config.theme.primaryColor} onChange={e => updateTheme("primaryColor", e.target.value)} className="bg-[#222] border border-[#333] rounded px-2 py-1 text-sm flex-1" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Background</label>
                <div className="flex gap-2 items-center">
                  <input type="color" value={config.theme.backgroundColor} onChange={e => updateTheme("backgroundColor", e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                  <input type="text" value={config.theme.backgroundColor} onChange={e => updateTheme("backgroundColor", e.target.value)} className="bg-[#222] border border-[#333] rounded px-2 py-1 text-sm flex-1" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Corner Style</label>
                <select 
                  value={config.theme.radius} 
                  onChange={e => updateTheme("radius", e.target.value)}
                  className="w-full bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm"
                >
                  <option value="none">Sharp</option>
                  <option value="sm">Subtle</option>
                  <option value="md">Rounded</option>
                  <option value="lg">Soft</option>
                  <option value="full">Pill</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Headline</label>
                <textarea 
                  value={config.content.hero.headline} 
                  onChange={e => updateHero("headline", e.target.value)} 
                  className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm min-h-[80px]" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Supporting Text</label>
                <textarea 
                  value={config.content.hero.subheadline} 
                  onChange={e => updateHero("subheadline", e.target.value)} 
                  className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm min-h-[80px]" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Primary Button</label>
                <input 
                  type="text" 
                  value={config.content.hero.primaryCta.label} 
                  onChange={e => updateHero("primaryCta", { ...config.content.hero.primaryCta, label: e.target.value })} 
                  className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm" 
                />
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 overflow-y-auto bg-[#0a0a0a] relative">
        <div 
          className="min-h-full w-full transition-colors duration-200" 
          style={cssVars}
        >
          <Hero content={config.content.hero} />
        </div>
      </main>
    </div>
  )
}
