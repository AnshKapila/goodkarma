"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/educate/FAQSection";
import { SourcesList, type SourceItem } from "@/components/educate/SourcesList";
import { ShareBar } from "@/components/educate/ShareBar";
import { TrustStrip } from "@/components/educate/TrustStrip";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { RelatedPages, type RelatedPageItem } from "@/components/educate/RelatedPages";
import { FAQS_DATA } from "@/data/faqs";
import { 
  Sparkles, 
  Droplets, 
  Leaf, 
  Ban, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Layers, 
  FlaskConical, 
  ShieldCheck, 
  RefreshCw,
  Sun,
  Flame,
  Info
} from "lucide-react";

interface NaturalDyeingDeltaViewProps {
  sources: SourceItem[];
  relatedPages: [RelatedPageItem, RelatedPageItem];
}

interface ManifestoAccordionCard {
  number: string;
  label: string;
  heading: string;
  supportingLine: string;
  body: string;
  image: string;
  plate: string;
  tag: string;
  bgClass: string;
  scaleClass: string;
}

const MANIFESTO_ACCORDION_CARDS: ManifestoAccordionCard[] = [
  {
    number: "01",
    label: "PROCESS 01",
    heading: "Water Extraction",
    supportingLine: "Decoction: 60°C – 80°C",
    body: "Sun-dried flowers, roots, and fruit rinds are simmered in filtered water at low temperatures, gently releasing active botanical colorants without petroleum solvents or petrochemical carriers.",
    image: "/images/process-step-01.jpg",
    plate: "BOTANICAL DECOCTION",
    tag: "Artisan hands immersing fabric in botanical dye bath",
    bgClass: "bg-[#5A6056]",
    scaleClass: "scale-100"
  },
  {
    number: "02",
    label: "PROCESS 02",
    heading: "Mineral Binding",
    supportingLine: "Food-grade alum & iron mordants",
    body: "We use food-grade mineral salts—specifically natural alum and iron—to create lasting molecular bonds between botanical pigments and cotton cellulose, avoiding synthetic resin binders.",
    image: "/images/process-step-02.jpg",
    plate: "MINERAL FIXATION",
    tag: "Natural mineral salts and raw botanical ingredients",
    bgClass: "bg-[#B06B1E]",
    scaleClass: "scale-100"
  },
  {
    number: "03",
    label: "PROCESS 03",
    heading: "Circular Effluent",
    supportingLine: "Pure agricultural water return",
    body: "Because our dye baths consist solely of organic plant residues and safe mineral salts, process water undergoes multi-stage biological oxygen filtration before clean re-use or safe discharge.",
    image: "/images/process-step-03.jpg",
    plate: "CIRCULAR STEWARDSHIP",
    tag: "Continuous pure water rinse and clean circular washing",
    bgClass: "bg-[#7B535B]",
    scaleClass: "scale-100"
  }
];

interface DyeBotanical {
  id: string;
  name: string;
  latin: string;
  colorName: string;
  colorHex: string;
  source: string;
  activeCompound: string;
  description: string;
  category: "Rescued Waste" | "Ayurvedic Heritage" | "Wild Harvest";
  image: string;
}

