"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ColorSchemeProvider,
  useColorScheme,
} from "@/components/color-scheme-context";
import { useState } from "react";
import { COLOR_SCHEMES } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Emanuel Pontoni",
//   description:
//     "Prof. Emanuel Pontoni. Profesor de Matemática y JavaScript Frontend Developer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [colorScheme, setColorScheme] = useState(
    COLOR_SCHEMES[Math.floor(Math.random() * (COLOR_SCHEMES.length + 1))]
  );
  return (
    <html lang="en">
      <body className={cn(inter.className, colorScheme)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header setColorScheme={setColorScheme} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
