"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { FAQSection } from "@/components/educate/FAQSection";
import { SourcesList, type SourceItem } from "@/components/educate/SourcesList";
import { RelatedPages, type RelatedPageItem } from "@/components/educate/RelatedPages";
import { ShareBar } from "@/components/educate/ShareBar";
import { FAQS_DATA } from "@/data/faqs";
import { getPublishedPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { 
  DoctorResourcePackForm, 
  DoctorConsultationForm, 
  DoctorNewsletterForm 
} from "@/components/educate/DoctorForms";
import { 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  BookOpen, 
  ChevronRight, 
  Download, 
  Mail, 
  Layers, 
  Sparkles, 
  Wind, 
  Droplets, 
  Ban, 
  Stethoscope 
} from "lucide-react";

interface ForDoctorsEditorialViewProps {
  sources: SourceItem[];
  relatedPages: [RelatedPageItem, RelatedPageItem];
}

interface DoctorPolaroid {
  id: string;
  number: string;
  title: string;
  caption: string;
  image: string;
}

const DOCTOR_POLAROIDS: DoctorPolaroid[] = [
  {
    id: "barrier-recovery",
    number: "01",
    title: "Cutaneous Barrier Health",
    caption: "Evidence-based microclimate management for dermatological practice",
    image: "/images/doctor-trust.jpg"
  },
  {
    id: "clinic-swatches",
    number: "02",
    title: "Practice Swatch Protocols",
    caption: "Untreated 100% GOTS organic cotton tactile swatch inspection",
    image: "/images/doctor-swatches.jpg"
  },
  {
    id: "unblended-fiber",
    number: "03",
    title: "Pure Cotton Hand Feel",
    caption: "Zero synthetic elastane or chemical softeners next to sensitive skin",
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
  accent: "sage" | "mauve" | "marigold";
  bgClass: string;
  plate: string;
  tag: string;
}

const CLINICAL_ACCORDION_CARDS: ManifestoAccordionCard[] = [
  {
    number: "01",
    category: "Rationale",
    title: "Passive Microclimate Convection",
    text: "Unblended 100% GOTS organic cotton hollow fibers facilitate continuous convective airflow, preventing the occlusive sweat microclimate that compromises vulnerable stratum corneum barriers.",
    detail: "When synthetic textiles trap humidity next to vulnerable skin, prolonged epidermal maceration and friction compromise the protective lipid matrix. Natural cotton lumens dissipate moisture vapor continuously.",
    image: "/images/cellulose-breathability.jpg",
    accent: "sage",
    bgClass: "bg-[#4D5749]",
    plate: "Plate 2.1 — Convective Heat Dissipation",
    tag: "Hollow cotton lumen airflow & non-occlusive microclimate"
  },
  {
    number: "02",
    category: "Standard",
    title: "Resin & Elastane Elimination",
    text: "We omit synthetic polyurethane elastane cores, formaldehyde-releasing wrinkle-resistant baths, and petroleum disperse azo dyes that frequently act as contact sensitisers.",
    detail: "Conventional innerwear often conceals 5% to 10% synthetic spandex and chemical softeners behind simple fiber tags. We use 100% cotton rib-knit elasticity to eliminate synthetic cores.",
    image: "/images/synthetic-hand.jpg",
    accent: "mauve",
    bgClass: "bg-[#7B535B]",
    plate: "Plate 2.2 — Contact Sensitiser Exclusion",
    tag: "Zero synthetic resin finishes & chemical exclusion audit"
  },
  {
    number: "03",
    category: "Integrity",
    title: "Plain Ingredient Transparency",
    text: "Every component is declared without ambiguity. Our waistband elastics contain natural rubber latex, fully stated so clinicians can safeguard patients with known latex sensitivities.",
    detail: "Complete ingredient disclosure on every package gives healthcare practitioners total clinical confidence when guiding patients with atopic eczema, vulvovaginitis, or sensitive skin.",
    image: "/images/doctor-swatches.jpg",
    accent: "marigold",
    bgClass: "bg-[#B06B1E]",
    plate: "Plate 2.3 — Clinical Practice Swatches",
    tag: "Complete material declaration & verified clinic transparency"
  }
];

export function ForDoctorsEditorialView({ sources, relatedPages }: ForDoctorsEditorialViewProps) {
  // 1. Polaroid Hover State
  const [isPolaroidHovered, setIsPolaroidHovered] = useState(false);
  const [activePolaroidIndex, setActivePolaroidIndex] = useState<number | null>(null);

  // 2. Continuous Hover Accordion State
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // 3. Clinical Action Tab State
  const [activeActionTab, setActiveActionTab] = useState<"swatches" | "pack" | "newsletter">("swatches");

  // 4. Scroll-lit Manifesto
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

  const manifestoParagraph1 = "Managing chronic contact dermatitis and barrier fragility requires addressing not only topical pharmacology, but the continuous 24-hour microclimate created by clothing.";
  const manifestoParagraph2 = "Good Karma provides an unblended 100% GOTS organic cotton baseline with plant dyes and zero synthetic resins to support patient cutaneous barrier recovery.";

  const words1 = manifestoParagraph1.split(" ");
  const words2 = manifestoParagraph2.split(" ");
  const totalWords = words1.length + words2.length;

  const doctorPosts = getPublishedPosts().filter((p) => p.category === "from-doctors");

  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-sage/20">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Editorial Display Typography + Interactive Polaroid Stack */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
          {/* Left Column: Bold Typography & Rationale */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-sage">
                Section 01 · Clinical Dialogue & Practice Integration
              </span>
              <span className="text-[11px] font-inter font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Dermatology & Gynaecology
              </span>
            </div>

            <h1 className="text-[clamp(36px,5.8vw,80px)] font-editorial italic font-semibold leading-[0.95] tracking-tight text-ink mb-6">
              A considered textile standard for patient care.
            </h1>

            <p className="text-p1 text-ink/80 font-light max-w-[580px] leading-relaxed mb-8">
              Clinical dialogue, cutaneous microclimate management, and practice resources for dermatologists, gynaecologists, and healthcare professionals seeking breathable, unblended cotton to support cutaneous barrier recovery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="#clinical-actions" variant="primary">
                Request Practice Swatches
              </Button>
              <Button href="#clinical-rationale" variant="secondary">
                Review Clinical Rationale
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
            <div className="absolute w-72 h-72 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

            {/* Interactive Polaroid Stack */}
            <div className="relative w-full max-w-[380px] h-[340px] flex items-center justify-center">
              {DOCTOR_POLAROIDS.map((p, idx) => {
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
              <span className="w-2 h-2 rounded-full bg-sage" />
              100% GOTS Unblended Organic Cotton
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mauve" />
              Zero Synthetic Spandex Cores
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-marigold" />
              Living Plant Dyes & Mineral Fixatives
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
            Peer-Reviewed Practice Integration
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLINICAL MANIFESTO & CONTINUOUS BRAND-COLORED ACCORDION BANNER */}
      {/* ========================================================================= */}
      <section id="clinical-rationale" className="relative w-full bg-paper py-20 md:py-32 border-y border-border/40">
        <div 
          ref={manifestoRef}
          className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-24"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-4">
            02 · Clinical Manifesto
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
                      isLit ? "opacity-100 text-sage font-semibold" : "opacity-25 text-black"
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
            {CLINICAL_ACCORDION_CARDS.map((card, idx) => {
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

                        {/* Deep biological detail on hover expansion */}
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
                          <span>{isExpanded ? "Active Clinical View" : "Hover to explore"}</span>
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
      {/* 3. DARK BREAKOUT: Synthetic Occlusion vs. Natural Equilibrium */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-ink text-white py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16 pb-8 border-b border-white/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
                03 · Comparative Cutaneous Physics
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-white">
                Occlusive microclimate vs. natural equilibrium.
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/70 max-w-[480px] font-light leading-relaxed">
              Evaluating the 24-hour physiological interaction between textile fibers and the stratum corneum in vulnerable patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Synthetic Occlusion Profile */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Conventional Textiles
                  </span>
                  <Ban className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-2xl font-editorial italic text-white mb-4">
                  Synthetic Elastane & Polyester Occlusion
                </h3>
                <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                  Solid extruded petroleum filaments create a dense moisture-impermeable barrier that traps sweat next to the epidermis. Elevated humidity softens corneocytes, allowing mechanical friction to compromise the lipid matrix.
                </p>

                <ul className="space-y-4 text-xs font-mono text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Solid Core Fibers:</strong> Extruded nylon/polyester lacks internal lumens, preventing vapor absorption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Chemical Disperse Dyes:</strong> Low molecular weight azo colorants can migrate during perspiration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span><strong>Resin Finishes:</strong> Melamine and glyoxal anti-wrinkle baths act as frequent contact allergens.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-rose-300">
                <span>Microclimatic Consequence:</span>
                <span className="font-semibold">Sweat Trapping & Maceration</span>
              </div>
            </div>

            {/* Right Column: Good Karma Clinical Baseline */}
            <div className="bg-white/5 border border-sage/40 rounded-2xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-sage/20 text-emerald-300 border border-sage/40">
                    Good Karma Standard
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-editorial italic text-white mb-4">
                  100% GOTS Organic Cotton Convection
                </h3>
                <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                  Hollow cellulose fibers with helical ribbon convolutions passively channel moisture vapor outward. Rib-knit mechanical elasticity replaces synthetic elastane cores entirely, maintaining an ambient physiological microclimate.
                </p>

                <ul className="space-y-4 text-xs font-mono text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span><strong>Hollow Cotton Lumen:</strong> Naturally porous capillary channels permit passive convective airflow.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span><strong>Living Plant Pigments:</strong> Natural marigold, madder root, and pomegranate bound with mineral alum.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span><strong>Zero Synthetic Resins:</strong> Untreated cotton fibers preserve natural soft touch without chemical coatings.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-300 relative z-10">
                <span>Microclimatic Consequence:</span>
                <span className="font-semibold">Continuous Cutaneous Breathability</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRACTICE INTEGRATION BENTO (4 Pillars of Medical Collaboration) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
                04 · Practice Collaboration Model
              </span>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                How we work with healthcare practitioners.
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-[480px] font-light leading-relaxed">
              We believe medical trust should never be entangled with commercial retail transactions. Our collaboration focuses purely on scientific inquiry, clinical resources, and patient welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-sage/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center font-bold mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  Editorial Contributions
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  We invite verified medical practitioners to contribute objective commentary and review educational briefs on cutaneous barrier health, contact allergy mechanisms, and fabric breathability.
                </p>
              </div>
              <span className="text-[11px] font-mono text-sage uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Peer-Reviewed Content
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-sage/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center font-bold mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  Physical Swatch Kits
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Accredited practices receive complimentary physical fabric swatch cards and tactile sample folds. Patients can evaluate untreated organic cotton hand-feel directly during clinical consultations.
                </p>
              </div>
              <span className="text-[11px] font-mono text-sage uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Clinic Sample Sets
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-sage/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center font-bold mb-6">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  Printable Tear-Off Guides
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Clear, evidence-based patient handouts covering textile contact allergens, garment washing protocols for atopic eczema, and synthetic versus natural fiber microclimate considerations.
                </p>
              </div>
              <span className="text-[11px] font-mono text-sage uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Patient PDF Resources
              </span>
            </div>

            {/* Pillar 4 */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 hover:border-sage/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center font-bold mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial italic text-ink mb-3">
                  Zero Commercial Commissions
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Good Karma provides no referral payments, promotional kickbacks, or retail incentives. Clinicians recommend pure cotton innerwear solely when it aligns with evidence-based patient care.
                </p>
              </div>
              <span className="text-[11px] font-mono text-sage uppercase tracking-wider block mt-6 pt-4 border-t border-border/40">
                Complete Objectivity
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLINICAL ACTION HUB: Tabbed Swatches, Resource Pack & Newsletter */}
      {/* ========================================================================= */}
      <section id="clinical-actions" className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
              05 · Clinical Resources & Practice Integration
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink mb-4">
              Access clinical tools for your practice.
            </h2>
            <p className="text-p1 text-muted-foreground font-light leading-relaxed">
              Select an action below to request complimentary tactile sample swatches, download our 2026 practice briefing pack, or subscribe to quarterly dermatological briefings.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-white border border-border/80 rounded-full shadow-2xs">
              <button
                onClick={() => setActiveActionTab("swatches")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeActionTab === "swatches"
                    ? "bg-sage text-white shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                Request Swatch Kit
              </button>
              <button
                onClick={() => setActiveActionTab("pack")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeActionTab === "pack"
                    ? "bg-sage text-white shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                Download PDF Pack
              </button>
              <button
                onClick={() => setActiveActionTab("newsletter")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeActionTab === "newsletter"
                    ? "bg-sage text-white shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                Clinical Newsletter
              </button>
            </div>
          </div>

          {/* Tab Content Panes */}
          <div className="bg-white rounded-3xl border border-border/70 p-8 sm:p-12 shadow-sm">
            {activeActionTab === "swatches" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sage block mb-2">
                    Complimentary Practice Set
                  </span>
                  <h3 className="text-2xl font-editorial italic font-semibold text-ink mb-4">
                    Tactile Cotton Swatch Kits
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    We provide accredited dermatologists, gynaecologists, and healthcare practices with physical fabric swatch cards and patient consultation tear-sheets upon verification of clinical credentials.
                  </p>
                  <div className="space-y-3 text-xs font-mono text-ink/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sage" />
                      <span>100% GOTS Organic Cotton Rib-Knit swatches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sage" />
                      <span>Natural botanical dye sample shade cards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sage" />
                      <span>Patient tear-off guides for atopic dermatitis</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-paper p-6 sm:p-8 rounded-2xl border border-border/60">
                  <DoctorConsultationForm />
                </div>
              </div>
            )}

            {activeActionTab === "pack" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full mb-3">
                    <Download className="w-3.5 h-3.5" /> Practice PDF Kit
                  </div>
                  <h3 className="text-2xl font-editorial italic font-semibold text-ink mb-4">
                    2026 Clinical Briefing & Handouts
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Instant access to printable patient infographics on synthetic vs. organic cotton microclimates, washing guidelines for eczema, and our full chemical ingredient exclusion disclosures.
                  </p>
                  <div className="p-4 bg-paper rounded-xl border border-border/50 text-xs font-mono text-muted-foreground mb-4">
                    Includes: GOTS Toxicology Audits · Synthetic Residue Literature · Patient Guidance Sheets
                  </div>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md bg-paper p-6 sm:p-8 rounded-2xl border border-border/60">
                    <DoctorResourcePackForm />
                  </div>
                </div>
              </div>
            )}

            {activeActionTab === "newsletter" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full mb-3">
                    <Mail className="w-3.5 h-3.5" /> Quarterly Digest
                  </div>
                  <h3 className="text-2xl font-editorial italic font-semibold text-ink mb-4">
                    Textile Dermatology Briefings
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Receive quarterly research summaries covering peer-reviewed literature on contact allergens, microclimate management, and textile toxicology. Strictly clinical—zero promotional spam.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md bg-paper p-6 sm:p-8 rounded-2xl border border-border/60">
                    <DoctorNewsletterForm />
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FROM OUR DOCTORS: Clinician Journal Articles */}
      {/* ========================================================================= */}
      {doctorPosts.length > 0 && (
        <section className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
          <div className="max-w-[1440px] mx-auto w-full">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
                  06 · Clinical Journal
                </span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
                  From our clinicians.
                </h2>
              </div>
              <Link 
                href="/blog?filter=from-doctors"
                className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1.5"
              >
                View all clinician notes <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctorPosts.slice(0, 3).map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-paper rounded-2xl border border-border/60 p-8 hover:border-sage/40 transition-all justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold text-sage uppercase tracking-wider">
                        {post.specialtyTag}
                      </span>
                      {post.isSampleContent && (
                        <span className="text-[10px] font-mono bg-marigold/10 text-marigold px-2 py-0.5 rounded">
                          SAMPLE
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-editorial italic font-semibold text-ink mb-3 group-hover:text-sage transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light line-clamp-3 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/40 text-[11px] text-muted-foreground">
                    <span className="font-medium text-ink block">{post.author.name}</span>
                    <span>{post.author.title}</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. CLINICIAN FAQS */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto w-full">
          <FAQSection 
            items={FAQS_DATA["for-doctors"]} 
            title="Clinician FAQs"
            subtitle="Common inquiries from dermatologists, gynaecologists, and healthcare practices regarding materials, microclimate biology, and clinical collaboration."
            accentColor="sage"
          />
        </div>
      </section>

      {/* Sources & Citations */}
      <section className="w-full bg-white py-16 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto w-full">
          <SourcesList sources={sources} lastUpdated="October 2026" />
        </div>
      </section>

      {/* Share Bar */}
      <section className="w-full bg-paper py-8 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto w-full">
          <ShareBar 
            title="Clinical Rationale & Practice Resources — Good Karma" 
            urlPath="/educate/for-doctors" 
            showColleagueShare={true} 
          />
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages pages={relatedPages} />

      {/* ========================================================================= */}
      {/* 8. CLOSING CLINICAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full my-16 md:my-24">
        <div className="bg-ink rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-sage font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
            Clinical Practice Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-editorial italic font-semibold text-white mb-6 max-w-[700px] relative z-10 leading-tight">
            Partner with us to support your patients' barrier health.
          </h2>
          <p className="text-sm md:text-base text-white/80 font-light max-w-[550px] mb-10 leading-relaxed relative z-10">
            Order complimentary practice swatch cards or connect with our materials team regarding clean cotton innerwear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button href="#clinical-actions" variant="primary">
              Request Practice Swatches
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