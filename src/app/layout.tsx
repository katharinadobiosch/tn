import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talbrennerei Neufra",
  description:
    "Talbrennerei Neufra - Produkte aus regionalem Anbau in bester Qualität. Entdecken Sie unsere Brände, Liköre, Honig, Fruchtaufstriche und Wildspezialitäten aus eigener Herstellung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
