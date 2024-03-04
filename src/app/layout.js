import Head from "next/head";
import { Montserrat } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: "Cirujano Plástico Reconstructivo En Zapopan",
  googlebot: "index,follow",
};

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="sensomx" className={montserrat.className}>
      <Head>
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/images/hero.webp`}
          as="image"
        />
      </Head>
      <body>{children}</body>

      <GoogleTagManager gaId="GTM-TJTLMX3V" />
    </html>
  );
}
