import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkinSciencePage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div className="max-w-[700px] animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Skin Science</span>
            <h1 className="text-h1 font-editorial italic text-ink mb-10">
              The largest organ of your body.
            </h1>
            
            <div className="space-y-8">
              <p className="text-p1 text-ink font-light">
                Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day.
              </p>
              
              {/* Draft marked for length changing later */}
              <div className="relative pl-6 border-l-2 border-marigold/30">
                {/* DEV TAG */}
                <div className="absolute -top-3 left-6 bg-paper text-marigold text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono shadow-sm border border-marigold/20">
                  DEV: DRAFT COPY (Flexible Length)
                </div>
                <p className="text-p1 text-muted-foreground pt-2">
                  Synthetic fabric traps heat and moisture against the body, creating the kind of warm, damp environment where irritation is more likely to start. Many synthetic textiles are also treated with chemicals — including PFAS, the so-called 'forever chemicals' — that research shows can be absorbed directly through skin contact.
                </p>
              </div>
              
              <p className="text-p1 text-ink font-light">
                Good Karma is made from 100% GOTS-certified cotton, naturally dyed, with no elastane and no chemical finishing. It's built to breathe — because the first step to caring for your skin is choosing what you put against it.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[600px] aspect-square rounded-[2.5rem] bg-paper border border-border/40 overflow-hidden relative shadow-lg bg-[url('/placeholder_skin_science_diagram.jpg')] bg-cover bg-center">
              {/* DEV TAG */}
              <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md">
                DEV: Swappable Placeholder
              </div>
            </div>
          </div>
        </div>
        
        {/* Deep Dives */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 pt-24 border-t border-border/40">
          {/* For Women */}
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink mb-2">For Women</h2>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-marigold uppercase tracking-widest mb-3">The Issue</strong>
              <p className="text-p1 text-muted-foreground font-light">Recurring irritation is common, and rarely connected to what's being worn.</p>
            </div>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-mauve uppercase tracking-widest mb-3">The Situation</strong>
              <p className="text-p1 text-muted-foreground font-light">Heat and moisture retention from synthetic fabric is a well-documented contributor to irritation and infection risk.</p>
            </div>
            <div className="bg-ink p-8 rounded-[2rem] shadow-lg">
              <strong className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">The Solution</strong>
              <p className="text-p1 text-white font-light">Breathable, natural cotton addresses the root cause, not just the symptom.</p>
            </div>
          </div>

          {/* For Infants */}
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink mb-2">For Infants</h2>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-marigold uppercase tracking-widest mb-3">The Issue</strong>
              <p className="text-p1 text-muted-foreground font-light">A baby's skin is still learning to protect itself.</p>
            </div>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-mauve uppercase tracking-widest mb-3">The Situation</strong>
              <p className="text-p1 text-muted-foreground font-light">An infant's skin barrier is thinner and more easily irritated by synthetic fibers and dye residue than adult skin.</p>
            </div>
            <div className="bg-ink p-8 rounded-[2rem] shadow-lg">
              <strong className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">The Solution</strong>
              <p className="text-p1 text-white font-light">Natural dye and certified cotton mean nothing unnecessary ever touches it.</p>
            </div>
          </div>

          {/* For Men */}
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink mb-2">For Men</h2>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-marigold uppercase tracking-widest mb-3">The Issue</strong>
              <p className="text-p1 text-muted-foreground font-light">Comfort and fertility rarely enter the same conversation, until they should.</p>
            </div>
            <div className="bg-paper p-8 rounded-[2rem] border border-border/40 shadow-sm">
              <strong className="block text-xs font-bold text-mauve uppercase tracking-widest mb-3">The Situation</strong>
              <p className="text-p1 text-muted-foreground font-light">Elevated heat from synthetic, tight-fitting fabric is a recognized factor in sperm quality, a connection well-established in urology.</p>
            </div>
            <div className="bg-ink p-8 rounded-[2rem] shadow-lg">
              <strong className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-3">The Solution</strong>
              <p className="text-p1 text-white font-light">Breathable cotton keeps things cooler, simply by design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
