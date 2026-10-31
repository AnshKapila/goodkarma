"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  Droplets, 
  Sparkles, 
  Wind, 
  Ban, 
  Layers, 
  Sun, 
  HeartHandshake, 
  RefreshCw 
} from "lucide-react";

interface StoryPolaroid {
  id: string;
  number: string;
  title: string;
  caption: string;
  image: string;
}

const STORY_POLAROIDS: StoryPolaroid[] = [
  {
    id: "organic-cotton",
    number: "01",
    title: "Rain-Fed Organic Cotton",
    caption: "Cultivated without synthetic defoliants or toxic chemical pesticides",
    image: "/images/organic-cotton-harvest.jpg"
  },
  {
    id: "botanical-dye",
    number: "02",
    title: "Living Plant Extraction",
    caption: "Temple marigolds and madder roots simmering in clean water",
    image: "/images/marigold-extraction.jpg"
  },
  {
    id: "cutaneous-touch",
    number: "03",
    title: "Unblended Pure Cotton",
    caption: "Pure 100% GOTS organic cotton rib-knit gentle hand feel",
    image: "/images/cotton-hand.png"
  }
];

interface ManifestoAccordionCard {
  number: string;
  category: string;
  title: string;
  text: string;
  detail: string;
  image: string;
  accent: "mauve" | "marigold" | "sage";
  bgClass: string;
  plate: string;
  tag: string;
}

const STORY_ACCORDION_CARDS: ManifestoAccordionCard[] = [
  {
    number: "01",
    category: "Origin",
    title: "100% GOTS Organic Cotton",
    text: "Cultivated by certified organic farming collectives across Gujarat and Maharashtra without synthetic insecticides, GMO seeds, or chemical defoliants.",
    detail: "Long-staple organic cotton fibers are hand-harvested and spun gently to preserve their natural hollow internal lumen and passive convective breathability.",
    image: "/images/organic-cotton-harvest.jpg",
    accent: "mauve",
    bgClass: "bg-[#7B535B]",
    plate: "Plate 2.1 — Rain-Fed Organic Agriculture",
    tag: "Rain-fed organic cotton harvest & non-GMO farming collectives"
  },
  {
    number: "02",
    category: "Craft",
    title: "Living Botanical Pigments",
    text: "We rescue golden temple marigolds, wild madder roots, and sun-dried pomegranate peels, extracting pure herbal colorants in warm filtered water baths.",
    detail: "Fixed solely with food-grade mineral salts like alum and iron. We completely omit petrochemical synthetic azo colorants, formaldehyde, and heavy metals.",
    image: "/images/marigold-extraction.jpg",
    accent: "marigold",
    bgClass: "bg-[#B06B1E]",
    plate: "Plate 2.2 — Botanical Dye Decoction",
    tag: "Artisan water extraction & zero petrochemical carrier solvents"
  },
  {
    number: "03",
    category: "Skin",
    title: "Cutaneous Barrier Health",
    text: "Designed around human cutaneous physiology. 100% pure cotton rib-knit elasticity replaces synthetic spandex, allowing natural airflow and barrier recovery.",
    detail: "Zero plastic coatings, zero chemical softeners, and plain ingredient disclosure on every box so that sensitive skin and atopic barriers remain calm.",
    image: "/images/cotton-hand.png",
    accent: "sage",
    bgClass: "bg-[#4D5749]",
    plate: "Plate 2.3 — Natural Cellulose Equilibrium",
    tag: "Unblended cotton rib-knit & non-occlusive daily comfort"
  }
];

