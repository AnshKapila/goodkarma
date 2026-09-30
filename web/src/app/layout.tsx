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
        <header className="flex items-center justify-between px-8 py-6 max-w-[1400px] w-full mx-auto">
          <div className="font-display text-3xl tracking-tight text-marigold">good karma</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-marigold transition-colors">Products</a>
            <a href="#" className="hover:text-marigold transition-colors">Educate</a>
            <a href="#" className="hover:text-marigold transition-colors">Contact</a>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
