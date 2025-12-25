import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
