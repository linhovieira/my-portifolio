import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://paulovieira.gpv-tech.com.br";
const DESCRIPTION =
  "Engenheiro de Software com 8+ anos de experiência em sistemas corporativos — especialista em backend Java/Spring Boot, cloud AWS e integração de sistemas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Paulo Vieira | Software Engineer",
  description: DESCRIPTION,
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "AWS",
    "Docker",
    "PostgreSQL",
    "React",
    "Angular",
    "TypeScript",
    "Portfólio",
    "Salvador",
    "Bahia",
  ],
  authors: [{ name: "Paulo Ricardo da Silva Vieira" }],
  creator: "Paulo Ricardo da Silva Vieira",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Paulo Vieira | Software Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Paulo Vieira — Portfólio",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/profile.png",
        width: 400,
        height: 400,
        alt: "Paulo Ricardo da Silva Vieira — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Vieira | Software Engineer",
    description: DESCRIPTION,
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-primary font-body">{children}</body>
    </html>
  );
}
