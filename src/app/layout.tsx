import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Prabhath Vinay Vipparthi — Data Scientist · AI Engineer · ML Engineer · Data Engineer",
  description:
    "MS Data Science, NJIT (GPA 3.7). Production AI systems, RAG pipelines, 5.97M-row data engineering, 625+ tests. Scale AI & HCL Tech experience.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "ML Engineer",
    "Data Engineer",
    "Machine Learning",
    "NLP",
    "RAG",
    "MLOps",
    "PySpark",
    "Prabhath Vipparthi",
    "NJIT",
  ],
  authors: [{ name: "Prabhath Vinay Vipparthi" }],
  openGraph: {
    title: "Prabhath Vinay Vipparthi — Data Scientist · AI Engineer",
    description:
      "Production AI systems · RAG · 5.97M-row data pipelines · Scale AI · HCL Tech.",
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
      <body className="min-h-full flex flex-col grain">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
