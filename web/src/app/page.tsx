import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComparisonSlider } from "@/components/ComparisonSlider";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-32 w-full">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-ink">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          
          {/* DEV TAG */}
          <div className="absolute top-4 left-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
            DEV: REAL ASSET PENDING (Model Photoshoot)
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-start w-full max-w-[1400px] mx-auto text-white/90 text-sm font-medium uppercase tracking-widest pt-32">
          <span className="tracking-[0.2em]">Good Karma</span>
          <span className="tracking-[0.2em] hidden sm:block">Be good. Wear good.</span>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="max-w-[800px]">
            <h1 className="text-h1 font-editorial italic text-white tracking-tight mb-8 drop-shadow-lg">
              Innerwear that<br/>cares for your skin.
            </h1>
            <p className="text-p1 text-white/90 max-w-[500px] font-light">
              Crafted with 100% GOTS certified organic cotton and naturally dyed using the earth's ingredients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/products" className="inline-flex items-center justify-center bg-white text-ink hover:bg-paper rounded-full px-8 py-5 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              Shop the Collection
            </Link>
            <Link href="/educate/skin-science" className="inline-flex items-center justify-center rounded-full px-8 py-5 text-base border border-white/40 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1 duration-300">
              Discover the Science
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NEW The Difference (Problem/Situation) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="text-left">
            <h2 className="text-h2 font-editorial italic text-ink mb-8">
              What touches your skin,<br/>shapes your skin.
            </h2>
            <p className="text-p1 text-muted-foreground mb-10 font-light">
              Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day.
            </p>
            <p className="text-p1 text-ink font-medium">
              Here's what we test for, so you don't have to wonder.
            </p>
          </div>
          <div className="w-full">
            <ComparisonSlider 
              beforeImage="/PLACEHOLDER_synthetic_skin.jpg" 
              afterImage="/PLACEHOLDER_cotton_skin.jpg"
              beforeLabel="Synthetic (Traps Heat)"
              afterLabel="100% GOTS Cotton (Breathable)"
            />
          </div>
        </div>
      </section>

      {/* 3. Certifications Strip */}
      <section className="w-full bg-paper py-10 border-y border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 transition-all">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-xs font-bold text-ink shadow-sm">G</div>
              <span className="font-medium text-ink text-sm tracking-wide">GOTS Organic</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-xs font-bold text-ink shadow-sm">O</div>
              <span className="font-medium text-ink text-sm tracking-wide">OEKO-TEX</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-xs font-bold text-ink shadow-sm">B</div>
              <span className="font-medium text-ink text-sm tracking-wide">BRSR/NGRBC</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-xs font-bold text-ink shadow-sm">V</div>
              <span className="font-medium text-ink text-sm tracking-wide">Vegan Dye</span>
            </div>
          </div>
          <Link href="/certifications" className="text-sm font-medium hover:text-marigold flex items-center gap-2 group shrink-0 transition-colors">
            Certified where it counts 
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-border/50 group-hover:bg-marigold/10 group-hover:border-marigold/30 transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Shop by Concern */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-h2 font-editorial italic mb-4 text-ink">Find your comfort</h2>
          <p className="text-p1 text-muted-foreground">Formulated for the specific needs of your body.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Daily Comfort", desc: "Breathable basics" },
            { title: "New Mothers", desc: "Gentle on sensitive skin" },
            { title: "Fertility & Wellness", desc: "Chemical-free support" },
            { title: "Infant Care", desc: "Purest natural fibers" }
          ].map((concern) => (
            <Link href="/products" key={concern.title} className="group bg-paper p-10 rounded-[2rem] flex flex-col items-center justify-center min-h-[200px] hover:bg-marigold/5 border border-border/40 hover:border-marigold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer text-center">
              <span className="font-medium text-xl text-ink mb-2 group-hover:text-marigold transition-colors">{concern.title}</span>
              <span className="text-sm text-muted-foreground group-hover:text-ink/70 transition-colors">{concern.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Products */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-h2 font-editorial italic text-ink mb-3">The Collection</h2>
            <p className="text-p1 text-muted-foreground">A considered range of everyday essentials.</p>
          </div>
          <Link href="/products" className="text-sm font-medium hover:text-marigold flex items-center gap-2 group transition-colors">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: "Organic Cotton Top", color: "Undyed", price: "$45", img: "/PLACEHOLDER_product.jpg" },
            { name: "Comfort Brief", color: "Madder Rose", price: "$32", img: "/PLACEHOLDER_product.jpg" },
            { name: "Lounge Set", color: "Marigold", price: "$85", img: "/PLACEHOLDER_product.jpg" }
          ].map((product, i) => (
            <Link href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`} key={i} className="group cursor-pointer flex flex-col">
              <div 
                className="aspect-[4/5] bg-paper rounded-3xl mb-6 flex items-center justify-center border border-border/40 overflow-hidden relative bg-cover bg-center shadow-sm group-hover:shadow-md transition-all duration-500"
                style={{ backgroundImage: `url(${product.img})` }}
              >
                {/* DEV TAG */}
                <div className="absolute top-4 left-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
                  DEV: REAL ASSET PENDING
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-h3 font-medium text-ink group-hover:text-marigold transition-colors">{product.name}</h3>
                  <p className="text-p2 text-muted-foreground">{product.color}</p>
                </div>
                <span className="font-medium text-ink">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. How We're Made */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="aspect-[4/5] relative bg-[url('https://images.unsplash.com/photo-1596522354181-70529d2f2d96?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-[2.5rem] overflow-hidden order-2 md:order-1 shadow-lg">
            {/* DEV TAG */}
            <div className="absolute top-4 left-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
              DEV: REAL ASSET PENDING (Manufacturing)
            </div>
          </div>
          <div className="max-w-[500px] order-1 md:order-2">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">How We're Made</span>
            <h2 className="text-h2 font-editorial italic text-ink mb-8">
              Why what touches your skin matters.
            </h2>
            <p className="text-p1 text-muted-foreground mb-10 font-light">
              Your skin is your body's largest organ, absorbing what it touches day after day. We eliminated synthetic stretch, heavy metals, and chemical fixatives. What's left is pure, GOTS certified organic cotton that lets your body breathe.
            </p>
            <ul className="space-y-8">
              <li className="flex gap-6 items-start">
                <div className="w-2 h-2 rounded-full bg-marigold mt-2.5 shrink-0 shadow-sm" />
                <div>
                  <strong className="block font-medium text-ink text-xl mb-1">100% GOTS Cotton</strong>
                  <span className="text-muted-foreground leading-relaxed">Cultivated without toxic pesticides, keeping the soil and your skin safe.</span>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-2 h-2 rounded-full bg-mauve mt-2.5 shrink-0 shadow-sm" />
                <div>
                  <strong className="block font-medium text-ink text-xl mb-1">Naturally Dyed</strong>
                  <span className="text-muted-foreground leading-relaxed">Colours extracted from earth's roots and petals, completely free of synthetic azo dyes.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* 7. "For sight of every new piece" (Natural Dyeing) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-[2.5rem] overflow-hidden text-white flex flex-col md:flex-row items-center shadow-xl">
          <div className="p-12 md:p-20 lg:p-24 flex-1">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Our Process</span>
            <h2 className="text-h2 font-editorial italic mb-8 drop-shadow-sm">
              Colours drawn <br /> directly from nature.
            </h2>
            <p className="text-p1 text-white/80 mb-10 max-w-[450px] font-light">
              Marigold, Madder root, and Pomegranate. We use real ingredients to create our palette, ensuring no harmful chemicals ever touch your skin.
            </p>
            <Link href="/educate/natural-dyeing" className="inline-flex items-center justify-center bg-white text-ink hover:bg-paper rounded-full px-8 py-5 text-base font-medium transition-all hover:-translate-y-1 shadow-md">
              Explore the Dye Library
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[700px] bg-[url('https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#C98637] to-[#A4777E] mix-blend-multiply" />
            {/* DEV TAG */}
            <div className="absolute top-4 right-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
              DEV: REAL ASSET PENDING
            </div>
          </div>
        </div>
      </section>

      {/* 8. Doctor Trust */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-paper/50 border border-border/40 rounded-[2.5rem] p-12 md:p-24 text-center flex flex-col items-center shadow-sm">
          <h2 className="text-h2 font-editorial italic text-ink mb-6">Recommended by practitioners.</h2>
          <p className="text-p1 text-muted-foreground max-w-[650px] mb-12 font-light">
            Trusted by doctors and wellness practitioners for patients who need chemical-free, breathable garments. Backed by the highest global standards.
          </p>
          <div className="flex gap-8 justify-center items-center mb-12">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md border border-border/20 text-base font-bold text-ink hover:scale-105 transition-transform duration-300">
              GOTS
            </div>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md border border-border/20 text-base font-bold text-ink hover:scale-105 transition-transform duration-300">
              OEKO-TEX
            </div>
          </div>
          <Link href="/educate/for-doctors" className="inline-flex items-center justify-center rounded-full px-8 py-5 text-base border-2 border-ink text-ink hover:bg-ink hover:text-white transition-all font-medium">
            Resources for Doctors
          </Link>
        </div>
      </section>

      {/* 9. Short Content (Recent thoughts / Blog) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center md:text-left">Recent thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {[
            { title: "Why natural dye matters for sensitive skin", cat: "Skin Science", img: "/placeholder_skin_science_diagram.jpg" },
            { title: "The reality of 'synthetic stretch' in modern wear", cat: "Materials", img: "/placeholder_blog_synthetic_stretch.jpg" },
            { title: "GOTS certification and what it actually means", cat: "Standards", img: "/placeholder_blog_gots_certification.jpg" }
          ].map((article, i) => (
            <Link href="/educate/skin-science" key={i} className="group cursor-pointer flex flex-col">
              <div 
                className="aspect-[4/3] bg-paper rounded-3xl mb-6 flex items-center justify-center border border-border/30 overflow-hidden relative bg-cover bg-center shadow-sm group-hover:shadow-md transition-all duration-500"
                style={{ backgroundImage: `url(${article.img})` }}
              >
                {/* DEV TAG */}
                <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md">
                  DEV: Swappable Placeholder
                </div>
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">{article.cat}</span>
              <h3 className="text-h3 font-medium text-ink mb-3 group-hover:text-marigold transition-colors">{article.title}</h3>
              <p className="text-p3 text-muted-foreground flex items-center gap-2 font-medium">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. Footer (Includes Newsletter) */}
      <footer className="px-6 max-w-[1400px] mx-auto w-full pt-20 border-t border-border/40">
        <div className="grid md:grid-cols-12 gap-16 md:gap-12 mb-24">
          <div className="md:col-span-5">
            <div className="font-display text-5xl text-marigold mb-6 tracking-tight">good karma</div>
            <p className="text-p1 text-muted-foreground max-w-[340px] mb-10 font-light">
              A trusted friend, backed by science. Be good. Wear good.
            </p>
            <div className="flex gap-4 max-w-[380px] bg-paper p-1.5 rounded-full border border-border/60 focus-within:ring-2 focus-within:ring-marigold/30 focus-within:border-marigold/50 transition-all shadow-sm">
              <input type="email" placeholder="Email address" className="flex-1 bg-transparent px-5 py-3 text-sm focus:outline-none text-ink placeholder:text-muted-foreground" />
              <Button className="bg-ink hover:bg-ink/90 text-white rounded-full px-8 font-medium transition-colors">Subscribe</Button>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-medium text-ink mb-8 tracking-wide">Shop</h4>
            <ul className="space-y-5 text-muted-foreground">
              <li><Link href="/products" className="hover:text-marigold transition-colors">All Products</Link></li>
              <li><Link href="/products" className="hover:text-marigold transition-colors">By Concern</Link></li>
              <li><Link href="/products" className="hover:text-marigold transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-medium text-ink mb-8 tracking-wide">Educate</h4>
            <ul className="space-y-5 text-muted-foreground">
              <li><Link href="/educate/skin-science" className="hover:text-marigold transition-colors">Skin Science</Link></li>
              <li><Link href="/educate/natural-dyeing" className="hover:text-marigold transition-colors">Natural Dyeing</Link></li>
              <li><Link href="/educate/for-doctors" className="hover:text-marigold transition-colors">For Doctors</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-medium text-ink mb-8 tracking-wide">About</h4>
            <ul className="space-y-5 text-muted-foreground">
              <li><Link href="/our-story" className="hover:text-marigold transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-marigold transition-colors">Contact</Link></li>
              <li><Link href="/certifications" className="hover:text-marigold transition-colors">Certifications</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-8 border-t border-border/40 pb-8">
          <p>&copy; 2026 Good Karma. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
            <span>Part of the Livbio family.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
