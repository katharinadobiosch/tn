import { Inter, Josefin_Sans } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Talbrennerei Neufra | Hofladen & regionale Spezialitäten",
    template: "%s | Talbrennerei Neufra",
  },
  description:
    "Hofladen in Neufra mit regionalem Obst und Gemüse, ausgewählten Lebensmitteln aus der Region sowie Spezialitäten aus eigener Herstellung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${josefinSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
