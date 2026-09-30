export default function NaturalDyeingPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Natural Dyeing</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            Colours drawn directly from nature.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We use real ingredients to create our palette, ensuring no harmful chemicals ever touch your skin.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="aspect-square bg-[#C98637]/20 rounded-2xl flex items-center justify-center">
            <span className="text-marigold font-medium">Marigold</span>
          </div>
          <div className="aspect-square bg-[#A4777E]/20 rounded-2xl flex items-center justify-center">
            <span className="text-mauve font-medium">Madder Root</span>
          </div>
          <div className="aspect-square bg-[#5A6056]/20 rounded-2xl flex items-center justify-center">
            <span className="text-sage font-medium">Pomegranate</span>
          </div>
        </div>
      </section>
    </div>
  );
}
