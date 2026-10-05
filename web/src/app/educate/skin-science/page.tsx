import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SkinSciencePage() {
  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      
      {/* 1. Hero Section */}
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full mb-20 md:mb-32">
        <Link href="/educate" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Educate
        </Link>
        <div className="max-w-[900px] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out text-center md:text-left">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Skin Science</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-10 leading-tight">
            The largest organ of your body.
          </h1>
          <p className="text-p1 text-ink font-light max-w-[700px] md:pr-12 md:mx-0 mx-auto">
            Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day. The real research behind what touches your skin, written plainly.
          </p>
        </div>
      </section>

      {/* 2 & 3. Why what touches your skin matters (Bento Grid) */}
      <section className="px-6 max-w-[1200px] mx-auto w-full mb-24 md:mb-40">
        <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center md:text-left">Why what touches your skin matters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Cell 1: The Skin Barrier (Span 2 cols) */}
          <div className="md:col-span-2 md:row-span-1 bg-paper rounded-[2.5rem] p-10 md:p-14 border border-border/40 shadow-sm flex flex-col justify-center">
            <h3 className="text-h3 font-editorial italic text-ink mb-4">The Skin Barrier, Briefly</h3>
            <div className="relative pl-6 border-l-2 border-marigold/30">
              <div className="absolute -top-3 left-6 bg-paper text-marigold text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono shadow-sm border border-marigold/20">
                DEV: DRAFT COPY (Flexible Length)
              </div>
              <p className="text-p1 text-muted-foreground pt-2">
                Your skin is a highly active barrier. Synthetic fabric traps heat and moisture against the body, creating a warm, damp environment where irritation is more likely to start. When the barrier is compromised by this microclimate, it becomes more permeable to everything else.
              </p>
            </div>
          </div>

          {/* Cell 2: Tall Image (Span 1 col, 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 rounded-[2.5rem] bg-paper relative overflow-hidden shadow-sm min-h-[300px] bg-[url('/placeholder_skin_science_diagram.jpg')] bg-cover bg-center">
            <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">
              DEV: Swappable Placeholder
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Cell 3: PFAS (Span 1 col) */}
          <div className="md:col-span-1 md:row-span-1 bg-marigold rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-center text-white">
            <h3 className="text-xl font-medium mb-3">PFAS Absorption</h3>
            <p className="text-sm font-light leading-relaxed text-white/90">
              Recent studies confirm that 'forever chemicals' used for stain and water resistance can penetrate the dermal barrier, leading to systemic exposure.
            </p>
          </div>

          {/* Cell 4: Chemical Dyes (Span 1 col) */}
          <div className="md:col-span-1 md:row-span-1 bg-ink rounded-[2.5rem] p-10 shadow-md flex flex-col justify-center text-white">
            <h3 className="text-xl font-medium mb-3">Chemical Dyes</h3>
            <p className="text-sm font-light leading-relaxed text-white/80">
              Petrochemical dyes and heavy metal fixatives are known sensitizers, responsible for the majority of textile-induced allergic contact dermatitis cases.
            </p>
          </div>

          {/* Cell 5: Microplastics (Span 3 cols) */}
          <div className="md:col-span-3 md:row-span-1 bg-white rounded-[2.5rem] p-10 md:p-14 border border-border/40 shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="text-sage font-bold text-xs uppercase tracking-widest mb-3 block">Research Focus</span>
              <h3 className="text-h3 font-editorial italic text-ink mb-4">Microplastic Shedding</h3>
              <p className="text-p1 text-muted-foreground font-light max-w-[600px]">
                Synthetic stretch fabrics (elastane/spandex) shed microplastics through friction. When worn close to the skin, these particles can mechanically exacerbate dermatitis, long before chemical absorption is factored in.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-3xl bg-paper relative overflow-hidden bg-[url('/PLACEHOLDER_research_microplastics.jpg')] bg-cover bg-center border border-border/30">
               <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Audience Breakdown (Feature Blocks) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <h2 className="text-h2 font-editorial italic text-ink mb-16 md:mb-24 text-center">Formulated for real needs.</h2>
        
        <div className="flex flex-col gap-20 md:gap-32">
          {/* For Women (Image Left) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-paper relative overflow-hidden bg-[url('/PLACEHOLDER_audience_women.jpg')] bg-cover bg-center">
               <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING IMAGE</div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-10">
              <div>
                <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">For Women</span>
                <h3 className="text-h2 font-editorial italic text-ink mb-6">Restoring balance.</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">Recurring irritation is common, and rarely connected to what's being worn. Heat and moisture retention from synthetic fabric is a well-documented contributor to infection risk.</p>
                </div>
                <div className="pl-6 border-l-2 border-marigold">
                  <strong className="block text-sm font-medium text-ink mb-2">The Solution</strong>
                  <p className="text-p2 text-ink font-medium">Breathable, natural cotton addresses the root cause, not just the symptom.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* For Infants (Image Right) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">For Infants</span>
                <h3 className="text-h2 font-editorial italic text-ink mb-6">Protecting early barriers.</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">An infant's skin barrier is thinner and more easily irritated by synthetic fibers and dye residue than adult skin. A baby's skin is still learning to protect itself.</p>
                </div>
                <div className="pl-6 border-l-2 border-mauve">
                  <strong className="block text-sm font-medium text-ink mb-2">The Solution</strong>
                  <p className="text-p2 text-ink font-medium">Natural dye and certified cotton mean nothing unnecessary ever touches it.</p>
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-paper relative overflow-hidden bg-[url('/PLACEHOLDER_audience_infants.jpg')] bg-cover bg-center">
               <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING IMAGE</div>
            </div>
          </div>

          {/* For Men (Image Left) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-paper relative overflow-hidden bg-[url('/PLACEHOLDER_audience_men.jpg')] bg-cover bg-center">
               <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING IMAGE</div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-10">
              <div>
                <span className="text-sage font-bold text-xs uppercase tracking-widest mb-4 block">For Men</span>
                <h3 className="text-h2 font-editorial italic text-ink mb-6">Cooler by design.</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">Comfort and fertility rarely enter the same conversation, until they should. Elevated heat from synthetic, tight-fitting fabric is a recognized factor in sperm quality, a connection well-established in urology.</p>
                </div>
                <div className="pl-6 border-l-2 border-sage">
                  <strong className="block text-sm font-medium text-ink mb-2">The Solution</strong>
                  <p className="text-p2 text-ink font-medium">Breathable cotton keeps things cooler, simply by design.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. Why Good Karma Is Different */}
      <section className="px-6 max-w-[1000px] mx-auto w-full mb-24 md:mb-32 text-center">
        <h2 className="text-h2 font-editorial italic text-ink mb-8">Why Good Karma Is Different</h2>
        <p className="text-p1 text-muted-foreground font-light mb-12 max-w-[800px] mx-auto">
          Good Karma is made from 100% GOTS-certified cotton, naturally dyed, with no elastane and no chemical finishing. It's built to breathe — because the first step to caring for your skin is choosing what you put against it.
        </p>
        <Link href="/certifications" className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-ink text-white hover:bg-ink/90 transition-colors text-base font-medium mx-auto">
          View Our Certifications
        </Link>
      </section>
      
      {/* 6. CTA / Product Grid */}
      <section className="bg-paper py-24 md:py-32">
        <div className="px-6 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-h2 font-editorial italic text-ink mb-4">Try Good Karma Today</h2>
            <p className="text-p1 text-muted-foreground font-light">
              Experience the difference of purely natural fibers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link href="/products/essential-brief" key={i} className="group flex flex-col gap-4">
                <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden relative border border-border/40 group-hover:border-marigold/30 transition-colors bg-[url('/PLACEHOLDER_product.jpg')] bg-cover bg-center">
                  <div className="absolute top-3 left-3 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-ink group-hover:text-marigold transition-colors">Essential Brief</h4>
                  <p className="text-sm text-muted-foreground">$24</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-ink text-ink hover:bg-ink hover:text-white transition-all text-sm font-medium">
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Sources */}
      <section className="px-6 max-w-[1000px] mx-auto w-full pt-16">
        <div className="border-t border-border/40 pt-16">
          <h4 className="text-sm font-bold text-ink uppercase tracking-widest mb-8">Clinical Sources</h4>
          <ul className="flex flex-col gap-4 text-xs text-muted-foreground font-light">
            <li className="flex items-start gap-3">
              <span className="text-marigold font-mono">01</span>
              <span>"Dermal absorption of per- and polyfluoroalkyl substances (PFAS) through human skin." Environmental Health Perspectives, 2022. <a href="#" className="underline decoration-border hover:text-ink inline-flex items-center gap-1">View Study <ExternalLink className="w-3 h-3" /></a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-marigold font-mono">02</span>
              <span>"Textile contact dermatitis: A review of sensitizing dyes and finishing resins." Journal of Clinical and Aesthetic Dermatology, 2020. <a href="#" className="underline decoration-border hover:text-ink inline-flex items-center gap-1">View Study <ExternalLink className="w-3 h-3" /></a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-marigold font-mono">03</span>
              <span>"Impact of scrotal hyperthermia on spermatogenesis and sperm quality." Human Reproduction Update, 2018. <a href="#" className="underline decoration-border hover:text-ink inline-flex items-center gap-1">View Study <ExternalLink className="w-3 h-3" /></a></span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
