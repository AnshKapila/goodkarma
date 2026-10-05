import type { Metadata } from "next";
import { Public_Sans, Baloo_2, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

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
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