const DYE_BOTANICALS: DyeBotanical[] = [
  {
    id: "marigold",
    name: "Marigold",
    latin: "Tagetes erecta",
    colorName: "Golden Yellow & Amber",
    colorHex: "#E5A93C",
    source: "Rescued temple floral offerings & local market harvests",
    activeCompound: "Lutein & Carotenoid Flavonoids",
    description: "Rescued from temple offerings and local markets. Rich in lutein and carotenoids, producing warm sunshine yellows and rich ochre undertones without synthetic pigments.",
    category: "Rescued Waste",
    image: "/images/botanicals/marigold.jpg"
  },
  {
    id: "madder",
    name: "Madder Root",
    latin: "Rubia cordifolia",
    colorName: "Earthy Terracotta & Rose",
    colorHex: "#9E4736",
    source: "Cultivated on regenerative Indian organic farms",
    activeCompound: "Natural Alizarin & Purpurin Glycosides",
    description: "Known as Manjistha in Ayurvedic traditions. Yields gentle blush rose, terracotta, and rich crimson hues via natural alizarin compounds known for millennia.",
    category: "Ayurvedic Heritage",
    image: "/images/botanicals/madder.png"
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    latin: "Punica granatum",
    colorName: "Warm Khaki & Soft Olive",
    colorHex: "#BFA36F",
    source: "Upcycled fruit rinds from juice artisans & processing",
    activeCompound: "Ellagitannins & Punicalagin Polyphenols",
    description: "Upcycled from fruit-processing and juice vendors. High natural tannin concentration functions as both a gentle mordant and soft khaki-chartreuse pigment.",
    category: "Rescued Waste",
    image: "/images/botanicals/pomegranate.png"
  },
  {
    id: "indigo",
    name: "Indigo",
    latin: "Indigofera tinctoria",
    colorName: "Deep Botanical Blue",
    colorHex: "#2B4C7E",
    source: "Biodynamic organic indigo fields in Tamil Nadu",
    activeCompound: "Indigotin via Natural Microbial Reduction",
    description: "Naturally fermented organic indigo leaves. Creates deep, living botanical blues without caustic sodium hydrosulfite or toxic petroleum-derived chemical reducing agents.",
    category: "Wild Harvest",
    image: "/images/botanicals/indigo.jpg"
  },
  {
    id: "harda",
    name: "Harda",
    latin: "Terminalia chebula",
    colorName: "Neutral Yellow-Buff",
    colorHex: "#C2B280",
    source: "Wild-harvested forest drupes in Central India",
    activeCompound: "Chebulinic Acid & Gallic Tannins",
    description: "A wild forest fruit historically revered in traditional botanicals. Functions as a natural tannin-rich pre-treatment and gentle buff colorant.",
    category: "Wild Harvest",
    image: "/images/botanicals/harda.png"
  },
  {
    id: "katha",
    name: "Katha",
    latin: "Senegalia catechu",
    colorName: "Cinnamon Fawn & Brown",
    colorHex: "#8B5A2B",
    source: "Indigenous sustainably pruned acacia heartwood",
    activeCompound: "Catechin & Catechutannic Acid",
    description: "Extracted sustainably from indigenous acacia tree heartwood. Imparts rich cinnamon fawn and warm earthy brown tones with excellent natural lightfastness.",
    category: "Ayurvedic Heritage",
    image: "/images/botanicals/katha.jpg"
  }
];

interface ExclusionItem {
  number: string;
  title: string;
  type: "Excluded" | "Included";
  lead: string;
  detail: string;
  image: string;
}

const EXCLUSION_ITEMS: ExclusionItem[] = [
  {
    number: "01",
    title: "Synthetic Azo Dyes",
    type: "Excluded",
    lead: "Roughly 70% of commercial garments rely on petroleum-derived synthetic azo colorants.",
    detail: "Under body heat and sweat, specific azo chemical bonds can cleave into aromatic amines known to provoke cutaneous irritation and allergic contact dermatitis. Good Karma is 100% azo-free.",
    image: "/images/exclusions/synthetic-azo-dyes.jpg"
  },
  {
    number: "02",
    title: "Elastane, Spandex & Polyurethane",
    type: "Excluded",
    lead: "Even '95% cotton' underwear blends contain synthetic polyurethane stretch filaments.",
    detail: "These plastic threads shed microscopic and nanoscopic polymer filaments against the skin and create a non-porous moisture trap. We craft our underwear with 100% unblended cotton cellulose.",
    image: "/images/exclusions/elastane-polyurethane.jpg"
  },
  {
    number: "03",
    title: "PFAS & Fluorinated Finishes",
    type: "Excluded",
    lead: "Per- and polyfluoroalkyl substances are applied to textiles for artificial stain resistance.",
    detail: "These persistent 'forever chemicals' resist environmental degradation and bioaccumulate. Our garments are finished without stain-repellent coatings or fluorinated chemistry.",
    image: "/images/exclusions/pfas-fluorinated-finishes.jpg"
  },
  {
    number: "04",
    title: "Toxic Heavy-Metal Mordants",
    type: "Included",
    lead: "We never use toxic chrome, copper, or tin salts to artificially force pigment adhesion.",
    detail: "We rely exclusively on food-grade Alum (potassium aluminum sulfate) and natural Iron mineral salts. These safe earth minerals bind natural pigments to cotton permanently.",
    image: "/images/exclusions/heavy-metal-mordants.jpg"
  }
];

