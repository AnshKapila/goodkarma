import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32 w-full">
      
      {/* 1. Hero Section (Oreva style: Full-bleed immersive visual with overlaid text) */}
      <section className="relative w-full h-[90vh] md:h-[95vh] min-h-[600px] flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Background Visual Placeholder */}
        <div className="absolute inset-0 bg-ink">
          {/* Replace this div with a real <img /> or <video /> later */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        </div>

        {/* Top spacer for header if needed, or leave empty to push content down */}
        <div className="relative z-10 flex justify-between items-start w-full max-w-[1400px] mx-auto text-white/80 text-sm font-medium uppercase tracking-widest">
          <span>Good Karma</span>
          <span>Be good. Wear good.</span>
        </div>

        {/* Content overlaid at the bottom/center */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-[700px]">
            <h1 className="font-editorial italic text-6xl md:text-8xl text-white leading-[1] tracking-tight mb-6 drop-shadow-sm">
              Innerwear that cares for your skin.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-[500px] leading-relaxed">
              Crafted with 100% GOTS certified organic cotton and naturally dyed using the earth's ingredients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-white text-ink hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium shadow-sm transition-transform hover:scale-105">
              Shop the Collection
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Discover the Science
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Shop by Concern */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-editorial italic text-3xl md:text-4xl mb-4 text-ink">Find your comfort</h2>
          <p className="text-muted-foreground">Formulated for the specific needs of your body.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Daily Comfort", desc: "Breathable basics" },
            { title: "New Mothers", desc: "Gentle on sensitive skin" },
            { title: "Fertility & Wellness", desc: "Chemical-free support" },
            { title: "Infant Care", desc: "Purest natural fibers" }
          ].map((concern) => (
            <div key={concern.title} className="group bg-paper p-8 rounded-2xl flex flex-col items-center justify-center min-h-[160px] hover:bg-marigold/5 border border-border/50 transition-all cursor-pointer text-center">
              <span className="font-medium text-lg text-ink mb-1">{concern.title}</span>
              <span className="text-sm text-muted-foreground">{concern.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Us / How We're Made (Oreva Style: Split layout, large imagery, clean typography) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="aspect-[4/5] bg-paper rounded-3xl flex items-center justify-center border border-border/50 overflow-hidden order-2 md:order-1">
            <span className="text-muted-foreground text-sm">[ Close up of natural fabric texture or manufacturing process ]</span>
          </div>
          <div className="max-w-[500px] order-1 md:order-2">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">The Difference</span>
            <h2 className="font-editorial italic text-4xl md:text-5xl text-ink leading-tight mb-6">
              Why what touches your skin matters.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Your skin is your body's largest organ, absorbing what it touches day after day. We eliminated synthetic stretch, heavy metals, and chemical fixatives. What's left is pure, GOTS certified organic cotton that lets your body breathe.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-marigold mt-2 shrink-0" />
                <div>
                  <strong className="block font-medium text-ink text-lg">100% GOTS Cotton</strong>
                  <span className="text-muted-foreground leading-relaxed">Cultivated without toxic pesticides, keeping the soil and your skin safe.</span>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-mauve mt-2 shrink-0" />
                <div>
                  <strong className="block font-medium text-ink text-lg">Naturally Dyed</strong>
                  <span className="text-muted-foreground leading-relaxed">Colours extracted from earth's roots and petals, completely free of synthetic azo dyes.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Products (Keeping our own simple UI) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-editorial italic text-3xl md:text-4xl text-ink mb-2">The Collection</h2>
            <p className="text-muted-foreground">A considered range of everyday essentials.</p>
          </div>
          <a href="#" className="text-sm font-medium hover:text-marigold flex items-center gap-2 group">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: "Organic Cotton Top", color: "Undyed", price: "$45" },
            { name: "Comfort Brief", color: "Madder Rose", price: "$32" },
            { name: "Lounge Set", color: "Marigold", price: "$85" }
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] bg-paper rounded-2xl mb-6 flex items-center justify-center border border-border/50 overflow-hidden relative">
                <span className="text-muted-foreground text-sm">[ Product Image ]</span>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg text-ink">{product.name}</h3>
                  <p className="text-muted-foreground">{product.color}</p>
                </div>
                <span className="font-medium text-ink">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 5. "For sight of every new piece" (Oreva Style: Full bleed visual strip for Natural Dyeing) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-center">
          <div className="p-12 md:p-20 flex-1">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Our Process</span>
            <h2 className="font-editorial italic text-4xl md:text-5xl mb-6 leading-tight">
              Colours drawn <br /> directly from nature.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-[400px] leading-relaxed">
              Marigold, Madder root, and Pomegranate. We use real ingredients to create our palette, ensuring no harmful chemicals ever touch your skin.
            </p>
            <Button className="bg-white text-ink hover:bg-white/90 rounded-full px-8 py-6 text-base">
              Explore the Dye Library
            </Button>
          </div>
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[600px] bg-paper flex items-center justify-center relative">
            <span className="text-muted-foreground text-sm z-10">[ Natural dyeing process or macro ingredient shot ]</span>
            {/* Abstract color hints */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#C98637] to-[#A4777E]" />
          </div>
        </div>
      </section>

      {/* 6. Doctor Trust & Certifications */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-paper border border-border/50 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center">
          <h2 className="font-editorial italic text-3xl md:text-4xl text-ink mb-6">Recommended by practitioners.</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mb-12">
            Trusted by doctors and wellness practitioners for patients who need chemical-free, breathable garments. Backed by the highest global standards.
          </p>
          <div className="flex gap-8 justify-center items-center mb-12">
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/50 text-sm font-medium text-ink">
              GOTS
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/50 text-sm font-medium text-ink">
              OEKO-TEX
            </div>
          </div>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base border-border text-ink">
            Resources for Doctors
          </Button>
        </div>
      </section>

      {/* 7. Short Content (Recent thoughts / Blog) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <h2 className="font-editorial italic text-3xl md:text-4xl text-ink mb-8">Recent thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: "Why natural dye matters for sensitive skin", cat: "Skin Science" },
            { title: "The reality of 'synthetic stretch' in modern wear", cat: "Materials" },
            { title: "GOTS certification and what it actually means", cat: "Standards" }
          ].map((article, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-[3/2] bg-paper rounded-2xl mb-6 flex items-center justify-center border border-border/50 overflow-hidden relative">
                <span className="text-muted-foreground text-sm">[ Article Thumbnail ]</span>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-marigold font-bold text-[10px] uppercase tracking-widest mb-2 block">{article.cat}</span>
              <h3 className="font-medium text-lg text-ink leading-tight mb-2 group-hover:text-marigold transition-colors">{article.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Footer (Includes Newsletter) */}
      <footer className="px-6 max-w-[1400px] mx-auto w-full pt-16 border-t border-border/50">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="font-display text-4xl text-marigold mb-6 tracking-tight">good karma</div>
            <p className="text-muted-foreground text-lg max-w-[340px] mb-8">
              A trusted friend, backed by science. Be good. Wear good.
            </p>
            <div className="flex gap-4 max-w-[340px]">
              <input type="email" placeholder="Email address" className="flex-1 bg-paper border border-border/50 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/50 transition-all" />
              <Button className="bg-ink text-white rounded-full px-6">Subscribe</Button>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-medium text-ink mb-6">Shop</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-marigold transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">By Concern</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-medium text-ink mb-6">Educate</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-marigold transition-colors">Skin Science</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">Natural Dyeing</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">For Doctors</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-medium text-ink mb-6">About</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-marigold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-marigold transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          <p>&copy; 2026 Good Karma. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
            <span>Part of the Livbio family.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
