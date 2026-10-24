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
  Thermometer, 
  Wind, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  Layers,
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface SkinScienceFluxViewProps {
  sources: SourceItem[];
  relatedPages: [RelatedPageItem, RelatedPageItem];
}

interface DeepTopic {
  id: string;
  label: string;
  tag: string;
  title: string;
  lead: string;
  image: string;
  figureLabel: string;
  source: string;
}

const DEEP_TOPICS: DeepTopic[] = [
  {
    id: "intimate-comfort",
    label: "01 Intimate Comfort",
    tag: "Comfort & Humidity",
    title: "Intimate comfort and cutaneous microclimates.",
    lead: "Skin in the intimate zone is uniquely delicate, characterized by high nerve density, anatomical contours, and continuous moisture production. During everyday wear, non-breathable synthetic fabrics create an occlusive barrier that restricts ambient air exchange, trapping body heat and sweat. Dermatological and gynaecological research suggests that prolonged moisture retention can macerate the stratum corneum, weakening its defensive integrity and fostering an environment associated with friction chafing, contact dermatitis, and microflora disruption. Breathable, 100% unblended organic cotton is commonly advised by clinicians because its hollow cellulose fibres passively absorb moisture vapor, supporting a balanced microclimate.",
    image: "/images/designed-for-body.jpg",
    figureLabel: "Fig 1.1 — Continuous intimate microclimate ventilation",
    source: "Runeman, B. (2008), Clinics in Dermatology."
  },
  {
    id: "conventional-fabric",
    label: "02 Textile Chemistry",
    tag: "Chemical Residues",
    title: "What conventional textiles can contain.",
    lead: "Synthetic and conventionally processed garments often rely on extensive chemical processing to achieve softness, anti-wrinkle performance, and vibrant coloration. These treatments can introduce disperse and azo dyes, formaldehyde-releasing resins, per- and polyfluoroalkyl substances (PFAS) for stain resistance, and trace heavy-metal mordants. While international regulatory frameworks establish statutory limit values for individual substances, chemical residues may remain adhered to synthetic fibres. Under physiological conditions involving skin warmth and perspiration, research indicates these residues can migrate toward the epidermis. Good Karma eliminates synthetic finishes and petrochemical azo pigments entirely, aiming to lower the cumulative chemical load in direct contact with your skin every day.",
    image: "/images/polyester-skin-contact.jpg",
    figureLabel: "Fig 1.2 — Microscopic polyester weave & skin contact interface",
    source: "Hatch & Maibach (1995), Contact Dermatitis; ECHA (2023)."
  },
  {
    id: "microplastics-nanoplastics",
    label: "03 Nanoplastics",
    tag: "Emerging Science",
    title: "Microplastics and nanoplastics in everyday apparel.",
    lead: "Break a plastic bottle into pieces and you get microplastics; grind them much finer into the sub-micron realm and you reach nanoplastics. Both share the exact same synthetic polymer chemistry, but nanoplastics operate at cellular dimensions. Synthetic garments—especially polyester, nylon, and elastane—shed millions of microscopic and nanoscopic polymer filaments during routine washing and everyday mechanical body friction. While environmental science has documented synthetic particle dispersion across global waterways, medical research evaluating what continuous epidermal contact with nanoplastics means for skin barrier permeability and systemic absorption is still actively emerging. Good Karma relies entirely on biodegradable natural cotton cellulose.",
    image: "/images/synthetic-hand.jpg",
    figureLabel: "Fig 1.3 — Synthetic fiber fragmentation dynamics",
    source: "European Environment Agency (EEA) (2022)."
  },
  {
    id: "heat-comfort-men",
    label: "04 Thermal Equilibrium",
    tag: "Thermal Regulation [VERIFY]",
    title: "Heat regulation and intrascrotal comfort for men.",
    lead: "Physiological heat and moisture accumulation around the groin represent a common reason breathable, looser underwear is suggested for men. Scrotal thermoregulation functions within an anatomical temperature window cooler than core body heat. Research suggests that tight, synthetic underwear constructed from non-porous elastane or polyester blends insulates scrotal heat, leading to elevated temperatures associated with changes in sperm motility. Unblended, lightweight organic cotton allows passive convective airflow and natural thermal dissipation, helping keep things cooler and supporting an ambient anatomical microclimate throughout daily physical activity.",
    image: "/images/daily-comfort.jpg",
    figureLabel: "Fig 1.4 — Groin microclimate thermal equilibrium",
    source: "Jung, A. & Schill, W. B. (2000), International Journal of Andrology. [VERIFY]"
  },
  {
    id: "lower-exposure",
    label: "05 Cumulative Exposure",
    tag: "Ingredient Transparency",
    title: "Lowering your cumulative chemical exposure.",
    lead: "Certified organic cotton, plant-derived botanical dyes, and natural fixatives like alum and iron mean fewer synthetic dyes and finishes against your skin. Conventional apparel often conceals proprietary trade-secret chemical washes, softener baths, and fluorinated repellents behind simple fiber labels. Good Karma operates with complete transparency: our elastic contains natural rubber latex, and every material is listed on the box. By prioritizing untreated organic fibres and plant pigments, we provide a gentle, considered alternative designed to lower everyday dermal chemical contact.",
    image: "/images/cotton-hand.png",
    figureLabel: "Fig 1.5 — Untreated 100% GOTS organic cotton hand feel",
    source: "Global Organic Textile Standard (GOTS) v7.0; ECHA."
  },
  {
    id: "factory-skin-soil",
    label: "06 Factory to Soil",
    tag: "Complete Lifecycle",
    title: "From factory to skin to soil: The textile continuum.",
    lead: "Dyes and finishes touch the people who make a fabric, the water that carries leftovers away and, finally, you. Plant-based dyes shorten that chain, though growing them takes land and water too. Botanical dyeing fundamentally shortens this industrial chain by utilizing renewable agricultural residues like marigold blossoms, madder roots, and pomegranate peels instead of petroleum synthesis. However, cultivating dye crops requires arable land and fresh water, and organic waste still requires responsible biological treatment. Understanding this entire continuum ensures that textile choices respect worker safety, water conservation, and soil health.",
    image: "/images/natural-dye-stack.jpg",
    figureLabel: "Fig 1.6 — Botanical dye extraction & agricultural waste upcycling",
    source: "Saxena & Raja (2014), Springer Sustainable Textiles."
  }
];

