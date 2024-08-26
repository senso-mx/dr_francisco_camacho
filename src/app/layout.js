import Head from "next/head";
import { Montserrat } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description:
    "Dr. Francisco Camacho - Neurocirujano especialista en padecimientos del cerebro y columna",
  googlebot: "index,follow",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
          href={`${process.env.BASE_PATH || ""}/imgs/hero.webp`}
          as="image"
        />
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/imgs/promos-bg.webp`}
          as="image"
        />
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/imgs/about.webp`}
          as="image"
        />
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/imgs/cara.webp`}
          as="image"
        />
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/imgs/cuerpo-busto.webp`}
          as="image"
        />
        <link
          rel="preload"
          href={`${process.env.BASE_PATH || ""}/imgs/sin-cirugia.webp`}
          as="image"
        />

        <link rel="preconnect" href="https://static.hotjar.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
        <noscript>
          <iframe
            title="google analytics"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
