import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novaryn — AI-Powered Product Engineering for Startups",
  description:
    "Novaryn is the engineering partner for funded startups and modern businesses. We design and ship MVPs, SaaS platforms, AI-powered systems and operational software.",
  metadataBase: new URL("https://novaryn.com"),
  openGraph: {
    title: "Novaryn — AI-Powered Product Engineering",
    description:
      "Engineering partner for startups. MVPs, SaaS, AI systems, and operational platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-paper text-graphite-900 antialiased font-sans selection:bg-accent-indigo/30">
        {children}
      </body>
    </html>
  );
}
