import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
        "fade-in-delay": "fadeIn 5s ease-out forwards",
        "fade-out": "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wikoBlue: "#6A51E6",
        wikoGray: "#E5E9EC",
        wikoBlack: "#21272A ",
      },
      fontFamily: {
        lexend: ["Lexend", "Noto Sans", "sans-serif"],
        noto_sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
