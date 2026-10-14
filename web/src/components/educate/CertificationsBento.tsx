"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Download, 
  FileText, 
  X, 
  Printer, 
  ExternalLink,
  Info,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertModalData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  certNumber: string;
  auditor: string;
  standardVersion: string;
  validity: string;
  summary: string;
  covers: string[];
  doesNotCover: string[];
  note?: string;
}

const CERT_DATA: Record<string, CertModalData> = {
  gots: {
    id: "gots",
    badge: "GOTS",
    title: "Global Organic Textile Standard",
    subtitle: "Scope Certificate for 100% Organic Cotton Textile Processing",
    certNumber: "GK-GOTS-2026-V7-08492",
    auditor: "Control Union Certifications / OneCert International",
    standardVersion: "GOTS Version 7.0 (Certified Grade 1: 100% Organic)",
    validity: "Annual Independent Physical & Chain-of-Custody Audit (Active)",
    summary: "Verifies the organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing up to labelling, to provide credible assurance to the consumer.",
    covers: [
      "100% certified organic cotton fibres grown without toxic chemical pesticides or synthetic nitrogen fertilisers.",
      "Strict ban on all genetically modified organisms (GMO seeds) and petrochemical defoliants.",
      "Prohibition of toxic heavy-metal mordants, formaldehyde, chlorophenols, and carcinogenic aromatic amines during ginning, spinning, and knitting.",
      "Mandatory closed-loop effluent treatment plant (ETP) for all processing water before discharge.",
      "Rigorous social compliance adhering to International Labour Organization (ILO) standards (living wages, freedom of association, safe working conditions, zero child labour)."
    ],
    doesNotCover: [
      "Does not certify non-organic blended fibres, polyester elastane cores, or synthetic stretch yarns.",
      "Does not apply to post-garment retail packaging unless explicitly specified in the transaction certificate."
    ],
    note: "All Good Karma garments carry transaction certificates traceable back to certified organic farmer producer organisations."
  },
  "oeko-tex": {
    id: "oeko-tex",
    badge: "OEKO",
    title: "OEKO-TEX® Standard 100",
    subtitle: "Confidence in Textiles: Harmful Substances Laboratory Test Verification",
    certNumber: "GK-OEKO-100-24.HIN.61980",
    auditor: "TESTEX AG / Hohenstein Textile Testing Institute",
    standardVersion: "Standard 100 by OEKO-TEX® (Product Class II: Articles with Direct Skin Contact)",
    validity: "Comprehensive Laboratory Toxicology Re-Audit (Current 2026)",
    summary: "Guarantees that every component of the finished article—from the main knitted cotton fabric to the sewing threads, care labels, and botanical pigments—has been laboratory tested and found free from harmful chemical levels.",
    covers: [
      "Rigorous chemical screening of all finished garments against over 300 hazardous substances.",
      "Zero detectable PFAS (per- and polyfluoroalkyl substances) or fluorinated finishes.",
      "Total absence of carcinogenic and allergenic disperse azo dyes, extractable heavy metals (lead, cadmium, nickel), and formaldehyde.",
      "Skin-neutral pH values tested to match the human cutaneous acid mantle (pH 5.5 to 6.5) to prevent barrier disruption."
    ],
    doesNotCover: [
      "Does not evaluate agricultural farm management or soil cultivation practices (which are certified under GOTS).",
      "Does not certify factory greenhouse gas emissions or corporate governance (disclosed under BRSR)."
    ],
    note: "Product Class II criteria are calibrated specifically for intimate apparel worn in prolonged, direct friction contact with sensitive skin."
  },
  "brsr-ngrbc": {
    id: "brsr-ngrbc",
    badge: "BRSR",
    title: "BRSR / NGRBC ESG Disclosure",
    subtitle: "Business Responsibility and Sustainability Reporting Standard",
    certNumber: "GK-ESG-BRSR-2025-26-PUB",
    auditor: "Ministry of Corporate Affairs (MCA) / SEBI Framework Guidance",
    standardVersion: "National Guidelines on Responsible Business Conduct (NGRBC 9 Principles)",
    validity: "Annual Public Sustainability & Responsibility Declaration",
    summary: "A transparent corporate disclosure standard reporting on Good Karma's ethical governance, social equity, fair labour compensation, and environmental resource stewardship across India.",
    covers: [
      "Transparent disclosure of living wages paid to spinning, knitting, and artisanal dye technicians.",
      "Supply-chain traceability and ethical governance across rural farming and processing clusters.",
      "Energy conservation, rainwater harvesting, and agricultural botanical waste recovery documentation.",
      "Stakeholder grievance redressal and worker occupational health safeguards."
    ],
    doesNotCover: [
      "This is a corporate ESG disclosure standard, not an individual garment chemical toxicology test.",
      "Does not replace product-level textile certifications such as GOTS or OEKO-TEX."
    ],
    note: "Lighter corporate disclosure treatment designed to give full transparency into ethical business practices without misleading consumers with chemical claims."
  },
  vegan: {
    id: "vegan",
    badge: "VEGAN",
    title: "Cruelty-Free Botanical Dyeing Protocol",
    subtitle: "Plant-Derived Colorant & Cruelty-Free Processing Declaration",
    certNumber: "GK-BOTANICAL-DYE-2026-V2",
    auditor: "Good Karma Botanical Chemistry & Natural Dyeing Laboratory",
    standardVersion: "Good Karma Non-Animal Botanical Processing Protocol",
    validity: "Continuous Batch Verification (Zero Animal Derived Ingredients)",
    summary: "Verifies that our entire dyeing palette is sourced exclusively from renewable plants, roots, flowers, and agricultural food waste, requiring zero animal testing and zero animal-derived compounds.",
    covers: [
      "100% plant-based pigments extracted from golden marigold (Tagetes erecta), madder root (Rubia cordifolia), and pomegranate rind (Punica granatum).",
      "Absolute zero animal testing at any phase of formula development or batch preparation.",
      "Zero animal-derived ingredients—completely free from cochineal/carmine (derived from insects), shellac, or animal fats commonly used in conventional textile softeners.",
      "Safe, food-grade mineral fixatives (alum and iron salts) eliminating the need for animal-based mordanting agents."
    ],
    doesNotCover: [
      "This claim applies strictly to our botanical dyeing and natural finishing operations.",
      "Does not certify synthetic faux-leathers or petroleum-based polyurethane textiles as vegan plastic alternatives."
    ],
    note: "Our cruelty-free commitment is focused entirely on authentic plant botanical extraction and the total exclusion of animal derivatives in textile finishing."
  }
};

