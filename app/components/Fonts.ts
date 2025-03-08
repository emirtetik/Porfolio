import { Montserrat, Prata } from "next/font/google";

export const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  fallback: ["sans-serif"],
  weight: "400",
  preload: false,
  subsets: ["latin"],
});

export const fontPrata = Prata({
  variable: "--font-prata",
  fallback: ["serif"],
  weight: "400",
  preload: false,
  subsets: ["latin"],
});
