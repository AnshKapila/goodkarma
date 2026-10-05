"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm text-ink py-4" 
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 max-w-[1400px] w-full mx-auto">
        <Link href="/" className={`font-display text-3xl tracking-tight ${scrolled ? "text-marigold" : "text-white"}`}>
          good karma
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/products" className={`hover:text-marigold transition-colors ${!scrolled && "text-white/90 hover:text-white"}`}>Products</Link>
          <div className="relative group">
            <Link href="/educate/skin-science" className={`hover:text-marigold transition-colors flex items-center gap-1 ${!scrolled && "text-white/90 hover:text-white"}`}>
              Educate
            </Link>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block z-50">
              <div className="bg-white border border-border/50 rounded-xl p-4 flex flex-col gap-3 shadow-lg min-w-[200px] text-ink">
                <Link href="/educate/skin-science" className="hover:text-marigold">Skin Science</Link>
                <Link href="/educate/natural-dyeing" className="hover:text-marigold">Natural Dyeing</Link>
                <Link href="/educate/for-doctors" className="hover:text-marigold">For Doctors</Link>
              </div>
            </div>
          </div>
          <Link href="/contact" className={`hover:text-marigold transition-colors ${!scrolled && "text-white/90 hover:text-white"}`}>Contact</Link>
          
          {/* E-commerce controls */}
          <div className={`flex items-center gap-4 ml-4 border-l pl-8 ${scrolled ? "border-border" : "border-white/30"}`}>
            <a href="#" className={`hover:text-marigold transition-colors flex items-center gap-2 ${!scrolled && "text-white/90 hover:text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span className="sr-only">Login</span>
            </a>
            <a href="#" className={`hover:text-marigold transition-colors flex items-center gap-2 relative ${!scrolled && "text-white/90 hover:text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className={`absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ${scrolled ? "bg-marigold text-white" : "bg-white text-ink"}`}>0</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
