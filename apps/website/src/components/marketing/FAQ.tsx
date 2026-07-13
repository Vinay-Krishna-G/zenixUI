"use client"

import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: "Is this a website builder like Wix or Webflow?", answer: "No. ZenixUI is an Experience Platform. We give you a visual interface to design your site, but the end result is a standard Next.js codebase that you host yourself. You own the code." },
    { question: "What do I get when I export?", answer: "You receive a .zip file containing a complete Next.js 16 project. It includes Tailwind CSS v4, your custom content, and all the React components. There are no proprietary @zenix dependencies." },
    { question: "Can I host the exported code anywhere?", answer: "Yes. Since it's a standard Node.js/Next.js app, you can deploy it instantly to Vercel, Netlify, AWS, or any provider you prefer." }
  ]

  return (
    <section className="py-24 bg-surface-bg border-t border-surface-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-heading font-heading">
            Frequently Asked Questions
          </h2>
        </header>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div 
                key={i} 
                className={`bg-surface-card border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? "border-brand-primary/30" : "border-surface-border"}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-brand-primary" : "text-text-heading"}`}>
                    {item.question}
                  </span>
                  <span className={`text-text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 pt-0 text-text-body text-base leading-relaxed">
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
