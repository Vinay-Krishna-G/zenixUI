"use client"

import { useState } from "react"
import type { FAQContent } from "../types"

interface FAQProps {
  content: FAQContent
}

export function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32 bg-surface-bg border-t border-surface-border" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-heading mb-4 font-heading">
            {content.headline}
          </h2>
          <p className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
            {content.subheadline}
          </p>
        </header>

        <div className="space-y-4">
          {content.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div 
                key={i} 
                className={`bg-surface-card border rounded-card overflow-hidden transition-colors duration-200 ${isOpen ? "border-brand-primary/30" : "border-surface-border"}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-inset"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-brand-primary" : "text-text-heading hover:text-brand-primary/80"}`}>
                    {item.question}
                  </span>
                  <span className={`flex shrink-0 ml-4 w-6 h-6 items-center justify-center text-text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 pt-0 text-base text-text-body leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
