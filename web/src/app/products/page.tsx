import Link from "next/link";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <div>
            <h1 className="text-h1 font-editorial italic text-ink mb-4">
              The Collection
            </h1>
            <p className="text-p1 text-muted-foreground max-w-[500px] font-light">
              A considered range of everyday essentials, naturally dyed and thoughtfully crafted.
            </p>
          </div>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-border text-ink hover:bg-paper transition-colors font-medium">
            <SlidersHorizontal className="w-4 h-4" /> Filter
          </button>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          {[
            { id: 1, name: "Everyday Brief", color: "Undyed", price: "$28", img: "/PLACEHOLDER_product.jpg" },
            { id: 2, name: "Comfort Top", color: "Madder Rose", price: "$45", img: "/PLACEHOLDER_product.jpg" },
            { id: 3, name: "Lounge Set", color: "Marigold", price: "$85", img: "/PLACEHOLDER_product.jpg" },
            { id: 4, name: "Maternity Support", color: "Pomegranate", price: "$55", img: "/PLACEHOLDER_product.jpg" },
            { id: 5, name: "Infant Bodysuit", color: "Undyed", price: "$32", img: "/PLACEHOLDER_product.jpg" },
            { id: 6, name: "Boxer Brief", color: "Madder Rose", price: "$35", img: "/PLACEHOLDER_product.jpg" },
            { id: 7, name: "Sleep Shirt", color: "Marigold", price: "$65", img: "/PLACEHOLDER_product.jpg" },
            { id: 8, name: "Daily Bralette", color: "Pomegranate", price: "$42", img: "/PLACEHOLDER_product.jpg" }
          ].map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div 
                className="aspect-[4/5] bg-paper rounded-[2rem] mb-6 flex items-center justify-center border border-border/40 relative overflow-hidden bg-cover bg-center shadow-sm group-hover:shadow-lg transition-all duration-500"
                style={{ backgroundImage: `url(${product.img})` }}
              >
                {/* DEV TAG */}
                <div className="absolute top-4 left-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
                  DEV: REAL ASSET PENDING
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-h3 font-medium text-ink group-hover:text-marigold transition-colors">{product.name}</h3>
                  <span className="font-medium text-ink">{product.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full border border-border/50 shadow-sm ${
                    product.color === 'Undyed' ? 'bg-[#F5F2ED]' : 
                    product.color === 'Madder Rose' ? 'bg-[#A4777E]' : 
                    product.color === 'Marigold' ? 'bg-[#C98637]' : 'bg-[#5A6056]'
                  }`} />
                  <p className="text-p3 text-muted-foreground">{product.color}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
