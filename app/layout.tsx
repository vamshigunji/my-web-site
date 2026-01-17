import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google"; // Use Work_Sans for multi-word
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venkata Gunji | Data Scientist & Developer",
  description: "Portfolio of Venkata Gunji - Data Scientist & Developer. Specializing in AI agents, Full Stack Development, and Data Engineering.",
  keywords: ["Data Scientist", "Full Stack Developer", "AI Agents", "Venkata Gunji", "Portfolio"],
  openGraph: {
    title: "Venkata Gunji | Data Scientist & Developer",
    description: "Portfolio of Venkata Gunji - Data Scientist & Developer",
    url: "https://venkatagunji.com",
    siteName: "Venkata Gunji Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venkata Gunji | Data Scientist & Developer",
    description: "Portfolio of Venkata Gunji - Data Scientist & Developer",
    creator: "@venkatagunji",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${workSans.variable} antialiased bg-[#0a0a0a] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