interface ManifestoAccordionCard {
  number: string;
  label: string;
  heading: string;
  supportingLine: string;
  body: string;
  image: string;
  scaleClass: string;
  accent: "mauve" | "marigold" | "sage";
  bgClass: string;
  plate: string;
  tag: string;
}

const MANIFESTO_ACCORDION_CARDS: ManifestoAccordionCard[] = [
  {
    number: "01",
    label: "MECHANISM 01",
    heading: "Transepidermal Water Loss (TEWL)",
    supportingLine: "How skin naturally loses moisture",
    body: "Your skin naturally releases small amounts of water into the air. This process is called transepidermal water loss (TEWL). Higher-than-normal water loss can be a sign that the skin’s protective barrier is not working as well as it should.",
    image: "/images/media_1792804684885_bf458a16.jpg",
    scaleClass: "scale-100 hover:scale-105",
    accent: "mauve",
    bgClass: "bg-[#7B535B]",
    plate: "Plate 2.1 — Skin and Moisture",
    tag: "Natural epidermal hydration & skin barrier surface"
  },
  {
    number: "02",
    label: "MECHANISM 02",
    heading: "Epidermal Maceration",
    supportingLine: "When skin stays damp",
    body: "When skin stays damp for too long, its outer layer can absorb excess moisture and become softer. Repeated rubbing against clothing may then irritate the skin. Managing moisture and choosing comfortable fabrics can help reduce unnecessary friction.",
    image: "/images/media_1792804748572_b23f9de0.jpg",
    scaleClass: "scale-[1.15] hover:scale-[1.20]",
    accent: "marigold",
    bgClass: "bg-[#B06B1E]",
    plate: "Plate 2.2 — Skin, Fabric and Innerwear",
    tag: "Soft blush-pink cotton innerwear & delicate skin contact"
  },
  {
    number: "03",
    label: "SOLUTION 03",
    heading: "Cellulose Breathability",
    supportingLine: "Why fabric structure matters",
    body: "The way a fabric is made affects how air and moisture move through it. Good Karma uses GOTS-certified organic cotton for its innerwear. Its fabric structure and construction are part of how we think about everyday comfort and the way clothing sits against your skin.",
    image: "/images/media_1792804805170_66808d94.jpg",
    scaleClass: "scale-[1.15] hover:scale-[1.20]",
    accent: "sage",
    bgClass: "bg-[#4D5749]",
    plate: "Plate 2.3 — Cotton Material and Texture",
    tag: "Natural ribbed cotton texture, soft waistband & fine stitching"
  }
];

