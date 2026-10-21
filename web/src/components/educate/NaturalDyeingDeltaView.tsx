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
  ArrowRight, 
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

interface PolaroidItem {
  id: string;
  number: string;
  title: string;
  caption: string;
  image: string;
  rotation: number;
}

const POLAROIDS: PolaroidItem[] = [
  {
    id: "roots-alum",
    number: "01",
    title: "Madder & Natural Alum",
    caption: "Wild Rubia cordifolia roots & crystalline mineral alum rocks",
    image: "/images/madder-roots-alum.jpg",
    rotation: -5
  },
  {
    id: "marigold-pot",
    number: "02",
    title: "Marigold Decoction",
    caption: "Simmering temple blossom petals releasing warm sunshine ochre",
    image: "/images/marigold-extraction.jpg",
    rotation: 1.5
  },
  {
    id: "finished-textile",
    number: "03",
    title: "Botanical Palette",
    caption: "100% GOTS organic cotton garments infused with earth pigments",
    image: "/images/natural-dye-stack.jpg",
    rotation: 6
  }
];

interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  image: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Gentle Water Extraction",
    tagline: "Decoction: 60°C – 80°C",
    description: "Sun-dried flowers, roots, and fruit rinds are simmered in filtered water at low temperatures, gently releasing active botanical colorants without petroleum solvents or chemical carriers.",
    metric: "Zero petrochemical carrier solvents",
    image: "/images/marigold-extraction.jpg"
  },
  {
    number: "02",
    title: "Clean Mineral Binding",
    tagline: "Alum & Iron Mordanting",
    description: "We use food-grade mineral salts—specifically natural Alum and Iron—to create permanent molecular bonds between botanical pigments and cotton cellulose, avoiding synthetic resin binders.",
    metric: "Food-safe minerals · Zero toxic heavy metals",
    image: "/images/madder-roots-alum.jpg"
  },
  {
    number: "03",
    title: "Responsible Biological Effluent",
    tagline: "Circular Water Stewardship",
    description: "Because our dye baths consist solely of organic plant residues and safe mineral salts, process water undergoes multi-stage biological oxygen filtration before clean re-use or safe discharge.",
    metric: "Closed-loop filtration · Zero synthetic sludge",
    image: "/images/natural-dye-hero.jpg"
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
    category: "Rescued Waste"
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
    category: "Ayurvedic Heritage"
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
    category: "Rescued Waste"
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
    category: "Wild Harvest"
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
    category: "Wild Harvest"
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
    category: "Ayurvedic Heritage"
  }
];

interface ExclusionItem {
  number: string;
  title: string;
  type: "Excluded" | "Included";
  lead: string;
  detail: string;
}

const EXCLUSION_ITEMS: ExclusionItem[] = [
  {
    number: "001",
    title: "Synthetic Azo Dyes",
    type: "Excluded",
    lead: "Roughly 70% of commercial garments rely on petroleum-derived synthetic azo colorants.",
    detail: "Under body heat and sweat, specific azo chemical bonds can cleave into aromatic amines known to provoke cutaneous irritation and allergic contact dermatitis. Good Karma is 100% azo-free."
  },
  {
    number: "002",
    title: "Elastane, Spandex & Polyurethane",
    type: "Excluded",
    lead: "Even '95% cotton' underwear blends contain synthetic polyurethane stretch filaments.",
    detail: "These plastic threads shed microscopic and nanoscopic polymer filaments against the skin and create a non-porous moisture trap. We craft our underwear with 100% unblended cotton cellulose."
  },
  {
    number: "003",
    title: "PFAS & Fluorinated Finishes",
    type: "Excluded",
    lead: "Per- and polyfluoroalkyl substances are applied to textiles for artificial stain resistance.",
    detail: "These persistent 'forever chemicals' resist environmental degradation and bioaccumulate. Our garments are finished without stain-repellent coatings or fluorinated chemistry."
  },
  {
    number: "004",
    title: "Toxic Heavy-Metal Mordants",
    type: "Included",
    lead: "We never use toxic chrome, copper, or tin salts to artificially force pigment adhesion.",
    detail: "We rely exclusively on food-grade Alum (potassium aluminum sulfate) and natural Iron mineral salts. These safe earth minerals bind natural pigments to cotton permanently."
  }
];

