"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FAQItem } from "@/data/faqs";

interface FAQSectionProps {
  items: FAQItem[];
  accentColor?: "mauve" | "marigold" | "sage" | "ink";
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export function FAQSection({
  items,
  accentColor = "marigold",
  title = "Frequently asked questions.",
  subtitle = "Common questions about our materials, skin health, and verified ecological standards.",
  id = "faq",
  className = "",
}: FAQSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const accentColorClass = {
    mauve: "text-mauve",
    marigold: "text-marigold",
    sage: "text-sage",
    ink: "text-ink",
  }[accentColor];

  const borderActiveClass = {
    mauve: "border-mauve/40",
    marigold: "border-marigold/40",
    sage: "border-sage/40",
    ink: "border-ink/40",
  }[accentColor];

  // Schema for Google Rich Results FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id={id} className={`scroll-mt-28 w-full ${className}`}>
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className={`w-4 h-4 ${accentColorClass}`} />
          <span className={`text-xs font-bold uppercase tracking-widest ${accentColorClass}`}>
            Common Questions
          </span>
        </div>
        <h2 className="text-h2 font-editorial italic text-ink mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-p2 text-muted-foreground font-light max-w-[650px]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden bg-paper ${
                isOpen ? borderActiveClass : "border-border/60 hover:border-border"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold"
              >
                <span className="text-base sm:text-lg font-medium text-ink pr-4 leading-snug">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-border/50 text-ink/70 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-marigold" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className="px-6 pb-6 pt-1 text-sm text-ink/80 font-light leading-relaxed border-t border-border/30 mt-1"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
