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
import { CertificationsBento } from "@/components/educate/CertificationsBento";
import { FAQS_DATA } from "@/data/faqs";
import { SHOW_OEKO_TEX } from "@/config/features";
import { 
  ShieldCheck, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  FileCheck, 
  Sparkles,
  Info
} from "lucide-react";

interface CertificationsEditorialViewProps {
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
    label: "STANDARD 01",
    heading: "GOTS Version 7.0",
    supportingLine: "Global Organic Textile Standard",
    body: "At least 95% certified organic agricultural cotton. Strictly prohibits toxic chemical pesticides, synthetic nitrogen fertilisers, GMO seeds, and carcinogenic aromatic amines across the entire supply chain.",
    image: "/images/organic-cotton-harvest.jpg",
    plate: "ORGANIC INTEGRITY",
    tag: "Traceable to certified organic farmer producer organisations",
    bgClass: "bg-[#4D5749]",
    scaleClass: "scale-100"
  },
  {
    number: "02",
    label: "DISCLOSURE 02",
    heading: "BRSR Core & ESG",
    supportingLine: "National Guidelines on Responsible Conduct",
    body: "Transparent public reporting under MCA and SEBI guidance. Discloses living wages for spinning and knitting artisans, workplace health safeguards, and zero child or forced labour across Indian facilities.",
    image: "/images/certifications-hero.jpg",
    plate: "CORPORATE ETHICS",
    tag: "Annual public sustainability and responsibility declaration",
    bgClass: "bg-[#7B535B]",
    scaleClass: "scale-100"
  },
  {
    number: "03",
    label: "BOTANICAL 03",
    heading: "Cruelty-Free Dyes",
    supportingLine: "100% plant-extracted pigments",
    body: "Our formulation replaces petroleum-derived colorants with living plant pigments like marigold, madder root, and pomegranate. Processed without animal derivatives, animal testing, or toxic heavy metals.",
    image: "/images/madder-roots-alum.jpg",
    plate: "CLEAN CHEMISTRY",
    tag: "Natural mineral mordanting with pure food-grade alum",
    bgClass: "bg-[#B06B1E]",
    scaleClass: "scale-100"
  }
];

