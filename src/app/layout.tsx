import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaze for All | Voice without hardware",
  description:
    "Software-only gaze communication for ALS, paralysis, and ICU patients. Runs on any webcam to restore a voice—affordable, secure, and deployable in minutes.",
  metadataBase: new URL("https://gaze-for-all.org"),
  openGraph: {
    title: "Gaze for All | Voice without hardware",
    description:
      "Webcam-based eye tracking that gives every patient a voice—no $10k hardware required.",
    url: "https://gaze-for-all.org",
    siteName: "Gaze for All",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaze for All | Voice without hardware",
    description:
      "Webcam-based eye tracking that gives every patient a voice—no $10k hardware required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${sans.variable} antialiased bg-[color:var(--bg)] text-[color:var(--color-foreground)]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-[color:var(--bg)]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,196,255,0.12),transparent_35%)]" />
          </div>
          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-14 sm:px-8 lg:px-12">
            <Navbar />
            <main id="main" className="flex-1 pt-8 sm:pt-10 lg:pt-12">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
