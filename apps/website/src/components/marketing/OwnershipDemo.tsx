"use client"

import { useState } from "react"

const COLORS = [
  { name: "Indigo", hex: "#4F46E5", bgClass: "bg-[#4F46E5]", textClass: "text-[#4F46E5]" },
  { name: "Emerald", hex: "#10B981", bgClass: "bg-[#10B981]", textClass: "text-[#10B981]" },
  { name: "Rose", hex: "#F43F5E", bgClass: "bg-[#F43F5E]", textClass: "text-[#F43F5E]" },
]

export function OwnershipDemo() {
  const [headline, setHeadline] = useState("Build something people remember.")
  const [ctaText, setCtaText] = useState("Start Free")
  const [activeColor, setActiveColor] = useState(COLORS[0])

  const generatedCode = `export default function Hero() {
  return (
    <section className="py-24 text-center">
      <Badge color="${activeColor.hex}">
        Launch faster
      </Badge>

      <h1 className="text-5xl font-bold mt-6 mb-8">
        ${headline}
      </h1>

      <Button bg="${activeColor.hex}">
        ${ctaText}
      </Button>
    </section>
  );
}`

  return (
    <section className="py-32 bg-surface-bg border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-heading font-heading mb-6">
            Generate React, not locked-in templates.
          </h2>
          <p className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
            Edit content. See the website change. See the React code update. Export it. Own it forever.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Controls */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-surface-card border border-surface-border rounded-card p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-6">
                1. Edit Content
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-heading mb-2">
                    Headline
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full bg-surface-bg border border-surface-border rounded-control px-4 h-11 text-sm text-text-heading focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-heading mb-2">
                    Call to Action
                  </label>
                  <input
                    type="text"
                    value={ctaText}
                    onChange={(e) => setCtaText(e.target.value)}
                    className="w-full bg-surface-bg border border-surface-border rounded-control px-4 h-11 text-sm text-text-heading focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
              </div>

              <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mt-10 mb-6">
                2. Theme Accent
              </h3>
              <div className="flex items-center gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    aria-label={`Select ${color.name} color`}
                    className={`w-8 h-8 rounded-full ${color.bgClass} transition-transform duration-200 ${
                      activeColor.name === color.name ? "ring-2 ring-offset-2 ring-offset-surface-card ring-text-heading scale-110" : "hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Preview & Code */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Live Preview Pane */}
            <div className="bg-surface-card border border-surface-border rounded-card overflow-hidden shadow-sm flex flex-col">
              <div className="bg-surface-elevated border-b border-surface-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-medium text-text-muted ml-2 font-mono">localhost:3000</span>
              </div>
              
              <div className="p-12 flex flex-col items-center text-center bg-white dark:bg-[#0a0a0a]">
                <div className={`inline-flex items-center px-3 py-1 mb-8 rounded-full border text-xs font-semibold tracking-wide uppercase ${activeColor.textClass}`} style={{ borderColor: `${activeColor.hex}40`, backgroundColor: `${activeColor.hex}15` }}>
                  Launch faster
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-8 max-w-2xl leading-tight">
                  {headline || " "}
                </h1>
                
                <button 
                  className="h-12 px-8 text-sm font-semibold text-white rounded-control shadow-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: activeColor.hex, boxShadow: `0 4px 14px 0 ${activeColor.hex}40` }}
                >
                  {ctaText || " "}
                </button>
              </div>
            </div>

            {/* Code Pane */}
            <div className="bg-[#0D0D0D] border border-surface-border rounded-card overflow-hidden shadow-sm flex flex-col relative group">
              <div className="absolute top-0 right-0 px-4 py-2 bg-brand-primary text-brand-foreground text-xs font-bold uppercase tracking-wider rounded-bl-card opacity-90">
                Your Code
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                  <code>
<span className="text-pink-400">export default function</span> <span className="text-blue-400">Hero</span>() {'{\n'}
{'  '}<span className="text-pink-400">return</span> ({'\n'}
{'    '}&lt;<span className="text-blue-400">section</span> className=<span className="text-green-300">"py-24 text-center"</span>&gt;{'\n'}
{'      '}&lt;<span className="text-blue-400">Badge</span> color=<span className="text-green-300">"{activeColor.hex}"</span>&gt;{'\n'}
{'        '}Launch faster{'\n'}
{'      '}&lt;/<span className="text-blue-400">Badge</span>&gt;{'\n\n'}
{'      '}&lt;<span className="text-blue-400">h1</span> className=<span className="text-green-300">"text-5xl font-bold mt-6 mb-8"</span>&gt;{'\n'}
{'        '}{headline || " "}{'\n'}
{'      '}&lt;/<span className="text-blue-400">h1</span>&gt;{'\n\n'}
{'      '}&lt;<span className="text-blue-400">Button</span> bg=<span className="text-green-300">"{activeColor.hex}"</span>&gt;{'\n'}
{'        '}{ctaText || " "}{'\n'}
{'      '}&lt;/<span className="text-blue-400">Button</span>&gt;{'\n'}
{'    '}&lt;/<span className="text-blue-400">section</span>&gt;{'\n'}
{'  '});{'\n'}
{'}'}
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
