import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Paulo Vieira | Software Engineer",
  description:
    "Engenheiro de Software especializado em desenvolvimento backend, cloud e integração de sistemas. Portfólio profissional de Paulo Ricardo da Silva Vieira.",
  openGraph: {
    title: "Paulo Vieira | Software Engineer",
    description:
      "Engenheiro de Software especializado em desenvolvimento backend, cloud e integração de sistemas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Vieira | Software Engineer",
    description:
      "Engenheiro de Software especializado em desenvolvimento backend, cloud e integração de sistemas.",
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
