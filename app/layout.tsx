"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
// import Script from "next/script";
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
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZH2M9MM88P"
          strategy="afterInteractive"
        /> */}
        {/* <Script id="gtagscript">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZH2M9MM88P');`}</Script> */}
      </head>
      <body className={inter.className}>
        <div className="w-[100vw] flex justify-center bg-primaryColor overflow-x-hidden">
          <div className="w-[100%] ">{children}</div>
        </div>
      </body>
    </html>
  );
}