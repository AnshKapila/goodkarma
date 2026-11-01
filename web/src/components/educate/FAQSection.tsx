"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  // Hover expansion state: null when mouse is not hovering any item
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  const accentColorClass = {
    mauve: "text-mauve",
    marigold: "text-marigold",
    sage: "text-sage",
    ink: "text-ink",
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
        <div className="mb-2">
          <span className={`text-xs font-inter font-bold uppercase tracking-widest ${accentColorClass}`}>
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

      {/* Borderless FAQ List with Hover Expansion */}
      <div 
        className="space-y-3"
        onMouseLeave={() => setActiveHoverIndex(null)}
      >
        {items.map((item, idx) => {
          const isOpen = activeHoverIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveHoverIndex(idx)}
              onMouseLeave={() => setActiveHoverIndex(null)}
              onClick={() => setActiveHoverIndex((prev) => (prev === idx ? null : idx))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveHoverIndex((prev) => (prev === idx ? null : idx));
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold ${
                isOpen 
                  ? "bg-[#EFEFEF] shadow-xs" 
                  : "bg-paper hover:bg-[#F2F2F2]"
              }`}
            >
              <div className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4">
                <span className={`text-base sm:text-lg font-medium pr-4 leading-snug transition-colors duration-200 ${
                  isOpen ? "text-ink font-semibold" : "text-ink/90"
                }`}>
                  {item.question}
                </span>
                
                {/* Borderless Chevron Indicator */}
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "rotate-180 bg-marigold text-white shadow-xs" 
                      : "bg-white text-ink/70"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>

              {/* Animated Accordion Content: Expands on hover, collapses on hover remove */}
              <div
                id={`faq-answer-${idx}`}
                role="region"
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-base text-ink/80 font-light leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
