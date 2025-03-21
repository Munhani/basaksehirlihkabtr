import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAŞAKŞEHİR LİHKAB",
  description: "3402-398 Sayılı LİHKAB Bürosu",
  icons: {
    icon: [
      { url: '/lihkab_logo.jpg', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
