import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sans = Manrope({
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
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 sm:px-6 lg:px-10">
            <Navbar />
            <main id="main" className="flex-1 pt-6 sm:pt-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
