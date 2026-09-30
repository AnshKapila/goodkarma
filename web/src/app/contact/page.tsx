import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="px-6 pt-12 md:pt-24 max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-editorial italic text-5xl md:text-6xl text-ink leading-tight mb-6">
            Get in touch.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Whether you have questions about our natural dyeing process, sizing, or anything else, we're here to help.
          </p>
          <div className="space-y-4">
            <p className="font-medium text-ink">hello@goodkarma.com</p>
          </div>
        </div>
        <div className="bg-paper p-8 rounded-3xl border border-border/50">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="bg-white border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/50" />
            <input type="email" placeholder="Email" className="bg-white border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/50" />
            <textarea placeholder="Message" rows={5} className="bg-white border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marigold/50 resize-none" />
            <Button className="bg-ink text-white rounded-full px-8 py-6 text-base mt-2">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
