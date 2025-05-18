import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebecca Storm",
  description: "Website/Portfolio of Rebecca Storm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex sm:flex-row flex-col sm:gap-9 antialiased p-8 sm:p-14 2xl:p-18 2xl:gap-12`}
      >
        <header>
          <Nav />
        </header>
        <main></main>
        {children}
      </body>
    </html>
  );
}
