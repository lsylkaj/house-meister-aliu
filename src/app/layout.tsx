import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aliu Hausmeisterservice – Professionelle Gebäudepflege München",
  description:
    "Ihr zuverlässiger Partner für Gartenpflege, Handwerk, Reinigung, Entrümpelung und Winterdienst in München.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
