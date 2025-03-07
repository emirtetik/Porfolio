import type { Metadata } from "next";
import { Montserrat, Prata } from "next/font/google";
import "./globals.css";
import Header from "./Layout/index"
import Provider from "./provider";
export const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  fallback: ["sans-serif"],
  weight: "400"
});
export const fontPrata = Prata({
  variable: "--font-prata",
  fallback: ["serif"],
  weight: "400"
});
export const metadata: Metadata = {
  title: "Emir Tetik",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
       className={`${fontMontserrat.variable} ${fontPrata.variable}  antialiased`} 
      >
        <Provider>
         <Header />
        {children}
        </Provider>
      </body>
    </html>
  );
}
