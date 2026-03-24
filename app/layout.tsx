import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalra Shukla Classes – NEET & JEE Coaching",
  description: "Best NEET & IIT-JEE Coaching in Lucknow. Trusted since 1993 with 100,000+ successful students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
