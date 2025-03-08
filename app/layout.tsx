import type { Metadata } from "next";
import "./globals.css";
import Header from "./Layout/index"
import { fontMontserrat, fontPrata } from "./components/Fonts";
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
    <html lang="en">
      <body
       className={`${fontMontserrat.variable} ${fontPrata.variable}  antialiased`} 
      >
         <Header />
        {children}
      </body>
    </html>
  );
}
