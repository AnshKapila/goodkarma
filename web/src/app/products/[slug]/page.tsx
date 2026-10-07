import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProductDisplayPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const name = resolvedParams.slug.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-16 max-w-[1400px] mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="aspect-[4/5] bg-paper rounded-xl overflow-hidden border border-border/40 relative group bg-[url('https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center">
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-paper rounded-xl border border-border/40 cursor-pointer hover:border-marigold transition-colors bg-[url('https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col pt-4 md:pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h1 className="text-h2 font-editorial italic text-ink mb-4">{name || "Organic Cotton Essential"}</h1>
            <span className="text-xl font-medium text-ink mb-8 block">$45</span>

            <p className="text-p1 text-muted-foreground font-light mb-10 leading-relaxed">
              Crafted from 100% GOTS certified organic cotton and naturally dyed with Earth's ingredients. 
              Designed to let your skin breathe, free from synthetic stretch and harsh chemicals.
            </p>

            {/* Colors */}
            <div className="mb-8">
              <span className="text-sm font-bold text-ink uppercase tracking-widest mb-4 block">Color — Madder Rose</span>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-ink p-1 cursor-pointer">
                  <div className="w-full h-full rounded-full bg-[#A4777E]" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-transparent hover:border-border p-1 cursor-pointer transition-colors">
                  <div className="w-full h-full rounded-full bg-[#C98637]" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-transparent hover:border-border p-1 cursor-pointer transition-colors">
                  <div className="w-full h-full rounded-full bg-[#F5F2ED] border border-border/50" />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-ink uppercase tracking-widest">Size</span>
                <Link href="#" className="text-sm text-muted-foreground hover:text-ink transition-colors underline underline-offset-4 decoration-border">Size Guide</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="py-3 rounded-xl border border-border text-sm font-medium hover:border-ink hover:bg-ink hover:text-white transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full bg-ink text-white rounded-full py-7 text-base font-medium shadow-md hover:bg-ink/90 transition-all hover:-translate-y-1">
              Add to Bag
            </Button>

            {/* Certifications & Features */}
            <div className="mt-12 flex flex-col gap-5 border-t border-border/40 pt-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-paper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-marigold" />
                </div>
                <p className="text-sm text-muted-foreground"><span className="text-ink font-medium">100% GOTS Cotton.</span> Grown without pesticides, safer for soil and skin.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-paper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-mauve" />
                </div>
                <p className="text-sm text-muted-foreground"><span className="text-ink font-medium">Naturally Dyed.</span> Colors extracted from plants and minerals, 100% cruelty-free.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-paper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-sage" />
                </div>
                <p className="text-sm text-muted-foreground"><span className="text-ink font-medium">OEKO-TEX Standard 100.</span> Rigorously tested to be free of harmful substances.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