export function NaturalDyeingDeltaView({ sources, relatedPages }: NaturalDyeingDeltaViewProps) {
  // 1. Manifesto Scroll Word Reveal
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0);

  // 2. Continuous 3-Card Accordion Hover State
  const [expandedManifestoIndex, setExpandedManifestoIndex] = useState<number | null>(null);

  // 3. Botanical Dye Hover/Tap State (Living Palette Bento)
  const [activeBotanicalId, setActiveBotanicalId] = useState<string | null>(null);

  // 4. Exclusions Accordion State
  const [expandedExclusion, setExpandedExclusion] = useState<number | null>(null);

  // Scroll tracking for manifesto
  useEffect(() => {
    const handleScroll = () => {
      if (manifestoRef.current) {
        const rect = manifestoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight * 0.85 - rect.top) / (rect.height * 0.9), 0), 1);
        setManifestoProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words1 = "For five thousand years, human clothing was coloured with living flowers, roots, barks, and minerals that nurtured both the soil and the skin.".split(" ");
  const words2 = "Plant-based dyes, not petroleum-based. No animal testing. Natural dyeing still uses water and needs responsible effluent handling, and we say so.".split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-marigold/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Clean Integrated Botanical Dyeing Hero Banner */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-8 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Editorial Heading and Subheading */}
        <div className="max-w-[820px] mb-8 md:mb-12">
          <h1 className="font-editorial italic font-semibold text-ink text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight mb-4">
            Colours Drawn Directly From Nature
          </h1>
          <p className="text-p1 text-ink/75 font-light leading-relaxed max-w-[620px]">
            Marigold blossoms, wild madder roots, and sun-dried pomegranate peels. We replace petroleum synthetics with living plant pigments, bringing gentle, plant-derived textile chemistry to everyday garments.
          </p>
        </div>

        {/* Hero Banner Container */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border/40 bg-paper">
          <img 
            src="/images/natural-dye-hero.jpg" 
            alt="Natural botanical dye bowls with pigments, alum crystals, and dried botanicals in clay vessels" 
            className="w-full h-auto aspect-[16/9] object-cover object-center block"
            loading="eager"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 5,000-YEAR HERITAGE MANIFESTO (Scroll Word-by-Word Reveal) */}
      {/* ========================================================================= */}
      <section 
        ref={manifestoRef}
        className="relative w-full bg-white pt-16 md:pt-28 pb-16 md:pb-24 border-t border-border/40 overflow-hidden"
      >
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-14 md:mb-20">
          <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-6">
            01 · Botanical Manifesto
          </span>

          <h2 className="text-[clamp(28px,3.8vw,56px)] font-medium leading-[1.18] tracking-[-0.03em] text-ink max-w-[1200px]">
            {/* Part 1: History */}
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

            {/* Part 2: Required Copy Fix */}
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

        {/* Full Viewport-Width Section: 3 Expandable / Collapsible Horizontal Hover Accordion Cards (Continuous Brand-Colored Banner) */}
        <div 
          className="w-full px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto"
          onMouseLeave={() => setExpandedManifestoIndex(null)}
        >
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[480px] lg:h-[520px]">
            {MANIFESTO_ACCORDION_CARDS.map((card, idx) => {
              const isExpanded = expandedManifestoIndex === idx;
              const isAnyExpanded = expandedManifestoIndex !== null;
              const isCollapsed = isAnyExpanded && !isExpanded;

              return (
                <div
                  key={card.number}
                  onMouseEnter={() => setExpandedManifestoIndex(idx)}
                  className={`group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-start items-start ${card.bgClass} text-white ${
                    isExpanded
                      ? "lg:flex-[2.6]"
                      : isCollapsed
                        ? "lg:flex-[0.7]"
                        : "lg:flex-1"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row h-full w-full items-start justify-start">
                    
                    {/* Left Info Panel (Top-aligned) */}
                    <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-start items-start text-left transition-all duration-500 h-full ${
                      isExpanded ? "lg:w-[50%] shrink-0" : "w-full"
                    }`}>
                      <div className="w-full text-left flex flex-col justify-start items-start">
                        {/* Label in brand p2 */}
                        <span className="text-p2 font-normal text-white/85 block mb-2">
                          {card.label}
                        </span>

                        {/* Heading */}
                        <h3 className={`font-editorial italic font-semibold text-white mb-2 transition-all duration-300 ${
                          isExpanded 
                            ? "text-2xl sm:text-3xl lg:text-[30px] leading-tight" 
                            : "text-xl sm:text-2xl leading-snug"
                        }`}>
                          {card.heading}
                        </h3>

                        {/* Supporting line */}
                        <p className="text-sm sm:text-base text-white/90 font-medium mb-3 sm:mb-4">
                          {card.supportingLine}
                        </p>

                        {/* Body copy */}
                        <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                          {card.body}
                        </p>
                      </div>
                    </div>

                    {/* Right Image Accordion Panel (expands in width horizontally on hover) */}
                    <div className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] self-stretch ${
                      isExpanded
                        ? "h-[260px] lg:h-full lg:w-[50%] opacity-100 visible"
                        : "h-0 lg:h-full lg:w-0 opacity-0 overflow-hidden invisible pointer-events-none"
                    }`}>
                      <img
                        src={card.image}
                        alt={card.heading}
                        className={`w-full h-full object-cover object-center transform transition-transform duration-1000 ${card.scaleClass}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Image Caption Label */}
                      <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                        <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-white/90 block mb-1">
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

      {/* Brand About Strip with White Logo */}
      <AboutStrip className="my-8" />

      {/* ========================================================================= */}
      {/* 3. THE BOTANICAL DYE LIBRARY BENTO (Modular 6-Source Bento Grid) */}
      {/* ========================================================================= */}
      <section id="dye-library" className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                02 · Living Palette Bento
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                The Botanical Dye Library.
              </h2>
            </div>
            <p className="max-w-[500px] text-p1 text-muted-foreground font-light leading-relaxed">
              Our formulation begins with 6 core Indian botanical sources, expanding modularly as new natural shade recipes are mastered. Hover over each source to explore its properties.
            </p>
          </div>

          {/* Living Palette Bento Grid - Real Stock Photography Backgrounds & Hover Description Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-4">
            {DYE_BOTANICALS.map((dye) => {
              const isExpanded = activeBotanicalId === dye.id;

              return (
                <div
                  key={dye.id}
                  tabIndex={0}
                  onClick={() => setActiveBotanicalId(isExpanded ? null : dye.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveBotanicalId(isExpanded ? null : dye.id);
                    }
                  }}
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 hover:border-marigold/60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold transition-all duration-500 flex flex-col justify-end min-h-[400px] sm:min-h-[440px] p-8 shadow-lg select-none cursor-default"
                >
                  {/* Real stock photo background (not AI generated) */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={dye.image}
                      alt={dye.name}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient scrim ensuring high contrast and pristine text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/20 transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/80 group-hover:to-ink/30" />
                    {/* Subtle warm marigold ambient hover tint */}
                    <div className="absolute inset-0 bg-marigold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Content: Only the color name and description */}
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-editorial italic font-semibold text-white drop-shadow-sm leading-tight mb-1">
                      {dye.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-amber-200/90 drop-shadow-xs mb-3">
                      {dye.colorName}
                    </p>

                    {/* Expandable description container: Revealed on hover */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isExpanded
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`pt-3 border-t border-white/20 transition-all duration-500 ${
                            isExpanded
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 translate-y-3 group-hover:translate-y-0 group-focus-visible:translate-y-0"
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                            {dye.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. KINETIC TYPOGRAPHIC STATEMENT (Delta DoubleCol / VerticalList Inspired) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-ink text-white py-24 md:py-36 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Massive Typography Collage */}
            <div className="lg:col-span-8">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.25em] text-marigold block mb-6">
                03 · Botanical Kinetic Statement
              </span>
              
              <h2 className="text-[clamp(34px,5.2vw,72px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-white mb-8">
                Marigold. Madder. Pomegranate. Indigo. Harda. Katha.
              </h2>

              <p className="text-xl sm:text-2xl text-white/70 font-light max-w-[700px] leading-relaxed mb-6">
                Zero coal-tar anilines. Zero disperse dyes. Art and agriculture united by clean textile chemistry.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="text-xs font-inter font-bold uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
                  100% Biodegradable Cellulose
                </span>
                <span className="text-xs font-inter font-bold uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
                  Alum & Iron Mordanting
                </span>
                <span className="text-xs font-inter font-bold uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
                  Biological Water Treatment
                </span>
              </div>
            </div>

            {/* Right Asymmetric Tactile Showcase */}
            <div className="lg:col-span-4 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src="/images/natural-dye-stack.jpg" 
                  alt="Folded naturally dyed garments in clean artisan palette" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-marigold block mb-1">
                    Plate 4.0 · The Earth Palette
                  </span>
                  <p className="text-xs text-white/85 font-light">
                    Every pigment originates from harvested roots, blossoms, and peels.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHAT WE LEAVE OUT (Garment Industry Exclusions & Hover Accordion) */}
      {/* ========================================================================= */}
      <section id="what-we-leave-out" className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                04 · Transparency & Exclusions
              </span>
              <h2 className="text-h2 font-editorial italic font-semibold text-ink leading-tight mb-4">
                What we leave out.
              </h2>
            </div>
            <p className="max-w-[480px] text-p1 text-muted-foreground font-light leading-relaxed">
              Clean textile chemistry is defined as much by what is excluded as what is included. Review our uncompromising standard of exclusions.
            </p>
          </div>

          {/* Exclusions Cards with Practical Garment Industry Background Photography & Hover Accordion */}
          <div className="space-y-4 sm:space-y-6">
            {EXCLUSION_ITEMS.map((item, idx) => {
              const isToggled = expandedExclusion === idx;

              return (
                <div 
                  key={item.number}
                  tabIndex={0}
                  onClick={() => setExpandedExclusion(isToggled ? null : idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpandedExclusion(isToggled ? null : idx);
                    }
                  }}
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 hover:border-marigold/60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold transition-all duration-500 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl select-none cursor-pointer"
                >
                  {/* Practical Garment Industry Implementation Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient scrim ensuring high contrast and pristine text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60 transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/80" />
                    {/* Subtle warm marigold ambient tint on hover */}
                    <div className="absolute inset-0 bg-marigold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  <div className="relative z-10">
                    {/* Top Row: Number, Title, and Animated Chevron Indicator */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-xs sm:text-sm font-inter font-bold tracking-widest text-marigold bg-marigold/15 border border-marigold/30 px-2.5 py-1 rounded-md">
                          {item.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-editorial italic font-semibold text-white drop-shadow-sm leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Animated Toggle Indicator */}
                      <div className={`w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white transition-all duration-300 transform ${
                        isToggled 
                          ? "rotate-180 bg-marigold text-ink border-marigold" 
                          : "group-hover:rotate-180 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Expandable Explanation Accordion: Opens on hover, closes on hover remove */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isToggled 
                          ? "grid-rows-[1fr]" 
                          : "grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div 
                          className={`pt-5 mt-5 border-t border-white/20 max-w-[940px] space-y-2 transition-all duration-500 ${
                            isToggled 
                              ? "opacity-100 translate-y-0" 
                              : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 translate-y-2 group-hover:translate-y-0"
                          }`}
                        >
                          <p className="text-p1 font-medium text-white leading-relaxed">
                            {item.lead}
                          </p>
                          <p className="text-p2 text-white/90 font-light leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TECHNICAL TERMS DEFINED PLAINLY (Glossary Grid) */}
      {/* ========================================================================= */}
      <section id="definitions" className="relative w-full bg-paper py-20 md:py-28 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="mb-14">
            <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
              05 · Clear Science
            </span>
            <h2 className="text-[clamp(28px,3.8vw,52px)] font-editorial italic font-semibold leading-[1.05] tracking-tight text-ink mb-4">
              Technical terms, defined plainly.
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-[500px]">
              Every scientific term in our literature is explained in plain, transparent language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-marigold block mb-2">
                Concept 01
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                What is a Mordant?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                A mineral compound that forms a chemical bond with natural dye molecules and textile fibers, anchoring the pigment so it resists washing and sunlight without synthetic resins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-marigold block mb-2">
                Concept 02
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                What are PFAS?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Per- and polyfluoroalkyl substances: synthetic chemical compounds with carbon-fluorine bonds that do not break down easily in the environment or human body, commonly used in textile stain-resistant finishes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-inter font-bold uppercase tracking-widest text-marigold block mb-2">
                Concept 03
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                Why Conventional Dyes Smell?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Petroleum-derived dyes require formaldehyde fixatives, heavy metals, and carrier solvents to bond with synthetic fabrics, off-gassing volatile organic compounds (VOCs) that can irritate sensitive skin.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full my-16">
        <FAQSection
          id="faq-accordion"
          items={FAQS_DATA["natural-dyeing"]}
          accentColor="marigold"
          title="Frequently asked questions about natural dyeing."
          subtitle="Common questions regarding botanical pigments, wash longevity, and water stewardship."
        />
      </section>

      {/* ========================================================================= */}
      {/* 9. SOURCES & CITATIONS */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <SourcesList sources={sources} lastUpdated="October 2026" />
      </section>

      {/* ========================================================================= */}
      {/* 10. SHARE BAR */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full py-8">
        <ShareBar title="Natural Dyeing: Colours Drawn Directly From Nature" urlPath="/educate/natural-dyeing" />
      </section>

      {/* ========================================================================= */}
      {/* 11. TRUST STRIP & RELATED PAGES */}
      {/* ========================================================================= */}
      <TrustStrip className="mt-16" />
      <RelatedPages pages={relatedPages} />

      {/* ========================================================================= */}
      {/* 12. CLOSING CTA (Shop by Colour) */}
      {/* ========================================================================= */}
      <section className="px-6 max-w-[1440px] mx-auto w-full mt-12 mb-20">
        <div className="bg-[#1d1814] rounded-2xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
            style={{ backgroundImage: "url('/images/hero-bg.png')" }} 
          />
          <span className="text-marigold font-inter font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
            Natural Palette
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px] relative z-10">
            Wear colour that was born in the earth.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed relative z-10">
            Explore our collection of organic innerwear dyed with Marigold, Madder root, and Pomegranate. Clean chemistry that breathes with your body.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary">
              Shop by Colour
            </Button>
            <Button href="/educate/skin-science" variant="secondary">
              Discover Skin Science
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
