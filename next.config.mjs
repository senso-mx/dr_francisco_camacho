/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_DR_NAME: "Dr. Jaime Zermeno",
    NEXT_PUBLIC_SITE_TITLE:
      "Dr. Jaime Zermeno - Cirujano Plástico Certificado en Zapopan",
    NEXT_PUBLIC_WHATSAPP_LINK:
      "https://api.whatsapp.com/send?phone=+5299999999&text=%C2%A1Hola%21%20quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Darío%20Mora",
    NEXT_PUBLIC_PHONE: "+5299999999",
    NEXT_PUBLIC_WAPHONE: "+5299999999",
    NEXT_PUBLIC_TAG_MANAGER: "GTM-XXXXX",
  },
};

export default nextConfig;
