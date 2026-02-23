"use client";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


import { Providers } from "./providers";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`${playfair.variable} ${inter.variable} bg-luxury-cream text-luxury-dark`}
      >
        <Providers>
          <div className="isolate">
            {!isAuthPage && <Header />}
            {children}
            {!isAuthPage && <Footer />}
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
