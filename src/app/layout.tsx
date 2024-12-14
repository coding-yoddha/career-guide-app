import type { Metadata } from "next";
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
  title: "Agla Kadam",
  description:
    "One stop destination to know what to choose after your 10th Standard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
