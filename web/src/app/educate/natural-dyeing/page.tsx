import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NaturalDyeingPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="max-w-[800px] mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Natural Dyeing</span>
          <h1 className="font-editorial italic text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.1] mb-10">
            Colours drawn directly from nature.
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-ink font-light leading-relaxed">
              Most fabric color today comes from synthetic dye—fast, cheap, and consistent, but not without cost.
            </p>
            
            {/* Draft marked for length changing later */}
            <div className="relative pl-6 border-l-2 border-mauve/30">
              {/* DEV TAG */}
              <div className="absolute -top-3 left-6 bg-paper text-mauve text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono shadow-sm border border-mauve/20">
                DEV: DRAFT COPY (Flexible Length)
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                Synthetic dyes are typically petroleum-derived, meaning their raw material is a fossil fuel. Many are also tested on animals before approval, and their production is one of the textile industry's largest contributors to water pollution.
              </p>
            </div>

            <p className="text-ink text-lg md:text-xl leading-relaxed font-light">
              Good Karma uses nine natural dyes — madder, marigold, pomegranate peel, and others — sourced from Indian farms and food-processing waste. No fossil fuels. No animal testing. No wastewater left behind to treat.
            </p>
          </div>
        </div>
        
        {/* Dye Library Grid (Descriptive Showcase) */}
        <div className="pt-24 border-t border-border/40">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-editorial italic text-4xl md:text-5xl text-ink">The Dye Library</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#C98637]/20 rounded-[2rem] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg border border-[#C98637]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                <span className="text-marigold font-editorial italic text-3xl z-10">Marigold</span>
              </div>
              <h3 className="font-medium text-xl text-ink mb-2 group-hover:text-marigold transition-colors">Marigold Flowers</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Sourced from temple offerings and local farms, yielding warm golden yellows.</p>
            </div>
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#A4777E]/20 rounded-[2rem] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg border border-[#A4777E]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                <span className="text-mauve font-editorial italic text-3xl z-10">Madder</span>
              </div>
              <h3 className="font-medium text-xl text-ink mb-2 group-hover:text-mauve transition-colors">Madder Root <span className="italic font-normal text-muted-foreground text-sm">(Rubia cordifolia)</span></h3>
              <p className="text-muted-foreground font-light leading-relaxed">An ancient dye yielding deep, earthy reds and soothing pinks.</p>
            </div>
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#5A6056]/20 rounded-[2rem] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg border border-[#5A6056]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                <span className="text-sage font-editorial italic text-3xl z-10">Pomegranate</span>
              </div>
              <h3 className="font-medium text-xl text-ink mb-2 group-hover:text-sage transition-colors">Pomegranate Rinds</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Reclaimed from juice processing waste, providing rich olive greens and khakis.</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
