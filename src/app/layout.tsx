import { Inter, Raleway } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${raleway.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