export function OurStoryEditorialView() {
  // 1. Polaroid Hover State
  const [isPolaroidHovered, setIsPolaroidHovered] = useState(false);
  const [activePolaroidIndex, setActivePolaroidIndex] = useState<number | null>(null);

  // 2. Continuous Hover Accordion State
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // 3. Scroll-lit Manifesto
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!manifestoRef.current) return;
      const rect = manifestoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height * 0.4)));
      setManifestoProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const manifestoParagraph1 = "What touches your skin for twenty-four hours a day should never carry hidden synthetic resins, petroleum dyes, or occlusive plastics.";
  const manifestoParagraph2 = "We prove that intimate comfort, skin health, and ecological integrity are one continuous thread.";

  const words1 = manifestoParagraph1.split(" ");
  const words2 = manifestoParagraph2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-marigold/20">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Editorial Display Typography + Interactive Polaroid Stack */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center text-xs text-muted-foreground font-light">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
          <span className="text-ink font-medium">Our Story</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
          {/* Left Column: Bold Typography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold">
                Section 01 · Origin & Philosophy
              </span>
              <span className="text-[11px] font-inter font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Rooted in India · Made for Skin
              </span>
            </div>

            <h1 className="text-[clamp(36px,5.8vw,80px)] font-editorial italic font-semibold leading-[0.95] tracking-tight text-ink mb-6">
              Rooted in care. Engineered for skin.
            </h1>

            <p className="text-p1 text-ink/80 font-light max-w-[580px] leading-relaxed mb-8">
              Good Karma was born out of an undeniable truth: what touches your skin for 24 hours a day matters just as much as what you put into your body. We set out to prove that daily innerwear can be uncompromisingly soft, ecologically restorative, and completely free of hidden synthetic chemistry.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="#story-philosophy" variant="primary">
                Explore Our Philosophy
              </Button>
              <Button href="#textile-continuum" variant="secondary">
                The Textile Continuum
              </Button>
            </div>
          </div>

          {/* Right Column: Signature Interactive Polaroid Cluster */}
          <div 
            className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]"
            onMouseEnter={() => setIsPolaroidHovered(true)}
            onMouseLeave={() => {
              setIsPolaroidHovered(false);
              setActivePolaroidIndex(null);
            }}
          >
            {/* Central Glowing Aura */}
            <div className="absolute w-72 h-72 rounded-full bg-marigold/10 blur-3xl pointer-events-none" />

            {/* Interactive Polaroid Stack */}
            <div className="relative w-full max-w-[380px] h-[340px] flex items-center justify-center">
              {STORY_POLAROIDS.map((p, idx) => {
                const isActive = activePolaroidIndex === idx;

                let transformClass = "";
                if (isPolaroidHovered) {
                  if (idx === 0) transformClass = "-translate-x-16 sm:-translate-x-24 -translate-y-4 -rotate-12 scale-100";
                  if (idx === 1) transformClass = "translate-y-[-16px] rotate-0 scale-105 z-20";
                  if (idx === 2) transformClass = "translate-x-16 sm:translate-x-24 -translate-y-2 rotate-12 scale-100";
                } else {
                  if (idx === 0) transformClass = "-translate-x-6 rotate-[-5deg]";
                  if (idx === 1) transformClass = "translate-y-0 rotate-[1.5deg] z-10";
                  if (idx === 2) transformClass = "translate-x-6 rotate-[7deg]";
                }

                if (isActive) {
                  transformClass += " scale-110 z-30 shadow-2xl";
                }

                return (
                  <div
                    key={p.id}
                    onMouseEnter={() => setActivePolaroidIndex(idx)}
                    className={`absolute w-[220px] sm:w-[260px] p-3 sm:p-3.5 bg-white rounded-lg shadow-lg border border-black/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${transformClass}`}
                  >
                    <div className="aspect-[4/3] w-full rounded overflow-hidden mb-3 relative bg-paper">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-xs">
                        Plate {p.number}
                      </div>
                    </div>

                    <div className="px-1">
                      <h4 className="font-editorial italic font-semibold text-ink text-sm sm:text-base leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-light line-clamp-1 mt-0.5">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Micro-Badge Indicators */}
        <div className="pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-ink/70">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mauve" />
              100% GOTS Organic Cotton
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-marigold" />
              Living Plant Dyes & Mineral Mordants
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage" />
              Zero Synthetic Spandex Cores
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
            Traceable Farm-to-Skin Continuum
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND MANIFESTO & CONTINUOUS BRAND-COLORED ACCORDION BANNER */}
      {/* ========================================================================= */}
      <section id="story-philosophy" className="relative w-full bg-paper py-20 md:py-32 border-y border-border/40">
        <div 
          ref={manifestoRef}
          className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-24"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-4">
            02 · Brand Philosophy
          </span>
          
          <h2 className="font-editorial italic font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.2] tracking-tight">
            <span className="block mb-6">
              {words1.map((w, i) => {
                const wordThreshold = i / totalWords;
                const isLit = manifestoProgress >= wordThreshold;
                return (
                  <span 
                    key={i} 
                    className={`inline-block mr-2 transition-opacity duration-300 ${
                      isLit ? "opacity-100 text-ink" : "opacity-25 text-black"
                    }`}
                  >
                    {w}
                  </span>
                );
              })}
            </span>

            <span className="block">
              {words2.map((w, i) => {
                const wordThreshold = (words1.length + i) / totalWords;
                const isLit = manifestoProgress >= wordThreshold;
                return (
                  <span 
                    key={i} 
                    className={`inline-block mr-2 transition-opacity duration-300 ${
                      isLit ? "opacity-100 text-marigold font-semibold" : "opacity-25 text-black"
                    }`}
                  >
                    {w}
                  </span>
                );
              })}
            </span>
          </h2>
        </div>

        {/* Full Viewport-Width Section: 3 Expandable / Collapsible Horizontal Hover Accordion Cards (Continuous Brand Banner) */}
        <div 
          className="w-full px-4 sm:px-6 lg:px-10"
          onMouseLeave={() => setExpandedIndex(null)}
        >
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[480px] lg:h-[520px]">
            {STORY_ACCORDION_CARDS.map((card, idx) => {
              const isExpanded = expandedIndex === idx;
              const isAnyExpanded = expandedIndex !== null;
              const isCollapsed = isAnyExpanded && !isExpanded;

              return (
                <div
                  key={card.number}
                  onMouseEnter={() => setExpandedIndex(idx)}
                  className={`group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between ${card.bgClass} text-white ${
                    isExpanded
                      ? "lg:flex-[2.6]"
                      : isCollapsed
                        ? "lg:flex-[0.7]"
                        : "lg:flex-1"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row h-full w-full">
                    
                    {/* Left Info Panel */}
                    <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 ${
                      isExpanded ? "lg:w-[50%] shrink-0" : "w-full"
                    }`}>
                      <div>
                        {/* Clean unboxed category label */}
                        <div className="mb-4">
                          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-white/80 block">
                            {card.category} {card.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`font-editorial italic font-semibold text-white mb-3 transition-all duration-300 ${
                          isExpanded 
                            ? "text-2xl sm:text-3xl lg:text-[30px] leading-tight" 
                            : "text-xl sm:text-2xl leading-snug"
                        }`}>
                          {card.title}
                        </h3>

                        {/* Text */}
                        <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-4">
                          {card.text}
                        </p>

                        {/* Deep rationale on hover expansion */}
                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                          isExpanded ? "max-h-40 opacity-100 mt-3 pt-3 border-t border-white/20" : "max-h-0 opacity-0"
                        }`}>
                          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                            {card.detail}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom Indicator */}
                      <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider font-medium flex items-center gap-2 text-white/90">
                          <span className={`w-2 h-2 rounded-full bg-white ${isExpanded ? "animate-ping" : "opacity-75"}`} />
                          <span>{isExpanded ? "Active Story View" : "Hover to explore"}</span>
                        </span>
                        <div className={`w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500 ${
                          isExpanded ? "rotate-90 bg-white text-ink" : "text-white bg-white/10"
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Right Image Accordion Panel */}
                    <div className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isExpanded
                        ? "h-[240px] lg:h-full lg:w-[50%] opacity-100 visible"
                        : "h-0 lg:h-full lg:w-0 opacity-0 overflow-hidden invisible pointer-events-none"
                    }`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-100 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block mb-1">
                          {card.plate}
                        </span>
                        <p className="text-xs sm:text-sm font-editorial italic text-white drop-shadow-sm">
                          {card.tag}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand About Strip with Dark Logo */}
      <AboutStrip className="my-8" />

      {/* ========================================================================= */}
      {/* 3. DARK BREAKOUT: Conventional Fast Fashion vs. Good Karma Standard */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-ink text-white py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16 pb-8 border-b border-white/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                03 · Textile Reality Check
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-white">
                The hidden cost of conventional innerwear.
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/70 max-w-[480px] font-light leading-relaxed">
              For decades, the textile industry prioritized synthetic stretch, cheap chemical washes, and high margins over human skin and ecological health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Fast Fashion Reality */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Conventional Industry Practice
                  </span>
                  <Ban className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-2xl font-editorial italic text-white mb-4">
                  Synthetic Blends & Concealed Chemistry
                </h3>
                <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                  Conventional innerwear incorporates synthetic spandex, petroleum disperse dyes, and trade-secret finishing resins. These chemicals remain on the fibers and maintain direct, unbroken contact with skin throughout the day.
                </p>

                <ul className="space-y-4 text-xs font-mono text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>5%–10% Synthetic Spandex:</strong> Non-biodegradable polyurethane cores create occlusive heat pockets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Azo & Disperse Colorants:</strong> Petrochemical pigments known to release aromatic amines upon sweating.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Formaldehyde Resin Washes:</strong> Anti-shrinkage chemical baths that trigger localized contact sensitivity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Toxic Factory Effluent:</strong> Untreated industrial wastewater loaded with heavy metals discharged into rivers.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-rose-300">
                <span>The Compromise:</span>
                <span className="font-semibold">Cutaneous Irritation & Pollution</span>
              </div>
            </div>

            {/* Right Column: Good Karma Standard */}
            <div className="bg-white/5 border border-marigold/40 rounded-2xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-marigold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-marigold/20 text-amber-300 border border-marigold/40">
                    The Good Karma Standard
                  </span>
                  <ShieldCheck className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-2xl font-editorial italic text-white mb-4">
                  Pure Botanical Integrity from Seed to Skin
                </h3>
                <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                  We formulate every garment from scratch with complete ingredient transparency. By pairing 100% GOTS organic cotton rib knits with living herbal pigments, we create apparel that respects both the wearer and the planet.
                </p>

                <ul className="space-y-4 text-xs font-mono text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span><strong>100% Pure Cotton Rib-Knit:</strong> Natural mechanical elasticity provides stretch without spandex.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span><strong>Living Plant Pigments:</strong> Rescued temple marigold, madder root, and pomegranate peel extractions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span><strong>Zero Synthetic Resins:</strong> Completely untreated and unbleached cotton preserving raw fiber softness.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span><strong>Closed-Loop Bio-Effluent:</strong> Safe biological water filtration and fully compostable organic waste.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-300 relative z-10">
                <span>The Outcome:</span>
                <span className="font-semibold">Gentle Cutaneous Comfort</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE TEXTILE CONTINUUM: 4-Stage Bento Grid (Soil -> Dye -> Body -> Earth) */}
      {/* ========================================================================= */}
      <section id="textile-continuum" className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                04 · Circular Textile Continuum
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                From soil to skin to earth.
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-[480px] font-light leading-relaxed">
              Every garment follows an unbroken chain of biological stewardship, honoring the hands that grow it and the bodies that wear it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-marigold/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-mauve/10 text-mauve flex items-center justify-center font-bold mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  01 · Living Soil & Seed
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Certified rain-fed organic cotton grown by smallholder farming cooperatives. Healthy, biodynamic soil retains moisture naturally, eliminating synthetic chemical inputs and groundwater contamination.
                </p>
              </div>
              <span className="text-[11px] font-mono text-mauve uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Rain-Fed GOTS Farms
              </span>
            </div>

            {/* Stage 2 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-marigold/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-marigold/10 text-marigold flex items-center justify-center font-bold mb-6">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  02 · Botanical Dye Kitchen
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Floral waste rescued from temples, madder roots, and pomegranate rinds extracted in gentle water baths. Fixed with food-safe mineral salts, entirely free of synthetic chemical carriers.
                </p>
              </div>
              <span className="text-[11px] font-mono text-marigold uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                100% Plant Extracts
              </span>
            </div>

            {/* Stage 3 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-marigold/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center font-bold mb-6">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  03 · Anatomical Comfort
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Tailored around natural human movement using 100% cotton rib-knit mechanical elasticity. Zero plastic coatings or synthetic chemical softeners next to delicate skin.
                </p>
              </div>
              <span className="text-[11px] font-mono text-sage uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Zero Spandex Cores
              </span>
            </div>

            {/* Stage 4 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-marigold/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ink/10 text-ink flex items-center justify-center font-bold mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  04 · Biological Return
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Because our garments contain unblended cotton and natural plant dyes, at the end of their long lifecycle they return safely to the earth without shedding persistent synthetic microplastics.
                </p>
              </div>
              <span className="text-[11px] font-mono text-ink uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Compostable Lifecycle
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EDITORIAL FOUNDER'S NOTE: Quote & Principles */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-6">
            05 · A Note From Our Workshop
          </span>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-editorial italic text-ink leading-relaxed mb-8">
            &ldquo;We did not start Good Karma simply to make more garments. We started it because the apparel touching our bodies every day was quietly compromising our skin and the soil. By pairing unblended organic cotton with living botanical dyes, we proved that everyday comfort requires zero synthetic compromise.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center">
            <span className="font-editorial italic font-semibold text-ink text-lg">
              The Good Karma Team & Materials Workshop
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
              Ahmedabad & Mumbai · India
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPLORE THE SCIENCE & STANDARDS (Related Pages) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white py-20 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-2">
              Learn More
            </span>
            <h2 className="text-3xl font-editorial italic text-ink">
              Continue reading our research.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/educate/skin-science"
              className="p-8 rounded-2xl bg-paper border border-border/60 hover:border-mauve/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-mauve block mb-3">
                  Cutaneous Biology
                </span>
                <h3 className="text-xl font-editorial italic text-ink mb-3 group-hover:text-mauve transition-colors">
                  Skin Science: The Science of Breathing
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  How synthetic fabrics alter the stratum corneum microclimate and why unblended cotton supports cutaneous barrier recovery.
                </p>
              </div>
              <span className="text-xs font-semibold text-mauve inline-flex items-center gap-1 mt-6">
                Explore Skin Science <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link 
              href="/educate/natural-dyeing"
              className="p-8 rounded-2xl bg-paper border border-border/60 hover:border-marigold/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-marigold block mb-3">
                  Botanical Chemistry
                </span>
                <h3 className="text-xl font-editorial italic text-ink mb-3 group-hover:text-marigold transition-colors">
                  Natural Dyeing: Colours Drawn Directly From Nature
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Explore our living botanical dye library crafted from marigold blossoms, wild madder roots, and pomegranate peels.
                </p>
              </div>
              <span className="text-xs font-semibold text-marigold inline-flex items-center gap-1 mt-6">
                Explore Natural Dyeing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link 
              href="/educate/for-doctors"
              className="p-8 rounded-2xl bg-paper border border-border/60 hover:border-sage/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sage block mb-3">
                  Clinical Practice
                </span>
                <h3 className="text-xl font-editorial italic text-ink mb-3 group-hover:text-sage transition-colors">
                  For Clinicians: Practice Integration & Swatches
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Clinical rationale, microclimate management, and complimentary practice swatch kits for dermatologists and gynaecologists.
                </p>
              </div>
              <span className="text-xs font-semibold text-sage inline-flex items-center gap-1 mt-6">
                Explore For Clinicians <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLOSING CTA BANNER */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full my-16 md:my-24">
        <div className="bg-ink rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-marigold/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
            Thoughtful Apparel
          </span>
          <h2 className="text-3xl md:text-5xl font-editorial italic font-semibold text-white mb-6 max-w-[700px] relative z-10 leading-tight">
            Wear something that respects your skin and the earth.
          </h2>
          <p className="text-sm md:text-base text-white/80 font-light max-w-[550px] mb-10 leading-relaxed relative z-10">
            Explore our collection of unblended GOTS organic cotton essentials dyed with living botanical pigments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button href="/products" variant="primary">
              Explore The Collection
            </Button>
            <Button href="/educate/skin-science" variant="secondary">
              Review Skin Science
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}