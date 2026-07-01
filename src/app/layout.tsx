import { Inter, Raleway, Josefin_Sans } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
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

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
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
      className={`${josefinSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${josefinSans.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
