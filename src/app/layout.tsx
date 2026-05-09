import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round, Puritan } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const puritan = Puritan({
  variable: "--font-puritan",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Codever — Built for systems that can't afford to break",
    template: "%s — Codever",
  },
  description:
    "Codever guides the evolution of complex digital systems, integrating AI to enable new capabilities while keeping systems stable, understandable, and under control.",
  metadataBase: new URL("https://codever.it"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} ${puritan.variable}`}
    >
      <body>
        <div className="shell">
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
