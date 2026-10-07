import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Mail, Stethoscope, QrCode, FileText } from "lucide-react";

export default function ForDoctorsPage() {
  return (
    <div className="flex flex-col w-full pb-32 bg-background">
      
      {/* 1. Intro */}
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full mb-20 md:mb-32">
        <Link href="/educate" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Educate
        </Link>
        <div className="max-w-[900px] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">For Practitioners</span>
          <h1 className="text-h1 font-editorial italic text-ink mb-10 leading-tight">
            For the doctors recommending Good Karma.
          </h1>
          <p className="text-p1 text-ink font-light max-w-[700px]">
            This space is strictly dedicated to the clinicians who trust us with their patients' skin. 
            We provide clean, breathable, GOTS-certified alternatives to synthetic innerwear, supporting your treatment protocols rather than agitating them.
          </p>
        </div>
      </section>

      {/* 2. The Clinical Rationale */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <div className="bg-paper p-10 md:p-16 rounded-xl border border-border/40 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h2 className="text-h2 font-editorial italic text-ink m-0">The Clinical Rationale</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-p1 text-muted-foreground font-light mb-6">
                When a patient presents with chronic irritation, contact dermatitis, or localized infections, barrier function is already compromised. Synthetic fabrics trap heat and moisture, while unlisted chemical fixatives (including PFAS and azo dyes) can be absorbed directly through prolonged contact.
              </p>
              <p className="text-p1 text-muted-foreground font-light">
                Our garments eliminate synthetic stretch, heavy metals, and petrochemical dyes entirely. What remains is 100% organic cotton, naturally dyed, providing an optimal microclimate for skin recovery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border/40 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-ink mb-4">The Mechanism</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-marigold font-bold mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground"><strong>Heat/Moisture:</strong> 100% cotton structure allows passive ventilation, reducing transepidermal water loss and yeast proliferation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-marigold font-bold mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground"><strong>Chemical Residue:</strong> Zero elastane and zero synthetic dyes completely removes common sensitizers and PFAS exposure from the microclimate.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Recognition & The QR System (Bento Grid) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          
          <div className="bg-paper p-10 md:p-14 rounded-xl border border-border/40 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-h2 font-editorial italic text-ink mb-6">Doctor Recognition</h2>
              <p className="text-p1 text-muted-foreground font-light mb-8">
                We privately acknowledge the clinicians who actively refer patients to Good Karma. This is framed as a quiet, professional recognition of your commitment to patient wellness—a founding-partner designation or clinical credential, not a public leaderboard.
              </p>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl border border-border/40 w-fit">
              <span className="text-xs font-medium text-ink uppercase tracking-wider">Private Acknowledgment Only</span>
            </div>
          </div>
          
          <div className="bg-ink p-10 md:p-14 rounded-xl shadow-sm text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <QrCode className="w-8 h-8 text-white/80" />
                <h2 className="text-h2 font-editorial italic text-white m-0">The Referral System</h2>
              </div>
              <p className="text-p1 text-white/80 font-light mb-10">
                We provide physical touchpoints tailored to different patient mindsets inside your clinic.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-medium">1</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Desk QR Cards</h4>
                    <p className="text-sm text-white/70 font-light">Directs the patient straight to the purchase flow for immediate, frictionless conversion when they are ready to buy.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-medium">2</div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Waiting Room Posters</h4>
                    <p className="text-sm text-white/70 font-light">Directs the patient to educational clinical-rationale content, allowing them to read and understand the science while they wait.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. Get Full Resources & Newsletter */}
      <section className="px-6 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Resource Pack Sign-up */}
          <div className="bg-paper p-10 md:p-14 rounded-xl border border-border/40 shadow-sm flex flex-col">
            <div className="mb-8">
              <FileText className="w-8 h-8 text-ink mb-6" />
              <h2 className="text-h2 font-editorial italic text-ink mb-4">Get Full Resources</h2>
              <p className="text-p1 text-muted-foreground font-light">
                Request our complete clinical resource pack, containing patient handouts, detailed product specifications, and verified certification documents.
              </p>
            </div>
            
            <form className="mt-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-white px-5 py-3.5 rounded-xl text-sm border border-border/40 focus:outline-none focus:border-ink transition-colors w-full" />
                <input type="text" placeholder="Last Name" className="bg-white px-5 py-3.5 rounded-xl text-sm border border-border/40 focus:outline-none focus:border-ink transition-colors w-full" />
              </div>
              <input type="text" placeholder="Clinic / Practice Name" className="bg-white px-5 py-3.5 rounded-xl text-sm border border-border/40 focus:outline-none focus:border-ink transition-colors w-full" />
              <input type="email" placeholder="Professional Email" className="bg-white px-5 py-3.5 rounded-xl text-sm border border-border/40 focus:outline-none focus:border-ink transition-colors w-full" />
              <button type="button" className="w-full flex items-center justify-center gap-3 bg-ink text-white py-4 rounded-xl font-medium hover:bg-ink/90 transition-colors mt-4">
                <Download className="w-4 h-4" /> Request Resource Pack
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Newsletter */}
            <div className="bg-marigold text-white p-10 md:p-14 rounded-xl shadow-sm flex flex-col justify-center">
              <Mail className="w-8 h-8 mb-6 text-white/80" />
              <h3 className="text-h2 font-editorial italic mb-4">Doctor Newsletter</h3>
              <p className="text-p2 font-light text-white/90 mb-8">
                Receive periodic updates on material science and our clinical programs. We keep this strictly separate from our general visitor mailing list.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Clinical Email" className="flex-1 bg-white/10 px-5 py-3.5 rounded-xl text-sm placeholder:text-white/60 text-white border border-white/20 focus:outline-none focus:border-white transition-colors" />
                <button className="bg-white text-marigold hover:bg-white/90 rounded-xl px-8 py-3.5 font-medium text-sm transition-colors">Join</button>
              </div>
            </div>
            
            {/* Partner Inquiry */}
            <div className="bg-white p-10 md:p-12 rounded-xl border border-border/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-medium text-ink mb-2">Become a Partner Clinic</h3>
                <p className="text-sm text-muted-foreground font-light">Interested in integrating Good Karma into your practice?</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink text-ink hover:bg-ink hover:text-white px-8 py-4 font-medium transition-colors shrink-0">
                Partner Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
