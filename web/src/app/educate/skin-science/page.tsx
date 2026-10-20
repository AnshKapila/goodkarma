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
import { FAQSection } from "@/components/educate/FAQSection";
import { FAQS_DATA } from "@/data/faqs";
import { Button } from "@/components/ui/button";
import { SHOW_OEKO_TEX } from "@/config/features";
import { ShieldCheck, ArrowRight, Thermometer, Wind, Activity, CheckCircle2, AlertCircle, Layers, Users, Globe2, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Skin Science — How Fabrics Impact Barrier Health | Good Karma",
  description: "A dermatological look at how synthetic fabrics affect the stratum corneum, microclimate heat and moisture, and why pure organic cotton supports natural barrier balance.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/skin-science",
  },
  openGraph: {
    title: "Skin Science: The Biology of What Touches Your Skin | Good Karma",
    description: "The dermatological evidence behind synthetic fabrics vs. breathable GOTS organic cotton. Written plainly, grounded in peer-reviewed science.",
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
    { id: "go-deeper", label: "3. Go Deeper: Six Critical Topics" },
    { id: "four-perspectives", label: "4. Four Ways to Look at It" },
    { id: "trade-offs", label: "5. Trade-Offs of Natural Dyeing" },
    { id: "research-library", label: "6. Dermatological Research" },
    { id: "faq", label: "7. Frequently Asked Questions" },
  ];

  const inShortBullets: [string, string, string] = [
    "Your skin barrier (stratum corneum) is permeable and directly absorbs moisture and chemical compounds from tight everyday clothing.",
    "Synthetic fibres like polyester and elastane create an occlusive microclimate that elevates temperature and traps humidity, fostering cutaneous irritation.",
    "Unblended, 100% GOTS-certified organic cotton allows natural thermal regulation and airflow, supporting barrier comfort without synthetic resin finishes.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Elias, P. M. (2005). 'Stratum corneum defensive functions: an integrated view.'",
      detail: "Journal of Investigative Dermatology, 125(2), 183-200. Demonstrates how microclimate humidity and occlusive synthetic fabrics disrupt epidermal barrier repair.",
      url: "https://pubmed.ncbi.nlm.nih.gov/16098026/",
    },
    {
      citation: "Runeman, B. (2008). 'Skin interaction with absorbent hygiene products.'",
      detail: "Clinics in Dermatology, 26(1), 45-51. Evaluates cutaneous microclimate, mechanical friction, and hydration dynamics next to delicate skin.",
      url: "https://pubmed.ncbi.nlm.nih.gov/18280904/",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995). 'Textile chemical finish dermatitis.'",
      detail: "Contact Dermatitis, 32(5), 253-264. Explores dermatological contact sensitivity associated with synthetic dye fixatives, azo dyes, and resin finishes.",
      url: "https://pubmed.ncbi.nlm.nih.gov/7664633/",
    },
    {
      citation: "Jung, A., & Schill, W. B. (2000). 'Patients' clothing and its effect on scrotal temperature.'",
      detail: "International Journal of Andrology, 23(4), 206-211. Correlates synthetic, non-breathable underwear with elevated intrascrotal heat.",
      url: "https://pubmed.ncbi.nlm.nih.gov/10931235/",
    },
    {
      citation: "European Environment Agency (EEA) (2022). 'Microplastics from textiles: towards a circular economy for textiles in Europe.'",
      detail: "Briefing on synthetic fibre shedding, filament fragmentation, and potential environmental and cutaneous interactions.",
      url: "https://www.eea.europa.eu/publications/microplastics-from-textiles-towards-a",
    },
    {
      citation: "European Chemicals Agency (ECHA) (2023). 'Substances in textiles and skin sensitization.'",
      detail: "Regulatory review of chemical limit values, disperse dyes, and skin-sensitizing finishing agents in commercial apparel.",
      url: "https://echa.europa.eu",
    },
    {
      citation: "Global Organic Textile Standard (GOTS) Version 7.0 (2023).",
      detail: "Section 2.4: Prohibited Chemical Inputs in Textile Processing. Strict prohibition of endocrine disruptors, fluorinated substances (PFAS), and heavy-metal mordants.",
      url: "https://global-standard.org",
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
      description: SHOW_OEKO_TEX 
        ? "Read plain-language breakdowns of our GOTS, OEKO-TEX Standard 100, and cruelty-free dye certificates."
        : "Read plain-language breakdowns of our GOTS, BRSR disclosure, and cruelty-free dye certificates.",
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
        dateModified="2026-10-16"
      />

      {/* Hero Section */}
      <SubpageHero
        breadcrumbPage="Skin Science"
        eyebrow="Dermatological Research"
        h1="The science of breathing."
        promise="Your skin is your body's largest organ, continuously interacting with the microclimate of your clothes. Here is the peer-reviewed science behind fabric breathability and barrier comfort."
        whoThisPageIsFor="Anyone experiencing sensitive skin, heat rash, recurring intimate irritation, or exploring unblended organic wellness."
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
                  Its primary physiological role is double-sided: preventing excessive <strong className="font-medium text-ink">transepidermal water loss (TEWL)</strong>—the passive evaporation of internal moisture—while physically blocking allergens, environmental irritants, and synthetic chemicals from migrating into living dermal tissue.
                </p>

                {/* Technical Definition Box */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border-l-4 border-mauve border-border/40 shadow-xs my-8">
                  <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-2">
                    Key Definition: Transepidermal Water Loss (TEWL)
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Transepidermal Water Loss measures the total quantity of water that passes from inside a body through the epidermal layer to the surrounding atmosphere. Elevated TEWL is associated with a compromised skin barrier, leaving the tissue prone to dryness, reactivity, and discomfort.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The Fabric Microclimate: Problem, Situation, Solution */}
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
                    Synthetic innerwear creates an occlusive microclimate.
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    Much of commercial underwear is made from petroleum derivatives: polyester, nylon, and elastane. Because plastic fibres are inherently non-porous, they do not absorb moisture vapor or release trapped body heat effectively.
                  </p>
                </div>

                {/* Situation */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <span className="text-xs font-bold uppercase tracking-widest text-mauve mb-2 block">
                    The Situation
                  </span>
                  <h3 className="text-xl font-medium text-ink mb-3">
                    Warmth and humidity may accelerate barrier disruption.
                  </h3>
                  <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                    When sweat is held against the skin in an unventilated microclimate, the stratum corneum may swell and become over-hydrated (macerated). Research suggests that maceration increases barrier permeability, which can heighten sensitivity to chemical fixatives, residual detergents, and synthetic finishes.
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
                    Our 100% GOTS-certified organic cotton features naturally hollow cellulose fibres that wick and disperse moisture vapor. By omitting synthetic elastane and petrochemical dye finishes, the garment supports a stable, breathable microclimate, helping preserve everyday barrier comfort.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Go Deeper: Six Critical Topics */}
            <section id="go-deeper" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 3
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-4">
                Go deeper: Six critical perspectives on everyday textiles.
              </h2>
              <p className="text-p1 text-muted-foreground font-light mb-12">
                Detailed examinations of fabric composition, intimate health, microplastics, and cumulative chemical exposure.
              </p>

              <div className="space-y-12">
                
                {/* Topic 1: Intimate comfort */}
                <div id="intimate-comfort" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-mauve" />
                    <span className="text-xs font-bold uppercase tracking-widest text-mauve">Topic 1 · Comfort & Humidity</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    Intimate comfort and cutaneous microclimates.
                  </h3>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Skin in the intimate area is uniquely delicate, characterized by high nerve density, folded anatomical contours, and continuous moisture production. During everyday wear, synthetic fabrics like polyester and elastane create an occlusive barrier that restricts ambient air exchange, trapping body heat and sweat. Dermatological and gynaecological research suggests that prolonged moisture retention can macerate the stratum corneum, weakening its defensive integrity and fostering an environment associated with friction chafing, contact dermatitis, and microflora disruption. Breathable, 100% unblended organic cotton is commonly advised by clinicians because its hollow cellulose fibres passively absorb moisture vapor, supporting a balanced microclimate.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: Runeman, B. (2008), Clinics in Dermatology.</span>
                </div>

                {/* Topic 2: What’s in conventional fabric */}
                <div id="conventional-fabric" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-marigold">Topic 2 · Textile Chemistry</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    What conventional textiles can contain.
                  </h3>
                  <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-border/50 relative">
                    <img 
                      src="/images/polyester-skin-contact.jpg" 
                      alt="Ultrarealistic macro illustration of synthetic polyester fabric in direct contact with skin barrier" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded">
                      Fig 2.1 — Synthetic polyester weave & epidermal contact interface
                    </div>
                  </div>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Synthetic and conventionally processed garments often rely on extensive chemical processing to achieve softness, anti-wrinkle performance, and vibrant coloration. These treatments can introduce disperse and azo dyes, formaldehyde-releasing resins, per- and polyfluoroalkyl substances (PFAS) for stain resistance, and trace heavy-metal mordants. While international regulatory frameworks establish statutory limit values for individual substances, chemical residues may remain adhered to synthetic fibres. Under physiological conditions involving skin warmth and perspiration, research indicates these residues can migrate toward the epidermis. Good Karma eliminates synthetic finishes and petrochemical azo pigments entirely, aiming to lower the cumulative chemical load in direct contact with your skin every day.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: Hatch & Maibach (1995), Contact Dermatitis; ECHA (2023).</span>
                </div>

                {/* Topic 3: Microplastics and nanoplastics */}
                <div id="microplastics-nanoplastics" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-ink/60" />
                    <span className="text-xs font-bold uppercase tracking-widest text-ink/60">Topic 3 · Emerging Science</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    Microplastics and nanoplastics in everyday apparel.
                  </h3>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Break a plastic bottle into pieces and you get microplastics; grind them much finer into the sub-micron realm and you reach nanoplastics. Both share the exact same synthetic polymer chemistry, but nanoplastics operate at cellular dimensions. Synthetic garments—especially polyester, nylon, and elastane—shed millions of microscopic and nanoscopic polymer filaments during routine washing and everyday mechanical body friction. While environmental science has documented synthetic particle dispersion across global waterways, medical research evaluating what continuous epidermal contact with nanoplastics means for skin barrier permeability and systemic absorption is still actively emerging. Good Karma relies entirely on biodegradable natural cotton cellulose.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: European Environment Agency (EEA) (2022).</span>
                </div>

                {/* Topic 4: Heat and comfort for men */}
                <div id="heat-comfort-men" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sage" />
                    <span className="text-xs font-bold uppercase tracking-widest text-sage">Topic 4 · Thermal Management [VERIFY]</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    Heat regulation and intrascrotal comfort for men.
                  </h3>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Physiological heat and moisture accumulation around the groin represent a common reason breathable, looser underwear is suggested for men. Scrotal thermoregulation functions within an anatomical temperature window cooler than core body heat. Research suggests that tight, synthetic underwear constructed from non-porous elastane or polyester blends insulates scrotal heat, leading to elevated temperatures associated with changes in sperm motility. Unblended, lightweight organic cotton allows passive convective airflow and natural thermal dissipation, helping keep things cooler and supporting an ambient anatomical microclimate throughout daily physical activity.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: Jung, A. & Schill, W. B. (2000), International Journal of Andrology. [VERIFY]</span>
                </div>

                {/* Topic 5: Lower your exposure */}
                <div id="lower-exposure" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-mauve" />
                    <span className="text-xs font-bold uppercase tracking-widest text-mauve">Topic 5 · Ingredient Transparency</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    Lowering your cumulative chemical exposure.
                  </h3>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Certified organic cotton, plant-derived botanical dyes, and natural fixatives like alum and iron mean fewer synthetic dyes and finishes against your skin. Conventional apparel often conceals proprietary trade-secret chemical washes, softener baths, and fluorinated repellents behind simple fiber labels. Good Karma operates with complete transparency: our elastic contains natural rubber latex, and every material is listed on the box. {/* CONFIRM_WITH_CLIENT: latex */} By prioritizing untreated organic fibres and plant pigments, we provide a clean, non-sensitizing alternative designed to lower everyday dermal chemical contact.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: Global Organic Textile Standard (GOTS) v7.0; ECHA.</span>
                </div>

                {/* Topic 6: From factory to skin to soil */}
                <div id="factory-skin-soil" className="scroll-mt-28 p-8 md:p-10 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-marigold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-marigold">Topic 6 · Full Lifecycle</span>
                  </div>
                  <h3 className="text-2xl font-editorial italic text-ink mb-4">
                    From factory to skin to soil: The textile lifecycle.
                  </h3>
                  <p className="text-p2 text-ink/85 font-light leading-relaxed mb-4">
                    Dyes and finishes touch the people who make a fabric, the water that carries leftovers away and, finally, you. Plant-based dyes shorten that chain, though growing them takes land and water too. Botanical dyeing fundamentally shortens this industrial chain by utilizing renewable agricultural residues like marigold blossoms, madder roots, and pomegranate peels instead of petroleum synthesis. However, cultivating dye crops requires arable land and fresh water, and organic waste still requires responsible biological treatment. Understanding this entire continuum ensures that textile choices respect worker safety, water conservation, and soil health.
                  </p>
                  <span className="text-xs text-muted-foreground font-mono">Source: Saxena & Raja (2014), Springer Sustainable Textiles.</span>
                </div>

              </div>
            </section>

            {/* Section 4: Four Ways to Look at It */}
            <section id="four-perspectives" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 4
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Four ways to look at it.
              </h2>
              <p className="text-p1 text-muted-foreground font-light mb-10">
                Understanding innerwear requires looking beyond personal comfort to encompass toxicology, manufacturing safety, and planetary impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Your Skin */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-mauve/10 text-mauve flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h3 className="text-xl font-editorial italic text-ink">Your Skin</h3>
                  </div>
                  <p className="text-xs text-ink/85 font-light leading-relaxed">
                    Your skin is a living, permeable organ that interacts continuously with the microclimate created by your clothing. Prioritizing pure, breathable organic cotton lowers friction and supports natural moisture dissipation, providing daily comfort free from synthetic resin coatings and occlusive plastic traps.
                  </p>
                </div>

                {/* 2. Toxicology */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-marigold/10 text-marigold flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h3 className="text-xl font-editorial italic text-ink">Toxicology</h3>
                  </div>
                  <p className="text-xs text-ink/85 font-light leading-relaxed">
                    Conventional textiles can carry hundreds of processing auxiliaries, including azo dyes, PFAS, and formaldehyde finishes. While most substances are regulated at established statutory limits, our aim is to lower daily cumulative exposure by using unblended organic cotton, plant-based dyes, and safe mineral fixatives.
                  </p>
                </div>

                {/* 3. The People Who Make It */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h3 className="text-xl font-editorial italic text-ink">The People Who Make It</h3>
                  </div>
                  <p className="text-xs text-ink/85 font-light leading-relaxed">
                    Industrial dyehouses and finishing mills often expose workers to synthetic chemical vapours, corrosive bleaches, and synthetic dye powders. Choosing plant-based dyeing and certified organic agricultural cotton supports safe, fair working environments audited under International Labour Organization (ILO) standards.
                  </p>
                </div>

                {/* 4. The Planet */}
                <div className="p-8 rounded-xl bg-paper border border-border/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-ink/10 text-ink flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h3 className="text-xl font-editorial italic text-ink">The Planet</h3>
                  </div>
                  <p className="text-xs text-ink/85 font-light leading-relaxed">
                    Conventional textile dyeing generates substantial boiler fuel emissions, complex wastewater effluent, and chemical sludge containing concentrated residues. Natural dyeing avoids petrochemical synthesis, though it still requires thoughtful water usage, land management, and responsible effluent treatment.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 5: Trade-offs of Natural Dyeing */}
            <section id="trade-offs" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 5
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Honest trade-offs of natural dyeing.
              </h2>
              
              <div className="p-8 rounded-xl bg-paper border border-border/60 space-y-6">
                <p className="text-p2 text-ink/90 font-light leading-relaxed">
                  We believe in scientific honesty rather than romanticized sustainability narratives. Natural dyeing is gentle on human skin, but it involves real practical trade-offs:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-mauve mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-medium text-ink block mb-0.5">Agricultural Land and Water Requirements</strong>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        Growing dye-yielding crops requires arable land and freshwater. Good Karma balances this by sourcing from agricultural upcycling—recovering discarded temple marigold flowers and post-harvest pomegranate peels rather than dedicating prime food farmland to dye monocultures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-mauve mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-medium text-ink block mb-0.5">Organic Load in Effluent Treatment</strong>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        Natural dye baths contain biodegradable plant biomass rather than petrochemical carcinogens. However, suspended botanical matter creates a higher biological oxygen demand (BOD) that still requires rigorous biological wastewater management before safe discharge or reuse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-mauve mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-medium text-ink block mb-0.5">Colour Palette Nuance and Natural Fastness</strong>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        Natural dyes produce living, earthy tones rather than artificial synthetic neons. Because we exclude heavy-metal fixatives, botanical shades soften gracefully over time with exposure to sunlight and washing, developing a unique natural patina.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Four Research Cards */}
            <section id="research-library" className="scroll-mt-28">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 6
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Four pillars of dermatological research.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <Thermometer className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Thermal Equilibrium</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Organic cotton facilitates convective airflow and dissipates heat effectively compared to synthetic blends that insulate body warmth.
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
                  <h3 className="text-lg font-medium text-ink mb-2">Chemical Non-Reactivity</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Zero synthetic resins or formaldehyde anti-crease treatments means the fabric remains non-sensitizing on delicate cutaneous barriers.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-paper rounded-xl border border-border/50">
                  <ShieldCheck className="w-6 h-6 text-mauve mb-4" />
                  <h3 className="text-lg font-medium text-ink mb-2">Aerobic Balance</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Synthetic nylon creates an unventilated microclimate favoring fungal and bacterial stagnation. Breathable organic cotton maintains aerobic equilibrium.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ Accordion */}
            <FAQSection
              id="faq"
              items={FAQS_DATA["skin-science"]}
              accentColor="mauve"
              title="Frequently asked questions about skin science."
              subtitle="Plain-language answers to common dermatological and textile questions."
            />

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
