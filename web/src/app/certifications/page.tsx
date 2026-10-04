import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function CertificationsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-28 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[800px] mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Our Standards</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-8">
            Certified where it counts.
          </h1>
          <p className="text-p1 text-muted-foreground font-light">
            We don't just promise purity, we prove it. Every garment we make is backed by the most rigorous global standards for organic textiles, chemical safety, and ethical manufacturing.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* GOTS & OEKO-TEX (Prominent) */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="bg-paper p-12 md:p-16 rounded-[2.5rem] border border-border/40 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-ink shadow-sm mb-8 border border-border/20 group-hover:scale-105 transition-transform duration-500">
                GOTS
              </div>
              <h2 className="text-h2 font-medium text-ink mb-6">Global Organic Textile Standard</h2>
              <p className="text-p1 text-muted-foreground mb-10 font-light">
                The worldwide leading textile processing standard for organic fibres. This ensures our cotton is grown without toxic pesticides or synthetic fertilizers, protecting both the soil and your skin.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-border/60 text-sm font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
            </div>
            
            <div className="bg-paper p-12 md:p-16 rounded-[2.5rem] border border-border/40 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-ink shadow-sm mb-8 border border-border/20 group-hover:scale-105 transition-transform duration-500">
                OEKO-TEX
              </div>
              <h2 className="text-h2 font-medium text-ink mb-6">Standard 100</h2>
              <p className="text-p1 text-muted-foreground mb-10 font-light">
                Every single component of our garments—from the fabric to the thread—has been rigorously tested for harmful substances and is guaranteed safe in human ecological terms.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-border/60 text-sm font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
            </div>
          </div>

          {/* Secondary Certifications */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 pt-20 border-t border-border/40">
            <div className="flex flex-col">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center font-bold text-xl text-ink border border-border/40 shadow-sm">B</div>
                <h3 className="text-h3 font-medium text-ink">BRSR / NGRBC</h3>
              </div>
              <p className="text-p1 text-muted-foreground mb-10 font-light">
                As part of our commitment to transparency, we adhere to the Business Responsibility and Sustainability Reporting (BRSR) framework based on the National Guidelines for Responsible Business Conduct (NGRBC). This is our disclosure standard for responsible business practices, ensuring accountability in our governance and social impact.
              </p>
              <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/60 text-sm font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 self-start">
                <ArrowRight className="w-4 h-4" /> View Disclosure
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center font-bold text-xl text-ink border border-border/40 shadow-sm">V</div>
                <h3 className="text-h3 font-medium text-ink">Cruelty-Free Dyeing</h3>
              </div>
              <p className="text-p1 text-muted-foreground font-light">
                Our vegan and no-animal-testing claims are scoped specifically to our natural dye process. While the broader textile industry often uses animal derivatives in dye fixatives or tests chemicals on animals, we guarantee that our 9 natural plant-based dyes are 100% cruelty-free and vegan.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
