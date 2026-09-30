import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full text-center">
        <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
          The Collection
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-[500px] mx-auto">
          A considered range of everyday essentials, naturally dyed and thoughtfully crafted.
        </p>
        
        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group cursor-pointer flex flex-col text-left">
              <div className="aspect-[4/5] bg-paper rounded-2xl mb-4 flex items-center justify-center border border-border/50 relative overflow-hidden">
                <span className="text-muted-foreground text-xs">[ Product ]</span>
              </div>
              <h3 className="font-medium text-ink">Organic Cotton Piece</h3>
              <p className="text-sm text-muted-foreground">Undyed / Natural</p>
              <span className="font-medium text-ink mt-2">$45</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
