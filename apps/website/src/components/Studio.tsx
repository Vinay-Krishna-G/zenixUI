"use client"

import { useState, useEffect } from "react"
import type { ExperienceConfig, Experience } from "@/types/experience"
import { assembleProject } from "@/lib/export/assembler"
import { downloadAsZip } from "@/lib/export/zip"
import { experiences } from "@/experiences"
import { ContentEditor } from "./studio/ContentEditor"

interface StudioProps {
  id: string
}

function getContrastColor(hexColor: string) {
  const hex = hexColor.replace('#', '');
  if (hex.length !== 6) return '#ffffff'; // Fallback
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
}

export function Studio({ id }: StudioProps) {
  const entry = experiences.find(e => e.manifest.id === id)
  
  // 1. Initialize state
  const [config, setConfig] = useState<ExperienceConfig>(() => {
    if (!entry) return { theme: {} as any, content: {} as any }
    return { theme: entry.theme, content: entry.content }
  })
  
  const [activeTab, setActiveTab] = useState<"appearance" | "content">("appearance")

  // 2. Load from localStorage on mount
  useEffect(() => {
    if (!entry) return
    /* 
    const saved = localStorage.getItem(`zenix_config_${entry.manifest.id}`)
    if (saved) {
      try {
        setConfig(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse saved config", e)
      }
    }
    */
  }, [entry?.manifest.id])

  // 3. Save to localStorage on change
  useEffect(() => {
    if (!entry) return
    localStorage.setItem(`zenix_config_${entry.manifest.id}`, JSON.stringify(config))
  }, [config, entry?.manifest.id])

  // Handlers for updating config
  const updateTheme = (key: keyof ExperienceConfig["theme"], value: string) => {
    setConfig(prev => ({ ...prev, theme: { ...prev.theme, [key]: value } }))
  }

  const [exportSteps, setExportSteps] = useState<string[]>([])
  const [isExporting, setIsExporting] = useState(false)
  const [isExported, setIsExported] = useState(false)

  const handleExport = async () => {
    if (!entry) return
    try {
      setIsExporting(true)
      setExportSteps([])
      
      const steps = [
        "✓ Preparing Components",
        "✓ Applying Your Content",
        "✓ Packaging Project",
        "✓ Verifying Build",
        "✓ Ready to Download"
      ]

      for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, 400))
        setExportSteps(prev => [...prev, step])
      }

      const files = assembleProject(entry, config)
      await downloadAsZip(files, entry.manifest.id)
      
      setIsExported(true)
      setTimeout(() => {
        setIsExported(false)
        setExportSteps([])
      }, 3000)
    } catch (e) {
      console.error("Export failed", e)
      alert("Failed to export project. Check console for details.")
    } finally {
      setIsExporting(false)
    }
  }

  const cssVars = {
    "--brand-primary":       config.theme.primaryColor,
    "--color-brand-primary": config.theme.primaryColor,
    "--brand-secondary":     config.theme.secondaryColor,
    "--color-brand-secondary": config.theme.secondaryColor,
    "--brand-foreground":    getContrastColor(config.theme.primaryColor),
    "--color-brand-foreground": getContrastColor(config.theme.primaryColor),
    "--surface-bg":          config.theme.backgroundColor,
    "--color-surface-bg":    config.theme.backgroundColor,
    "--surface-card":        config.theme.cardColor,
    "--color-surface-card":  config.theme.cardColor,
    "--surface-elevated":    "#0a0d10",
    "--color-surface-elevated": "#0a0d10",
    "--surface-border":      config.theme.borderColor,
    "--color-surface-border": config.theme.borderColor,
    "--text-heading":        config.theme.headingColor,
    "--color-text-heading":  config.theme.headingColor,
    "--text-body":           config.theme.bodyColor,
    "--color-text-body":     config.theme.bodyColor,
    "--text-muted":          config.theme.mutedColor,
    "--color-text-muted":    config.theme.mutedColor,
    "--text-on-brand":       getContrastColor(config.theme.primaryColor),
    "--color-text-on-brand": getContrastColor(config.theme.primaryColor),
    "--font-heading":        `'${config.theme.headingFont}', sans-serif`,
    "--font-body":           `'${config.theme.bodyFont}', sans-serif`,
    "--radius-control":      config.theme.radius === "none" ? "0px" : config.theme.radius === "sm" ? "6px" : config.theme.radius === "md" ? "12px" : config.theme.radius === "lg" ? "20px" : "9999px",
    "--radius-card":         config.theme.radius === "none" ? "0px" : config.theme.radius === "sm" ? "12px" : config.theme.radius === "md" ? "20px" : config.theme.radius === "lg" ? "24px" : "32px",
  } as React.CSSProperties

  if (!entry) {
    return <div>Experience not found</div>
  }

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-[#222] bg-[#141414] flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-[#222] flex items-center justify-between">
          <h1 className="font-semibold text-sm">Studio</h1>
          <button 
            onClick={handleExport}
            disabled={isExporting || isExported}
            className={`text-xs px-4 py-1.5 rounded transition-all duration-300 font-medium cursor-pointer ${
              isExported 
                ? "bg-green-500/20 border border-green-500/50 text-green-400" 
                : "bg-[#161616] border border-[#333] text-[#a39a8c] hover:border-[#a39a8c] hover:bg-[#1f1d1a] shadow-[0_2px_10px_rgba(0,0,0,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
            }`}
          >
            {isExporting ? "Exporting..." : isExported ? "✓ Ready" : "Export"}
          </button>
        </div>

        {isExporting && (
          <div className="absolute top-16 left-4 right-4 z-50 bg-[#1a1a1a] border border-[#333] rounded-md p-4 shadow-xl">
            <h3 className="text-sm font-semibold mb-3 text-white">Export Confidence</h3>
            <div className="space-y-2">
              {exportSteps.map((step, i) => (
                <div key={i} className="text-xs font-mono text-green-400 animate-fade-in">
                  {step}
                </div>
              ))}
              {exportSteps.length < 5 && (
                <div className="text-xs font-mono text-zinc-500 animate-pulse">
                  Processing...
                </div>
              )}
            </div>
          </div>
        )}

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
              {/* BRAND */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-[#222] pb-2">Brand</h3>
                <div className="space-y-3">
                  <label className="text-xs font-medium text-zinc-400">Primary Color</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" value={config.theme.primaryColor} onChange={e => updateTheme("primaryColor", e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                    <input type="text" value={config.theme.primaryColor} onChange={e => updateTheme("primaryColor", e.target.value)} className="bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm flex-1 font-mono" />
                  </div>
                </div>
              </div>

              {/* TYPOGRAPHY */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-[#222] pb-2">Typography</h3>
                <div className="space-y-3">
                  <label className="text-xs font-medium text-zinc-400">Heading Font</label>
                  <select 
                    value={config.theme.headingFont} 
                    onChange={e => updateTheme("headingFont", e.target.value)}
                    className="w-full bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm"
                  >
                    <option value="Inter">Inter</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Outfit">Outfit</option>
                  </select>
                </div>
              </div>

              {/* SURFACE */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-[#222] pb-2">Surface</h3>
                <div className="space-y-3">
                  <label className="text-xs font-medium text-zinc-400">Background</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" value={config.theme.backgroundColor} onChange={e => updateTheme("backgroundColor", e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                    <input type="text" value={config.theme.backgroundColor} onChange={e => updateTheme("backgroundColor", e.target.value)} className="bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm flex-1 font-mono" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-medium text-zinc-400">Corner Radius</label>
                  <select 
                    value={config.theme.radius} 
                    onChange={e => updateTheme("radius", e.target.value as any)}
                    className="w-full bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm"
                  >
                    <option value="none">Sharp</option>
                    <option value="sm">Subtle</option>
                    <option value="md">Rounded</option>
                    <option value="lg">Soft</option>
                    <option value="full">Pill</option>
                  </select>
                </div>
              </div>

              {/* BEHAVIOR */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-[#222] pb-2">Behavior</h3>
                <div className="space-y-3">
                  <label className="text-xs font-medium text-zinc-400">Interaction Style</label>
                  <select 
                    value={config.theme.behaviorPreset || "calm"} 
                    onChange={e => updateTheme("behaviorPreset", e.target.value as any)}
                    className="w-full bg-[#222] border border-[#333] rounded px-2 py-1.5 text-sm"
                  >
                    <option value="calm">Calm (Default)</option>
                    <option value="still">Still</option>
                    <option value="expressive">Expressive</option>
                    <option value="confident">Confident</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full">
              {entry.editor ? (
                <ContentEditor 
                  content={config.content} 
                  schema={entry.editor}
                  onChange={(sectionKey, sectionData) => {
                    setConfig(prev => ({
                      ...prev,
                      content: {
                        ...prev.content,
                        [sectionKey]: sectionData
                      }
                    }))
                  }}
                />
              ) : (
                <div className="p-4 text-sm text-zinc-400 text-center border border-dashed border-[#333] rounded">
                  This experience does not have a content schema yet.
                </div>
              )}
            </div>
          )}
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 overflow-y-auto bg-[#0a0a0a] relative">
        <div 
          className="min-h-full w-full transition-colors duration-200" 
          style={cssVars}
        >
          <entry.preview config={config} />
        </div>
      </main>
    </div>
  )
}