export function CertificationsEditorialView({ sources, relatedPages }: CertificationsEditorialViewProps) {
  // 1. Manifesto Scroll Word Reveal
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0);

  // 2. Continuous 3-Card Accordion Hover State
  const [expandedManifestoIndex, setExpandedManifestoIndex] = useState<number | null>(null);

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

  const manifestoParagraph1 = "Authentic sustainability begins where marketing promises end. In an industry crowded with self-declared eco-labels, real integrity comes from independent laboratory testing and uncompromised third-party audit protocols.";
  const manifestoParagraph2 = "Every fiber, botanical dye, and finishing step is fully traceable to international organic and environmental benchmarks.";

  const words1 = manifestoParagraph1.split(" ");
  const words2 = manifestoParagraph2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-sage/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Clean Integrated Certifications Hero Banner */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-8 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Editorial Heading and Subheading */}
        <div className="max-w-[820px] mb-8 md:mb-12">
          <h1 className="font-editorial italic font-semibold text-ink text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight mb-4">
            Proof You Can Check
          </h1>
          <p className="text-p1 text-ink/75 font-light leading-relaxed max-w-[620px]">
            We don't ask you to take our word for it. Every Good Karma garment is independently audited, laboratory-tested, and certified against the world's most rigorous textile, chemical safety, and ethical disclosure standards.
          </p>
        </div>

        {/* Hero Banner Container */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border/40 bg-paper">
          <img 
            src="/images/certifications-hero.jpg" 
            alt="Good Karma organic cotton textile certification proof and botanical purity audit" 
            className="w-full h-auto aspect-[16/9] object-cover object-center block"
            loading="eager"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE STANDARDS MANIFESTO (Scroll Word-by-Word Reveal) */}
      {/* ========================================================================= */}
      <section 
        ref={manifestoRef}
        className="relative w-full bg-white pt-16 md:pt-28 pb-16 md:pb-24 border-t border-border/40 overflow-hidden"
      >
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-14 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-6">
            01 · Verification Manifesto
          </span>

          <h2 className="text-[clamp(28px,3.8vw,56px)] font-medium leading-[1.18] tracking-[-0.03em] text-ink max-w-[1200px]">
            {/* Part 1: Ethics & Standards */}
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

            {/* Part 2: Traceability */}
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

      {/* Brand About Strip with White Logo */}
      <AboutStrip className="my-8" />

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE AUDIT INDEX: Certifications Bento Grid */}
      {/* ========================================================================= */}
      <section id="audit-index" className="relative w-full bg-white py-16 md:py-28 px-6 lg:px-12 max-w-[1440px] mx-auto border-b border-border/40">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
              02 · Audit Index
            </span>
            <h2 className="text-[clamp(32px,4.5vw,60px)] font-editorial italic font-semibold leading-[0.98] tracking-tight text-ink">
              Our certification bento.
            </h2>
          </div>
          <p className="max-w-[500px] text-p1 text-muted-foreground font-light leading-relaxed">
            Click on any certificate to view its audited scope, verification reference numbers, testing body parameters, and download a verifiable record.
          </p>
        </div>

        <CertificationsBento />
      </section>

      {/* ========================================================================= */}
      {/* 4. STANDARDS GLOSSARY: Plain-Language Reference */}
      {/* ========================================================================= */}
      <section id="definitions" className="relative w-full bg-paper py-20 md:py-28 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
              03 · Clear Definitions
            </span>
            <h2 className="text-[clamp(28px,3.8vw,52px)] font-editorial italic font-semibold leading-[1.05] tracking-tight text-ink mb-4">
              Understanding the terminology.
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-[600px] leading-relaxed">
              Textile chemistry and sustainability reporting are frequently filled with obscure acronyms. Here are the clear, plain definitions of the standards and biological terms used on this page:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Definition 1: GOTS */}
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                Standard 01
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                GOTS (Global Organic Textile Standard)
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                The worldwide gold standard for organic textiles. It mandates at least 95% certified organic agricultural fibre and strictly prohibits synthetic pesticides, toxic heavy metals, formaldehyde, and exploitative child or forced labour across the entire manufacturing chain.
              </p>
            </div>

            {/* Definition 2: OEKO-TEX Standard 100 (conditional) */}
            {SHOW_OEKO_TEX && (
              <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                  Standard 02
                </span>
                <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                  OEKO-TEX® Standard 100
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  An independent laboratory testing system based in Switzerland and Germany. It assesses every finished component—fabric, threads, labels, and botanical pigments—for over 300 harmful chemical substances, ensuring zero toxic residues touch sensitive skin.
                </p>
              </div>
            )}

            {/* Definition 3: PFAS */}
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                Standard {SHOW_OEKO_TEX ? "03" : "02"}
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                PFAS (Forever Chemicals)
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Synthetic fluorinated chemicals often called "forever chemicals" because they do not break down in nature or the human body. Conventional clothing uses PFAS for stain resistance; Good Karma strictly eliminates all fluorinated chemical finishes.
              </p>
            </div>

            {/* Definition 4: Mordant */}
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                Standard {SHOW_OEKO_TEX ? "04" : "03"}
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                Mordant (Dye Fixatives)
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                A mineral compound used to bond natural dye pigments permanently to cotton cellulose fibres. While industrial dyeing often uses toxic heavy metals like chrome or copper, Good Karma uses solely food-grade natural alum and iron minerals.
              </p>
            </div>

            {/* Definition 5: Stratum Corneum */}
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                Standard {SHOW_OEKO_TEX ? "05" : "04"}
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                Stratum Corneum (Skin Barrier)
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                The outermost brick-and-mortar layer of your skin. It prevents dehydration by locking in essential moisture while shielding underlying tissues from external irritants, allergens, and synthetic chemical absorption.
              </p>
            </div>

            {/* Definition 6: BRSR & NGRBC */}
            <div className="bg-white p-8 rounded-2xl border border-border/60 shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage block mb-2">
                Standard {SHOW_OEKO_TEX ? "06" : "05"}
              </span>
              <h4 className="text-lg font-editorial italic font-semibold text-ink mb-2">
                BRSR & NGRBC (ESG Disclosures)
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Business Responsibility and Sustainability Reporting (BRSR) aligned with the National Guidelines on Responsible Business Conduct (NGRBC). An Indian government transparency framework disclosing corporate ethics, fair wages, and environmental footprint.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INDEPENDENT VERIFICATION GUIDE */}
      {/* ========================================================================= */}
      <section id="verification-guide" className="relative w-full bg-white py-20 md:py-28 px-6 lg:px-12 border-b border-border/40">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage block mb-3">
              04 · Open Registry
            </span>
            <h2 className="text-[clamp(28px,3.8vw,52px)] font-editorial italic font-semibold leading-[1.05] tracking-tight text-ink mb-4">
              How to independently verify our certificates.
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-[600px] leading-relaxed">
              Real transparency means anyone can verify a claim directly through official public registries without relying on marketing statements.
            </p>
          </div>

          <div className={`grid grid-cols-1 ${SHOW_OEKO_TEX ? "md:grid-cols-2" : "md:grid-cols-1 max-w-[700px]"} gap-8`}>
            
            {/* GOTS Registry Card */}
            <div className="p-8 rounded-2xl bg-paper border border-border/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-ink font-medium text-base mb-3">
                  <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                  <span className="font-editorial italic font-semibold text-lg">Verifying GOTS Certification</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  Visit the official GOTS Public Database. Enter the certificate reference code to verify valid certification status, scope, and manufacturing facility address.
                </p>
              </div>

              <a 
                href="https://global-standard.org/find-suppliers-shops-and-inputs/certified-suppliers/database/search"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1.5 pt-4 border-t border-border/40"
              >
                <span>Open GOTS Public Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* OEKO-TEX Registry Card */}
            {SHOW_OEKO_TEX && (
              <div className="p-8 rounded-2xl bg-paper border border-border/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-ink font-medium text-base mb-3">
                    <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center">
                      <Search className="w-4 h-4" />
                    </div>
                    <span className="font-editorial italic font-semibold text-lg">Verifying OEKO-TEX Standard 100</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Use the OEKO-TEX Label Check tool. Enter the certificate number to instantly verify that the test report is valid and covers Product Class II (direct skin contact).
                  </p>
                </div>

                <a 
                  href="https://www.oeko-tex.com/en/label-check"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1.5 pt-4 border-t border-border/40"
                >
                  <span>Open OEKO-TEX Label Check</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full my-16">
        <FAQSection
          id="faq-accordion"
          items={FAQS_DATA["certifications"]}
          accentColor="sage"
          title="Frequently asked questions about certifications."
          subtitle="Plain-language explanations of textile standards, audit scopes, and how to verify them."
        />
      </section>

      {/* ========================================================================= */}
      {/* 7. SOURCES & CITATIONS */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <SourcesList sources={sources} lastUpdated="October 2026" />
      </section>

      {/* ========================================================================= */}
      {/* 8. SHARE BAR */}
      {/* ========================================================================= */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full py-8">
        <ShareBar title="Proof You Can Check: Verified Organic & Standards Disclosure" urlPath="/educate/certifications" />
      </section>

      {/* ========================================================================= */}
      {/* 9. TRUST STRIP & RELATED PAGES */}
      {/* ========================================================================= */}
      <TrustStrip 
        className="mt-16" 
        subtitle="Every certificate is independently verifiable via international public registries."
      />
      <RelatedPages pages={relatedPages} />

      {/* ========================================================================= */}
      {/* 10. CLOSING CTA */}
      {/* ========================================================================= */}
      <section className="px-6 max-w-[1440px] mx-auto w-full mt-12 mb-20">
        <div className="bg-[#1d1814] rounded-2xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" 
            style={{ backgroundImage: "url('/images/hero-bg.png')" }} 
          />
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block relative z-10">
            Pure From Field To Skin
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px] relative z-10">
            Experience certified purity on your skin.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed relative z-10">
            Innerwear made from 100% GOTS-certified organic cotton, dyed exclusively with natural plants, and verified free from harmful chemicals.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary">
              Shop by Concern
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
