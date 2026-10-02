export default function NaturalDyeingPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="max-w-[700px] mb-20">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Natural Dyeing</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-8">
            Colours drawn directly from nature.
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg text-ink font-medium leading-relaxed">
              Most fabric color today comes from synthetic dye—fast, cheap, and consistent, but not without cost.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Synthetic dyes are typically petroleum-derived, meaning their raw material is a fossil fuel. Many are also tested on animals before approval, and their production is one of the textile industry's largest contributors to water pollution.
            </p>
            <p className="text-ink text-lg leading-relaxed">
              Good Karma uses nine natural dyes — madder, marigold, pomegranate peel, and others — sourced from Indian farms and food-processing waste. No fossil fuels. No animal testing. No wastewater left behind to treat.
            </p>
          </div>
        </div>
        
        {/* Dye Library Grid (Descriptive Showcase) */}
        <div className="pt-16 border-t border-border/50">
          <h2 className="text-2xl font-medium text-ink mb-8">The Dye Library</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#C98637]/20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1">
                <span className="text-marigold font-medium text-lg">Marigold</span>
              </div>
              <h3 className="font-medium text-ink mb-1">Marigold Flowers</h3>
              <p className="text-sm text-muted-foreground">Sourced from temple offerings and local farms, yielding warm golden yellows.</p>
            </div>
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#A4777E]/20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1">
                <span className="text-mauve font-medium text-lg">Madder Root</span>
              </div>
              <h3 className="font-medium text-ink mb-1">Madder Root (Rubia cordifolia)</h3>
              <p className="text-sm text-muted-foreground">An ancient dye yielding deep, earthy reds and soothing pinks.</p>
            </div>
            
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-[#5A6056]/20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1">
                <span className="text-sage font-medium text-lg">Pomegranate</span>
              </div>
              <h3 className="font-medium text-ink mb-1">Pomegranate Rinds</h3>
              <p className="text-sm text-muted-foreground">Reclaimed from juice processing waste, providing rich olive greens and khakis.</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
