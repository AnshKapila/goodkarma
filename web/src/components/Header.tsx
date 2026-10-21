"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ShoppingBag, User } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEducateOpen, setMobileEducateOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileEducateOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isBrightNav = !isHome || scrolled;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isBrightNav 
            ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm text-ink py-4" 
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="flex items-center justify-between px-6 max-w-[1400px] w-full mx-auto">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center group relative h-8 md:h-9" aria-label="Good Karma Home">
            <img 
              src="/images/logo-white.png" 
              alt="Good Karma - Be Good, Wear Good." 
              className={`h-7 md:h-8 w-auto object-contain transition-opacity duration-300 ${isBrightNav ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`} 
            />
            <img 
              src="/images/logo-dark.png" 
              alt="Good Karma - Be Good, Wear Good." 
              className={`h-7 md:h-8 w-auto object-contain transition-opacity duration-300 ${isBrightNav ? "opacity-100" : "opacity-0 pointer-events-none absolute"}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            <Link href="/" className={`hover:text-marigold transition-colors ${!isBrightNav && "text-white/90 hover:text-white"}`}>Home</Link>
            <Link href="/products" className={`hover:text-marigold transition-colors ${!isBrightNav && "text-white/90 hover:text-white"}`}>Products</Link>
            
            <div className="relative group">
              <Link href="/educate" className={`hover:text-marigold transition-colors flex items-center gap-1 ${!isBrightNav && "text-white/90 hover:text-white"}`}>
                Educate
              </Link>
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block z-50">
                <div className="bg-white border border-border/50 rounded-xl p-4 flex flex-col gap-3 shadow-lg min-w-[200px] text-ink">
                  <Link href="/educate/skin-science" className="hover:text-marigold transition-colors">Skin Science</Link>
                  <Link href="/educate/natural-dyeing" className="hover:text-marigold transition-colors">Natural Dyeing</Link>
                  <Link href="/educate/for-doctors" className="hover:text-marigold transition-colors">For Doctors</Link>
                  <Link href="/educate/certifications" className="hover:text-marigold transition-colors">Certifications</Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className={`hover:text-marigold transition-colors ${!isBrightNav && "text-white/90 hover:text-white"}`}>Blog</Link>
            <Link href="/contact" className={`hover:text-marigold transition-colors ${!isBrightNav && "text-white/90 hover:text-white"}`}>Contact</Link>
            
            {/* E-commerce controls */}
            <div className={`flex items-center gap-4 ml-4 border-l pl-8 ${isBrightNav ? "border-border" : "border-white/30"}`}>
              <a href="#" className={`hover:text-marigold transition-colors flex items-center gap-2 ${!isBrightNav && "text-white/90 hover:text-white"}`} aria-label="Account">
                <User className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className={`hover:text-marigold transition-colors flex items-center gap-2 relative ${!isBrightNav && "text-white/90 hover:text-white"}`} aria-label="Cart">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className={`absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ${isBrightNav ? "bg-marigold text-white" : "bg-white text-ink"}`}>0</span>
              </a>
            </div>
          </nav>

          {/* Mobile Right Controls: Cart & Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <a href="#" className={`transition-colors relative ${isBrightNav ? "text-ink" : "text-white"}`} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className={`absolute -top-1.5 -right-2 text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center ${isBrightNav ? "bg-marigold text-white" : "bg-white text-ink"}`}>0</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg transition-colors ${isBrightNav ? "text-ink hover:bg-black/5" : "text-white hover:bg-white/10"}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Bright White Background with Dark Logo) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden animate-in fade-in duration-200">
          <div className="absolute top-0 right-0 w-4/5 max-w-[340px] h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header with Dark Logo on Bright Background */}
              <div className="flex items-center justify-between pb-6 border-b border-border/50 mb-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Good Karma Home">
                  <img 
                    src="/images/logo-dark.png" 
                    alt="Good Karma - Be Good, Wear Good." 
                    className="h-7 w-auto object-contain" 
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-ink/70 hover:text-ink hover:bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 text-base font-medium text-ink">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-marigold transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-marigold transition-colors"
                >
                  Products
                </Link>
                
                {/* Educate with Submenu */}
                <div>
                  <button 
                    onClick={() => setMobileEducateOpen(!mobileEducateOpen)}
                    className="w-full flex items-center justify-between py-2 text-ink hover:text-marigold transition-colors text-left"
                  >
                    <span>Educate</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileEducateOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileEducateOpen && (
                    <div className="pl-4 py-2 flex flex-col gap-2.5 text-sm text-muted-foreground border-l-2 border-marigold/30 ml-1">
                      <Link href="/educate" onClick={() => setMobileMenuOpen(false)} className="hover:text-ink">
                        Our Impact Hub
                      </Link>
                      <Link href="/educate/skin-science" onClick={() => setMobileMenuOpen(false)} className="hover:text-ink">
                        Skin Science
                      </Link>
                      <Link href="/educate/natural-dyeing" onClick={() => setMobileMenuOpen(false)} className="hover:text-ink">
                        Natural Dyeing
                      </Link>
                      <Link href="/educate/for-doctors" onClick={() => setMobileMenuOpen(false)} className="hover:text-ink">
                        For Doctors
                      </Link>
                      <Link href="/educate/certifications" onClick={() => setMobileMenuOpen(false)} className="hover:text-ink">
                        Certifications
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/blog" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-marigold transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-marigold transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Bottom Info */}
            <div className="pt-6 border-t border-border/50 text-xs text-muted-foreground">
              <p className="font-editorial italic text-ink text-sm mb-1">Be Good, Wear Good.</p>
              <p>100% GOTS Organic Cotton & Botanical Dyes</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
