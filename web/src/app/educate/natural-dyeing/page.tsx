import type { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/educate/SubpageHero";
import { InShort } from "@/components/educate/InShort";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { TableOfContents, type TocItem } from "@/components/educate/TableOfContents";
import { TrustStrip } from "@/components/educate/TrustStrip";
import { ShareBar } from "@/components/educate/ShareBar";
import { RelatedPages, type RelatedPageItem } from "@/components/educate/RelatedPages";
import { SourcesList, type SourceItem } from "@/components/educate/SourcesList";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Leaf, Ban, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Natural Dyeing — Botanical Palette & Clean Chemistry | Good Karma",
  description: "Colours drawn directly from nature. Explore our botanical dye library made from marigold, madder root, and pomegranate with zero petrochemical azo dyes or PFAS.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/natural-dyeing",
  },
  openGraph: {
    title: "Natural Dyeing: Colours Drawn Directly From Nature | Good Karma",
    description: "Discover Good Karma's botanical dyeing craft. 100% plant-based pigments, natural mineral mordants, and zero synthetic azo dyes.",
    url: "https://goodkarmabrand.com/educate/natural-dyeing",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/natural-dye-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Artisan dyer hands with marigold, madder, and botanical pigments",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function NaturalDyeingPage() {
  const tocItems: TocItem[] = [
    { id: "philosophy", label: "1. Ancient Heritage" },
    { id: "dye-library", label: "2. The Dye Library (6 Botanical Sources)" },
    { id: "process", label: "3. Sourcing & The Dye Process" },
    { id: "what-we-leave-out", label: "4. What We Leave Out" },
    { id: "definitions", label: "5. Scientific Definitions" },
  ];

  const inShortBullets: [string, string, string] = [
    "Commercial clothing relies almost entirely on petroleum-derived synthetic azo dyes that release carcinogenic amines upon contact with human skin sweat.",
    "Good Karma sources 100% of its pigments from Indian agricultural botanicals and upcycled food and temple waste, including marigold petals, madder roots, and pomegranate peels.",
    "We use only pure, earth-derived mineral fixatives (alum and iron)—completely rejecting toxic chemical mordants, synthetic elastane, and PFAS finishes.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Saxena, S., & Raja, A. S. M. (2014). 'Natural Dyes: Sources, Chemistry, Application and Sustainability Issues.'",
      detail: "Roadmap to Sustainable Textiles and Clothing, Springer, 37-80. Reviews botanical extraction protocols, non-toxic mineral mordanting, and the ecological superiority of natural pigments.",
    },
    {
      citation: "European Chemicals Agency (ECHA). 'Azo substances in consumer articles.'",
      detail: "REACH Annex XVII: Comprehensive restrictions on 22 specific aromatic amines released by synthetic azo colorants under reducing physiological skin conditions.",
    },
    {
      citation: "Bechtold, T., & Mussak, R. (2009). 'Handbook of Natural Colorants.'",
      detail: "John Wiley & Sons. Analyzes fastness, skin compatibility, and antimicrobial properties of alizarin from Rubia cordifolia (Madder) and flavonoids from Punica granatum (Pomegranate).",
    },
    {
      citation: "GOTS Ecological Criteria for Chemical Inputs (2023).",
      detail: "Standard Section 4.3: Prohibition of bioaccumulative fluorinated water-and-stain repellent chemicals (PFAS) and aromatic amine-releasing dyes.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Research",
      title: "The science of breathing: Skin Science.",
      description: "How synthetic fabrics disrupt the stratum corneum and why organic cotton preserves intimate microbiome balance.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Verified Standards",
      title: "Proof you can check: Our Certifications.",
      description: "Inspect our third-party GOTS and OEKO-TEX Standard 100 certifications for clean textile chemistry.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      <SEOArticleSchema
        headline="Natural Dyeing: Colours Drawn Directly From Nature"
        description="A complete exploration of Good Karma's natural botanical dye library, non-toxic mineral mordants, and clean textile chemistry."
        url="/educate/natural-dyeing"
        image="/images/natural-dye-hero.jpg"
        datePublished="2026-01-20"
        dateModified="2026-10-14"
      />

      {/* Hero Section */}
      <SubpageHero
        breadcrumbPage="Natural Dyeing"
        eyebrow="Botanical Craft & Chemistry"
        h1="Colours drawn directly from nature."
        promise="Marigold, Madder root, and Pomegranate. We use real earth ingredients to create our living palette, ensuring no harmful synthetic petrochemicals ever touch your skin."
        whoThisPageIsFor="Conscious dressers, people with synthetic chemical sensitivities, and anyone seeking transparent textile chemistry."
        imageSrc="/images/natural-dye-hero.jpg"
        imageAlt="Botanical natural dyeing specimen board with artisan dyer hands, dried madder roots, marigold blossoms, and pomegranate rinds"
        accentColor="marigold"
      />

      {/* In Short Box */}
      <InShort bullets={inShortBullets} accentColor="marigold" />

      {/* About Strip */}
      <AboutStrip className="mb-16 md:mb-24" />

      {/* Main Content Area with Desktop Sticky Anchor TOC */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Table of Contents */}
          <TableOfContents items={tocItems} accentColor="marigold" />

          {/* Main Body Column */}
          <article className="flex-1 w-full max-w-[850px] space-y-24">
            
            {/* Section 1: Philosophy & Heritage */}
            <section id="philosophy" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 1
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                A 5,000-year heritage of clean colour.
              </h2>
              <div className="space-y-6 text-p1 text-ink/90 font-light leading-relaxed">
                <p>
                  Natural dyeing is not a passing sustainability novelty—it is human civilization's foundational textile craft. Archaeological fragments discovered in Mohenjo-Daro (Indus Valley Civilization, c. 3000 BCE) reveal cotton textiles dyed with madder root that remain pigmented to this day.
                </p>
                <p>
                  For five millennia, garments were colored with living flowers, roots, barks, and minerals that nurtured both the soil and the skin. The 19th-century introduction of coal-tar aniline dyes replaced this relationship with synthetic convenience. At Good Karma, we have revived this ancient craft, combining time-honored artisanal methods with contemporary, standardized closed-loop processing.
                </p>
              </div>
            </section>

            {/* Section 2: The Dye Library (Bento Grid) */}
            <section id="dye-library" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 2
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-4">
                The Dye Library: 6 core botanical sources.
              </h2>
              <p className="text-p1 text-muted-foreground font-light mb-10">
                Our palette begins with six core plant extracts sourced from regenerative Indian farms and agricultural upcycling. The modular bento layout expands seamlessly as new natural shade recipes are mastered.
              </p>

              {/* Dye Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* 1. Marigold */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#C98637] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Tagetes erecta</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Marigold</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Sourced from upcycled Indian temple flower offerings. Yields vibrant, solar golden hues rich in skin-soothing lutein and flavonoids.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-marigold mt-4 block">Warm Golden Yellow</span>
                </div>

                {/* 2. Madder Root */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#A4777E] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Rubia cordifolia</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Madder Root</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Known as Manjistha in Ayurvedic traditions. Dried roots release alizarin, producing our signature dusty mauve and earthy terracotta hues.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-mauve mt-4 block">Dusty Mauve & Terracotta</span>
                </div>

                {/* 3. Pomegranate Peel */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#D4A373] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Punica granatum</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Pomegranate</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Upcycled from sun-dried fruit processing waste. High in natural tannins, it creates earthy ochre, golden buff, and warm olive tones.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-amber-700 mt-4 block">Earthy Ochre & Warm Olive</span>
                </div>

                {/* 4. Indigo */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#3D5A80] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Indigofera tinctoria</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Indigo</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Naturally fermented organic indigo leaves. Creates deep, living botanical blues without caustic chemical reducing agents.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-indigo-800 mt-4 block">Deep Botanical Blue</span>
                </div>

                {/* 5. Harda / Myrobalan */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#C2B280] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Terminalia chebula</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Harda</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      A wild forest fruit historically revered for digestive wellness. Functions as a natural tanin-rich pre-treatment and gentle buff colorant.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-stone-600 mt-4 block">Neutral Yellow-Buff</span>
                </div>

                {/* 6. Katha / Acacia */}
                <div className="bg-paper p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#8B5A2B] shadow-xs mb-4 border border-border/40" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Senegalia catechu</span>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">Katha</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Extracted sustainably from indigenous acacia tree heartwood. Imparts rich cinnamon fawn and warm earthy brown tones.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-amber-900 mt-4 block">Cinnamon Fawn & Brown</span>
                </div>

              </div>
            </section>

            {/* Section 3: Sourcing & The Dye Process */}
            <section id="process" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 3
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Sourcing and the closed-loop dye process.
              </h2>
              <div className="space-y-6 text-p1 text-ink/90 font-light leading-relaxed">
                <p>
                  Our raw materials are collected through local farm partnerships and urban temple waste management systems. Once dried and powdered, the botanicals undergo a three-step low-temperature decoction:
                </p>
              </div>

              {/* 3 Step Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="bg-paper p-6 rounded-xl border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-marigold text-white flex items-center justify-center font-bold text-xs mb-4">1</div>
                  <h3 className="text-base font-medium text-ink mb-2">Gentle Water Extraction</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Flowers and roots are infused in filtered rainwater at controlled simmering temperatures, extracting active pigments without thermal degradation.
                  </p>
                </div>

                <div className="bg-paper p-6 rounded-xl border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-marigold text-white flex items-center justify-center font-bold text-xs mb-4">2</div>
                  <h3 className="text-base font-medium text-ink mb-2">Clean Mineral Binding</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    We use gentle, food-safe mineral salts—specifically <strong className="font-medium text-ink">Alum</strong> and <strong className="font-medium text-ink">Iron</strong>—to chemically bind the natural pigment to cotton fibers permanently.
                  </p>
                </div>

                <div className="bg-paper p-6 rounded-xl border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-marigold text-white flex items-center justify-center font-bold text-xs mb-4">3</div>
                  <h3 className="text-base font-medium text-ink mb-2">Compostable Effluent</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Because our dye vats contain only plants and minerals, the residual wash water is non-toxic and filtered for on-site agricultural irrigation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: What We Leave Out */}
            <section id="what-we-leave-out" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 4
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                What we leave out.
              </h2>
              <p className="text-p1 text-muted-foreground font-light mb-8">
                True purity is defined as much by what is excluded as what is included.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-paper border border-border/60">
                  <Ban className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-1">No Synthetic Azo Dyes</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Azo dyes constitute 70% of commercial textile pigments. Under heat and sweat, specific azo bonds cleave into aromatic amines known to provoke acute contact dermatitis and cellular toxicity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-paper border border-border/60">
                  <Ban className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-1">No Elastane, Spandex, or Lycra</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Even "95% cotton" blends contain 5% polyurethane plastic threads that shed microplastics against the skin and create a synthetic moisture seal. We use zero elastane.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-paper border border-border/60">
                  <Ban className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-1">No PFAS or Chemical Stain/Wrinkle Finishes</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Per- and polyfluoroalkyl substances (PFAS) are forever chemicals frequently applied to textiles to resist stains and moisture. Our garments carry zero fluorinated chemistry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-paper border border-border/60">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-1">Only Safe Earth Fixatives: Alum & Iron</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Instead of toxic chrome or copper mordants, we rely strictly on food-grade potassium aluminium sulfate (Alum) and ferrous sulfate (Iron) to lock colours into the cellulose structure safely.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Definitions */}
            <section id="definitions" className="scroll-mt-28">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 5
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Technical terms, defined plainly.
              </h2>
              <div className="divide-y divide-border/60 border-y border-border/60">
                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">What is a Mordant?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    A mineral compound that forms a coordination complex with natural dye molecules and textile fibers, anchoring the pigment so it resists washing and sunlight without synthetic resins.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">What are PFAS?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Per- and polyfluoroalkyl substances: synthetic chemical compounds with carbon-fluorine bonds that do not break down in the environment or human body, commonly used in textile stain-resistant finishes.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">Why do synthetic dyes smell like chemicals?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Petroleum-derived dyes require formaldehyde fixatives, heavy metals, and carrier solvents to bond with synthetic fabrics, off-gassing volatile organic compounds (VOCs) that irritate sensitive skin.
                  </p>
                </div>
              </div>
            </section>

            {/* Sources & Citations */}
            <SourcesList sources={sources} lastUpdated="October 2026" />

            {/* Share Bar */}
            <ShareBar title="Natural Dyeing: Colours Drawn Directly From Nature" urlPath="/educate/natural-dyeing" />

          </article>
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip className="mt-24" />

      {/* Related Pages */}
      <RelatedPages pages={relatedPages} />

      {/* Closing CTA */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mt-12">
        <div className="bg-ink rounded-xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">
            Natural Palette
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px]">
            Wear colour that was born in the earth.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed">
            Explore our innerwear dyed with Marigold, Madder root, Pomegranate, and unbleached cotton.
          </p>
          <Button href="/products" variant="primary">
            Shop by Colour
          </Button>
        </div>
      </section>
    </div>
  );
}
