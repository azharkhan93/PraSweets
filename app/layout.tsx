"use client";
import "./globals.css";
import { useEffect } from "react";
import { revealAnimation } from "@/utils/gsap";
import { theme } from "@/theme";


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
      <body>
       
          {children}
      </body>
    </html>
  );
}