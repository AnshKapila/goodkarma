import type { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/educate/SubpageHero";
import { InShort } from "@/components/educate/InShort";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { TableOfContents, type TocItem } from "@/components/educate/TableOfContents";
import { CertificationsBento } from "@/components/educate/CertificationsBento";
import { TrustStrip } from "@/components/educate/TrustStrip";
import { ShareBar } from "@/components/educate/ShareBar";
import { RelatedPages, type RelatedPageItem } from "@/components/educate/RelatedPages";
import { SourcesList, type SourceItem } from "@/components/educate/SourcesList";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BookOpen, CheckCircle2, Search, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Proof You Can Check — GOTS & OEKO-TEX Certifications | Good Karma",
  description: "Explore Good Karma's verified textile credentials. Download third-party certificates for 100% GOTS organic cotton, OEKO-TEX Standard 100, and cruelty-free botanical dyeing.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/certifications",
  },
  openGraph: {
    title: "Proof You Can Check: Verified Organic & Chemical Safety Standards | Good Karma",
    description: "We don't ask you to take our word for it. Review plain-language breakdowns of our GOTS, OEKO-TEX Standard 100, and BRSR disclosures.",
    url: "https://goodkarmabrand.com/educate/certifications",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/certifications-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Good Karma Third-Party Textile Certification Proof",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CertificationsPage() {
  const tocItems: TocItem[] = [
    { id: "gots", label: "1. GOTS (Organic Cotton)" },
    { id: "oeko-tex", label: "2. OEKO-TEX (Chemical Safety)" },
    { id: "brsr-ngrbc", label: "3. BRSR / NGRBC (ESG Disclosure)" },
    { id: "vegan", label: "4. Cruelty-Free Botanical Dyeing" },
    { id: "definitions", label: "5. Standards Glossary" },
    { id: "verification-guide", label: "6. How to Verify Audits" },
  ];

  const inShortBullets: [string, string, string] = [
    "100% GOTS-certified organic cotton guarantees that zero toxic pesticides, synthetic nitrogen fertilisers, or GMO seeds enter the soil or fabric.",
    "OEKO-TEX Standard 100 independently tests every thread, seam, and pigment for 300+ toxic chemicals, ensuring absolute safety next to intimate skin.",
    "Our cruelty-free natural dye protocol is 100% plant-based and requires zero animal derivatives or testing, documented under transparent Indian ESG disclosure standards.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Global Organic Textile Standard (GOTS) Version 7.0 (2023).",
      detail: "Manual for the Implementation of GOTS. Section 2.4: Environmental and Social Criteria. Enforces bans on endocrine disruptors, GMOs, and toxic heavy-metal mordants across the entire supply chain.",
      url: "https://global-standard.org",
    },
    {
      citation: "OEKO-TEX® Association (2024).",
      detail: "Standard 100 by OEKO-TEX® Criteria Catalogue and Limit Values. Zurich, Switzerland. Regulates thresholds for aromatic amines, formaldehyde, extractable heavy metals, and perfluorinated chemicals (PFAS).",
      url: "https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex",
    },
    {
      citation: "Ministry of Corporate Affairs (MCA), Government of India (2019).",
      detail: "National Guidelines on Responsible Business Conduct (NGRBC). Establishes 9 core principles for businesses to uphold human rights, fair wages, and environmental responsibility.",
      url: "https://www.mca.gov.in",
    },
    {
      citation: "Securities and Exchange Board of India (SEBI) (2021).",
      detail: "Business Responsibility and Sustainability Reporting (BRSR) Framework. Mandatory transparency mechanism for environmental stewardship and fair supply chain practices.",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995).",
      detail: "Textile chemical finish dermatitis. Contact Dermatitis, 32(5), 253-264. Clinical evidence documenting allergic contact dermatitis triggered by synthetic dye fixatives, azo dyes, and resin finishes.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Health",
      title: "The science of breathing: Skin Science.",
      description: "How synthetic fabrics disrupt the stratum corneum barrier and why pure organic cotton restores natural cutaneous balance.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Botanical Palette",
      title: "Colours drawn directly from nature.",
      description: "How our nine plant dyes replace petroleum pigments with marigold, madder root, and pomegranate peel.",
      href: "/educate/natural-dyeing",
      accentColor: "marigold",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      <SEOArticleSchema
        headline="Proof You Can Check: Verified Organic & Chemical Safety Standards"
        description="Comprehensive third-party certification breakdown for Good Karma: GOTS, OEKO-TEX Standard 100, BRSR disclosure, and cruelty-free botanical dyeing."
        url="/educate/certifications"
        image="/images/certifications-hero.jpg"
        datePublished="2026-01-20"
        dateModified="2026-10-14"
      />

      {/* 1. Hero */}
      <SubpageHero
        breadcrumbPage="Certifications"
        eyebrow="Third-Party Verification"
        h1="Proof you can check."
        promise="We don't ask you to take our word for it. Every Good Karma garment is independently audited, laboratory-tested, and certified against the world's most rigorous textile, chemical safety, and ethical disclosure standards."
        whoThisPageIsFor="Customers, healthcare practitioners, and retail partners verifying ecological and chemical compliance."
        imageSrc="/images/certifications-hero.jpg"
        imageAlt="Good Karma organic cotton textile certification proof and botanical purity audit"
        accentColor="marigold"
      />

      {/* 2. In Short Box */}
      <InShort bullets={inShortBullets} accentColor="marigold" />

      {/* 3. About Strip (Strictly Good Karma, zero Livbio) */}
      <AboutStrip className="mb-16 md:mb-24" />

      {/* 4. Main Body with Sticky Desktop TOC & Collapsible Mobile TOC */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Table of Contents */}
          <aside className="lg:col-span-3">
            <TableOfContents 
              items={tocItems} 
              accentColor="marigold" 
              className="lg:sticky lg:top-28"
            />
          </aside>

          {/* Right Column: Bento Cards & Content Sections */}
          <main className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* Bento Grid with Lead GOTS & OEKO-TEX, plus Supporting BRSR & Vegan */}
            <div>
              <div className="mb-8">
                <span className="text-marigold font-bold text-xs uppercase tracking-widest block mb-2">
                  Interactive Audit Index
                </span>
                <h2 className="text-h2 font-editorial italic text-ink">
                  Our certification bento.
                </h2>
                <p className="text-p2 text-muted-foreground font-light mt-2 max-w-[650px]">
                  Click on any certificate to view its audited scope, verification reference numbers, testing body parameters, and download a verifiable record.
                </p>
              </div>

              <CertificationsBento />
            </div>

            {/* Section 5: Standards Glossary / Plain Definitions */}
            <section id="definitions" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Plain-Language Reference
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Understanding the terminology.
              </h2>
              <p className="text-p2 text-muted-foreground font-light mb-8 max-w-[700px]">
                Textile chemistry and sustainability reporting are frequently filled with obscure acronyms. Here are the clear, plain definitions of the standards and biological terms used on this page:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Definition 1: GOTS */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      GOTS (Global Organic Textile Standard)
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    The worldwide gold standard for organic textiles. It mandates at least 95% certified organic agricultural fibre and strictly prohibits synthetic pesticides, toxic heavy metals, formaldehyde, and exploitative child or forced labour across the entire manufacturing chain.
                  </p>
                </div>

                {/* Definition 2: OEKO-TEX Standard 100 */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      OEKO-TEX® Standard 100
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    An independent laboratory testing system based in Switzerland and Germany. It assesses every finished component—fabric, threads, labels, and botanical pigments—for over 300 harmful chemical substances, ensuring zero toxic residues touch sensitive skin.
                  </p>
                </div>

                {/* Definition 3: PFAS */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      PFAS (Per- and Polyfluoroalkyl Substances)
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Synthetic fluorinated chemicals often called "forever chemicals" because they do not break down in nature or the human body. Conventional clothing uses PFAS for stain resistance; Good Karma strictly eliminates all fluorinated chemical finishes.
                  </p>
                </div>

                {/* Definition 4: Mordant */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      Mordant (Dye Fixatives)
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    A mineral compound used to bond natural dye pigments permanently to cotton cellulose fibres. While industrial dyeing often uses toxic heavy metals like chrome or copper, Good Karma uses solely food-grade natural alum and iron minerals.
                  </p>
                </div>

                {/* Definition 5: Stratum Corneum */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      Stratum Corneum (The Skin Barrier)
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    The outermost brick-and-mortar layer of your skin. It prevents dehydration by locking in essential moisture while shielding underlying tissues from external irritants, allergens, and synthetic chemical absorption.
                  </p>
                </div>

                {/* Definition 6: BRSR & NGRBC */}
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <h3 className="text-base font-semibold text-ink">
                      BRSR & NGRBC (ESG Disclosures)
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Business Responsibility and Sustainability Reporting (BRSR) aligned with the National Guidelines on Responsible Business Conduct (NGRBC). An Indian government transparency framework disclosing corporate ethics, fair wages, and environmental footprint.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 6: Verification Guide / How to Verify */}
            <section id="verification-guide" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Independent Verification
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                How to independently verify our certificates.
              </h2>
              
              <div className="bg-white p-8 rounded-xl border border-border/70 shadow-sm space-y-6">
                <p className="text-p2 text-ink/85 font-light leading-relaxed">
                  Real transparency means anyone can verify a claim directly through official public registries without relying on marketing statements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="p-5 rounded-lg bg-paper border border-border/50">
                    <div className="flex items-center gap-2 text-ink font-medium text-sm mb-2">
                      <Search className="w-4 h-4 text-marigold" />
                      <span>Verifying GOTS Certification</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                      Visit the official GOTS Public Database. Enter the certificate reference code to verify valid certification status, scope, and manufacturing facility address.
                    </p>
                    <a 
                      href="https://global-standard.org/find-suppliers-shops-and-inputs/certified-suppliers/database/search"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-marigold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open GOTS Public Registry &rarr;</span>
                    </a>
                  </div>

                  <div className="p-5 rounded-lg bg-paper border border-border/50">
                    <div className="flex items-center gap-2 text-ink font-medium text-sm mb-2">
                      <Search className="w-4 h-4 text-marigold" />
                      <span>Verifying OEKO-TEX Standard 100</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                      Use the OEKO-TEX Label Check tool. Enter the certificate number to instantly verify that the test report is valid and covers Product Class II (direct skin contact).
                    </p>
                    <a 
                      href="https://www.oeko-tex.com/en/label-check"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-marigold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open OEKO-TEX Label Check &rarr;</span>
                    </a>
                  </div>

                </div>
              </div>
            </section>

            {/* Sources & Citations */}
            <SourcesList sources={sources} lastUpdated="October 2026" />

            {/* Share Bar */}
            <ShareBar 
              title="Proof You Can Check — Good Karma Certifications" 
              urlPath="/educate/certifications" 
            />

          </main>
        </div>
      </div>

      {/* 5. Trust Strip */}
      <TrustStrip 
        className="mt-16 md:mt-24"
        subtitle="Every certificate is independently verifiable via international public registries."
      />

      {/* 6. Related Pages */}
      <RelatedPages pages={relatedPages} />

      {/* 7. Page-Specific Closing CTA */}
      <section className="px-6 max-w-[1400px] mx-auto w-full pt-8">
        <div className="bg-paper rounded-2xl p-10 md:p-16 border border-border/70 flex flex-col items-center text-center shadow-xs">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3">
            Pure From Field To Skin
          </span>
          <h2 className="text-h2 font-editorial italic text-ink mb-4 max-w-[650px]">
            Experience certified purity on your skin.
          </h2>
          <p className="text-p1 text-muted-foreground font-light max-w-[550px] mb-8">
            Innerwear made from 100% GOTS-certified organic cotton, dyed exclusively with natural plants, and tested free from harmful chemicals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon="arrow" href="/products">
              Shop by Concern
            </Button>
            <Button variant="secondary" icon="arrow" href="/educate">
              Explore Our Impact Hub
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