export function SkinScienceFluxView({ sources, relatedPages }: SkinScienceFluxViewProps) {
  // 1. Manifesto Scroll Word Reveal
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0);
  const [expandedManifestoIndex, setExpandedManifestoIndex] = useState<number | null>(null);

  // 2. Horizontal Pinned Scroll Track
  const pinSectionRef = useRef<HTMLElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Manifesto word reveal progress
      if (manifestoRef.current) {
        const rect = manifestoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight * 0.85 - rect.top) / (rect.height * 0.9), 0), 1);
        setManifestoProgress(progress);
      }

      // Horizontal track progress
      if (pinSectionRef.current) {
        const rect = pinSectionRef.current.getBoundingClientRect();
        const totalScrollable = rect.height - window.innerHeight;
        if (totalScrollable > 0) {
          const currentScroll = -rect.top;
          const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
          const newIndex = Math.min(Math.floor(progress * DEEP_TOPICS.length), DEEP_TOPICS.length - 1);
          setActiveTopicIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manifesto words to animate
  const manifestoParagraph1 = "The stratum corneum is your body's outermost biological shield. In everyday life, synthetic innerwear creates an occlusive microclimate that traps localized heat and humidity.";
  const manifestoParagraph2 = "Unblended 100% GOTS organic cotton allows continuous convective airflow, preserving natural barrier equilibrium and daily comfort.";

  const words1 = manifestoParagraph1.split(" ");
  const words2 = manifestoParagraph2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-mauve/20">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Clean Integrated Skin Science Hero Banner */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-8 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Editorial Heading and Subheading */}
        <div className="max-w-[820px] mb-8 md:mb-12">
          <h1 className="font-editorial italic font-semibold text-ink text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight mb-4">
            Skin Science
          </h1>
          <p className="text-p1 text-ink/75 font-light leading-relaxed max-w-[620px]">
            A considered exploration of how fabrics interact with your cutaneous barrier, daily microclimates, and everyday comfort.
          </p>
        </div>

        {/* Hero Banner Container */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border/40 bg-paper">
          <img 
            src="/images/skin-science-hero.jpg" 
            alt="Microscopic human skin barrier cross-section and organic cotton textile with callouts: Your Skin - a delicate living barrier that works hard every day, and Our Cotton - naturally breathable and gentle on skin" 
            className="w-full h-auto aspect-[16/9] object-cover object-center block"
            loading="eager"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MANIFESTO & WORD-BY-WORD ILLUMINATION: The Core Biology Statement */}
      {/* ========================================================================= */}
      <section 
        ref={manifestoRef}
        className="relative w-full bg-white pt-16 md:pt-28 pb-16 md:pb-24 border-t border-border/40 overflow-hidden"
      >
        {/* Full-width Manifesto Statement Header */}
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-14 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-6">
            01 · Cutaneous Manifesto
          </span>
          
          <h2 className="text-[clamp(26px,3.4vw,50px)] font-medium leading-[1.2] tracking-[-0.03em] text-ink max-w-[1150px]">
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
                      isLit ? "opacity-100 text-mauve font-semibold" : "opacity-25 text-black"
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
          className="w-full px-4 sm:px-6 lg:px-10"
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
      {/* 4. DARK BREAKOUT: Synthetic Occlusion vs Natural Equilibrium */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-ink text-white py-20 md:py-32 px-6 lg:px-12 overflow-hidden my-16">
        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16 pb-8 border-b border-white/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-3">
                Comparative Pathology
              </span>
              <h2 className="text-[clamp(32px,5vw,68px)] font-editorial italic font-semibold leading-[0.95] tracking-tight text-white">
                <span className="block">Synthetic Occlusion.</span>
                <span className="block text-white/50">Natural Equilibrium.</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-sm text-white/75 font-light leading-relaxed">
              Standard commercial innerwear blends petroleum polyester with 5% to 10% elastane. This non-porous synthetic film acts as an unventilated barrier directly next to sensitive tissue.
            </p>
          </div>

          {/* Tri-Column Problem / Situation / Solution Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Problem */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/8 transition-colors">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 block mb-3">
                  The Problem
                </span>
                <h3 className="text-2xl font-editorial italic text-white mb-3">
                  Occlusive Microclimates
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                  Synthetic innerwear made of polyester and elastane traps body heat and prevents moisture vapor from evaporating, producing localized humidity spikes throughout the day.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                Factor: Non-porous petroleum filaments
              </div>
            </div>

            {/* The Situation */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/8 transition-colors">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block mb-3">
                  The Situation
                </span>
                <h3 className="text-2xl font-editorial italic text-white mb-3">
                  Barrier Permeability
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                  When sweat remains trapped against the skin, the stratum corneum swells and weakens. Macerated tissue exhibits elevated permeability to dye resins and friction irritation.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                Factor: Stratum corneum swelling (maceration)
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-mauve/15 border border-mauve/40 rounded-2xl p-8 flex flex-col justify-between hover:bg-mauve/20 transition-colors">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-mauve block mb-3">
                  The Solution
                </span>
                <h3 className="text-2xl font-editorial italic text-white mb-3">
                  Unblended Organic Cotton
                </h3>
                <p className="text-xs text-white/90 font-light leading-relaxed mb-6">
                  Good Karma uses 100% GOTS-certified organic cotton. Its hollow cellulose structure naturally breathes and wicks perspiration without synthetic elastane or petrochemical finishes.
                </p>
              </div>
              <div className="pt-4 border-t border-mauve/30 text-[11px] font-mono text-mauve">
                Factor: Zero elastane · 100% natural breathability
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ASYMMETRIC 4 PERSPECTIVES GALLERY: se Style Collage */}
      {/* ========================================================================= */}
      <section id="four-perspectives" className="relative w-full bg-white px-6 lg:px-12 py-16 md:py-28 max-w-[1440px] mx-auto">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-3">
            02 · Systemic View
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
            <h2 className="text-[clamp(32px,5vw,72px)] font-semibold uppercase leading-none tracking-[-0.04em] text-ink">
              <span className="block text-black/30">Four Ways</span>
              <span className="block text-ink">To Look At It.</span>
            </h2>
            <p className="max-w-[420px] text-xs text-muted-foreground font-light leading-relaxed">
              Evaluating textile impact requires looking beyond personal comfort to include toxicology, the artisans handling dyes, and planetary ecological cycles.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Collage */}
        <div className="space-y-16 md:space-y-24">
          
          {/* Row 1: Your Skin & Toxicology */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Col */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-paper border border-border/50 relative group">
              <img 
                src="/images/skin-barrier-diagram.jpg" 
                alt="Skin barrier stratum corneum matrix" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block">Perspective 01</span>
                <h4 className="text-2xl font-editorial italic">Your Skin & Dermal Comfort</h4>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-5 p-4 lg:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-mauve">01 · Cutaneous Barrier</span>
              <h3 className="text-2xl font-editorial italic text-ink">
                Exposure & daily friction.
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Your skin is a living, permeable organ that interacts continuously with the microclimate created by your clothing. Prioritizing pure, breathable organic cotton lowers mechanical friction and supports natural moisture dissipation, providing daily comfort free from synthetic resin coatings and occlusive plastic traps.
              </p>
              <div className="pt-2">
                <Link href="#intimate-comfort" className="text-xs font-semibold text-mauve hover:underline inline-flex items-center gap-1.5">
                  Learn about intimate microclimates <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Standout Full-Width Mix-Blend Banner */}
          <div className="w-full py-10 px-8 rounded-2xl bg-[#1d1814] text-white relative overflow-hidden flex items-center justify-center text-center shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30" 
              style={{ backgroundImage: "url('/images/hero-bg.png')" }} 
            />
            <div className="relative z-10 max-w-[900px]">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-marigold block mb-3">
                Core Good Karma Axiom
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial italic text-white uppercase leading-tight tracking-tight">
                What touches your skin shapes your skin.
              </h3>
            </div>
          </div>

          {/* Row 2: Toxicology & Workers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Col */}
            <div className="lg:col-span-5 p-4 lg:p-8 space-y-4 order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-wider text-marigold">02 · Chemical Toxicology</span>
              <h3 className="text-2xl font-editorial italic text-ink">
                Conventional processing residues.
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Conventional textiles can carry hundreds of processing auxiliaries, including azo dyes, PFAS, and formaldehyde finishes. While most substances are regulated at established statutory limits, our aim is to lower daily cumulative exposure by using unblended organic cotton, plant-based dyes, and safe mineral fixatives.
              </p>
              <div className="pt-2">
                <Link href="#conventional-fabric" className="text-xs font-semibold text-marigold hover:underline inline-flex items-center gap-1.5">
                  Inspect textile chemistry <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Image Col */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-paper border border-border/50 relative group order-1 lg:order-2">
              <img 
                src="/images/polyester-skin-contact.jpg" 
                alt="Polyester fiber and skin barrier contact" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block">Perspective 02</span>
                <h4 className="text-2xl font-editorial italic">Toxicology & Limit Values</h4>
              </div>
            </div>
          </div>

          {/* Row 3: Artisans & The Planet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3: Workers */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sage block mb-2">03 · Human Equity</span>
                <h4 className="text-xl font-editorial italic text-ink mb-3">The People Who Make It</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  Industrial dyehouses and finishing mills often expose workers to synthetic chemical vapours, corrosive bleaches, and synthetic dye powders. Choosing plant-based dyeing and certified organic agricultural cotton supports safe, fair working environments audited under International Labour Organization (ILO) standards.
                </p>
              </div>
              <div className="text-[11px] font-mono text-sage pt-3 border-t border-border/40">
                Ethical Audit: GOTS Social Criteria & NGRBC
              </div>
            </div>

            {/* Card 4: Planet */}
            <div className="bg-paper p-8 rounded-2xl border border-border/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">04 · Ecosystem Stewardship</span>
                <h4 className="text-xl font-editorial italic text-ink mb-3">The Planet & Water Cycles</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  Conventional textile dyeing generates substantial boiler fuel emissions, complex wastewater effluent, and chemical sludge containing concentrated residues. Natural dyeing avoids petrochemical synthesis, though it still requires thoughtful water usage, land management, and responsible effluent treatment.
                </p>
              </div>
              <div className="text-[11px] font-mono text-ink/70 pt-3 border-t border-border/40">
                Ecological Practice: Biological ETP Remediation
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PINNED HORIZONTAL TRACK (Desktop) & STACKED (Mobile): Go Deeper Topics */}
      {/* ========================================================================= */}
      <section 
        id="go-deeper"
        ref={pinSectionRef}
        className="relative w-full bg-paper py-20 lg:py-0 text-ink border-y border-border/60"
        style={{ minHeight: "100vh" }}
      >
        {/* Desktop Sticky Viewport */}
        <div className="hidden lg:flex sticky top-0 h-screen w-full flex-col justify-between p-12 overflow-hidden">
          
          {/* Top Bar with Section Title and Topic Tabs */}
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-1">
                03 · Go Deeper
              </span>
              <h2 className="text-3xl font-editorial italic text-ink">
                Six Critical Perspectives on Everyday Apparel.
              </h2>
            </div>
            
            {/* Topic pill selectors */}
            <div className="flex items-center gap-2">
              {DEEP_TOPICS.map((topic, idx) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeTopicIndex === idx
                      ? "bg-ink text-white shadow-xs"
                      : "bg-white text-muted-foreground hover:text-ink border border-border/50"
                  }`}
                >
                  {topic.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Topic Stage */}
          <div className="grid grid-cols-12 gap-12 items-center flex-1 py-8">
            
            {/* Left: Huge Editorial Image Stage */}
            <div className="col-span-7 h-full max-h-[520px] rounded-2xl overflow-hidden relative border border-border/60 bg-white shadow-sm">
              <img 
                src={DEEP_TOPICS[activeTopicIndex].image} 
                alt={DEEP_TOPICS[activeTopicIndex].title} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block mb-1">
                  {DEEP_TOPICS[activeTopicIndex].tag}
                </span>
                <h4 className="text-xl font-editorial italic text-white drop-shadow-sm">
                  {DEEP_TOPICS[activeTopicIndex].figureLabel}
                </h4>
              </div>
            </div>

            {/* Right: Detailed Text Panel */}
            <div className="col-span-5 flex flex-col justify-between h-full max-h-[520px] p-6 bg-white rounded-2xl border border-border/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-mauve block mb-2">
                  Topic 0{activeTopicIndex + 1} · {DEEP_TOPICS[activeTopicIndex].tag}
                </span>
                <h3 className="text-2xl font-editorial italic text-ink mb-4 leading-tight">
                  {DEEP_TOPICS[activeTopicIndex].title}
                </h3>
                <p className="text-xs text-ink/80 font-light leading-relaxed mb-6">
                  {DEEP_TOPICS[activeTopicIndex].lead}
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{DEEP_TOPICS[activeTopicIndex].source}</span>
                <span className="font-semibold text-ink">0{activeTopicIndex + 1} / 0{DEEP_TOPICS.length}</span>
              </div>
            </div>

          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full bg-border/40 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-mauve h-full transition-all duration-300"
              style={{ width: `${((activeTopicIndex + 1) / DEEP_TOPICS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Mobile Stacked Articles View */}
        <div className="lg:hidden px-6 space-y-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-1">
              03 · Go Deeper
            </span>
            <h2 className="text-2xl font-editorial italic text-ink">
              Six Critical Perspectives on Everyday Apparel.
            </h2>
          </div>

          {DEEP_TOPICS.map((topic, idx) => (
            <article 
              key={topic.id}
              id={topic.id}
              className="bg-white rounded-2xl border border-border/60 overflow-hidden shadow-xs p-6 space-y-4 scroll-mt-28"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative">
                <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-mauve block mb-1">
                  Topic 0{idx + 1} · {topic.tag}
                </span>
                <h3 className="text-xl font-editorial italic text-ink mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                  {topic.lead}
                </p>
                <span className="text-[11px] font-mono text-muted-foreground block pt-3 border-t border-border/40">
                  {topic.source}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HONEST TRADE-OFFS & 4 RESEARCH PILLARS */}
      {/* ========================================================================= */}
      <section id="trade-offs" className="relative w-full bg-white px-6 lg:px-12 py-16 md:py-28 max-w-[1440px] mx-auto scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-3">
              04 · Scientific Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-editorial italic text-ink mb-6">
              Honest trade-offs of natural dyeing.
            </h2>
            <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
              We reject romanticized sustainability marketing. Natural botanical dyeing provides significant benefits for human skin, but it involves real agricultural and processing considerations that we state openly.
            </p>
            <div className="p-4 rounded-xl bg-paper border border-border/50 text-xs text-ink/80 font-light flex items-start gap-2.5">
              <Info className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
              <span>Plant-based dyes, not petroleum-based. Natural dyeing still uses water and needs responsible effluent handling, and we say so.</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-xl bg-paper border border-border/60">
              <h4 className="text-sm font-semibold text-ink mb-1">Agricultural Land and Water Requirements</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Growing dye crops requires arable land and freshwater. Good Karma balances this by recovering temple marigold flowers and post-harvest pomegranate peels rather than dedicating prime food farmland to dye monocultures.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-paper border border-border/60">
              <h4 className="text-sm font-semibold text-ink mb-1">Organic Load in Effluent Treatment</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Natural dye baths contain biodegradable plant biomass rather than petrochemical carcinogens. However, suspended botanical matter creates a higher biological oxygen demand (BOD) that still requires rigorous biological wastewater management before safe discharge or reuse.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-paper border border-border/60">
              <h4 className="text-sm font-semibold text-ink mb-1">Living Palette Nuance & Natural Fastness</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Natural dyes produce living, earthy tones rather than artificial synthetic neons. Because we exclude heavy-metal fixatives, botanical shades soften gracefully over time with exposure to sunlight and washing, developing a unique natural patina.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Dermatological Research */}
        <div id="research-library" className="scroll-mt-28 pt-12 border-t border-border/40">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve block mb-3">
            05 · Clinical Foundations
          </span>
          <h2 className="text-3xl font-editorial italic text-ink mb-8">
            Four pillars of dermatological research.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-paper border border-border/50 flex flex-col justify-between">
              <div>
                <Thermometer className="w-6 h-6 text-mauve mb-4" />
                <h3 className="text-base font-medium text-ink mb-2">Thermal Equilibrium</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Organic cotton facilitates convective airflow and dissipates heat effectively compared to synthetic blends that insulate body warmth.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-paper border border-border/50 flex flex-col justify-between">
              <div>
                <Wind className="w-6 h-6 text-mauve mb-4" />
                <h3 className="text-base font-medium text-ink mb-2">Moisture Vapor Permeability</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Natural cellulose cellular canals absorb excess perspiration in liquid and vapor form, evaporating moisture without wetting the skin surface.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-paper border border-border/50 flex flex-col justify-between">
              <div>
                <Activity className="w-6 h-6 text-mauve mb-4" />
                <h3 className="text-base font-medium text-ink mb-2">Chemical Non-Reactivity</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Zero synthetic resins or formaldehyde anti-crease treatments means the fabric remains gentle on delicate cutaneous barriers.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-paper border border-border/50 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-6 h-6 text-mauve mb-4" />
                <h3 className="text-base font-medium text-ink mb-2">Aerobic Balance</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Synthetic nylon creates an unventilated microclimate favoring fungal stagnation. Breathable organic cotton maintains aerobic equilibrium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full py-12 border-t border-border/40">
        <FAQSection
          id="faq"
          items={FAQS_DATA["skin-science"]}
          accentColor="mauve"
          title="Frequently asked questions about skin science."
          subtitle="Plain-language answers to common dermatological and textile questions."
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
        <ShareBar title="Skin Science: The Biology of What Touches Your Skin" urlPath="/educate/skin-science" />
      </section>

      {/* ========================================================================= */}
      {/* 11. TRUST STRIP & RELATED PAGES */}
      {/* ========================================================================= */}
      <TrustStrip className="mt-16" />
      <RelatedPages pages={relatedPages} />

      {/* ========================================================================= */}
      {/* 12. CLOSING CTA */}
      {/* ========================================================================= */}
      <section className="px-6 max-w-[1440px] mx-auto w-full mt-12 mb-20">
        <div className="bg-[#1d1814] rounded-2xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
            style={{ backgroundImage: "url('/images/hero-bg.png')" }} 
          />
          <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
            Designed For The Body
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px] relative z-10">
            Give your skin barrier the breathability it deserves.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed relative z-10">
            Discover our collection of 100% GOTS organic cotton innerwear, formulated around human biology and natural comfort.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary">
              Shop the Collection
            </Button>
            <Button href="/educate/natural-dyeing" variant="secondary">
              Explore Botanical Dyeing
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
