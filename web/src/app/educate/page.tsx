import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowDown, Sparkles, Sprout, ShieldCheck, HeartPulse, Shield, Leaf, Factory, Scissors, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/educate/FAQSection";
import { AboutStrip } from "@/components/educate/AboutStrip";
import { FAQS_DATA } from "@/data/faqs";
import { SHOW_OEKO_TEX } from "@/config/features";

export const metadata: Metadata = {
  title: "Our Impact — Field to Skin | Good Karma",
  description: "How a pair of cotton innerwear can look after your skin, the farms it comes from and the people who make it. Explore Good Karma's impact across skin science, botanical dyeing, and verified standards.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate",
  },
  openGraph: {
    title: "Our Impact — Care from Field to Skin | Good Karma",
    description: "How naturally dyed, GOTS-certified organic cotton innerwear protects your skin barrier, supports regenerative agriculture, and sets a higher standard.",
    url: "https://goodkarmabrand.com/educate",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/connecting-skin-nature.png",
        width: 1200,
        height: 630,
        alt: "Good Karma Organic Cotton Field and Botanical Transparency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function EducateHubPage() {
  // CLIENT_DATA_NEEDED: Flagged cards are safely excluded from production rendering until verified client data is provided.
  const showPendingMetrics = false;

  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      {/* 1. Hero */}
      <section className="relative w-full min-h-[640px] md:min-h-[720px] flex flex-col justify-end p-6 md:p-14 lg:p-20 overflow-hidden mb-16 md:mb-24">
        {/* Background Image & Atmospheric Layers */}
        <div className="absolute inset-0 bg-ink">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-overlay scale-105 transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/connecting-skin-nature.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-[840px]">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">
              Our Impact Hub
            </span>
            <h1 className="text-h1 font-editorial italic text-white tracking-tight mb-6 drop-shadow-md">
              Care that runs from the field to your skin.
            </h1>
            <p className="text-p1 text-white/90 max-w-[620px] font-light leading-relaxed mb-8">
              How a pair of cotton innerwear can look after your skin, the farms it comes from and the people who make it.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="#impact-at-a-glance" variant="primary" icon="arrow">
              Explore Our Impact
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Impact at a glance */}
      <section id="impact-at-a-glance" className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-36 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
              Transparency
            </span>
            <h2 className="text-h2 font-editorial italic text-ink">
              Impact at a glance.
            </h2>
          </div>
          <p className="text-p2 text-muted-foreground font-light max-w-[500px]">
            Every metric we publish is backed by verifiable documentation. No inflated projections, no unverified claims.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[240px]">
          {/* Card 1: 100% GOTS-certified cotton (Verified) */}
          <div className="bg-paper rounded-xl p-8 md:p-10 border border-border/60 shadow-xs flex flex-col justify-between hover:border-marigold/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-sage bg-sage/10 px-3 py-1 rounded-full border border-sage/20">
                Verified Standard
              </span>
              <Sprout className="w-5 h-5 text-sage" />
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-ink mb-2 tracking-tight">
                100% GOTS Cotton
              </div>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                Certified organic fibres cultivated without synthetic pesticides, defoliants, or toxic chemical fertilizers from certified organic soil.
              </p>
            </div>
          </div>

          {/* Card 2: Natural dyes from plants and food waste (Verified) */}
          <div className="bg-paper rounded-xl p-8 md:p-10 border border-border/60 shadow-xs flex flex-col justify-between hover:border-marigold/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-marigold bg-marigold/10 px-3 py-1 rounded-full border border-marigold/20">
                Verified Standard
              </span>
              <Sparkles className="w-5 h-5 text-marigold" />
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-ink mb-2 tracking-tight">
                Zero Petrochemical Dyes
              </div>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                100% plant-based pigments extracted from marigold blossoms, madder root, and upcycled agricultural peels with zero synthetic azo compounds.
              </p>
            </div>
          </div>

          {/* Card 3: Farmers & collectors supplied (CLIENT_DATA_NEEDED - hidden until verified) */}
          {showPendingMetrics && (
            <div className="bg-paper rounded-xl p-8 md:p-10 border border-dashed border-border flex flex-col justify-between">
              {/* CLIENT_DATA_NEEDED: Pending verified partner audit */}
              <span className="text-xs font-mono uppercase text-muted-foreground">[CLIENT_DATA_NEEDED]</span>
              <div className="text-3xl font-display text-ink font-bold">-- Farming Partners</div>
            </div>
          )}

          {/* Card 4: Kg of flower & peel waste recovered (CLIENT_DATA_NEEDED - hidden until verified) */}
          {showPendingMetrics && (
            <div className="bg-paper rounded-xl p-8 md:p-10 border border-dashed border-border flex flex-col justify-between">
              {/* CLIENT_DATA_NEEDED: Pending annual recovery weigh-in data */}
              <span className="text-xs font-mono uppercase text-muted-foreground">[CLIENT_DATA_NEEDED]</span>
              <div className="text-3xl font-display text-ink font-bold">-- kg Waste Upcycled</div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Four Pillar Cards in Bento Layout */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-36">
        <div className="mb-12">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
            Four Pillars
          </span>
          <h2 className="text-h2 font-editorial italic text-ink mb-4">
            Explore the work in depth.
          </h2>
          <p className="text-p1 text-muted-foreground font-light max-w-[600px]">
            Each pillar represents an uncompromising facet of how we protect the skin and the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {/* Pillar 1: Skin Science */}
          <Link 
            href="/educate/skin-science"
            className="group bg-paper rounded-xl p-10 border border-border/60 hover:border-mauve/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-mauve bg-mauve/10 border border-mauve/20 px-3.5 py-1 rounded-full">
                  Skin Science
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border/50 text-ink group-hover:bg-mauve group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl font-editorial italic text-ink mb-3 group-hover:text-mauve transition-colors">
                For your skin
              </h3>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                Discover how synthetic fabrics weaken the skin barrier, why breathability matters, and how unblended organic cotton restores natural microclimate balance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/40 text-sm font-medium text-ink group-hover:text-mauve flex items-center gap-2">
              <span>Read Skin Science guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 2: Natural Dyeing */}
          <Link 
            href="/educate/natural-dyeing"
            className="group bg-paper rounded-xl p-10 border border-border/60 hover:border-marigold/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-marigold bg-marigold/10 border border-marigold/20 px-3.5 py-1 rounded-full">
                  Natural Dyeing
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border/50 text-ink group-hover:bg-marigold group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl font-editorial italic text-ink mb-3 group-hover:text-marigold transition-colors">
                For the planet and the people who make it
              </h3>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                Reviving a 5,000-year heritage of plant-derived colour. Zero petrochemicals, zero synthetic fixatives, and closed-loop non-toxic dye extraction.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/40 text-sm font-medium text-ink group-hover:text-marigold flex items-center gap-2">
              <span>Explore Natural Dyeing guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 3: Certifications */}
          <Link 
            href="/educate/certifications"
            className="group bg-paper rounded-xl p-10 border border-border/60 hover:border-ink/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-ink bg-ink/10 border border-ink/20 px-3.5 py-1 rounded-full">
                  Verified Standards
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border/50 text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl font-editorial italic text-ink mb-3 group-hover:text-marigold transition-colors">
                Proof you can check
              </h3>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                Full plain-language breakdown of what GOTS, ${SHOW_OEKO_TEX ? "OEKO-TEX Standard 100, " : ""}BRSR corporate conduct, and vegan dye standards cover—and what they don't.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/40 text-sm font-medium text-ink group-hover:text-marigold flex items-center gap-2">
              <span>Review Certifications guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 4: For Doctors */}
          <Link 
            href="/educate/for-doctors"
            className="group bg-paper rounded-xl p-10 border border-border/60 hover:border-sage/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-sage bg-sage/10 border border-sage/20 px-3.5 py-1 rounded-full">
                  For Clinicians
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border/50 text-ink group-hover:bg-sage group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl font-editorial italic text-ink mb-3 group-hover:text-sage transition-colors">
                For the doctors who recommend us
              </h3>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                Clinical rationale for dermatologists, gynaecologists, and wellness practitioners addressing contact dermatitis, microclimate heat traps, and chemical sensitivities.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/40 text-sm font-medium text-ink group-hover:text-sage flex items-center gap-2">
              <span>Enter Clinician Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Field-to-fabric journey (Structural Reference: Aizome Seed to Sheet) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-36">
        <div className="mb-14">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
            Traceability Timeline
          </span>
          <h2 className="text-h2 font-editorial italic text-ink mb-4">
            Field to fabric.
          </h2>
          <p className="text-p1 text-muted-foreground font-light max-w-[650px]">
            Every step in our production is designed around human ecology and biological safety. Here is how our garments travel from certified soil to your wardrobe.
          </p>
        </div>

        {/* 5-step horizontal timeline (stacked vertically on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              step: "01",
              title: "Cotton",
              line: "Hand-harvested, pesticide-free GOTS organic cotton from Indian agricultural farms.",
              img: "/images/connecting-skin-nature.png",
            },
            {
              step: "02",
              title: "Yarn",
              line: "Ring-spun cleanly without chemical sizing agents or synthetic strengthening polymers.",
              img: "https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop",
            },
            {
              step: "03",
              title: "Dye",
              line: "Bathed gently in 100% plant-based pigments using natural mineral mordants like alum and iron.",
              img: "/images/natural-dye-hero.jpg",
            },
            {
              step: "04",
              title: "Stitch",
              line: "Tailored with pure organic cotton sewing threads, zero elastane, and non-chafing flat seams.",
              img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
            },
            {
              step: "05",
              title: "You",
              line: "Uncompromised, unblended purity that allows your body's largest organ to breathe naturally.",
              img: "/images/designed-for-body.jpg",
            },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-paper rounded-xl p-5 border border-border/50 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-muted border border-border/40">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-ink text-[11px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mt-2">
                {item.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand About Strip */}
      <AboutStrip className="mb-24" />

      {/* 5. Short Content */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
              Explainers & Essays
            </span>
            <h2 className="text-h2 font-editorial italic text-ink">
              Recent thoughts & research.
            </h2>
          </div>
          <p className="text-p2 text-muted-foreground font-light max-w-[500px]">
            Short explainers on textiles, human dermatology, and sustainable manufacturing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tag: "Skin Science",
              title: "Why natural dye matters for sensitive skin",
              line: "How synthetic azo dyes break down against skin enzymes, and why botanical extracts remain biologically inert.",
              imgPrimary: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
              imgHover: "/images/skin-barrier-diagram.jpg",
              href: "/educate/skin-science",
            },
            {
              tag: "Materials",
              title: "The reality of 'synthetic stretch' in modern wear",
              line: "Elastane, polyester, and spandex create an impermeable plastic film that traps heat and increases moisture retention.",
              imgPrimary: "/images/synthetic-hand.jpg",
              imgHover: "/images/cotton-hand.png",
              href: "/educate/skin-science",
            },
            {
              tag: "Standards",
              title: "GOTS certification and what it actually means",
              line: "A line-by-line breakdown of why Global Organic Textile Standard certification cannot be faked or self-declared.",
              imgPrimary: "https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop",
              imgHover: "/images/natural-dye-stack.jpg",
              href: "/educate/certifications#gots",
            },
          ].map((card, i) => (
            <Link 
              href={card.href} 
              key={i} 
              className="group bg-paper rounded-xl p-6 border border-border/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-5 bg-muted border border-border/40">
                  {/* Primary Image */}
                  <img 
                    src={card.imgPrimary} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img 
                    src={card.imgHover} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-ink text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {card.tag}
                  </div>
                </div>

                <h3 className="text-xl font-editorial italic text-ink mb-3 group-hover:text-marigold transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  {card.line}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-ink group-hover:text-marigold transition-colors pt-4 border-t border-border/40">
                <span>Read explainer</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5.5 FAQ Accordion */}
      <section className="px-6 max-w-[1400px] mx-auto w-full my-16">
        <FAQSection
          id="faq"
          items={FAQS_DATA["impact"]}
          accentColor="marigold"
          title="Frequently asked questions about our impact."
          subtitle="How our materials, natural dyes, and supply chain care for your skin and the planet."
        />
      </section>

      {/* 6. Closing CTA: Shop by Concern */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-xl p-10 md:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">
            Make The Switch
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px]">
            Your skin touches your clothes all day. Choose what helps it breathe.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed">
            Formulated for daily comfort, new mothers, fertility wellness, and little ones with sensitive skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary">
              Shop by Concern
            </Button>
            <Button href="/educate/skin-science" variant="secondary">
              Read Skin Science
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
