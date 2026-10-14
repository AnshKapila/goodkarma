import Image from "next/image";
import { Breadcrumb } from "./Breadcrumb";

interface SubpageHeroProps {
  breadcrumbPage: string;
  eyebrow: string;
  h1: string;
  promise: string;
  whoThisPageIsFor: string;
  imageSrc: string;
  imageAlt: string;
  accentColor?: "mauve" | "marigold" | "sage" | "ink";
  dense?: boolean;
}

export function SubpageHero({
  breadcrumbPage,
  eyebrow,
  h1,
  promise,
  whoThisPageIsFor,
  imageSrc,
  imageAlt,
  accentColor = "marigold",
  dense = false,
}: SubpageHeroProps) {
  const accentClasses = {
    mauve: "text-mauve border-mauve/30 bg-mauve/10",
    marigold: "text-marigold border-marigold/30 bg-marigold/10",
    sage: "text-sage border-sage/30 bg-sage/10",
    ink: "text-ink border-ink/30 bg-ink/5",
  }[accentColor];

  const eyebrowColorClass = {
    mauve: "text-mauve",
    marigold: "text-marigold",
    sage: "text-sage",
    ink: "text-ink",
  }[accentColor];

  return (
    <section className={`px-6 pt-12 md:pt-16 max-w-[1400px] mx-auto w-full ${dense ? "mb-12 md:mb-16" : "mb-16 md:mb-24"}`}>
      <Breadcrumb currentPage={breadcrumbPage} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`font-bold text-xs uppercase tracking-widest ${eyebrowColorClass}`}>
              {eyebrow}
            </span>
            <span className="text-border">|</span>
            <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-paper border border-border/70 rounded-full px-3.5 py-1">
              Who this page is for: <strong className="ml-1 text-ink font-medium">{whoThisPageIsFor}</strong>
            </span>
          </div>

          <h1 className="text-h1 font-editorial italic text-ink mb-6 leading-[1.12] tracking-tight">
            {h1}
          </h1>

          <p className="text-p1 text-ink/90 font-light leading-relaxed max-w-[620px] mb-8">
            {promise}
          </p>
        </div>

        {/* Right Column: Hero Visual */}
        <div className="lg:col-span-5 w-full">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-paper shadow-sm group">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
