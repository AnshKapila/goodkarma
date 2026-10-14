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
import { ShieldCheck, ArrowRight, Thermometer, Wind, Activity, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Skin Science — How Fabrics Impact Barrier Health | Good Karma",
  description: "A dermatological look at how synthetic fabrics weaken the stratum corneum, trap heat and moisture, and why pure organic cotton restores natural microclimate balance.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/skin-science",
  },
  openGraph: {
    title: "Skin Science: The Biology of What Touches Your Skin | Good Karma",
    description: "The medical and dermatological evidence behind synthetic fabrics vs. breathable GOTS organic cotton. Written plainly, grounded in science.",
    url: "https://goodkarmabrand.com/educate/skin-science",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/skin-barrier-diagram.jpg",
        width: 1200,
        height: 630,
        alt: "Skin Barrier Cross-Section Diagram — Good Karma Skin Science",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function SkinSciencePage() {
  const tocItems: TocItem[] = [
    { id: "barrier-biology", label: "1. The Skin Barrier" },
    { id: "microclimate", label: "2. The Fabric Microclimate" },
    { id: "population-evidence", label: "3. Clinical Focus Areas" },
    { id: "research-library", label: "4. Research Evidence" },
    { id: "faq", label: "5. Scientific Definitions" },
  ];

  const inShortBullets: [string, string, string] = [
    "Your skin barrier (the stratum corneum) is permeable and directly absorbs moisture and chemical compounds from tight everyday clothing.",
    "Synthetic fibres like polyester and elastane create an occlusive microclimate that elevates temperature and traps humidity, fostering bacterial and yeast overgrowth.",
    "Unblended, 100% GOTS-certified organic cotton allows natural thermal regulation and airflow, preventing transepidermal water loss and chronic irritation.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Elias, P. M. (2005). 'Stratum corneum defensive functions: an integrated view.'",
      detail: "Journal of Investigative Dermatology, 125(2), 183-200. Demonstrates how microclimate humidity and occlusive synthetic fabrics disrupt epidermal barrier repair.",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995). 'Textile chemical finish dermatitis.'",
      detail: "Contact Dermatitis, 32(5), 253-264. Explores the dermatological allergic responses associated with synthetic dye fixatives, azo dyes, and resin finishes.",
    },
    {
      citation: "Jung, A., & Schill, W. B. (2000). 'Patients' clothing and its effect on scrotal temperature.'",
      detail: "International Journal of Andrology, 23(4), 206-211. Correlates synthetic, non-breathable underwear with elevated intrascrotal heat and adverse effects on sperm motility.",
    },
    {
      citation: "Global Organic Textile Standard (GOTS) Version 7.0 (2023).",
      detail: "Section 2.4: Prohibited Chemical Inputs in Textile Processing. Strict prohibition of endocrine disruptors, fluorinated substances (PFAS), and heavy-metal mordants.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Botanical Palette",
      title: "Colours drawn directly from nature.",
      description: "How our nine plant dyes replace synthetic petroleum pigments with marigold, madder, and pomegranate.",
      href: "/educate/natural-dyeing",
      accentColor: "marigold",
    },
    {
      tag: "Third-Party Audits",
      title: "Proof you can check: Our Certifications.",
      description: "Read plain-language breakdowns of our GOTS, OEKO-TEX Standard 100, and cruelty-free dye certificates.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      <SEOArticleSchema
        headline="Skin Science: How Fabric Interacts with Your Skin Barrier"
        description="A dermatological breakdown of the stratum corneum, fabric microclimates, and why pure organic cotton protects delicate skin."
        url="/educate/skin-science"
        image="/images/skin-barrier-diagram.jpg"
        datePublished="2026-01-15"
        dateModified="2026-10-14"
      />

      {/* Hero Section */}
      <SubpageHero
        breadcrumbPage="Skin Science"
        eyebrow="Dermatological Research"
        h1="The science of breathing."
        promise="Your skin is your body's largest organ, constantly absorbing what it touches. Here is the peer-reviewed science behind fabric breathability and barrier health."
        whoThisPageIsFor="Anyone experiencing sensitive skin, heat rash, recurring intimate irritation, or exploring chemical-free wellness."
        imageSrc="/images/skin-barrier-diagram.jpg"
        imageAlt="Scientific medical illustration of the human stratum corneum and skin barrier in soft mauve and neutral tones"
        accentColor="mauve"
      />

      {/* In Short Box */}
      <InShort bullets={inShortBullets} accentColor="mauve" />

      {/* About Strip */}
      <AboutStrip className="mb-16 md:mb-24" />

      {/* Main Content Area with Desktop Sticky Anchor TOC */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Table of Contents */}
          <TableOfContents items={tocItems} accentColor="mauve" />

          {/* Main Body Column */}
          <article className="flex-1 w-full max-w-[850px] space-y-24">
            
            {/* Section 1: The Skin Barrier */}
            <section id="barrier-biology" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 1
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                The skin barrier, explained in plain terms.
              </h2>
              <div className="space-y-6 text-p1 text-ink/90 font-light leading-relaxed">
                <p>
                  The <strong className="font-medium text-ink">stratum corneum</strong> is the outermost biological shield of human skin. Often described in dermatology as a “brick and mortar” matrix, it consists of flattened skin cells (<em className="italic">corneocytes</em>) bound firmly together by a lipid layer of ceramides, cholesterol, and fatty acids.
                </p>
                <p>
                  Its primary evolutionary role is double-sided: preventing <strong className="font-medium text-ink">transepidermal water loss (TEWL)</strong>—the passive evaporation of internal moisture—while physically blocking allergens, pathogens, and synthetic chemicals from migrating into the living bloodstream.
                </p>

                {/* Technical Definition Box */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border-l-4 border-mauve border-border/40 shadow-xs my-8">
                  <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-2">
                    Key Definition: Transepidermal Water Loss (TEWL)
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Transepidermal Water Loss measures the total quantity of water that passes from inside a body through the epidermal layer to the surrounding atmosphere. Elevated TEWL directly signals a damaged or compromised skin barrier, leaving the tissue inflamed, hyper-reactive, and prone to eczema.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The Fabric Microclimate */}
            <section id="microclimate" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 2
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                The fabric microclimate: Problem, Situation, Solution.
              </h2>
              
              <div className="space-y-8">
                {/* Problem */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/60 mb-2 block">
                    The Problem
                  </span>
                  <h3 className="text-xl font-medium text-ink mb-3">
                    Synthetic innerwear creates an impermeable plastic wrap.
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Most commercial underwear is composed of petroleum derivatives: polyester, nylon, and elastane (spandex). Because plastics are inherently non-porous, they do not absorb moisture or release trapped thermal heat.
                  </p>
                </div>

                {/* Situation */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <span className="text-xs font-bold uppercase tracking-widest text-mauve mb-2 block">
                    The Situation
                  </span>
                  <h3 className="text-xl font-medium text-ink mb-3">
                    Warmth and humidity stimulate barrier degradation.
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    When sweat is held against the skin in an unventilated microclimate, the stratum corneum swells and becomes over-hydrated (macerated). Maceration dramatically elevates <strong className="font-medium text-ink">barrier permeability</strong>, enabling synthetic chemical fixatives, residual detergents, and heavy-metal dyes to enter deeper epidermal layers.
                  </p>
                </div>

                {/* Solution */}
                <div className="p-8 rounded-xl bg-mauve/10 border border-mauve/30">
                  <span className="text-xs font-bold uppercase tracking-widest text-mauve mb-2 block">
                    The Good Karma Solution
                  </span>
                  <h3 className="text-xl font-medium text-ink mb-3">
                    100% unblended, certified organic cotton.
                  </h3>
                  <p className="text-p2 text-ink/90 font-light leading-relaxed">
                    Our 100% GOTS-certified organic cotton contains hollow cellulose fibres that naturally wick and disperse moisture vapor. By omitting synthetic elastane and petrochemical dye finishes, the garment maintains a stable microclimate, preserving physiological barrier integrity throughout the day.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Clinical Focus Areas */}
            <section id="population-evidence" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 3
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Clinical focus areas across the lifespan.
              </h2>
              <p className="text-p1 text-muted-foreground font-light mb-12">
                Different bodies experience fabric-induced friction and heat in unique physiological ways.
              </p>

              <div className="space-y-12">
                {/* Block 1: Women */}
                <div className="grid md:grid-cols-12 gap-8 bg-paper p-8 md:p-10 rounded-xl border border-border/50 items-center">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-mauve mb-2 block">
                      For Women
                    </span>
                    <h3 className="text-xl font-editorial italic text-ink mb-3">
                      Restoring the intimate microclimate balance.
                    </h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      Synthetic fabrics trap moisture and alter localized pH levels, creating the ideal breeding ground for recurrent candidiasis (yeast infections) and bacterial vaginosis. Gynecologists consistently recommend 100% breathable, unbleached cotton to prevent moisture stagnation and support the body's natural microbiome.
                    </p>
                  </div>
                  <div className="md:col-span-4 aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop" 
                      alt="Woman in breathable natural cotton garments" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Block 2: Infants / Little Ones */}
                <div className="grid md:grid-cols-12 gap-8 bg-paper p-8 md:p-10 rounded-xl border border-border/50 items-center">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-marigold mb-2 block">
                      For Little Ones & Infants
                    </span>
                    <h3 className="text-xl font-editorial italic text-ink mb-3">
                      Protecting early, developing barriers.
                    </h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      An infant's stratum corneum is up to 30% thinner than an adult's, making it dramatically more vulnerable to chemical transdermal absorption and chafing. Certified organic cotton dyed solely with edible, non-toxic botanicals ensures zero exposure to endocrine-disrupting PFAS or petrochemical allergens.
                    </p>
                  </div>
                  <div className="md:col-span-4 aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="/images/little-ones.jpg" 
                      alt="Toddler and parent in pure organic cotton" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Block 3: Men */}
                <div className="grid md:grid-cols-12 gap-8 bg-paper p-8 md:p-10 rounded-xl border border-border/50 items-center">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">
                      For Men
                    </span>
                    <h3 className="text-xl font-editorial italic text-ink mb-3">
                      Cooler by design: Thermal regulation and fertility.
                    </h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      Spermatogenesis requires an environment roughly 2°C to 4°C cooler than core body temperature. Tight polyester and elastane underwear hold scrotal heat, causing chronic thermal elevation linked in clinical urology to reduced sperm motility and count. Loose, pure cotton maintains ambient airflow naturally.
                    </p>
                  </div>
                  <div className="md:col-span-4 aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="/images/fertility-wellness.jpg" 
                      alt="Couple embracing in soft, cool organic cotton" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Four Research Cards */}
            <section id="research-library" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 4
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Four pillars of dermatological evidence.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <Thermometer className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Thermal Equilibrium</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Organic cotton dissipates heat at a steady rate of 28 W/m² compared to synthetic blends which insulate heat, preventing localized hyperthermia and friction burns.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <Wind className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Moisture Vapor Permeability</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Natural cellulose cellular canals absorb excess perspiration in liquid and vapor form, evaporating moisture without wetting the skin surface.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <Activity className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Chemical Inertness</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Zero synthetic resins or chemical anti-crease formaldehyde treatments means the fabric remains hypoallergenic and non-sensitizing on irritated skin.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <ShieldCheck className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Microbial Resistance</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Synthetic nylon creates an anaerobic environment favoring Malassezia and Candida overgrowth. Organic cotton maintains aerobic skin equilibrium.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Definitions and Plain Language Glossary */}
            <section id="faq" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 5
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Scientific terms, defined plainly.
              </h2>
              <div className="divide-y divide-border/60 border-y border-border/60">
                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">What is the Stratum Corneum?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    The outermost layer of the epidermis, comprising 15 to 20 layers of flattened, dead cells filled with keratin. It functions as the body's primary environmental and chemical barrier.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">What is Barrier Permeability?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    The ease with which moisture, chemicals, and external microbes can penetrate through the outer skin layers into living biological tissue.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-base font-medium text-ink mb-2">What does GOTS certification guarantee for skin?</h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    The Global Organic Textile Standard prohibits heavy metals, formaldehyde, toxic solvents, and GMO cotton at all manufacturing steps, guaranteeing zero chemical pesticide residues in the finished knit.
                  </p>
                </div>
              </div>
            </section>

            {/* Sources & Citations */}
            <SourcesList sources={sources} lastUpdated="October 2026" />

            {/* Share Bar */}
            <ShareBar title="Skin Science: The Biology of What Touches Your Skin" urlPath="/educate/skin-science" />

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
          <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">
            Designed For The Body
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px]">
            Give your skin barrier the breathability it deserves.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed">
            Discover our collection of 100% GOTS organic cotton innerwear, formulated around human biology and natural comfort.
          </p>
          <Button href="/products" variant="primary">
            Shop by Concern
          </Button>
        </div>
      </section>
    </div>
  );
}
