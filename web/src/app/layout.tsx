import type { Metadata } from "next";
import { Public_Sans, Baloo_2, Lora } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-editorial",
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Good Karma",
  description: "A Trusted Friend, Backed By Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${baloo.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col font-sans">
        {/* Simple Header */}
        <header className="flex items-center justify-between px-6 py-6 max-w-[1400px] w-full mx-auto">
          <div className="font-display text-3xl tracking-tight text-marigold">good karma</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a href="#" className="hover:text-marigold transition-colors">Products</a>
            <a href="#" className="hover:text-marigold transition-colors">Educate</a>
            <a href="#" className="hover:text-marigold transition-colors">Contact</a>
            
            {/* E-commerce controls */}
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-8">
              <a href="#" className="hover:text-marigold transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="sr-only">Login</span>
              </a>
              <a href="#" className="hover:text-marigold transition-colors flex items-center gap-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <span className="absolute -top-2 -right-2 bg-marigold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
