import { ArrowRight, Download } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[700px] mb-20">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Our Standards</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            Certified where it counts.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't just promise purity, we prove it. Every garment we make is backed by the most rigorous global standards for organic textiles, chemical safety, and ethical manufacturing.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* GOTS & OEKO-TEX (Prominent) */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="bg-paper p-12 rounded-3xl border border-border/50 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-xl font-bold text-ink shadow-sm mb-6">
                GOTS
              </div>
              <h2 className="text-2xl font-medium text-ink mb-4">Global Organic Textile Standard</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The worldwide leading textile processing standard for organic fibres. This ensures our cotton is grown without toxic pesticides or synthetic fertilizers, protecting both the soil and your skin.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-ink hover:text-marigold transition-colors">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
            </div>
            
            <div className="bg-paper p-12 rounded-3xl border border-border/50 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-xl font-bold text-ink shadow-sm mb-6">
                OEKO-TEX
              </div>
              <h2 className="text-2xl font-medium text-ink mb-4">Standard 100</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every single component of our garments—from the fabric to the thread—has been rigorously tested for harmful substances and is guaranteed safe in human ecological terms.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-ink hover:text-marigold transition-colors">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
            </div>
          </div>

          {/* Secondary Certifications */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 pt-16 border-t border-border/50">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink border border-border/50">B</div>
                <h3 className="text-xl font-medium text-ink">BRSR / NGRBC</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As part of our commitment to transparency, we adhere to the Business Responsibility and Sustainability Reporting (BRSR) framework based on the National Guidelines for Responsible Business Conduct (NGRBC). This is our disclosure standard for responsible business practices, ensuring accountability in our governance and social impact.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-ink hover:text-marigold transition-colors">
                <Download className="w-4 h-4" /> View Disclosure
              </button>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink border border-border/50">V</div>
                <h3 className="text-xl font-medium text-ink">Cruelty-Free Dyeing</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our vegan and no-animal-testing claims are scoped specifically to our natural dye process. While the broader textile industry often uses animal derivatives in dye fixatives or tests chemicals on animals, we guarantee that our 9 natural plant-based dyes are 100% cruelty-free and vegan.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
