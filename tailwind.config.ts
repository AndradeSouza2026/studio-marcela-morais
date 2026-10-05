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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-bg-pure)",
        offwhite: "var(--color-bg-off)",
        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)",
        roseDark: "var(--color-rose-dark)",
        whatsapp: "var(--color-whatsapp)"
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
