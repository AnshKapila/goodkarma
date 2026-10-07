import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EducatePage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <div className="max-w-[800px] mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Education Hub</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-6">
            The more you know, <br/> the better you feel.
          </h1>
          <p className="text-p1 text-muted-foreground font-light">
            We believe that understanding what touches your skin is the first step to true comfort. 
            Explore the science, our craft, and clinical insights designed to help you make informed choices.
          </p>
        </div>

        {/* Three Routing Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <Link href="/educate/skin-science" className="group flex flex-col h-full bg-paper rounded-xl p-10 md:p-12 border border-border/40 hover:border-marigold/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <h2 className="text-h2 font-editorial italic text-ink mb-4 group-hover:text-marigold transition-colors">Skin Science</h2>
            <p className="text-p1 text-muted-foreground font-light flex-1 mb-8">
              Discover how synthetic fabrics interact with your body's largest organ, and why breathability matters.
            </p>
            <span className="text-sm font-medium text-ink flex items-center gap-2 mt-auto">
              Read the research <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link href="/educate/natural-dyeing" className="group flex flex-col h-full bg-paper rounded-xl p-10 md:p-12 border border-border/40 hover:border-mauve/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <h2 className="text-h2 font-editorial italic text-ink mb-4 group-hover:text-mauve transition-colors">Natural Dyeing</h2>
            <p className="text-p1 text-muted-foreground font-light flex-1 mb-8">
              Explore our library of nine plant-based colors, extracted directly from nature without harmful chemicals.
            </p>
            <span className="text-sm font-medium text-ink flex items-center gap-2 mt-auto">
              Explore the process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link href="/educate/for-doctors" className="group flex flex-col h-full bg-ink rounded-xl p-10 md:p-12 border border-ink shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <h2 className="text-h2 font-editorial italic text-white mb-4">For Doctors</h2>
            <p className="text-p1 text-white/70 font-light flex-1 mb-8">
              Clinical rationale and resources for wellness practitioners recommending chemical-free garments.
            </p>
            <span className="text-sm font-medium text-white flex items-center gap-2 mt-auto">
              View resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white/50" />
            </span>
          </Link>
        </div>

        {/* Short Content Strip (Recent thoughts) */}
        <div className="pt-24 border-t border-border/40">
          <h2 className="text-h2 font-editorial italic text-ink mb-12 text-center md:text-left">Recent thoughts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { title: "Why natural dye matters for sensitive skin", cat: "Skin Science", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" },
              { title: "The reality of 'synthetic stretch' in modern wear", cat: "Materials", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" },
              { title: "GOTS certification and what it actually means", cat: "Standards", img: "https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop" }
            ].map((article, i) => (
              <Link href="/educate/skin-science" key={i} className="group cursor-pointer flex flex-col">
                <div 
                  className="aspect-[4/3] bg-paper rounded-xl mb-6 flex items-center justify-center border border-border/30 overflow-hidden relative bg-cover bg-center shadow-sm group-hover:shadow-md transition-all duration-500"
                  style={{ backgroundImage: `url(${article.img})` }}
                >
                  <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">{article.cat}</span>
                <h3 className="text-h3 font-medium text-ink mb-3 group-hover:text-marigold transition-colors">{article.title}</h3>
                <p className="text-p3 text-muted-foreground flex items-center gap-2 font-medium">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </p>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
