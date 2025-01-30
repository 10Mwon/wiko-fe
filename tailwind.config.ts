import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
