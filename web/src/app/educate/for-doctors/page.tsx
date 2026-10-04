import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ForDoctorsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="max-w-[800px] mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">For Practitioners</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-10">
            A trusted ally for sensitive skin.
          </h1>
          <p className="text-p1 text-ink font-light mb-6">
            We work closely with dermatologists, urologists, and OB-GYNs to provide clothing solutions that support—rather than agitate—treatment protocols.
          </p>
          <p className="text-p1 text-muted-foreground font-light">
            When a patient is suffering from chronic irritation, eczema, or contact dermatitis, the barrier function of the skin is compromised. Synthetic fibers and residual finishing chemicals can exacerbate the cycle. Good Karma provides a clean, breathable, GOTS-certified alternative to synthetic stretch innerwear.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 pt-24 border-t border-border/40">
          <div className="bg-paper p-12 md:p-16 rounded-[2.5rem] border border-border/40 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">Patient Materials</h2>
              <p className="text-p1 text-muted-foreground font-light mb-10">
                Download our clinical overview sheet detailing the fabric composition, dye mechanisms, and care instructions to share with patients seeking non-irritating alternatives.
              </p>
            </div>
            <button className="flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-ink text-white hover:bg-ink/90 transition-colors text-base font-medium">
              <Download className="w-5 h-5" /> Download PDF Overview
            </button>
          </div>
          <div className="bg-paper p-12 md:p-16 rounded-[2.5rem] border border-border/40 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">Request Samples</h2>
              <p className="text-p1 text-muted-foreground font-light mb-10">
                We provide physical swatch books and sample garments for clinics and private practices so your patients can feel the difference in fabric breathability.
              </p>
            </div>
            <button className="flex items-center justify-center gap-3 px-8 py-5 rounded-full border-2 border-ink text-ink hover:bg-ink hover:text-white transition-all text-base font-medium">
              Contact our Medical Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
