import type { Metadata } from "next";
import { Sora, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import DiscoveryProvider from "@/components/DiscoveryModal";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif-accent", weight: "400", style: "italic" });

export const metadata: Metadata = {
  title: "EnriPeak | Web Development & AI Solutions",
  description: "EnriPeak builds modern web applications and AI-powered systems — AI agents, automation and custom integrations.",

  // Google Search & Browser Tab Icon (Favicon)
  icons: {
    icon: [
      { url: "/images/logosymbol.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logosymbol.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logosymbol.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/logosymbol.png",
    shortcut: "/images/logosymbol.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${serif.variable}`}>
      <body>
        <DiscoveryProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <WhatsAppButton />
        </DiscoveryProvider>
      </body>
    </html>
  );
}