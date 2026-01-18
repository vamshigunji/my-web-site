import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google"; // Use Work_Sans for multi-word
import "./globals.css";
import Footer from "../components/layout/Footer";

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
  title: "Venkatavamshigunji - Senior Data Scientist",
  description: "Portfolio of Venkata Gunji - Senior Data Scientist & Developer. Specializing in AI agents, Full Stack Development, and Data Engineering.",
  keywords: ["Data Scientist", "Full Stack Developer", "AI Agents", "Venkata Gunji", "Portfolio", "RAG", "LLM"],
  openGraph: {
    title: "Venkatavamshigunji - Senior Data Scientist",
    description: "Portfolio of Venkata Gunji - Senior Data Scientist & Developer. View projects, skills, and experience.",
    url: "https://venkatagunji.com",
    siteName: "Venkata Gunji Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/cover_page_image.png',
        width: 1200,
        height: 630,
        alt: 'Venkata Gunji - Senior Data Scientist & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venkatavamshigunji - Senior Data Scientist",
    description: "Portfolio of Venkata Gunji - Senior Data Scientist & Developer",
    creator: "@venkatagunji",
    images: ['/cover_page_image.png'],
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
        className={`${outfit.variable} ${workSans.variable} antialiased text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
