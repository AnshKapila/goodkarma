import { Button } from "@/components/ui/button";



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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
          
          {/* GOTS (Lead position, 2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-paper p-10 md:p-14 rounded-xl border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500 group relative overflow-hidden">
            <div>
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-xl font-bold text-ink shadow-sm mb-8 border border-border/20 group-hover:scale-105 transition-transform duration-500">
                GOTS
              </div>
              <h2 className="text-h2 font-medium text-ink mb-6">Global Organic Textile Standard</h2>
              <p className="text-p1 text-muted-foreground mb-10 font-light max-w-[400px]">
                The worldwide leading textile processing standard for organic fibres. This ensures our cotton is grown without toxic pesticides or synthetic fertilizers, protecting both the soil and your skin.
              </p>
            </div>
            <Button variant="secondary" icon="download" href="#">Download Certificate</Button>
          </div>
          
          {/* OEKO-TEX (Lead position, wide 2x1) */}
          <div className="md:col-span-2 md:row-span-1 bg-paper p-10 rounded-xl border border-border/40 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-bold text-ink shadow-sm mb-6 border border-border/20 group-hover:scale-105 transition-transform duration-500">
                  OEKO
                </div>
                <h2 className="text-h3 font-medium text-ink mb-4">Standard 100</h2>
                <p className="text-p2 text-muted-foreground mb-8 font-light max-w-[400px]">
                  Every single component of our garments has been rigorously tested for harmful substances and is guaranteed safe in human ecological terms.
                </p>
              </div>
            </div>
            <Button variant="secondary" icon="download" href="#">Download Certificate</Button>
          </div>

          {/* BRSR / NGRBC (Supporting cell, 1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-xl border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500">
            <div>
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink shadow-sm border border-border/20 mb-6">B</div>
              <h3 className="text-xl font-medium text-ink mb-3">BRSR / NGRBC</h3>
              <p className="text-sm text-muted-foreground font-light mb-4">
                Our disclosure standard for responsible business practices, ensuring accountability in governance and social impact.
              </p>
              <div className="bg-paper text-marigold text-[9px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono shadow-sm border border-marigold/20 mb-6 inline-block">
              </div>
            </div>
            <Button variant="secondary" icon="download" href="#" fullWidthMobile={true}>View Disclosure</Button>
          </div>

          {/* Vegan (Supporting cell, 1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-xl border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500">
            <div>
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-ink shadow-sm border border-border/20 mb-6">V</div>
              <h3 className="text-xl font-medium text-ink mb-3">Cruelty-Free Dyeing</h3>
              <p className="text-sm text-muted-foreground font-light mb-6">
                Our 9 natural plant-based dyes are 100% cruelty-free. Our dye process requires absolutely no animal testing or derivatives.
              </p>
            </div>
            <Button variant="secondary" icon="download" href="#" fullWidthMobile={true}>Download Doc</Button>
          </div>
          
        </div>
      </section>
    </div>
  );
}
