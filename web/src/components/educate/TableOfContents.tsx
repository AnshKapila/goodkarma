"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  accentColor?: "mauve" | "marigold" | "sage" | "ink";
  className?: string;
}

export function TableOfContents({ items, accentColor = "marigold", className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const activeColor = {
    mauve: "text-mauve font-medium border-l-2 border-mauve pl-3",
    marigold: "text-marigold font-medium border-l-2 border-marigold pl-3",
    sage: "text-sage font-medium border-l-2 border-sage pl-3",
    ink: "text-ink font-medium border-l-2 border-ink pl-3",
  }[accentColor];

  const handleItemClick = (id: string) => {
    setIsOpenMobile(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Collapsible Header */}
      <div className="lg:hidden w-full mb-10 sticky top-[72px] z-30">
        <div className="bg-white/95 backdrop-blur-md border border-border/80 rounded-xl shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
            className="w-full px-5 py-3.5 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink"
            aria-expanded={isOpenMobile}
          >
            <span className="flex items-center gap-2">
              <ListFilter className="w-4 h-4 text-muted-foreground" />
              On this page: <span className="text-marigold capitalize font-normal">{items.find(i => i.id === activeId)?.label || "Overview"}</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpenMobile ? "rotate-180" : ""}`} />
          </button>

          {isOpenMobile && (
            <div className="px-5 pb-4 pt-2 border-t border-border/50 flex flex-col gap-2.5 max-h-[60vh] overflow-y-auto">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left text-sm py-1.5 transition-colors ${
                    activeId === item.id ? activeColor : "text-muted-foreground hover:text-ink pl-3"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className={`hidden lg:block w-64 shrink-0 self-start sticky top-28 ${className}`}>
        <div className="bg-paper/70 backdrop-blur-xs p-6 rounded-xl border border-border/50 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/90 mb-4 block">
            Contents
          </span>
          <nav aria-label="Table of contents" className="flex flex-col gap-1.5">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left text-xs leading-relaxed py-1.5 transition-all duration-150 ${
                    isActive
                      ? activeColor
                      : "text-muted-foreground hover:text-ink pl-3 border-l-2 border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
