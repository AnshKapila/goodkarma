import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComparisonSlider } from "@/components/ComparisonSlider";
import { SHOW_OEKO_TEX } from "@/config/features";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 w-full">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-end p-6 md:p-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#1d1814]">
          <div 
            className="absolute inset-0 bg-cover bg-[position:68%_center] md:bg-center bg-no-repeat transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1814]/90 via-[#1d1814]/30 to-transparent md:bg-gradient-to-r md:from-[#1d1814]/85 md:via-[#1d1814]/25 md:to-transparent" />
        </div>



        <div className="relative z-10 w-full max-w-[1400px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="max-w-[800px] flex flex-col items-start">
            <h1 className="text-h1 font-editorial italic text-white tracking-tight mb-6 drop-shadow-lg">
              Innerwear that<br/>cares for your skin.
            </h1>
            <p className="text-p1 text-white/90 max-w-[500px] font-light leading-relaxed mb-8">
              Crafted with 100% GOTS certified organic cotton and naturally dyed using the earth's ingredients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/products" variant="primary" fullWidthMobile={true}>
                Shop the Collection
              </Button>
              <Button href="/educate/skin-science" variant="secondary" fullWidthMobile={true}>
                Discover the Science
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW The Difference (Problem/Situation) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full min-h-[110vh] flex items-center py-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-stretch w-full">
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-h2 font-editorial italic text-ink mb-8">
              What touches your skin,<br/>shapes your skin.
            </h2>
            <p className="text-p1 text-muted-foreground mb-10 font-light">
              Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day.
            </p>
            <p className="text-p1 text-ink font-medium mb-8">
              Here's what we test for, so you don't have to wonder.
            </p>
            <Button href="/educate/certifications" variant="secondary" fullWidthMobile={true}>
              View Our Certifications
            </Button>
          </div>
          <div className="w-full h-full flex flex-col">
            <ComparisonSlider 
              leftImage="/images/cotton-hand.png" 
              rightImage="/images/synthetic-hand.jpg"
              leftLabel="100% GOTS Cotton (Breathable)"
              rightLabel="Synthetic (Traps Heat)"
              zoom={1.13}
              className="aspect-square md:aspect-auto md:h-full md:flex-1 min-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* 3. Certifications Strip (Inline List) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-center gap-8 py-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
            <span className="text-xl md:text-2xl font-editorial italic text-ink shrink-0">
              Certified where it counts:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-90">
              <div className="font-bold text-ink text-base md:text-lg tracking-widest uppercase flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-paper border border-border/40 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 transition-transform">
                  <img src="/images/certifications/gots-logo.png" alt="GOTS Certified" className="w-full h-full object-contain" />
                </div>
                <span>GOTS</span>
              </div>
              {SHOW_OEKO_TEX && (
                <div className="font-bold text-ink text-base md:text-lg tracking-widest uppercase flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-paper border border-border/40 p-1 flex items-center justify-center overflow-hidden shadow-2xs">
                    <span className="text-xs font-bold">O</span>
                  </div>
                  <span>OEKO-TEX</span>
                </div>
              )}
              <div className="font-bold text-ink text-base md:text-lg tracking-widest uppercase flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-paper border border-border/40 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 transition-transform">
                  <img src="/images/certifications/brsr-logo.png" alt="BRSR Reporting" className="w-full h-full object-contain rounded-full" />
                </div>
                <span>BRSR</span>
              </div>
              <div className="font-bold text-ink text-base md:text-lg tracking-widest uppercase flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-paper border border-border/40 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 transition-transform">
                  <img src="/images/certifications/vegan-mark.png" alt="Vegan Dye Certified" className="w-full h-full object-contain" />
                </div>
                <span>Vegan Dye</span>
              </div>
            </div>
          </div>
          <Button href="/educate/certifications" variant="secondary">
            View All Standards
          </Button>
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
            { 
              title: "Daily Comfort", 
              desc: "Breathable cotton that stays cool and comfortable from morning to night.", 
              img: "/images/daily-comfort.jpg",
              position: "bg-top"
            },
            { 
              title: "New Mothers", 
              desc: "Soft, breathable cotton for sensitive skin in the months after birth.", 
              img: "/images/new-mothers.png",
              scale: "scale-110 group-hover:scale-[1.18]"
            },
            { 
              title: "Fertility & Wellness", 
              desc: "Breathable cotton for him and for her, as you start or grow your family.", 
              img: "/images/fertility-wellness.jpg",
              position: "bg-top"
            },
            { 
              title: "Little Ones", 
              desc: "Soft natural cotton for babies and growing kids with sensitive skin.", 
              img: "/images/little-ones.jpg",
              position: "bg-center"
            }
          ].map((concern) => (
            <Link href="/products" key={concern.title} className="group relative rounded-xl aspect-[3/4] flex flex-col justify-end items-start border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left overflow-hidden">
              <div className={`absolute inset-0 bg-cover ${concern.position || "bg-center"} transition-transform duration-700 ${concern.scale || "group-hover:scale-105"}`} style={{ backgroundImage: `url(${concern.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="relative z-10 p-6 md:p-8 w-full">
                <span className="font-medium text-xl text-white mb-2 block">{concern.title}</span>
                <span className="text-sm text-white/90 leading-relaxed font-light block">{concern.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Beyond the Product (Science Bento Grid) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="mb-10 max-w-[800px]">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
            GOOD KARMA · BEYOND THE PRODUCT
          </span>
          <h2 className="text-h2 font-editorial italic text-ink leading-tight mb-4">
            The science behind everyday life.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-[700px]">
            From the air we breathe to the products we use, explore the environmental exposures, chemical interactions and scientific questions that shape our understanding of wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[auto] lg:auto-rows-[340px]">
          
          {/* Card 01: Air Pollution & Human Health (Featured Card: 2 cols x 2 rows on desktop) */}
          <Link
            href="/educate/environmental-health"
            className="group relative rounded-[20px] overflow-hidden border border-border/60 hover:border-marigold/60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold transition-all duration-300 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[440px] lg:min-h-[704px] p-8 md:p-10 lg:p-12 flex flex-col justify-between shadow-xs hover:shadow-lg bg-ink"
          >
            {/* Full-bleed authentic documentary image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/air-pollution-health.jpg"
                alt="Documentary photograph of an Indian city with atmospheric haze"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transform-none"
                loading="lazy"
              />
              {/* Carefully tuned gradient scrim preserving atmospheric depth while ensuring pristine text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/25" />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-marigold font-semibold flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-marigold group-hover:scale-125 transition-transform duration-300" />
                ENVIRONMENTAL HEALTH
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial italic text-white leading-snug mt-2 max-w-[500px]">
                Air Pollution & Human Health
              </h3>
            </div>

            <div className="relative z-10 pt-6">
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-[540px] mb-6">
                PM2.5, nitrogen dioxide and other air pollutants affect more than the air we breathe. Explore how exposure influences human health, what research suggests about the skin, and where scientific uncertainty remains.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-marigold group-hover:text-amber-200 transition-colors">
                <span>Explore the science</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 motion-reduce:transform-none" />
              </span>
            </div>
          </Link>

          {/* Card 02: Chemicals & Hormone Health (Standard Card: 1 col x 1 row) */}
          <Link
            href="/educate/endocrine-science"
            className="group relative rounded-[20px] overflow-hidden border border-border/60 hover:border-mauve/60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-mauve transition-all duration-300 lg:col-span-1 lg:row-span-1 min-h-[340px] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md bg-[#FAF7F6]"
          >
            {/* Thoughtful editorial still life with subtle mauve / paper wash */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/endocrine-science.jpg"
                alt="Editorial still life with laboratory glassware, dropper bottle and cosmetic container"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-30 group-hover:opacity-40 motion-reduce:transform-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F6]/98 via-[#FAF7F6]/88 to-[#FAF7F6]/65" />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-mauve font-semibold block mb-2">
                ENDOCRINE SCIENCE
              </span>
              <h3 className="text-xl sm:text-[22px] font-editorial italic text-ink leading-snug mb-3">
                Chemicals & Hormone Health
              </h3>
              <p className="text-xs sm:text-[13px] text-muted-foreground font-light leading-relaxed">
                Some chemicals can interfere with the body's hormone signalling. Learn how endocrine-disrupting chemicals are studied, where exposure can occur, and what the evidence tells us about potential health effects.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-mauve group-hover:text-ink transition-colors">
                <span>Understand the evidence</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none" />
              </span>
            </div>
          </Link>

          {/* Card 03: Personal-Care Product Exposure (Standard Card: 1 col x 1 row) */}
          <Link
            href="/educate/personal-care-exposure"
            className="group relative rounded-[20px] overflow-hidden border border-border/60 hover:border-marigold/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold transition-all duration-300 lg:col-span-1 lg:row-span-1 min-h-[340px] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md bg-ink"
          >
            {/* Realistic editorial photograph of skincare and personal-care products */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/personal-care-exposure.jpg"
                alt="Editorial photograph of skincare and personal care essentials on a wooden dressing shelf"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transform-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 to-ink/40" />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-marigold font-semibold block mb-2">
                EVERYDAY EXPOSURE
              </span>
              <h3 className="text-xl sm:text-[22px] font-editorial italic text-white leading-snug mb-3">
                What's in Your Daily Routine?
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed">
                Skincare, fragrances and everyday personal-care products can be sources of exposure to certain chemicals. Learn how ingredients are assessed, why dose and frequency matter, and how to read product information more critically.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-marigold group-hover:text-amber-200 transition-colors">
                <span>Explore everyday ingredients</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none" />
              </span>
            </div>
          </Link>

          {/* Card 04: The Science of Everyday Exposure (Standard Card with Marigold Accent: 1 col x 1 row) */}
          <Link
            href="/educate/everyday-toxicology"
            className="group relative rounded-[20px] overflow-hidden border border-marigold/35 hover:border-marigold focus:outline-hidden focus-visible:ring-2 focus-visible:ring-marigold transition-all duration-300 lg:col-span-1 lg:row-span-1 min-h-[340px] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md bg-[#FCF8F2]"
          >
            {/* Editorial home still life with marigold ceramics and natural textiles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/everyday-toxicology.jpg"
                alt="Editorial still life of marigold vessel and natural materials on a wooden table"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-30 group-hover:opacity-45 motion-reduce:transform-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCF8F2]/98 via-[#FCF8F2]/88 to-[#FCF8F2]/60" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-marigold font-bold bg-marigold/10 border border-marigold/20 px-2.5 py-0.5 rounded-full">
                  TOXICOLOGY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-marigold" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-editorial italic text-ink leading-snug mb-3">
                The Science of Everyday Exposure
              </h3>
              <p className="text-xs sm:text-[13px] text-ink/80 font-light leading-relaxed">
                People encounter substances through different routes and in different amounts. Explore how exposure, duration and chemical mixtures are evaluated, and why context matters when interpreting risk.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-marigold group-hover:text-ink transition-colors">
                <span>Learn how exposure works</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none" />
              </span>
            </div>
          </Link>

          {/* Card 05: Environmental Releases & Pollution (Standard Card: 1 col x 1 row) */}
          <Link
            href="/blog/textile-effluent-and-environmental-stewardship"
            className="group relative rounded-[20px] overflow-hidden border border-border/60 hover:border-sage/70 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sage transition-all duration-300 lg:col-span-1 lg:row-span-1 min-h-[340px] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md bg-ink"
          >
            {/* Realistic documentary photograph of industrial water treatment infrastructure */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/environmental-releases.jpg"
                alt="Documentary photograph of modern industrial water treatment infrastructure"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transform-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 to-ink/40" />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#98b093] font-semibold block mb-2">
                ENVIRONMENTAL IMPACT
              </span>
              <h3 className="text-xl sm:text-[22px] font-editorial italic text-white leading-snug mb-3">
                What We Release Into the Environment
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed">
                Chemical use doesn't end when a product leaves the factory. Explore how production, wastewater treatment and waste management influence what enters the wider environment.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 group-hover:text-marigold transition-colors">
                <span>Explore environmental impact</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none" />
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* 6. Products (The Collection) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-h2 font-editorial italic text-ink mb-3">The Collection</h2>
            <p className="text-p1 text-muted-foreground">A considered range of everyday essentials.</p>
          </div>
          <Button href="/products" variant="tertiary">
            View all
          </Button>
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
            <Button href="/educate/skin-science" variant="primary" fullWidthMobile={true}>
              Read the Research
            </Button>
          </div>
        </div>
      </section>
      
      {/* 7. "For sight of every new piece" (Natural Dyeing) */}
      <section className="px-6 py-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-xl overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-xl">
          <div className="p-8 md:p-14 lg:p-20 flex-1 flex flex-col justify-center">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Our Process</span>
            <h2 className="text-h2 font-editorial italic mb-8 drop-shadow-sm">
              Colours drawn <br /> directly from nature.
            </h2>
            <p className="text-p1 text-white/80 mb-10 max-w-[450px] font-light">
              Marigold, Madder root, and Pomegranate. We use real ingredients to create our palette, ensuring no harmful chemicals ever touch your skin.
            </p>
            <Button href="/educate/natural-dyeing" variant="primary" fullWidthMobile={true}>
              Explore the Dye Library
            </Button>
          </div>
          <div className="w-full md:w-1/2 min-h-[420px] md:min-h-full aspect-square md:aspect-auto relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/natural-dye-stack.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/20 to-transparent opacity-80 md:opacity-50" />
          </div>
        </div>
      </section>

      {/* 8. Doctor Trust (Continuous Creative Banner) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-[#485646] rounded-xl overflow-hidden text-white flex flex-col md:flex-row items-stretch justify-between shadow-xl relative min-h-[460px]">
          
          {/* Left: Content */}
          <div className="p-8 md:p-14 lg:p-20 flex-1 z-10 flex flex-col justify-center max-w-[650px]">
            <span className="text-white/80 font-bold text-xs uppercase tracking-widest mb-4 block">
              Clinical Partnership
            </span>
            <h2 className="text-h2 font-editorial italic text-white mb-6 leading-tight drop-shadow-sm">
              In dialogue with clinicians.
            </h2>
            <p className="text-p1 text-white/90 mb-10 max-w-[500px] font-light leading-relaxed">
              Valued by doctors and wellness practitioners for patients who benefit from unblended, breathable organic cotton. Backed by verified global standards.
            </p>
            <div>
              <Button href="/educate/for-doctors" variant="primary" fullWidthMobile={true}>
                Explore Clinical Resources
              </Button>
            </div>
          </div>

          {/* Right: Creative Visual & Script Element */}
          <div className="w-full md:w-1/2 relative flex items-end justify-center md:justify-end self-stretch min-h-[380px] md:min-h-full overflow-hidden">
            {/* Script Text Accent (matching Image 2's delicate handwritten aesthetic) */}
            <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 pointer-events-none">
              <span className="font-editorial italic text-xl md:text-2xl text-white/90 drop-shadow-sm block">
                Pure science, gentle on skin ♡
              </span>
            </div>

            {/* Doctor Portrait Image */}
            <div 
              className="w-full h-full min-h-[380px] md:min-h-[480px] bg-cover bg-[center_top] relative"
              style={{ backgroundImage: "url('/images/doctor-trust.jpg')" }}
            >
              {/* Seamless feathering gradient into the continuous card background */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#485646] via-[#485646]/20 to-transparent opacity-90 md:opacity-60" />
            </div>
          </div>

        </div>
      </section>

      {/* 8.5 In Motion (Short Content) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-h2 font-editorial italic text-ink">In Motion</h2>
          <Button href="#" variant="tertiary">
            Follow our journey
          </Button>
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
                <h3 className="text-p2 font-medium text-white leading-snug drop-shadow-md group-hover:text-marigold transition-colors duration-300">{title}</h3>
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
