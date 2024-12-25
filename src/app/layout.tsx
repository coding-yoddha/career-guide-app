import type { Metadata } from "next";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/containers/header";
import TanstackProvider from "@/providers/TanstackProvider";
import Footer from "@/containers/footer";

// Font Awesome configuration
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Agla Kadam",
    template: "%s | Agla Kadam",
  },
  description:
    "Discover different career paths after 10th class. Get step-by-step guidance to pursue your dream career in engineering, medicine, arts, and more! One-stop destination to know what to choose after your 10th Standard.",
  keywords: [
    "career guidance",
    "after 10th class",
    "career options",
    "engineering",
    "medicine",
    "arts",
    "law",
  ],
  openGraph: {
    title: "Agla Kadam - Your Roadmap to a Bright Future",
    description:
      "Explore career options after 10th class and find your perfect career path with Agla Kadam.",
    type: "website",
    url: "https://aglakadam.com",
  },
  applicationName: "Agla Kadam",
  metadataBase: new URL("https://aglakadam.com"),
  alternates: {
    canonical: "https://aglakadam.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TanstackProvider>
          <Header />
          <main style={{ marginTop: "4rem" }} className="min-h-[inherit]">
            {children}
          </main>
          <Toaster />
          <Footer />
        </TanstackProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={"G-5DE6EWN6PT"} />
    </html>
  );
}
