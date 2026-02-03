import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050A",
        foreground: "#EDEDED",
        primary: "#00F0FF", // Neon Cyan
        secondary: "#7000FF", // Neon Purple
        accent: "#FF00FF", // Neon Magenta
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #00F0FF33 0deg, #7000FF33 180deg, #FF00FF33 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
