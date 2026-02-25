import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactSlideIn from "../components/ContactSlideIn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyptogenex | Clinical Research",
  description: "Accelerate Your Clinical Diagnostic Workflows Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 -z-50 min-h-screen"></div>
        {children}
        <ContactSlideIn />
      </body>
    </html>
  );
}
