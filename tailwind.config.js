/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), daisyui],
  daisyui: {
    themes: [
      {
        sensomx: {
          "primary": "#19D6CB",
          "primary-content": "#ffffff",
          "secondary": "#14145E",
          "secondary-content": "#ffffff",
          "neutral": "#3D3D3D",
          "text-primary": "#3D3D3D",
          "bg-accent": "##EFF6F5",
          "base-300": "#3D3D3D",

          extend: {
            aspectRatio: {
              '152/101': '152 / 101',
              '87/191': '87 / 91',
              '760/871': '760 / 871',
              '380/79': '380 / 79',
              '190/221': '190 / 221',
            },
          }
        }
      },
    ],
  },
};
