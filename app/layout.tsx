import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PadelDealz",
    template: "%s · PadelDealz",
  },
  description: "Vind jouw deal. Vergelijk padelproducten bij meerdere webshops.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl">
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
