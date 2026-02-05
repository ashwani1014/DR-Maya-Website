/**
 * Root Layout
 * Defines the global structure, fonts (Poppins, Playfair Display), and metadata
 * for the application.
 */
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Principal Clinical Portfolio",
  description: "Principal-level clinical support tailored for high-performance individuals seeking balance, clarity, and enduring transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} ${playfairDisplay.variable} film-grain bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
