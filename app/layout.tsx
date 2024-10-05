"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { revealAnimation } from "@/utils/gsap";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    revealAnimation();
  });
  return (
    <html lang="en" className="hide-scrollbar">
      <head key={1}>
        <title>PraSweets - Sweets</title>
        <meta name="theme-color" content={theme.colors.primaryColor} />
      </head>
      <body className={inter.className}>
       
          <div className="w-[100%] ">{children}</div>
      </body>
    </html>
  );
}