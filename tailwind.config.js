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
          "primary": "#EF7A69",
          "primary-content": "#ffffff",
          "secondary": "#FFFFFF",
          "secondary-content": "#EF7A69",
          "neutral": "#070D15",
          "text-primary": "#070D15",
          "bg-accent": "#FFE6E6",
          "base-300": "#F8F8F8",

          extend: {
            aspectRatio: {
              '152/101': '152 / 101',
              '87/191': '87 / 91',
              '690/1107': '690 / 1107',
              '380/79': '380 / 79',
              '190/221': '190 / 221',
            },
            boxShadow: {
              'square': '8px 10px 0px -1px rgba(0,0,0,0.75)',
            }
          }
        }
      },
    ],
  },
};
