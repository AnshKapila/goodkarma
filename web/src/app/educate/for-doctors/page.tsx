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
import { DoctorResourcePackForm, DoctorConsultationForm, DoctorNewsletterForm } from "@/components/educate/DoctorForms";
import { FAQSection } from "@/components/educate/FAQSection";
import { FAQS_DATA } from "@/data/faqs";
import { getPublishedPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Stethoscope, Download, Mail, ShieldCheck, HeartHandshake, CheckCircle2, FileText, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "For Clinicians — Dermatology & Practice Integration | Good Karma",
  description: "Clinical rationale, textile science, and practice resources for dermatologists, gynaecologists, and healthcare professionals.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/for-doctors",
  },
  openGraph: {
    title: "For Clinicians: Clinical Rationale & Practice Resources | Good Karma",
    description: "How 100% GOTS organic cotton and botanical dyes support cutaneous microclimate comfort. Patient resources and clinic collaboration.",
    url: "https://goodkarmabrand.com/educate/for-doctors",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/doctor-trust.jpg",
        width: 1200,
        height: 630,
        alt: "Clinician in natural organic cotton lab coat — Good Karma For Clinicians",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function ForDoctorsPage() {
  const doctorPosts = getPublishedPosts().filter((p) => p.category === "from-doctors");

  const tocItems: TocItem[] = [
    { id: "why-doctors-choose", label: "1. Why Doctors Choose Us" },
    { id: "how-we-work", label: "2. How We Work with Clinicians" },
    { id: "from-our-doctors", label: "3. From Our Doctors" },
    { id: "resource-pack", label: "4. Clinical Resource Pack" },
    { id: "newsletter", label: "5. Doctor Newsletter" },
    { id: "partner-inquiry", label: "6. Partner Inquiry" },
    { id: "faq", label: "7. Frequently Asked Questions" },
  ];

  const inShortBullets: [string, string, string] = [
    "Synthetic innerwear (polyester, elastane) creates an occlusive microclimate that may exacerbate contact irritation and compromise stratum corneum barrier recovery.",
    "Good Karma eliminates synthetic elastane cores, heavy-metal mordants, and petrochemical azo dyes, providing an unblended GOTS-certified organic cotton baseline for sensitive patients.",
    "We collaborate with clinicians through peer-reviewed educational articles, printable patient guidance sheets, and complimentary practice swatch kits without commercial referral friction.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Lisi, P., et al. (2014). 'Textile contact dermatitis: an overview.'",
      detail: "Contact Dermatitis, 71(4), 211-224. Clinical assessment of dispersed azo dyes and formaldehyde-based finishing resins as common contact sensitisers in allergic eczema.",
    },
    {
      citation: "Runeman, B. (2008). 'Skin interaction with absorbent hygiene products.'",
      detail: "Clinics in Dermatology, 26(1), 45-51. Demonstrates how occlusive moisture combined with mechanical friction compromises stratum corneum integrity.",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995). 'Textile chemical finish dermatitis.'",
      detail: "Contact Dermatitis, 32(5), 253-264. Comprehensive analysis of glyoxal and melamine resins used as wrinkle-resistant textile finishes causing localized dermatitis.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Research",
      title: "The science of breathing: Skin Science.",
      description: "Detailed biomechanical breakdown of stratum corneum permeability, microclimatic friction, and fiber breathability.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Third-Party Audits",
      title: "Proof you can check: Our Certifications.",
      description: "Review our laboratory-verified GOTS certification and ecological toxicology audit protocols.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      <SEOArticleSchema
        headline="For Clinicians: Dermatological Rationale and Practice Resources"
        description="Comprehensive clinical guide on textile contact dermatitis, microclimate management, and physician resources from Good Karma."
        url="/educate/for-doctors"
        image="/images/doctor-trust.jpg"
        datePublished="2026-02-01"
        dateModified="2026-10-16"
      />

      {/* Hero Section */}
      <SubpageHero
        breadcrumbPage="For Clinicians"
        eyebrow="For Clinicians"
        h1="A considered textile standard for patient care."
        promise="Clinical dialogue and practice resources for dermatologists, gynaecologists, and healthcare professionals seeking breathable, unblended cotton to support cutaneous barrier recovery."
        whoThisPageIsFor="Dermatologists, gynaecologists, allergists, urologists, paediatricians, and integrative health professionals."
        imageSrc="/images/doctor-trust.jpg"
        imageAlt="Professional dermatologist in clean unbleached cotton apparel against a deep sage studio backdrop"
        accentColor="sage"
        dense={true}
      />

      {/* In Short Box */}
      <InShort bullets={inShortBullets} accentColor="sage" />

      {/* About Strip */}
      <AboutStrip className="mb-12 md:mb-16" />

      {/* Main Content Area with Desktop Sticky Anchor TOC */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Sticky Table of Contents on Desktop */}
          <TableOfContents items={tocItems} accentColor="sage" />

          {/* Body Content */}
          <article className="space-y-16 md:space-y-24 max-w-[840px]">

            {/* Section 1: Why Doctors Choose Good Karma */}
            <section id="why-doctors-choose" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 1
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Why clinicians choose Good Karma for sensitive skin.
              </h2>
              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-8">
                Managing chronic contact dermatitis, recurrent vulvovaginitis, or atopic flares requires addressing not only topical pharmacology, but the continuous 24-hour mechanical and chemical microclimate created by clothing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">100% GOTS-Certified Organic Cotton</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Cultivated without synthetic insecticides or chemical defoliants. Mechanical yarn spinning preserves natural fiber staple length and moisture wicking, supporting passive thermal and moisture regulation.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-sage bg-white px-2.5 py-1 rounded border border-sage/20 inline-block mt-4 self-start">
                    Zero Synthetic Resins
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold mb-4">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">Zero Synthetic Elastane Cores</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Conventional innerwear frequently contains 5% to 10% elastane (spandex) that creates an occlusive membrane. We use 100% cotton rib-knit elasticity to eliminate synthetic polyurethane cores next to sensitive skin.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-sage bg-white px-2.5 py-1 rounded border border-sage/20 inline-block mt-4 self-start">
                    Pure Cotton Construction
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold mb-4">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">Botanical Dyes & Mineral Fixatives</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Dyed with marigold, madder root, and pomegranate extracts bound with natural alum and iron fixatives. We omit petrochemical azo dyes, disperse pigments, and chlorinated carriers completely.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-sage bg-white px-2.5 py-1 rounded border border-sage/20 inline-block mt-4 self-start">
                    Plant-Based Pigments
                  </span>
                </div>

                {/* Feature 4 */}
                <div className="bg-paper p-6 md:p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">Plain Ingredient Transparency</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Every component is disclosed without ambiguity. Our waistband elastics contain natural rubber latex, fully declared on the box so clinicians can easily advise patients with known type I latex allergies.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-sage bg-white px-2.5 py-1 rounded border border-sage/20 inline-block mt-4 self-start">
                    Full Disclosure on Box
                  </span>
                </div>
              </div>
            </section>

            {/* Section 2: How We Work with Doctors */}
            <section id="how-we-work" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 2
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                How we work with healthcare practitioners.
              </h2>
              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-8">
                We believe medical trust should never be entangled with commercial retail transactions. Our collaboration model focuses purely on scientific inquiry, clinical resources, and patient welfare.
              </p>

              <div className="space-y-6">
                <div className="p-6 md:p-8 rounded-xl bg-paper border border-border/60 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ink mb-2">Editorial Articles & Clinical Reviews</h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      We invite verified medical practitioners to contribute objective commentary and review educational briefs on cutaneous barrier health, contact allergy mechanisms, and fabric breathability. All articles undergo thorough review before publication in our journal.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-xl bg-paper border border-border/60 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0 mt-1">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ink mb-2">Complimentary Practice Information Kits</h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      Practices can request physical fabric swatch samples and printable patient tear-off guides. This enables patients to assess organic cotton hand-feel directly during consultations without clinic inventory overhead.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-xl bg-paper border border-border/60 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0 mt-1">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ink mb-2">Zero Commercial Commissions</h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      Good Karma provides no referral payments, commercial kickbacks, or promotional bonuses. Clinicians recommend pure cotton innerwear solely when it aligns with evidence-based patient management.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: From Our Doctors (Blog Previews) */}
            <section id="from-our-doctors" className="scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                    Section 3
                  </span>
                  <h2 className="text-h2 font-editorial italic text-ink">
                    From our doctors.
                  </h2>
                </div>
                <Link 
                  href="/blog?filter=from-doctors"
                  className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1.5"
                >
                  View all clinician notes <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-8">
                Clinical perspectives on contact dermatoses, fabric microclimates, and barrier support authored by verified medical professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doctorPosts.slice(0, 3).map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-paper rounded-xl border border-border/60 p-6 hover:border-sage/40 transition-colors justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold text-sage uppercase tracking-wider">
                          {post.specialtyTag}
                        </span>
                        {post.isSampleContent && (
                          <span className="text-[10px] font-mono bg-marigold/10 text-marigold px-2 py-0.5 rounded">
                            SAMPLE
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-editorial italic text-ink mb-2 group-hover:text-sage transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-light line-clamp-3 mb-4">
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
            </section>

            {/* Section 4: Clinical Resource Pack Download */}
            <section id="resource-pack" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 4
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Download the Clinical Resource Pack.
              </h2>
              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-8">
                Access printable patient tear-off advice sheets, fabric care instructions for sensitive dermatoses, and our full chemical ingredient exclusion disclosures.
              </p>

              <div className="bg-white p-8 md:p-10 rounded-xl border border-border/70 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="max-w-[450px]">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full mb-3">
                      <Download className="w-3.5 h-3.5" /> Practice PDF Kit
                    </div>
                    <h3 className="text-xl font-editorial italic text-ink mb-2">
                      Clinician Briefing & Patient Handouts (2026 Edition)
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Includes printable patient infographics on synthetic vs. organic cotton microclimates, washing guidelines for eczema, and our GOTS toxicological declaration.
                    </p>
                  </div>

                  <DoctorResourcePackForm />
                </div>
              </div>
            </section>

            {/* Section 5: Doctor Newsletter Opt-in */}
            <section id="newsletter" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 5
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Quarterly clinical briefings.
              </h2>
              <div className="bg-paper p-8 md:p-10 rounded-xl border border-border/60">
                <div className="max-w-[600px] mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage mb-2">
                    <Mail className="w-4 h-4" /> Healthcare Professional Newsletter
                  </div>
                  <h3 className="text-lg font-medium text-ink mb-2">
                    Stay updated on textile dermatology and materials science.
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Receive quarterly research digests covering peer-reviewed literature on contact allergens, microclimate management, and textile toxicology. No marketing spam.
                  </p>
                </div>
                <DoctorNewsletterForm />
              </div>
            </section>

            {/* Section 6: Partner Inquiry Form */}
            <section id="partner-inquiry" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 6
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Request a practice sample kit & consultation.
              </h2>
              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-8">
                We provide accredited clinics with complimentary fabric swatch kits and patient consultation tear-sheets upon verification of clinical credentials.
              </p>

              <DoctorConsultationForm />
            </section>

            {/* Section 7: FAQ Accordion */}
            <div id="faq" className="scroll-mt-28">
              <FAQSection 
                items={FAQS_DATA["for-doctors"]} 
                title="Clinician FAQs"
                subtitle="Common inquiries from dermatologists, gynaecologists, and healthcare practices regarding materials and collaboration."
                accentColor="sage"
              />
            </div>

            {/* Sources & Citations */}
            <SourcesList sources={sources} lastUpdated="October 2026" />

            {/* Share Bar with Send to Colleague enabled */}
            <ShareBar 
              title="Clinical Rationale & Practice Resources — Good Karma" 
              urlPath="/educate/for-doctors" 
              showColleagueShare={true} 
            />

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
          <span className="text-sage font-bold text-xs uppercase tracking-widest mb-4 block">
            Clinical Liaison
          </span>
          <h2 className="text-h2 font-editorial italic text-white mb-6 max-w-[700px]">
            Partner with us to support your patients' barrier health.
          </h2>
          <p className="text-p1 text-white/80 font-light max-w-[550px] mb-10 leading-relaxed">
            Order complimentary practice swatches or speak with our materials team about clean cotton innerwear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#partner-inquiry" variant="primary">
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
