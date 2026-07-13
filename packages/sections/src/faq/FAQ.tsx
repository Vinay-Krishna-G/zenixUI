"use client"

import { useState } from "react"
import type { FAQContent } from "../types"
import "./FAQ.css"

interface FAQProps {
  content: FAQContent
}

export function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section faq" id="faq">
      <div className="section-inner faq-inner">
        <header className="section-header">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-headline">{content.headline}</h2>
        </header>

        <dl className="faq-list">
          {content.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <dt>
                  <button
                    id={`faq-btn-${i}`}
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
