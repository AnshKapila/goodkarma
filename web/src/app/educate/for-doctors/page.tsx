import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ForDoctorsPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <Link href="/educate" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Educate
        </Link>
        <div className="max-w-[800px] mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">For Practitioners</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-10">
            For the doctors recommending Good Karma
          </h1>
          <p className="text-p1 text-ink font-light mb-12">
            This space is dedicated to the clinicians who trust us with their patients' skin. 
            We provide clean, breathable, GOTS-certified alternatives to synthetic innerwear, supporting treatment protocols rather than agitating them.
          </p>
          
          <h2 className="text-h2 font-editorial italic text-ink mb-6">The Clinical Rationale</h2>
          <p className="text-p1 text-muted-foreground font-light mb-6">
            When a patient presents with chronic irritation, contact dermatitis, or localized infections, barrier function is already compromised. Synthetic fabrics trap heat and moisture, while unlisted chemical fixatives (including PFAS and azo dyes) can be absorbed directly through prolonged contact.
          </p>
          <p className="text-p1 text-muted-foreground font-light">
            Our garments eliminate synthetic stretch, heavy metals, and petrochemical dyes entirely. What remains is 100% organic cotton, naturally dyed, providing an optimal microclimate for skin recovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 pt-24 border-t border-border/40">
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink">Doctor Recognition</h2>
            <p className="text-p1 text-muted-foreground font-light">
              We privately acknowledge the clinicians who actively refer patients to Good Karma. This is framed as a quiet, professional recognition of your commitment to patient wellness, not a public leaderboard.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-editorial italic text-ink">The QR System</h2>
            <p className="text-p1 text-muted-foreground font-light">
              Each recommendation card features a unique QR code. When your patients scan it, they are greeted with a clinical rationale page detailing exactly why you recommended us—so you always know what information they're receiving.
            </p>
          </div>
        </div>

        <div className="bg-paper rounded-[2.5rem] p-12 md:p-16 border border-border/40 mt-24 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-h2 font-editorial italic text-ink mb-6">Get Full Resources</h2>
            <p className="text-p1 text-muted-foreground font-light mb-8">
              Download our complete clinical resource pack, including patient handouts, detailed product specifications, and verified certification documents.
            </p>
            <button className="flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-ink text-white hover:bg-ink/90 transition-colors text-base font-medium">
              <Download className="w-5 h-5" /> Download Resource Pack
            </button>
          </div>
          <div className="flex-1 w-full bg-white rounded-3xl p-8 border border-border/60">
            <h3 className="text-h3 font-editorial italic text-ink mb-4">Doctor Newsletter</h3>
            <p className="text-p3 text-muted-foreground font-light mb-6">
              Receive periodic updates on material science and our clinical programs. We keep this separate from our general mailing list.
            </p>
            <div className="flex gap-4">
              <input type="email" placeholder="Clinical Email" className="flex-1 bg-paper px-5 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-marigold/30 text-ink border border-border/40" />
              <button className="bg-ink hover:bg-ink/90 text-white rounded-full px-6 font-medium text-sm transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-24">
          <p className="text-p2 font-medium text-ink mb-4">Interested in integrating Good Karma into your practice?</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-ink text-ink hover:bg-ink hover:text-white px-8 py-4 font-medium transition-colors">
            Submit a Partner Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
