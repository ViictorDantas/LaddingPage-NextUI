import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/next-ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ponto Extra",
  description: "Projeto para WebII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
