import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="px-6 max-w-[1400px] mx-auto w-full pt-20 border-t border-border/40 mt-auto">
      <div className="grid md:grid-cols-12 gap-16 md:gap-12 mb-24">
        <div className="md:col-span-5">
          <div className="font-display text-5xl text-marigold mb-6 tracking-tight">good karma</div>
          <p className="text-p1 text-muted-foreground max-w-[340px] mb-10 font-light">
            A trusted friend, backed by science. Be good. Wear good.
          </p>
          <div className="flex gap-4 max-w-[380px] bg-paper p-1.5 rounded-full border border-border/60 focus-within:ring-2 focus-within:ring-marigold/30 focus-within:border-marigold/50 transition-all shadow-sm">
            <input type="email" placeholder="Email address" className="flex-1 bg-transparent px-5 py-3 text-sm focus:outline-none text-ink placeholder:text-muted-foreground" />
            <Button className="bg-ink hover:bg-ink/90 text-white rounded-full px-8 font-medium transition-colors">Subscribe</Button>
          </div>
        </div>
        <div className="md:col-span-2 md:col-start-8">
          <h4 className="font-medium text-ink mb-8 tracking-wide">Shop</h4>
          <ul className="space-y-5 text-muted-foreground">
            <li><Link href="/products" className="hover:text-marigold transition-colors">All Products</Link></li>
            <li><Link href="/products" className="hover:text-marigold transition-colors">By Concern</Link></li>
            <li><Link href="/products" className="hover:text-marigold transition-colors">Size Guide</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-medium text-ink mb-8 tracking-wide">Educate</h4>
          <ul className="space-y-5 text-muted-foreground">
            <li><Link href="/educate/skin-science" className="hover:text-marigold transition-colors">Skin Science</Link></li>
            <li><Link href="/educate/natural-dyeing" className="hover:text-marigold transition-colors">Natural Dyeing</Link></li>
            <li><Link href="/educate/for-doctors" className="hover:text-marigold transition-colors">For Doctors</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-medium text-ink mb-8 tracking-wide">About</h4>
          <ul className="space-y-5 text-muted-foreground">
            <li><Link href="/our-story" className="hover:text-marigold transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-marigold transition-colors">Contact</Link></li>
            <li><Link href="/certifications" className="hover:text-marigold transition-colors">Certifications</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-8 border-t border-border/40 pb-8">
        <p>&copy; 2026 Good Karma. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          <span>Part of the Livbio family.</span>
        </div>
      </div>
    </footer>
  );
}
