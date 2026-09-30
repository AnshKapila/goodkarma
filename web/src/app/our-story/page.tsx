export default function OurStoryPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            A trusted friend.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born out of a necessity for garments that don't harm the body or the planet. We stripped away the synthetics to give you pure, natural comfort.
          </p>
        </div>
        <div className="aspect-[21/9] bg-paper rounded-3xl w-full border border-border/50 flex items-center justify-center mb-16">
          <span className="text-muted-foreground text-sm">[ Founder or Brand Story Imagery ]</span>
        </div>
      </section>
    </div>
  );
}
