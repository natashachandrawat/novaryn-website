import type { Metadata, Viewport } from "next";
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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.nyravon.com";

const TITLE = "Novaryn — AI-Powered Product Engineering for Startups";
const DESCRIPTION =
  "Novaryn is the engineering partner for funded startups and modern businesses. We design and ship MVPs, SaaS platforms, AI-powered systems and operational software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Novaryn",
  },
  description: DESCRIPTION,
  applicationName: "Novaryn",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Novaryn",
    "product engineering",
    "AI engineering",
    "startup engineering",
    "MVP development",
    "SaaS development",
    "AI integration",
  ],
  authors: [{ name: "Novaryn" }],
  creator: "Novaryn",
  publisher: "Novaryn",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Novaryn",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@novaryn",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efece5" },
    { media: "(prefers-color-scheme: dark)", color: "#efece5" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
    >
      <body className="min-h-screen bg-paper text-graphite-900 antialiased font-sans selection:bg-accent-indigo/30">
        {children}
      </body>
    </html>
  );
}
