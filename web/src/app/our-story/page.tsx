import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div className="max-w-[700px] animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Our Story</span>
            <h1 className="font-editorial italic text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.1] mb-10">
              Rooted in care.
            </h1>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-ink font-light leading-relaxed">
                Good Karma was born out of a simple, undeniable truth: what we put against our skin matters just as much as what we put in our bodies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                For decades, the innerwear industry has relied on synthetic fabrics and chemical dyes to achieve stretch and vibrant colors. But this came at a cost to human skin and the environment. We set out to prove that comfort doesn't require compromise.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Today, we work with organic farmers and traditional dyers to create garments that are as kind to the earth as they are to your body.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[600px] aspect-[4/5] rounded-[2.5rem] bg-paper border border-border/40 overflow-hidden relative shadow-lg bg-[url('https://images.unsplash.com/photo-1596522354181-70529d2f2d96?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center">
              {/* DEV TAG */}
              <div className="absolute top-4 right-4 bg-marigold text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono z-50 shadow-md border border-white/20">
                DEV: REAL ASSET PENDING (Founder / Origin)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
