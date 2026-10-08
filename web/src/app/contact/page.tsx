import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-16 md:pt-24 max-w-[1400px] mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="max-w-[800px] mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 ease-out">
          <h1 className="text-h1 font-editorial italic text-ink mb-8">
            Get in touch.
          </h1>
          <p className="text-p1 text-muted-foreground font-light">
            Whether you have a question about our natural dyes, need help with sizing, or are a medical practitioner looking to partner, we're here to help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="bg-paper p-10 md:p-16 rounded-xl border border-border/40 shadow-sm">
            <h2 className="text-h2 font-medium text-ink mb-8">Send us a message</h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Name</label>
                <input type="text" className="bg-white border border-border/60 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/30 focus:border-marigold/50 transition-all" placeholder="Jane Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Email</label>
                <input type="email" className="bg-white border border-border/60 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/30 focus:border-marigold/50 transition-all" placeholder="jane@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Message</label>
                <textarea rows={5} className="bg-white border border-border/60 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/30 focus:border-marigold/50 transition-all resize-none" placeholder="How can we help?" />
              </div>
              <Button variant="primary" fullWidthMobile={true}>
                Submit Request
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col gap-12 justify-center">
            <div>
              <h3 className="text-h3 font-bold text-marigold uppercase tracking-widest mb-4">Customer Care</h3>
              <p className="text-p1 text-ink font-light">hello@goodkarma.com</p>
              <p className="text-p2 text-muted-foreground mt-2 font-light">Available Monday – Friday, 9am – 5pm EST.</p>
            </div>
            <div className="w-full h-[1px] bg-border/40" />
            <div>
              <h3 className="text-h3 font-bold text-marigold uppercase tracking-widest mb-4">Medical Partnerships</h3>
              <p className="text-p1 text-ink font-light">doctors@goodkarma.com</p>
              <p className="text-p2 text-muted-foreground mt-2 font-light">For clinic samples and patient resources.</p>
            </div>
            <div className="w-full h-[1px] bg-border/40" />
            <div>
              <h3 className="text-h3 font-bold text-marigold uppercase tracking-widest mb-4">Press & Wholesale</h3>
              <p className="text-p1 text-ink font-light">press@goodkarma.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
