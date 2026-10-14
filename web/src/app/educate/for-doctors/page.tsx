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
import { DoctorResourcePackForm, DoctorConsultationForm } from "@/components/educate/DoctorForms";
import { Button } from "@/components/ui/button";
import { Stethoscope, QrCode, Download, Mail, ShieldCheck, HeartHandshake, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "For Clinicians — Dermatology & Practice Integration | Good Karma",
  description: "Clinical rationale, peer-reviewed textile science, and practice resources for dermatologists, gynaecologists, and wellness practitioners.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/for-doctors",
  },
  openGraph: {
    title: "For Clinicians: Clinical Rationale & Practice Resources | Good Karma",
    description: "How 100% GOTS organic cotton and botanical dyes resolve cutaneous microclimate distress. Patient tear-sheets and clinic integration.",
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
  const tocItems: TocItem[] = [
    { id: "clinical-rationale", label: "1. Clinical Rationale" },
    { id: "mechanisms", label: "2. Mechanisms & Pathology" },
    { id: "how-qr-works", label: "3. How Practice QR Works" },
    { id: "clinician-recognition", label: "4. Private Recognition" },
    { id: "resource-pack", label: "5. Clinical Resource Pack" },
    { id: "testing-status", label: "6. Laboratory Testing Audit" },
    { id: "partner-inquiry", label: "7. Practice Partnership" },
  ];

  const inShortBullets: [string, string, string] = [
    "Synthetic innerwear (polyester, elastane) creates an occlusive microclimate that exacerbates contact dermatitis, candidiasis, and compromised stratum corneum barrier function.",
    "Good Karma eliminates 100% of elastane, heavy-metal mordants, and petrochemical azo dyes, providing an unblended GOTS-certified organic cotton baseline for sensitive patients.",
    "Dual clinic QR pathways enable patients to buy directly with practice access or read waiting-room educational materials without clinical inventory overhead.",
  ];

  const sources: SourceItem[] = [
    {
      citation: "Lisi, P., et al. (2014). 'Textile contact dermatitis: an overview.'",
      detail: "Contact Dermatitis, 71(4), 211-224. Clinical assessment of dispersed azo dyes and formaldehyde-based finishing resins as standard sensitizers in allergic contact eczema.",
    },
    {
      citation: "Runeman, B. (2008). 'Skin interaction with absorbent hygiene products.'",
      detail: "Clinics in Dermatology, 26(1), 45-51. Documents how mechanical friction combined with non-ventilated moisture elevates bacterial colonization by two orders of magnitude.",
    },
    {
      citation: "Jung, A., et al. (2001). 'Influence of genital heat stress on semen quality in humans.'",
      detail: "Andrologia, 33(4), 203-210. Concludes that scrotal temperature increase induced by synthetic, tight textile insulation impairs spermatogenesis.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Research",
      title: "The science of breathing: Skin Science.",
      description: "Detailed biomechanical breakdown of stratum corneum permeability, TEWL metrics, and fabric microclimates.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Third-Party Audits",
      title: "Proof you can check: Our Certifications.",
      description: "Review our laboratory-verified GOTS and OEKO-TEX Standard 100 ecological toxicology compliance certificates.",
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
        dateModified="2026-10-14"
      />

      {/* Hero Section */}
      <SubpageHero
        breadcrumbPage="For Clinicians"
        eyebrow="For Clinicians"
        h1="Pure science, proven on skin."
        promise="A clinical partnership for dermatologists, gynaecologists, and wellness practitioners seeking chemical-free, breathable garments to support treatment protocols."
        whoThisPageIsFor="Dermatologists, gynaecologists, allergists, urologists, pediatricians, and integrative health professionals."
        imageSrc="/images/doctor-trust.jpg"
        imageAlt="Professional dermatologist smiling in clean unbleached cotton apparel against a deep sage studio backdrop"
        accentColor="sage"
        dense={true}
      />

      {/* In Short Box */}
      <InShort bullets={inShortBullets} accentColor="sage" />

      {/* About Strip */}
      <AboutStrip className="mb-12 md:mb-16" />

      {/* Main Content Area with Desktop Sticky Anchor TOC */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Table of Contents */}
          <TableOfContents items={tocItems} accentColor="sage" />

          {/* Main Body Column */}
          <article className="flex-1 w-full max-w-[850px] space-y-20">
            
            {/* Section 1: The Clinical Rationale */}
            <section id="clinical-rationale" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 1
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                The clinical rationale: Eliminating the textile trigger.
              </h2>
              <div className="space-y-6 text-p2 text-ink/90 font-light leading-relaxed">
                <p>
                  When a patient presents with chronic contact dermatitis, recurrent vulvovaginitis, or intertrigo, topical therapeutics treat the acute symptom. However, if the patient continues to encase the affected anatomy in synthetic, petrochemical-dyed underwear for 16 hours every day, the fundamental trigger remains active.
                </p>
                <p>
                  Clothing is an unmeasured variable in most clinical intakes. Commercial innerwear combines petroleum polymers (polyester, nylon, elastane) with unlisted chemical finishing resins (such as PFAS for stain-proofing and formaldehyde for wrinkle-resistance). Under normal body heat and moisture, these chemical finishes leach directly onto the vulnerable stratum corneum.
                </p>
              </div>
            </section>

            {/* Section 2: Mechanisms & Pathology */}
            <section id="mechanisms" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 2
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Physiological mechanisms in common clinical presentations.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <h3 className="text-base font-semibold text-ink mb-2">1. Allergic & Irritant Contact Dermatitis</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Disperse azo dyes and elastane degradation chemicals provoke localized T-cell mediated delayed-type hypersensitivity (Type IV). 100% GOTS organic cotton dyed botanically eliminates these common sensitisers completely.
                  </p>
                </div>

                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <h3 className="text-base font-semibold text-ink mb-2">2. Intimate Dysbiosis & Candidiasis</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Occlusive synthetic underwear produces an anaerobic, high-humidity microclimate with elevated skin temperature, accelerating Candida albicans germination. Pure cotton maintains passive atmospheric air exchange.
                  </p>
                </div>

                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <h3 className="text-base font-semibold text-ink mb-2">3. Pediatric Atopic Eczema</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Infant stratum corneum has heightened barrier permeability. Even minor friction from coarse plastic threads or residual agricultural pesticides triggers severe flares. Flat-seamed, unbleached cotton provides non-abrasive relief.
                  </p>
                </div>

                <div className="bg-paper p-6 rounded-xl border border-border/60">
                  <h3 className="text-base font-semibold text-ink mb-2">4. Male Scrotal Hyperthermia</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Synthetic compression fabrics elevate testicular temperature by 1.5°C to 2.2°C above optimal physiological levels, depressing semen parameters. Natural cotton provides cooling ventilation without synthetic constriction.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: How the QR Works */}
            <section id="how-qr-works" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 3
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                How the practice QR system works.
              </h2>
              <p className="text-p2 text-muted-foreground font-light leading-relaxed mb-8">
                We believe clinicians should not be burdened with stocking retail inventory or managing transactions. Our dual touchpoint system allows clean integration into your existing clinic workflow:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Desk QR */}
                <div className="bg-paper p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sage">Desk QR Card</span>
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">Direct Patient Prescription & Purchase</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                      Positioned in your consultation room. When recommending pure cotton wear to an symptomatic patient, the patient scans your personalized acrylic desk stand to receive their clinical discount and direct home dispatch.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-ink/70 bg-white px-3 py-1.5 rounded-md border border-border/40 inline-block self-start">
                    Touchpoint: Desk QR &rarr; Buy & Deliver
                  </span>
                </div>

                {/* Waiting-Room QR */}
                <div className="bg-paper p-8 rounded-xl border border-border/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-marigold/10 text-marigold flex items-center justify-center font-bold">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-marigold">Waiting-Room Placard</span>
                    </div>
                    <h3 className="text-lg font-medium text-ink mb-2">Patient Education Micro-Guide</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                      Placed in reception or recovery areas. Patients scan to read our plain-language guide on how fabric microclimates impact skin health, arming them with informed questions before their consultation.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-ink/70 bg-white px-3 py-1.5 rounded-md border border-border/40 inline-block self-start">
                    Touchpoint: Waiting Room QR &rarr; Learn
                  </span>
                </div>
              </div>
            </section>

            {/* Section 4: Clinician Recognition */}
            <section id="clinician-recognition" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 4
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Private, non-comparative clinician acknowledgment.
              </h2>
              <div className="bg-paper p-8 md:p-10 rounded-xl border border-border/60">
                <div className="flex items-start gap-4 mb-4">
                  <HeartHandshake className="w-6 h-6 text-sage shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-ink mb-2">A Quiet Professional Partnership</h3>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed mb-4">
                      Good Karma does not run public leaderboards, commercial sponsorship tiers, or competitive referral rankings. Medical trust is confidential and sacred.
                    </p>
                    <p className="text-p2 text-muted-foreground font-light leading-relaxed">
                      We quietly acknowledge our referring practitioners through private annual impact summaries, accredited educational roundtables, and complimentary patient education literature custom-branded for your practice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Clinical Resource Pack Download */}
            <section id="resource-pack" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 5
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Download the Clinical Resource Pack.
              </h2>
              <p className="text-p2 text-muted-foreground font-light mb-8">
                Access our printable patient tear-off advice sheets, fabric care instructions for sensitive dermatoses, and full chemical ingredient exclusion disclosures.
              </p>

              {/* Download Signup Box */}
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
                      Includes 2 printable patient infographics on synthetic vs. organic cotton microclimates and our GOTS toxicological declaration.
                    </p>
                  </div>

                  <DoctorResourcePackForm />
                </div>
              </div>
            </section>

            {/* Section 6: Laboratory Testing Status & Audit */}
            <section id="testing-status" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 6
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Laboratory testing audit.
              </h2>

              <div className="p-6 md:p-8 rounded-xl bg-paper border border-border/60">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-ink">
                      Verification Standard & Testing Placeholder Rule
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      In accordance with our strict medical communication policy, Good Karma publishes no unverified “medically tested” assertions until certified third-party laboratory documentation is completed and filed.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-border/50 text-xs font-mono text-ink/80 space-y-1">
                      <div>Clinical Testing Slot: <span className="text-marigold font-bold">[TEST NAME / LAB / DATE]</span></div>
                      <div className="text-[11px] text-muted-foreground">Status: Protocol under active cohort review. No premature commercial claims permitted.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Practice Partnership Inquiry */}
            <section id="partner-inquiry" className="scroll-mt-28">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">
                Section 7
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">
                Request a practice sample kit & consultation.
              </h2>
              <p className="text-p2 text-muted-foreground font-light mb-8">
                We provide accredited clinics with complimentary fabric swatch kits and acrylic desk QR stands upon verification of clinical licensure.
              </p>

              <DoctorConsultationForm />
            </section>

            {/* Sources & Citations */}
            <SourcesList sources={sources} lastUpdated="October 2026" />

            {/* Share Bar with Send to Colleague enabled */}
            <ShareBar 
              title="Clinical Rationale & Practice Integration — Good Karma" 
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
            Order complimentary waiting-room placards or speak with our materials team about clean cotton innerwear.
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
