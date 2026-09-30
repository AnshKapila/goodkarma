export default function ForDoctorsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-4 block">For Practitioners</span>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            Recommended by doctors.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Clinical resources, certifications, and literature for dermatologists and wellness practitioners who prescribe chemical-free garments for sensitive patients.
          </p>
        </div>
        
        <div className="aspect-[4/3] max-w-[800px] mx-auto bg-paper rounded-3xl border border-border/50 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">[ Clinical/Practitioner Resources Placeholder ]</span>
        </div>
      </section>
    </div>
  );
}
