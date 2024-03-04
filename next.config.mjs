/** @type {import('next').NextConfig} */
import webpack from "webpack";

// WEB PACK PLUGINS
import OptimizeCSSAssetsPlugin from  "optimize-css-assets-webpack-plugin"
import BrotliPlugin from  'brotli-webpack-plugin'

const nextConfig = {
  basePath: "",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_SITE_TITLE:
      "Dr. Jaime Zermeno - Cirujano Plástico Certificado en Zapopan",
    NEXT_PUBLIC_WHATSAPP_LINK:
      "https://api.whatsapp.com/send?phone=+5299999999&text=%C2%A1Hola%21%20quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Jaime%20Zermeño",
    NEXT_PUBLIC_PHONE: "+5299999999",
    NEXT_PUBLIC_WAPHONE: "+5299999999",
    NEXT_PUBLIC_TAG_MANAGER: "GTM-TJTLMX3V",
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer || dev) {
      return config;
    }

    var isProduction = config.mode === "production";

    config.plugins.push(
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(isProduction),
      })
    );

    if (!isProduction) {
      return config;
    }

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    config.plugins.push(
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    );

    return config;
  },
};

export default nextConfig;
