import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/containers/header";
import TanstackProvider from "@/providers/TanstackProvider";
import Footer from "@/containers/footer";
import Head from "next/head";

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
  title: "Agla Kadam",
  description:
    "Discover different career paths after 10th class. Get step-by-step guidance to pursue your dream career in engineering, medicine, arts, and more!.One stop destination to know what to choose after your 10th Standard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Agla Kadam</title>
        <meta
          name="description"
          content="Discover different career paths after 10th class. Get step-by-step guidance to pursue your dream career in engineering, medicine, arts, and more!.One stop destination to know what to choose after your 10th Standard"
        />
        <meta
          name="keywords"
          content="career guidance, after 10th class, career options, engineering, medicine, law, arts"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Agla Kadam - Your Roadmap to a Bright Future"
        />
        <meta
          property="og:description"
          content="Explore career options after 10th class and find your path with Agla Kadam."
        />
        <meta property="og:type" content="website" />
        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Agla Kadam - Career Guidance After 10th Class",
                "description": "Agla Kadam helps students explore career options after 10th class with clear steps for various careers like engineering, medicine, law, and more.",
                "url": "https://aglakadam.com"
              }
            `,
          }}
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
    </html>
  );
}
