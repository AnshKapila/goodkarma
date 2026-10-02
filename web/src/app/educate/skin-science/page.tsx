export default function SkinSciencePage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="max-w-[700px] mb-20">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Skin Science</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-8">
            The largest organ of your body.
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg text-ink font-medium leading-relaxed">
              Most of us never think twice about what our underwear is made of. But skin reacts to everything it touches, every single day.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Synthetic fabric traps heat and moisture against the body, creating the kind of warm, damp environment where irritation is more likely to start. Many synthetic textiles are also treated with chemicals — including PFAS, the so-called 'forever chemicals' — that research shows can be absorbed directly through skin contact.
            </p>
            <p className="text-ink text-lg leading-relaxed">
              Good Karma is made from 100% GOTS-certified cotton, naturally dyed, with no elastane and no chemical finishing. It's built to breathe — because the first step to caring for your skin is choosing what you put against it.
            </p>
          </div>
        </div>
        
        {/* Deep Dives */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-border/50">
          {/* For Women */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-ink mb-2">For Women</h2>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-marigold uppercase tracking-wider mb-2">The Issue</strong>
              <p className="text-muted-foreground">Recurring irritation is common, and rarely connected to what's being worn.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-mauve uppercase tracking-wider mb-2">The Situation</strong>
              <p className="text-muted-foreground">Heat and moisture retention from synthetic fabric is a well-documented contributor to irritation and infection risk.</p>
            </div>
            <div className="bg-ink p-6 rounded-2xl border border-ink">
              <strong className="block text-sm text-white/50 uppercase tracking-wider mb-2">The Solution</strong>
              <p className="text-white">Breathable, natural cotton addresses the root cause, not just the symptom.</p>
            </div>
          </div>

          {/* For Infants */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-ink mb-2">For Infants</h2>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-marigold uppercase tracking-wider mb-2">The Issue</strong>
              <p className="text-muted-foreground">A baby's skin is still learning to protect itself.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-mauve uppercase tracking-wider mb-2">The Situation</strong>
              <p className="text-muted-foreground">An infant's skin barrier is thinner and more easily irritated by synthetic fibers and dye residue than adult skin.</p>
            </div>
            <div className="bg-ink p-6 rounded-2xl border border-ink">
              <strong className="block text-sm text-white/50 uppercase tracking-wider mb-2">The Solution</strong>
              <p className="text-white">Natural dye and certified cotton mean nothing unnecessary ever touches it.</p>
            </div>
          </div>

          {/* For Men */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-ink mb-2">For Men</h2>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-marigold uppercase tracking-wider mb-2">The Issue</strong>
              <p className="text-muted-foreground">Comfort and fertility rarely enter the same conversation, until they should.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl border border-border/50">
              <strong className="block text-sm text-mauve uppercase tracking-wider mb-2">The Situation</strong>
              <p className="text-muted-foreground">Elevated heat from synthetic, tight-fitting fabric is a recognized factor in sperm quality, a connection well-established in urology.</p>
            </div>
            <div className="bg-ink p-6 rounded-2xl border border-ink">
              <strong className="block text-sm text-white/50 uppercase tracking-wider mb-2">The Solution</strong>
              <p className="text-white">Breathable cotton keeps things cooler, simply by design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
