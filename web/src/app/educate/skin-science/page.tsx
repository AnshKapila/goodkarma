export default function SkinSciencePage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Skin Science</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            The largest organ of your body.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            What touches your skin is absorbed by your body. Learn why we eliminate synthetic stretch, toxic fixatives, and heavy metals from every garment.
          </p>
        </div>
        
        <div className="aspect-[21/9] bg-paper rounded-3xl w-full border border-border/50 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">[ Detailed diagram / illustration of skin absorption ]</span>
        </div>
      </section>
    </div>
  );
}
