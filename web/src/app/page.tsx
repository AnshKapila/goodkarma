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
      <section className="px-6 max-w-[1400px] mx-auto w-full min-h-[110vh] flex items-center py-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center w-full">
          <div className="text-left">
            <h2 className="text-h2 font-editorial italic text-ink mb-8">
              What touches your skin,<br/>shapes your skin.
            </h2>
            <p className="text-p1 text-muted-foreground mb-10 font-light">
              Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day.
            </p>
            <p className="text-p1 text-ink font-medium mb-8">
              Here's what we test for, so you don't have to wonder.
            </p>
            <Link href="/certifications" className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base border border-ink text-ink hover:bg-ink hover:text-white transition-all font-medium">
              View Our Certifications
            </Link>
          </div>
          <div className="w-full">
            <ComparisonSlider 
              beforeImage="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=800&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop"
              beforeLabel="Synthetic (Traps Heat)"
              afterLabel="100% GOTS Cotton (Breathable)"
            />
          </div>
        </div>
      </section>

      {/* 3. Certifications Strip (Compact Bento) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[120px]">
          
          <Link href="/certifications" className="col-span-2 bg-ink text-white rounded-xl p-8 flex flex-col justify-center shadow-sm hover:bg-ink/90 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <ArrowRight className="w-6 h-6 text-marigold group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-medium mb-1 z-10">Certified where it counts</h3>
            <p className="text-xs text-white/70 font-light z-10 uppercase tracking-widest">View All Standards</p>
          </Link>
          
          <div className="col-span-1 bg-paper rounded-xl border border-border/40 flex items-center justify-center font-bold text-ink shadow-sm text-lg tracking-widest uppercase hover:border-marigold/30 transition-colors">
            GOTS
          </div>
          
          <div className="col-span-1 bg-paper rounded-xl border border-border/40 flex items-center justify-center font-bold text-ink shadow-sm text-lg tracking-widest uppercase hover:border-marigold/30 transition-colors">
            OEKO-TEX
          </div>
          
          <div className="col-span-1 bg-paper rounded-xl border border-border/40 flex items-center justify-center font-bold text-ink shadow-sm text-lg tracking-widest uppercase hover:border-marigold/30 transition-colors">
            BRSR
          </div>
          
          <div className="col-span-1 bg-paper rounded-xl border border-border/40 flex items-center justify-center font-bold text-ink shadow-sm text-sm tracking-widest uppercase text-center leading-tight px-4 hover:border-marigold/30 transition-colors">
            Vegan Dye
          </div>
          
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
            { title: "Daily Comfort", desc: "Breathable basics", img: "https://images.unsplash.com/photo-1616012879555-523cce01874b?q=80&w=800&auto=format&fit=crop" },
            { title: "New Mothers", desc: "Gentle on sensitive skin", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop" },
            { title: "Fertility & Wellness", desc: "Chemical-free support", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" },
            { title: "Infant Care", desc: "Purest natural fibers", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop" }
          ].map((concern) => (
            <Link href="/products" key={concern.title} className="group relative rounded-xl flex flex-col items-center justify-center min-h-[200px] border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer text-center overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${concern.img})` }} />
              <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/60 transition-colors" />
              <div className="relative z-10 p-10 flex flex-col items-center">
                <span className="font-medium text-xl text-white mb-2">{concern.title}</span>
                <span className="text-sm text-white/90">{concern.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. How We're Made (Bento Grid) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Cell 1: Intro Text (Col span 2, Row span 1) */}
          <div className="md:col-span-2 md:row-span-1 bg-paper rounded-xl p-10 flex flex-col justify-center border border-border/40 shadow-sm">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">How We're Made</span>
            <h2 className="text-h2 font-editorial italic text-ink mb-4 leading-tight">
              Why what touches your skin matters.
            </h2>
            <p className="text-p1 text-muted-foreground font-light max-w-[500px]">
              Your skin is your body's largest organ, absorbing what it touches day after day. We eliminated synthetic stretch, heavy metals, and chemical fixatives.
            </p>
          </div>

          {/* Cell 2: GOTS Cotton (Col span 1, Row span 1) */}
          <div className="md:col-span-1 md:row-span-1 bg-marigold text-white rounded-xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-3">100% GOTS Cotton</h3>
              <p className="text-sm font-light leading-relaxed text-white/90">
                Cultivated without toxic pesticides, keeping the soil and your skin safe. What's left is pure, organic cotton that lets your body breathe.
              </p>
            </div>
          </div>

          {/* Cell 3: Tall Image (Col span 1, Row span 2) */}
          <div className="md:col-span-1 md:row-span-2 rounded-xl bg-[url('https://images.unsplash.com/photo-1596522354181-70529d2f2d96?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden shadow-sm flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="relative z-10 text-white">
              <h3 className="text-xl font-medium mb-2">Designed for the Body</h3>
              <p className="text-sm font-light text-white/90">Supporting your natural microclimate all day.</p>
            </div>
          </div>

          {/* Cell 4: Wide Image (Col span 2, Row span 1) */}
          <div className="md:col-span-2 md:row-span-1 rounded-xl bg-paper relative overflow-hidden shadow-sm border border-border/40 bg-[url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-ink/10" />
            <div className="absolute bottom-6 left-8">
               <h3 className="text-xl font-medium text-white drop-shadow-md">Connecting Skin & Nature</h3>
            </div>
          </div>

          {/* Cell 5: Naturally Dyed (Col span 1, Row span 1) */}
          <div className="md:col-span-1 md:row-span-1 bg-mauve text-white rounded-xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-60" />
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-3">Naturally Dyed</h3>
              <p className="text-sm font-light leading-relaxed text-white/90">
                Colours extracted from earth's roots and petals, completely free of synthetic azo dyes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Products (The Collection) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-32">
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
            { name: "Organic Cotton Top", color: "Undyed", price: "$45", img: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop" },
            { name: "Comfort Brief", color: "Madder Rose", price: "$32", img: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop" },
            { name: "Lounge Set", color: "Marigold", price: "$85", img: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop" }
          ].map((product, i) => (
            <Link href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`} key={i} className="group cursor-pointer flex flex-col">
              <div 
                className="aspect-[4/5] bg-paper rounded-xl mb-6 flex items-center justify-center border border-border/40 overflow-hidden relative bg-cover bg-center shadow-sm group-hover:shadow-md transition-all duration-500"
                style={{ backgroundImage: `url(${product.img})` }}
              >
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
      
      {/* 6.5 Skin Science Teaser */}
      <section className="w-full bg-mauve text-white">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[700px] bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center relative order-2 md:order-1">
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-20 lg:p-24 flex-1 order-1 md:order-2 flex flex-col justify-center max-w-[700px] mx-auto">
            <span className="text-white/80 font-bold text-xs uppercase tracking-widest mb-6 block">Skin Science</span>
            <h2 className="text-h2 font-editorial italic text-white mb-8">
              The science of breathing.
            </h2>
            <p className="text-p1 text-white/90 mb-10 font-light max-w-[450px]">
              We design for the body's largest organ. Discover exactly how synthetic fabrics interact with your skin compared to pure, unblended organic cotton.
            </p>
            <Link href="/educate/skin-science" className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-mauve rounded-full px-8 py-5 text-base font-medium transition-all hover:-translate-y-1 shadow-sm w-fit">
              Read the Research
            </Link>
          </div>
        </div>
      </section>
      
      {/* 7. "For sight of every new piece" (Natural Dyeing) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-xl overflow-hidden text-white flex flex-col md:flex-row items-center shadow-xl">
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
          </div>
        </div>
      </section>

      {/* 8. Doctor Trust (Compact Bento) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          <div className="md:col-span-2 bg-paper rounded-xl border border-border/40 p-10 md:p-14 flex flex-col justify-center shadow-sm">
            <h2 className="text-h2 font-editorial italic text-ink mb-4">Recommended by practitioners.</h2>
            <p className="text-p1 text-muted-foreground font-light max-w-[500px]">
              Trusted by doctors and wellness practitioners for patients who need chemical-free, breathable garments. Backed by the highest global standards.
            </p>
          </div>

          <div className="md:col-span-1 bg-white rounded-xl border border-border/40 p-10 flex flex-col items-center justify-center text-center shadow-sm hover:border-marigold/30 transition-colors">
            <div className="w-20 h-20 rounded-full bg-paper flex items-center justify-center shadow-sm border border-border/20 font-bold text-ink mb-4 tracking-widest text-sm">GOTS</div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Global Organic</span>
          </div>

          <div className="md:col-span-1 bg-ink text-white rounded-xl p-10 flex flex-col justify-center shadow-sm hover:bg-ink/90 transition-colors">
            <h3 className="text-xl font-medium mb-3">Clinical Resources</h3>
            <p className="text-sm font-light text-white/80 mb-6">Patient handouts and clinical rationale for your practice.</p>
            <Link href="/educate/for-doctors" className="inline-flex items-center gap-2 text-marigold hover:text-white transition-colors text-sm font-medium w-fit">
              View Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8.5 In Motion (Short Content) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-h2 font-editorial italic text-ink">In Motion</h2>
          <Link href="#" className="text-sm font-medium hover:text-marigold flex items-center gap-2 group transition-colors">
            Follow our journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            "Breathability Test: Cotton vs Synthetic",
            "How we dye with Marigold",
            "Why your skin needs a break",
            "Behind the scenes: Spinning the yarn"
          ].map((title, i) => (
            <div key={i} className="min-w-[280px] w-[75vw] sm:w-[50vw] md:w-auto md:min-w-0 aspect-[9/16] rounded-xl relative overflow-hidden group cursor-pointer snap-center bg-paper flex-shrink-0 shadow-sm hover:shadow-lg transition-all duration-500">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white self-end group-hover:bg-white group-hover:text-ink transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <h3 className="text-h3 font-medium text-white leading-[1.2] drop-shadow-md group-hover:text-marigold transition-colors duration-300">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Short Content (Recent thoughts / Blog) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center md:text-left">Recent thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {[
            { title: "Why natural dye matters for sensitive skin", cat: "Skin Science", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" },
            { title: "The reality of 'synthetic stretch' in modern wear", cat: "Materials", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" },
            { title: "GOTS certification and what it actually means", cat: "Standards", img: "https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop" }
          ].map((article, i) => (
            <Link href="/educate/skin-science" key={i} className="group cursor-pointer flex flex-col">
              <div 
                className="aspect-[4/3] bg-paper rounded-xl mb-6 flex items-center justify-center border border-border/30 overflow-hidden relative bg-cover bg-center shadow-sm group-hover:shadow-md transition-all duration-500"
                style={{ backgroundImage: `url(${article.img})` }}
              >
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

    </div>
  );
}
