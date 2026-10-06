import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";

export default function NaturalDyeingPage() {
  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      {/* 1. Intro */}
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full mb-20 md:mb-32">
        <div className="max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <Link href="/educate" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Educate
          </Link>
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Natural Dyeing</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-10 leading-tight">
            Colours drawn directly from nature.
          </h1>
          
          <div className="space-y-8">
            <div className="pl-6 border-l-2 border-border">
              <strong className="block text-sm font-medium text-ink mb-2">The Problem</strong>
              <p className="text-p1 text-ink font-light">
                Most fabric color today comes from synthetic dye—fast, cheap, and consistent, but not without cost.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-mauve/30">
              <div className="absolute -top-3 left-6 bg-paper text-mauve text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider font-mono shadow-sm border border-mauve/20">
                DEV: DRAFT COPY (Flexible Length)
              </div>
              <strong className="block text-sm font-medium text-ink mb-2 pt-2">The Situation</strong>
              <p className="text-p1 text-muted-foreground font-light">
                Synthetic dyes are typically petroleum-derived, meaning their raw material is a fossil fuel. Many are also tested on animals before approval, and their production is one of the textile industry's largest contributors to water pollution.
              </p>
            </div>

            <div className="pl-6 border-l-2 border-marigold">
              <strong className="block text-sm font-medium text-ink mb-2">The Solution</strong>
              <p className="text-p1 text-ink font-light">
                Good Karma uses natural dyes — madder, marigold, pomegranate peel, and others — sourced from Indian farms and food-processing waste. No fossil fuels. No animal testing. No wastewater left behind to treat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="px-6 max-w-[1200px] mx-auto w-full mb-24 md:mb-40 text-center">
        <h2 className="text-h2 font-editorial italic text-ink mb-8">A 5,000-year tradition.</h2>
        <p className="text-p1 text-muted-foreground font-light max-w-[800px] mx-auto">
          Natural dyeing is not a new sustainability trend—it is human heritage. Madder root alone has documented textile evidence tracing back to the Indus Valley Civilization, ancient Egypt, Greece, and Rome. We are reviving this ancient craft, marrying a deep respect for historical wisdom with standardized, modern production.
        </p>
      </section>

      {/* 3. The Dye Library (Bento Grid) */}
      <section className="bg-paper py-24 md:py-32 mb-24 md:mb-40 border-y border-border/40">
        <div className="px-6 max-w-[1400px] mx-auto w-full">
          <div className="max-w-[700px] mb-16 md:mb-24">
            <h2 className="text-h2 font-editorial italic text-ink mb-6">The Dye Library</h2>
            <p className="text-p1 text-muted-foreground font-light">
              Our living palette of organic colors. All sourced and grown within India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {/* Cell 1: Madder (2x2) */}
            <div className="md:col-span-2 md:row-span-2 bg-[#A4777E]/10 rounded-[2.5rem] p-10 md:p-14 border border-[#A4777E]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-50" />
              <div className="relative z-10">
                <span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">Himalayan Belt / Rajasthan / Gujarat</span>
                <h3 className="text-4xl font-editorial italic text-ink mb-2 group-hover:text-mauve transition-colors">Madder Root</h3>
                <p className="text-sm font-mono text-muted-foreground mb-8">Rubia tinctorum / cordifolia</p>
                <p className="text-p1 text-ink/80 font-light max-w-[400px]">
                  One of the oldest dyes known to humans, yielding deep reds and soothing pinks via alizarin.
                </p>
              </div>
            </div>

            {/* Cell 2: Marigold (1x2) */}
            <div className="md:col-span-1 md:row-span-2 bg-[#C98637]/10 rounded-[2.5rem] p-10 border border-[#C98637]/20 flex flex-col justify-end shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-50" />
              <div className="relative z-10">
                <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">Nationwide (Temple Waste)</span>
                <h3 className="text-3xl font-editorial italic text-ink mb-2 group-hover:text-marigold transition-colors">Marigold</h3>
                <p className="text-xs font-mono text-muted-foreground mb-4">Tagetes erecta</p>
                <p className="text-sm text-ink/80 font-light">
                  Sourced from discarded temple offerings to produce earthy greens, yellows, and golden olives.
                </p>
              </div>
            </div>

            {/* Cell 3: Pomegranate (1x1) */}
            <div className="md:col-span-1 md:row-span-1 bg-[#5A6056]/10 rounded-[2.5rem] p-8 border border-[#5A6056]/20 flex flex-col justify-center shadow-sm group">
              <span className="text-sage font-bold text-[10px] uppercase tracking-widest mb-2 block">Maharashtra / Gujarat</span>
              <h3 className="text-2xl font-editorial italic text-ink mb-1 group-hover:text-sage transition-colors">Pomegranate Peel</h3>
              <p className="text-xs font-mono text-muted-foreground mb-3">Punica granatum</p>
              <p className="text-xs text-ink/80 font-light">
                A food-industry byproduct yielding warm yellow-to-khaki tones.
              </p>
            </div>

            {/* Cell 4: Cutch (1x1) */}
            <div className="md:col-span-1 md:row-span-1 bg-[#8B5A2B]/10 rounded-[2.5rem] p-8 border border-[#8B5A2B]/20 flex flex-col justify-center shadow-sm group">
              <span className="text-[#8B5A2B] font-bold text-[10px] uppercase tracking-widest mb-2 block">UP / Bihar / HP</span>
              <h3 className="text-2xl font-editorial italic text-ink mb-1 group-hover:text-[#8B5A2B] transition-colors">Acacia Catechu</h3>
              <p className="text-xs font-mono text-muted-foreground mb-3">Khair</p>
              <p className="text-xs text-ink/80 font-light">
                Heartwood extract yielding warm browns, famously used in paan.
              </p>
            </div>

            {/* Cell 5: Onion Skin (2x1) */}
            <div className="md:col-span-2 md:row-span-1 bg-[#E3C16F]/10 rounded-[2.5rem] p-10 border border-[#E3C16F]/20 flex flex-col justify-center shadow-sm group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[#B89645] font-bold text-[10px] uppercase tracking-widest mb-2 block">Maharashtra / MP / Karnataka</span>
                  <h3 className="text-3xl font-editorial italic text-ink mb-1 group-hover:text-[#B89645] transition-colors">Onion Skin</h3>
                  <p className="text-xs font-mono text-muted-foreground">Allium cepa</p>
                </div>
                <p className="text-sm text-ink/80 font-light max-w-[250px]">
                  A pure kitchen-waste byproduct recovered to yield pale yellows and golden shades.
                </p>
              </div>
            </div>

            {/* Cell 6: Turmeric (2x1) */}
            <div className="md:col-span-2 md:row-span-1 bg-[#F4C430]/10 rounded-[2.5rem] p-10 border border-[#F4C430]/20 flex flex-col justify-center shadow-sm group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[#D4A017] font-bold text-[10px] uppercase tracking-widest mb-2 block">Telangana / Tamil Nadu</span>
                  <h3 className="text-3xl font-editorial italic text-ink mb-1 group-hover:text-[#D4A017] transition-colors">Turmeric</h3>
                  <p className="text-xs font-mono text-muted-foreground">Curcuma longa</p>
                </div>
                <p className="text-sm text-ink/80 font-light max-w-[250px]">
                  Known for its healing properties, it imparts deeply warm, earthy yellows to the fabric.
                </p>
              </div>
            </div>

            {/* 
              Future slots designed to drop in seamlessly:
              Alkanet Root (Jammu & Kashmir/Himachal) - darkish beige, roots rich in alkannin
              Annatto Seeds (South India) - orange-to-peach
              Kamala Tree - reddish-orange, from glandular hairs
            */}

          </div>
        </div>
      </section>

      {/* 4. Sourcing & Economic Story */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-paper relative overflow-hidden bg-[url('/PLACEHOLDER_sourcing_farmers.jpg')] bg-cover bg-center shadow-sm">
             <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-wider font-mono z-50">DEV: PENDING IMAGE</div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <h2 className="text-h2 font-editorial italic text-ink">An economy of reuse.</h2>
            <p className="text-p1 text-muted-foreground font-light">
              We procure these natural ingredients directly from farmers, wholesalers, and specialized NGOs. Many of these organizations segregate floral waste specifically to prevent local water pollution.
            </p>
            <p className="text-p1 text-muted-foreground font-light">
              Remarkably, several of our key dyes—like pomegranate peel, onion skin, and marigold—are byproducts recovered directly from food processing or ritual temple waste. They are not grown solely for dye. 
            </p>
            <div className="bg-paper p-8 rounded-3xl border border-border/40 mt-4">
              <strong className="block text-ink font-medium mb-2">The Impact</strong>
              <p className="text-sm text-muted-foreground font-light">
                By purchasing these byproducts, we provide farmers and vendors with an additional income stream for organic material they would otherwise discard. 100% of our materials are sourced within India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Process */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <h2 className="text-h2 font-editorial italic text-ink mb-16 text-center">How it becomes color.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-6 text-center items-center">
            <div className="w-full aspect-square rounded-[2rem] bg-paper border border-border/40 flex items-center justify-center relative overflow-hidden bg-[url('/PLACEHOLDER_process_1.jpg')] bg-cover bg-center">
              <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase font-mono z-50">DEV: IMG</div>
            </div>
            <div>
              <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold mx-auto mb-4">1</span>
              <h3 className="text-lg font-medium text-ink mb-2">Procurement</h3>
              <p className="text-sm text-muted-foreground font-light">Raw botanical matter and waste are collected and dried.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-center items-center">
            <div className="w-full aspect-square rounded-[2rem] bg-paper border border-border/40 flex items-center justify-center relative overflow-hidden bg-[url('/PLACEHOLDER_process_2.jpg')] bg-cover bg-center">
              <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase font-mono z-50">DEV: IMG</div>
            </div>
            <div>
              <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold mx-auto mb-4">2</span>
              <h3 className="text-lg font-medium text-ink mb-2">Standardization</h3>
              <p className="text-sm text-muted-foreground font-light">Extracts are purified in a modern, standardized natural dye process.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-center items-center">
            <div className="w-full aspect-square rounded-[2rem] bg-paper border border-border/40 flex items-center justify-center relative overflow-hidden bg-[url('/PLACEHOLDER_process_3.jpg')] bg-cover bg-center">
              <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase font-mono z-50">DEV: IMG</div>
            </div>
            <div>
              <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold mx-auto mb-4">3</span>
              <h3 className="text-lg font-medium text-ink mb-2">Plant Mordants</h3>
              <p className="text-sm text-muted-foreground font-light">Fabric is treated with natural plant-based mordants to bind the color permanently.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-center items-center">
            <div className="w-full aspect-square rounded-[2rem] bg-paper border border-border/40 flex items-center justify-center relative overflow-hidden bg-[url('/PLACEHOLDER_process_4.jpg')] bg-cover bg-center">
              <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm uppercase font-mono z-50">DEV: IMG</div>
            </div>
            <div>
              <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold mx-auto mb-4">4</span>
              <h3 className="text-lg font-medium text-ink mb-2">Finished Shade</h3>
              <p className="text-sm text-muted-foreground font-light">The cotton emerges richly colored, skin-safe, and incredibly soft.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Certifications & 7. What We Leave Out */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-paper p-12 rounded-[2.5rem] border border-border/40 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium text-ink mb-6">Certified Purity</h3>
              <p className="text-p1 text-muted-foreground font-light mb-10">
                Our fabrics meet the highest global standards. GOTS certification ensures the organic status of our cotton from harvesting through manufacturing. OEKO-TEX Standard 100 guarantees that every single component has been rigorously tested and cleared of harmful substances.
              </p>
            </div>
            <Link href="/certifications" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/60 text-sm font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 w-fit">
              View Our Certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-ink p-12 rounded-[2.5rem] shadow-sm flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-medium mb-6">What We Leave Out</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <p className="text-white/80 font-light">No synthetic dyes or petrochemical colorants.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <p className="text-white/80 font-light">No elastane or synthetic stretch fabrics.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <p className="text-white/80 font-light">No heavy metal fixatives or finishing resins.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <p className="text-white/80 font-light">No imported materials—100% sourced in India.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
