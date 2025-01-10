import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1080px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
    },
  },
  plugins: [
    scrollbarHide, 
    ],
} satisfies Config;
