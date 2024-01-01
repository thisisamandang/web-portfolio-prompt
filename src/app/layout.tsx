import type { Metadata } from "next";
import localFont from "next/font/local";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});

const acorn = localFont({
  src: "./fonts/Acorn-Medium.woff2",
  variable: "--font-acorn",
});

export const metadata: Metadata = {
  title: "Aman Dang",
  description: "A product-motivated software engineer from India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${overpass.variable} ${acorn.variable}`}>
      <body>{children}</body>
    </html>
  );
}
