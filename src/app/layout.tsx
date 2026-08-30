import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabhath Vipparthi — Data Scientist · AI Engineer",
  description:
    "MS Data Science, NJIT (GPA 3.7, May 2026). 4 years building production ML systems, NLP pipelines, and RAG platforms at Scale AI and HCL Tech.",
  keywords: [
    "Data Scientist", "AI Engineer", "ML Engineer", "Machine Learning",
    "NLP", "RAG", "MLOps", "PySpark", "Prabhath Vipparthi", "NJIT",
    "Scale AI", "HCL Tech",
  ],
  authors: [{ name: "Prabhath Vinay Vipparthi" }],
  openGraph: {
    title: "Prabhath Vipparthi — Data Scientist · AI Engineer",
    description: "Production ML systems · RAG · 5.97M-row data pipelines · Scale AI · HCL Tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
