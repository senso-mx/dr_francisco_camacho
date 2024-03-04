import Head from "next/head";
import { Montserrat } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: "Cirujano Plástico Certificado En Zapopan",
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
        <link rel="preload" href="/images/hero.webp" as="image" />
      </Head>
      <body>{children}</body>

      {process.env.NEXT_PUBLIC_TAG_MANAGER ? (
        <GoogleTagManager gaId={process.env.NEXT_PUBLIC_TAG_MANAGER} />
      ) : null}
    </html>
  );
}