export function NaturalDyeingDeltaView({ sources, relatedPages }: NaturalDyeingDeltaViewProps) {
  // 1. Polaroid Hover State
  const [isPolaroidHovered, setIsPolaroidHovered] = useState(false);
  const [activePolaroidIndex, setActivePolaroidIndex] = useState<number | null>(null);

  // 2. Manifesto Scroll Word Reveal
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0);

  // 3. Process Cards Hover State
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // 4. Botanical Dye Selector State
  const [selectedDye, setSelectedDye] = useState<DyeBotanical>(DYE_BOTANICALS[0]);

  // 5. Exclusions Accordion State
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
    <div className="flex flex-col w-full bg-background overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH DELTA-INSPIRED INTERACTIVE POLAROIDS CLUSTER */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white pt-10 pb-16 md:pb-28 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Breadcrumb & Technical Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pt-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link href="/educate" className="hover:text-ink transition-colors">Educate</Link>
              <span>/</span>
              <span className="text-marigold font-semibold">Natural Dyeing</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-ink/70 bg-paper px-3.5 py-1.5 rounded-full border border-border/60">
              <span className="w-2 h-2 rounded-full bg-marigold animate-pulse" />
              <span>Botanical Craft // 100% Plant Pigments</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
            
            {/* Left Column: Bold Typography & Promise */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-4">
                Section 01 · Botanical Chemistry
              </span>

              <h1 className="text-[clamp(36px,5.8vw,80px)] font-editorial italic font-semibold leading-[0.95] tracking-tight text-ink mb-6">
                Colours drawn directly from nature.
              </h1>

              <p className="text-p1 text-ink/80 font-light max-w-[580px] leading-relaxed mb-6">
                Marigold blossoms, wild madder roots, and sun-dried pomegranate peels. We replace petroleum aniline colorants with living plant pigments, ensuring non-sensitizing textile chemistry touches your skin.
              </p>

              {/* Who This Page Is For Pill */}
              <div className="inline-flex items-center text-xs font-medium text-muted-foreground bg-paper border border-border/70 rounded-full px-4 py-2 mb-8">
                Who this page is for: <strong className="ml-1 text-ink font-medium">Conscious dressers, sensitive skin, and transparent chemistry seekers</strong>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button href="#dye-library" variant="primary">
                  Explore Dye Library
                </Button>
                <Button href="#process" variant="secondary">
                  The Sourcing Process
                </Button>
              </div>
            </div>

            {/* Right Column: Signature Delta-Inspired Interactive Polaroid Cluster */}
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
                {POLAROIDS.map((p, idx) => {
                  const isActive = activePolaroidIndex === idx;

                  // Dynamic transformation styles when cluster is hovered
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
                      {/* Photo Container with white border */}
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

                      {/* Polaroid Caption */}
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

              {/* Hover Cue */}
              <div className="absolute -bottom-2 text-center text-xs font-mono text-muted-foreground/80 tracking-wide pointer-events-none">
                ✦ Hover to explore botanical specimens
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 5,000-YEAR HERITAGE MANIFESTO (Scroll Word-by-Word Reveal) */}
      {/* ========================================================================= */}
      <section 
        ref={manifestoRef}
        className="relative w-full bg-white pt-16 md:pt-28 pb-16 md:pb-24 border-b border-border/40"
      >
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-6">
            02 · Ancient Heritage & Clean Chemistry
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
      </section>

      {/* Brand About Strip with Dark Logo */}
      <AboutStrip className="my-8" />

      {/* ========================================================================= */}
      {/* 3. RESPONSIBLE DYEING CYCLE (Delta Course Cards-Inspired Architecture) */}
      {/* ========================================================================= */}
      <section id="process" className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                03 · Sourcing & Production Cycle
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                How nature becomes colour.
              </h2>
            </div>
            <p className="max-w-[460px] text-p1 text-muted-foreground font-light leading-relaxed">
              Our 3-step closed-loop production replaces synthetic azo baths with low-temperature decoction, gentle mineral mordants, and responsible biological effluent handling.
            </p>
          </div>

          {/* Delta-Inspired Vertical Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group relative bg-white rounded-2xl overflow-hidden border border-border/60 hover:border-marigold/60 transition-all duration-500 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Step Number */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-ink font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Step {step.number}
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono text-white/90 uppercase tracking-widest block mb-0.5">
                      {step.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-editorial italic font-semibold text-ink mb-3 group-hover:text-marigold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-border/40 flex items-center justify-between text-xs font-mono text-ink/70">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-marigold" />
                      {step.metric}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-marigold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE BOTANICAL DYE LIBRARY BENTO (Modular 6-Source Bento Grid) */}
      {/* ========================================================================= */}
      <section id="dye-library" className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                04 · Living Palette Bento
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                The Botanical Dye Library.
              </h2>
            </div>
            <p className="max-w-[500px] text-p1 text-muted-foreground font-light leading-relaxed">
              Our formulation begins with 6 core Indian botanical sources, expanding modularly as new natural shade recipes are mastered. Select any plant to inspect its chemistry and sourcing.
            </p>
          </div>

          {/* Interactive Library Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {DYE_BOTANICALS.map((dye) => {
              const isSelected = selectedDye.id === dye.id;

              return (
                <div
                  key={dye.id}
                  onClick={() => setSelectedDye(dye)}
                  className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? "bg-white border-marigold shadow-xl ring-2 ring-marigold/20" 
                      : "bg-paper/80 border-border/60 hover:bg-white hover:border-border hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top Swatch & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full shadow-inner border border-black/10 transition-transform duration-500 group-hover:scale-110" 
                          style={{ backgroundColor: dye.colorHex }} 
                        />
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
                            {dye.latin}
                          </span>
                          <span className="text-xs font-semibold text-ink block" style={{ color: dye.colorHex }}>
                            {dye.colorName}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-paper border border-border/50 text-muted-foreground">
                        {dye.category}
                      </span>
                    </div>

                    {/* Dye Common Name */}
                    <h3 className="text-2xl font-editorial italic font-semibold text-ink mb-3 group-hover:text-marigold transition-colors">
                      {dye.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {dye.description}
                    </p>
                  </div>

                  {/* Sourcing / Chemical Compound Tag */}
                  <div className="pt-5 border-t border-border/40 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                    <span>{dye.activeCompound}</span>
                    <span className="text-marigold font-bold text-xs">Explore →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Botanical Detail Banner */}
          <div className="bg-paper rounded-2xl p-8 lg:p-12 border border-border/60 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md shrink-0 border-2 border-white ring-1 ring-black/10" 
                style={{ backgroundColor: selectedDye.colorHex }} 
              />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-marigold block mb-1">
                  Active Botanical Formulation · {selectedDye.category}
                </span>
                <h4 className="text-2xl sm:text-3xl font-editorial italic font-semibold text-ink mb-2">
                  {selectedDye.name} ({selectedDye.latin})
                </h4>
                <p className="text-sm text-muted-foreground font-light max-w-[650px] leading-relaxed">
                  <strong>Sourcing Origin:</strong> {selectedDye.source}. <br/>
                  <strong>Phytochemical Agent:</strong> {selectedDye.activeCompound}.
                </p>
              </div>
            </div>

            <Button href="/products" variant="secondary" className="shrink-0">
              Shop {selectedDye.name} Shades
            </Button>
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
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-marigold block mb-6">
                05 · Botanical Kinetic Statement
              </span>
              
              <h2 className="text-[clamp(34px,5.2vw,72px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-white mb-8">
                Marigold. Madder. Pomegranate. Indigo. Harda. Katha.
              </h2>

              <p className="text-xl sm:text-2xl text-white/70 font-light max-w-[700px] leading-relaxed mb-6">
                Zero coal-tar anilines. Zero disperse dyes. Art and agriculture united by clean textile chemistry.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="text-xs font-mono uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
                  100% Biodegradable Cellulose
                </span>
                <span className="text-xs font-mono uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
                  Alum & Iron Mordanting
                </span>
                <span className="text-xs font-mono uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-white/90">
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
                  <span className="text-[10px] font-mono uppercase tracking-widest text-marigold block mb-1">
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
      {/* 6. WHAT WE LEAVE OUT (Delta Academy Directory-Inspired Accordion) */}
      {/* ========================================================================= */}
      <section id="what-we-leave-out" className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
                06 · Transparency & Exclusions
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                What we leave out.
              </h2>
            </div>
            <p className="max-w-[460px] text-p1 text-muted-foreground font-light leading-relaxed">
              Clean textile chemistry is defined as much by what is excluded as what is included. Review our uncompromising standard of exclusions.
            </p>
          </div>

          {/* Directory List (Delta Academy Item Architecture) */}
          <div className="divide-y divide-border/60 border-y border-border/60">
            {EXCLUSION_ITEMS.map((item, idx) => {
              const isExpanded = expandedExclusion === idx;

              return (
                <div 
                  key={item.number}
                  className="py-8 transition-colors hover:bg-paper/40 cursor-pointer"
                  onClick={() => setExpandedExclusion(isExpanded ? null : idx)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Number and Title */}
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-muted-foreground/70 tracking-widest">
                        ({item.number})
                      </span>
                      <h3 className="text-xl sm:text-2xl font-editorial italic font-semibold text-ink">
                        {item.title}
                      </h3>
                    </div>

                    {/* Status Pill & Toggle */}
                    <div className="flex items-center gap-4">
                      <span className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                        item.type === "Excluded" 
                          ? "bg-rose-50 text-rose-800 border-rose-200" 
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                      }`}>
                        {item.type === "Excluded" ? "Strictly Prohibited" : "Sole Mineral Fixative"}
                      </span>

                      <div className={`w-8 h-8 rounded-full border border-border/60 flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-ink text-white" : "text-ink"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                  </div>

                  {/* Expandable Explanation Drawer */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-48 opacity-100 mt-6 pt-6 border-t border-border/40" : "max-h-0 opacity-0"
                  }`}>
                    <div className="max-w-[900px] space-y-2 pl-0 md:pl-16">
                      <p className="text-sm font-medium text-ink leading-relaxed">
                        {item.lead}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {item.detail}
                      </p>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold block mb-3">
              07 · Clear Science
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
              <span className="text-[10px] font-mono uppercase tracking-widest text-marigold block mb-2">
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
              <span className="text-[10px] font-mono uppercase tracking-widest text-marigold block mb-2">
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
              <span className="text-[10px] font-mono uppercase tracking-widest text-marigold block mb-2">
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
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
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
