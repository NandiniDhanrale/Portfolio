import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GlobalProvider } from "@/app/providers";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Nandini Dhanrale | Software Developer & AI Systems Builder",
  description:
    "Personal portfolio of Nandini Dhanrale, a final-year engineering student based in Pune, specialized in Full Stack Development, Java backend services (Spring Boot), Distributed workflows (Redis, BullMQ), and RAG AI engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
