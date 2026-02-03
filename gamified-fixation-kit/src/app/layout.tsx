import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ transform: [], subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kit Gamificado: Como Fazer Amigos | Estudo Ativo",
  description: "Aprenda e fixe o essencial do livro em minutos por dia. Método gamificado e prático.",
  openGraph: {
    title: "Kit Gamificado: Como Fazer Amigos",
    description: "Transforme sua comunicação com este kit de estudo ativo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
