import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Lora } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Siphesihle Funeral Services",
  description: "Dignified funeral care with compassion and respect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} bg-gradient-to-b from-pink-100 via-pink-50 to-white text-[#0b1f3a]`}
      >
        {/* HEADER */}
        <header className="w-full flex items-center justify-between px-10 py-6 border-b border-[#e9d4da]">
          
          {/* LOGO LEFT */}
          <div
            className={`${headingFont.className} text-xl font-semibold tracking-wide`}
          >
            Siphesihle Funeral Services
          </div>

          {/* NAV RIGHT */}
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/arrangements">Arrangements</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

        </header>

        {children}
      </body>
    </html>
  );
}