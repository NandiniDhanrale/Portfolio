import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { GlobalProvider } from "@/app/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandMenu from "@/components/CommandMenu";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

// Load Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// High-End SEO Metadata
export const metadata: Metadata = {
  title: "Nandini Dhanrale | Software Developer & AI Systems Builder",
  description: 
    "Personal portfolio of Nandini Dhanrale, a final-year engineering student based in Pune, specialized in Full Stack Development, Java backend services (Spring Boot), Distributed workflows (Redis, BullMQ), and RAG AI engineering.",
  keywords: [
    "Nandini Dhanrale", "Software Developer", "Full Stack Engineer", "AI Systems Builder", 
    "Java Developer", "Spring Boot Developer", "Backend Engineer Pune", "MKSSS Cummins College", 
    "Speculative VLM Decoding", "RAG applications", "Distributed systems India", "Vercel Portfolio"
  ],
  authors: [{ name: "Nandini Dhanrale" }],
  creator: "Nandini Dhanrale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandini-portfolio.vercel.app",
    title: "Nandini Dhanrale | Software Developer & AI Systems Builder",
    description: "Final-year engineering student building high-performance backend systems, distributed queue workflows, and intelligent RAG-driven AI pipelines.",
    siteName: "Nandini Dhanrale Portfolio",
    images: [
      {
        url: "/og-image.png", // Path inside public/
        width: 1200,
        height: 630,
        alt: "Nandini Dhanrale | Software Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandini Dhanrale | Software Developer Portfolio",
    description: "Final-year engineering student building high-performance backend systems, distributed queue workflows, and intelligent RAG-driven AI pipelines.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nandini Dhanrale",
    "jobTitle": "Software Developer & AI Systems Builder",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "url": "https://nandini-portfolio.vercel.app",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "MKSSS Cummins College of Engineering for Women"
    },
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Java Development",
      "Spring Boot",
      "PostgreSQL",
      "Vector Databases & pgvector",
      "Retrieval-Augmented Generation (RAG)",
      "Vision-Language Model Inference",
      "Distributed Workflows & BullMQ"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-[#0A0A0A] text-white">
        <GlobalProvider>
          {/* Custom Mouse Spotlight cursor */}
          <CustomCursor />

          {/* Sticky Navbar with Scroll Tracker */}
          <Navbar />

          {/* Core Children */}
          {children}

          {/* Search Keybind Modal overlay */}
          <CommandMenu />

          {/* Copyright & Telemetry Footer */}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
