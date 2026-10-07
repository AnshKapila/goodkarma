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

      {/* 2. The Skin Barrier, Briefly */}
      <section className="px-6 max-w-[1200px] mx-auto w-full mb-24 md:mb-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink">The Skin Barrier, Briefly</h2>
            <p className="text-p1 text-muted-foreground font-light">
              The stratum corneum is your skin's outermost layer. Its entire job is holding moisture in and keeping irritants out. Because it is highly sensitive to its microclimate, anything worn tightly against it for hours a day directly affects how well it can do that job.
            </p>
          </div>
          
          <div className="bg-paper p-10 rounded-xl border border-border/40 shadow-sm flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-marigold text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <strong className="block text-ink font-medium mb-1">Fabric traps heat & moisture</strong>
                <p className="text-sm text-muted-foreground font-light">Synthetic materials lack breathability, creating a damp microclimate.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-border ml-4 -my-2" />
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-mauve text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <strong className="block text-ink font-medium mb-1">Skin barrier weakens</strong>
                <p className="text-sm text-muted-foreground font-light">Elevated temperature and trapped sweat make the stratum corneum more permeable.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-border ml-4 -my-2" />
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <strong className="block text-ink font-medium mb-1">Irritation & infection risk rises</strong>
                <p className="text-sm text-muted-foreground font-light">Chemicals penetrate more easily, and bacteria multiply in the trapped warmth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Two Separate Issues */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center">The Two Separate Issues</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-paper p-12 md:p-16 rounded-xl border border-border/40 shadow-sm">
            <h3 className="text-2xl font-medium text-ink mb-6">Heat & Moisture Retention</h3>
            <p className="text-p1 text-muted-foreground font-light">
              Synthetic fibers don't breathe like cotton. By trapping heat and sweat against the body, they create the exact conditions where yeast and bacteria multiply more easily, leading to chronic irritation and discomfort.
            </p>
          </div>
          <div className="bg-paper p-12 md:p-16 rounded-xl border border-border/40 shadow-sm">
            <h3 className="text-2xl font-medium text-ink mb-6">Chemical Residue</h3>
            <p className="text-p1 text-muted-foreground font-light">
              PFAS "forever chemicals" used for water/stain resistance, along with synthetic azo dyes, leave lingering chemical residues. Recent research from the University of Birmingham shows PFAS can penetrate the skin directly—not just through inhalation or ingestion as previously assumed.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What The Research Shows (Bento Grid) */}
      <section className="bg-paper py-24 md:py-32 mb-24 md:mb-40 border-y border-border/40">
        <div className="px-6 max-w-[1400px] mx-auto w-full">
          <h2 className="text-h2 font-editorial italic text-ink mb-16 text-center">What The Research Shows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Cell 1: Univ Birmingham (Large) */}
            <div className="md:col-span-2 md:row-span-1 bg-white p-10 rounded-xl border border-border/40 shadow-sm flex flex-col justify-center">
              <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">University of Birmingham</span>
              <h3 className="text-xl font-medium text-ink mb-3">PFAS Skin Absorption</h3>
              <p className="text-p2 text-muted-foreground font-light max-w-[500px]">
                A breakthrough study demonstrating that multiple common "forever chemicals" can be absorbed directly through human skin into the bloodstream, establishing dermal contact as a significant exposure route.
              </p>
            </div>

            {/* Cell 2: Aalto Univ (Small) */}
            <div className="md:col-span-1 md:row-span-1 bg-ink p-10 rounded-xl shadow-sm flex flex-col justify-center text-white">
              <span className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4 block">Aalto University, Finland</span>
              <h3 className="text-xl font-medium mb-3">Microplastic Shedding</h3>
              <p className="text-sm font-light text-white/80">
                Synthetic textiles, especially stretch fabrics, shed significant microplastics directly onto the skin during daily wear, not just into water during washing.
              </p>
            </div>

            {/* Cell 3: EEA (Small) */}
            <div className="md:col-span-1 md:row-span-1 bg-marigold p-10 rounded-xl shadow-sm flex flex-col justify-center text-white">
              <span className="text-white/80 font-bold text-xs uppercase tracking-widest mb-4 block">European Environment Agency</span>
              <h3 className="text-xl font-medium mb-3">The Pollution Chain</h3>
              <p className="text-sm font-light text-white/90">
                Identified synthetic clothing and textile finishes as a major contributor to PFAS pollution across Europe's entire textile supply chain.
              </p>
            </div>

            {/* Cell 4: Alden Wicker (Large) */}
            <div className="md:col-span-2 md:row-span-1 bg-white p-10 rounded-xl border border-border/40 shadow-sm flex flex-col justify-center">
              <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">Reporting: "To Dye For"</span>
              <h3 className="text-xl font-medium text-ink mb-3">Daily Exposure Links</h3>
              <p className="text-p2 text-muted-foreground font-light max-w-[500px]">
                Extensive investigative reporting linking daily exposure to synthetic clothing—particularly for high-contact-time professions—with chronic, chemical-related health complaints and sensitization.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Audience Breakdown (Feature Blocks) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <h2 className="text-h2 font-editorial italic text-ink mb-16 md:mb-24 text-center">Formulated for real needs.</h2>
        
        <div className="flex flex-col gap-20 md:gap-32">
          {/* For Women (Image Left) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] rounded-xl bg-paper relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1596522354181-70529d2f2d96?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shadow-sm">
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-10">
              <div>
                <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">For Women</span>
                <h3 className="text-h2 font-editorial italic text-ink mb-6">Restoring balance.</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Problem</strong>
                  <p className="text-p2 text-muted-foreground font-light">Recurring irritation is common, and rarely connected to what's being worn.</p>
                </div>
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">Heat and moisture retention from synthetic fabric is a well-documented contributor to infection risk.</p>
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
                  <strong className="block text-sm font-medium text-ink mb-2">The Problem</strong>
                  <p className="text-p2 text-muted-foreground font-light">A baby's skin is still learning to protect itself.</p>
                </div>
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">An infant's skin barrier is thinner and more easily irritated by synthetic fibers and dye residue than adult skin.</p>
                </div>
                <div className="pl-6 border-l-2 border-mauve">
                  <strong className="block text-sm font-medium text-ink mb-2">The Solution</strong>
                  <p className="text-p2 text-ink font-medium">Natural dye and certified cotton mean nothing unnecessary ever touches it.</p>
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:aspect-[4/5] rounded-xl bg-paper relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shadow-sm">
            </div>
          </div>

          {/* For Men (Image Left) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] rounded-xl bg-paper relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shadow-sm">
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-10">
              <div>
                <span className="text-sage font-bold text-xs uppercase tracking-widest mb-4 block">For Men</span>
                <h3 className="text-h2 font-editorial italic text-ink mb-6">Cooler by design.</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Problem</strong>
                  <p className="text-p2 text-muted-foreground font-light">Comfort and fertility rarely enter the same conversation, until they should.</p>
                </div>
                <div className="pl-6 border-l-2 border-border">
                  <strong className="block text-sm font-medium text-ink mb-2">The Situation</strong>
                  <p className="text-p2 text-muted-foreground font-light">Elevated heat from synthetic, tight-fitting fabric is a recognized factor in sperm quality, a connection well-established in urology.</p>
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

      {/* 6. Why Good Karma Is Different */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-32">
        <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center">Why Good Karma Is Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-paper p-10 rounded-xl border border-border/40 shadow-sm text-center">
            <h3 className="text-xl font-medium text-ink mb-4">Breathable by Nature</h3>
            <p className="text-sm text-muted-foreground font-light">
              GOTS certified organic cotton allows natural airflow that synthetic blends simply don't, preventing the heat and moisture trap.
            </p>
          </div>
          <div className="bg-paper p-10 rounded-xl border border-border/40 shadow-sm text-center">
            <h3 className="text-xl font-medium text-ink mb-4">No Synthetic Dye Residue</h3>
            <p className="text-sm text-muted-foreground font-light">
              Our 9 natural dyes completely replace azo dyes and petrochemical colorants, meaning zero synthetic residue against your skin.
            </p>
          </div>
          <div className="bg-paper p-10 rounded-xl border border-border/40 shadow-sm text-center">
            <h3 className="text-xl font-medium text-ink mb-4">No Elastane or PFAS</h3>
            <p className="text-sm text-muted-foreground font-light">
              We eliminated synthetic stretch and water-resistant chemical treatments. No 'forever chemicals' and no microplastic shedding.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Sources */}
      <section className="px-6 max-w-[1000px] mx-auto w-full pt-8 pb-16">
        <div className="border-t border-border/20 pt-12 text-center">
          <p className="text-xs text-muted-foreground/60 font-light max-w-[800px] mx-auto leading-relaxed">
            Sources: Oddný Ragnarsdóttir et al., "Dermal absorption of perfluoroalkyl substances (PFAS)," Environment International (2024). | Aalto University, "Microplastic shedding from polyester textiles," (2023). | European Environment Agency, "Textiles and the environment: the role of design in Europe's circular economy," (2022). | Alden Wicker, "To Dye For: How Toxic Fashion Is Making Us Sick," (2023).
          </p>
        </div>
      </section>

    </div>
  );
}