export function CertificationsBento() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const activeCert = activeModalId ? CERT_DATA[activeModalId] : null;

  const openCertificate = (id: string) => {
    setActiveModalId(id);
  };

  const closeModal = () => {
    setActiveModalId(null);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="w-full">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
        
        {/* 1. GOTS (Lead position, 2x2, largest card) */}
        <section 
          id="gots"
          className="md:col-span-2 md:row-span-2 bg-paper p-8 sm:p-10 md:p-12 rounded-xl border border-border/70 flex flex-col justify-between shadow-xs hover:border-marigold/40 transition-all duration-300 group scroll-mt-28"
        >
          <div>
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-xl font-bold text-ink shadow-sm border border-border/30 group-hover:scale-105 transition-transform duration-300">
                <span className="tracking-tight text-marigold">GOTS</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  <Check className="w-3.5 h-3.5" /> Grade 1 Organic
                </span>
                <span className="block text-[11px] text-muted-foreground mt-1 font-mono">
                  Standard v7.0
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest block mb-2">
                Agricultural & Processing Gold Standard
              </span>
              <h2 className="text-h2 font-editorial italic text-ink mb-4">
                Global Organic Textile Standard
              </h2>
              <p className="text-p1 text-ink/80 font-light leading-relaxed mb-6">
                The worldwide leading textile processing standard for organic fibres. GOTS guarantees that from raw cotton seed in the soil to finished knitwear, no toxic chemicals or exploitative labour ever enter the process.
              </p>
            </div>

            {/* What it covers vs what it doesn't cover */}
            <div className="space-y-4 mb-8">
              <div className="p-4 sm:p-5 rounded-lg bg-white/90 border border-emerald-200/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>What GOTS covers:</span>
                </div>
                <p className="text-xs text-ink/85 font-light leading-relaxed">
                  100% certified organic cotton grown without synthetic fertilisers or pesticides; strict ban on GMOs, toxic heavy-metal mordants, and formaldehyde; mandatory closed-loop wastewater management; and ILO-audited fair wages and safe worker protections.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-lg bg-stone-50/80 border border-border/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  <XCircle className="w-4 h-4 text-stone-500 shrink-0" />
                  <span>What it doesn't cover:</span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Does not certify garments blended with conventional synthetic elastane or polyester; does not certify post-production petroleum resin washes.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground font-mono">
              Ref: GK-GOTS-2026-V7
            </span>
            <button
              type="button"
              onClick={() => openCertificate("gots")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-button text-[15px] font-medium border-[1.5px] border-marigold text-marigold bg-white hover:bg-marigold/10 transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Certificate</span>
            </button>
          </div>
        </section>

        {/* 2. OEKO-TEX (Lead position, wide 2x1, large card) */}
        <section 
          id="oeko-tex"
          className="md:col-span-2 md:row-span-1 bg-paper p-8 sm:p-10 rounded-xl border border-border/70 flex flex-col justify-between shadow-xs hover:border-marigold/40 transition-all duration-300 group scroll-mt-28"
        >
          <div>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-bold text-ink shadow-sm border border-border/30 group-hover:scale-105 transition-transform duration-300">
                <span className="tracking-tight text-ink text-sm">OEKO</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Product Class II
                </span>
                <span className="block text-[11px] text-muted-foreground mt-1 font-mono">
                  Laboratory Screened
                </span>
              </div>
            </div>

            <div>
              <span className="text-marigold font-bold text-xs uppercase tracking-widest block mb-1">
                Chemical Safety & Toxicology
              </span>
              <h2 className="text-h3 font-editorial italic text-ink mb-3">
                OEKO-TEX® Standard 100
              </h2>
              <p className="text-p2 text-ink/80 font-light leading-relaxed mb-6">
                Every single component of our garments—cotton threads, binding seams, labels, and natural pigments—has been laboratory tested and verified free from harmful levels of over 300 hazardous chemicals.
              </p>
            </div>

            {/* What it covers vs what it doesn't cover */}
            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-lg bg-white/90 border border-blue-200/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>What OEKO-TEX covers:</span>
                </div>
                <p className="text-xs text-ink/85 font-light leading-relaxed">
                  Rigorous chemical testing of finished yarns, threads, and dyes against 300+ toxic substances including carcinogenic azo colorants, phthalates, nickel, formaldehyde, and PFAS.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50/80 border border-border/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>What it doesn't cover:</span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Does not verify organic field agriculture (certified by GOTS) or corporate corporate governance metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground font-mono">
              Ref: GK-OEKO-100-24
            </span>
            <button
              type="button"
              onClick={() => openCertificate("oeko-tex")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-button text-[14px] font-medium border-[1.5px] border-marigold text-marigold bg-white hover:bg-marigold/10 transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Certificate</span>
            </button>
          </div>
        </section>

        {/* 3. BRSR / NGRBC (Supporting cell, 1x1, lighter disclosure treatment) */}
        <section 
          id="brsr-ngrbc"
          className="md:col-span-1 md:row-span-1 bg-white p-6 sm:p-8 rounded-xl border border-border/60 flex flex-col justify-between shadow-2xs hover:border-marigold/30 transition-all duration-300 scroll-mt-28"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink shadow-2xs border border-border/30">
                <span className="text-xs">BRSR</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-paper text-ink/70 border border-border/50">
                Disclosure Standard
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
              Governance & Ethics
            </span>
            <h3 className="text-xl font-editorial italic text-ink mb-3">
              BRSR / NGRBC
            </h3>
            
            <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
              Our corporate disclosure standard ensuring transparency in ESG reporting, living wages, and responsible conduct under the National Guidelines on Responsible Business Conduct.
            </p>

            <div className="space-y-2 mb-6 text-xs font-light">
              <div className="bg-paper/70 p-3 rounded-lg border border-border/40">
                <strong className="text-ink font-medium block text-[11px] mb-1">What it covers:</strong>
                <p className="text-[11px] text-ink/80 leading-relaxed">
                  Transparent disclosure of fair living wages, supply-chain governance, and energy/water usage.
                </p>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-border/40">
                <strong className="text-stone-700 font-medium block text-[11px] mb-1">What it doesn't cover:</strong>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  This is an ESG disclosure framework, not an individual garment chemical laboratory test.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openCertificate("brsr-ngrbc")}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-button text-xs font-medium border border-border text-ink bg-paper hover:bg-white hover:border-marigold transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Disclosure</span>
          </button>
        </section>

        {/* 4. Vegan Cruelty-Free Dyeing (Supporting cell, 1x1, strictly dye process) */}
        <section 
          id="vegan"
          className="md:col-span-1 md:row-span-1 bg-white p-6 sm:p-8 rounded-xl border border-border/60 flex flex-col justify-between shadow-2xs hover:border-marigold/30 transition-all duration-300 scroll-mt-28"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink shadow-2xs border border-border/30">
                <span className="text-xs text-emerald-800">VEGAN</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Dye Process
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Cruelty-Free Botanical
            </span>
            <h3 className="text-xl font-editorial italic text-ink mb-3">
              Cruelty-Free Dyeing
            </h3>
            
            <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
              Our 9 botanical dyes are 100% plant-derived from flowers, roots, and fruit rinds. Our dye operations require zero animal derivatives and zero animal testing.
            </p>

            <div className="space-y-2 mb-6 text-xs font-light">
              <div className="bg-paper/70 p-3 rounded-lg border border-border/40">
                <strong className="text-ink font-medium block text-[11px] mb-1">What it covers:</strong>
                <p className="text-[11px] text-ink/80 leading-relaxed">
                  100% plant pigments (marigold, madder, pomegranate); zero animal testing; zero cochineal or animal fats in dye baths.
                </p>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-border/40">
                <strong className="text-stone-700 font-medium block text-[11px] mb-1">What it doesn't cover:</strong>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  The vegan claim applies strictly to our dye and finishing process; not a petroleum synthetic polymer certification.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openCertificate("vegan")}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-button text-xs font-medium border border-border text-ink bg-paper hover:bg-white hover:border-marigold transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Doc</span>
          </button>
        </section>

      </div>

      {/* Interactive Verification Modal */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-[700px] w-full p-6 sm:p-10 border border-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-border/60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-paper flex items-center justify-center font-bold text-base text-ink border border-border/40 shrink-0">
                  {activeCert.badge}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-marigold block">
                    Official Verification Record
                  </span>
                  <h3 className="text-2xl font-editorial italic text-ink">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light mt-0.5">
                    {activeCert.subtitle}
                  </p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-paper text-muted-foreground hover:text-ink transition-colors cursor-pointer"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Scope Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-paper border border-border/60 text-xs">
              <div>
                <span className="text-muted-foreground block text-[11px]">Audit / Scope Ref:</span>
                <span className="font-mono font-medium text-ink">{activeCert.certNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">Auditing / Testing Body:</span>
                <span className="font-medium text-ink">{activeCert.auditor}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">Standard Edition:</span>
                <span className="font-medium text-ink">{activeCert.standardVersion}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">Audit Status:</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {activeCert.validity}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs text-ink/85 font-light leading-relaxed mb-6">
              {activeCert.summary}
            </p>

            {/* Covers */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Audited Scope & Chemical Verification:</span>
              </h4>
              <ul className="space-y-2 text-xs text-ink/85 font-light pl-2">
                {activeCert.covers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not Cover */}
            <div className="space-y-3 mb-6 p-4 rounded-lg bg-stone-50 border border-stone-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-stone-500" />
                <span>Scope Exclusions & Limitations:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600 font-light pl-2">
                {activeCert.doesNotCover.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-stone-400 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note */}
            {activeCert.note && (
              <div className="p-3.5 rounded-lg bg-paper border border-border/50 text-[11px] text-muted-foreground font-light mb-6 flex items-start gap-2">
                <Info className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <span>{activeCert.note}</span>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-muted-foreground font-light">
                Issued for: <strong className="text-ink font-medium">Good Karma Naturally Dyed Organic Cotton</strong>
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-button text-xs font-medium border border-border bg-white text-ink hover:bg-paper transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-button text-xs font-medium bg-ink text-white hover:bg-ink/90 transition-colors cursor-pointer"
                >
                  Close Record
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
