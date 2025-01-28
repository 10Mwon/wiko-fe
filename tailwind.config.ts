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
        wikoBlue: "#0000FF",
        wikoGray: "#E5E9EC",
        wikoBlack: "#21272A ",
      },
    },
  },
  plugins: [],
} satisfies Config;
