import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(240, 10%, 4%)',
        surface: 'hsl(240, 10%, 8%)',
        primary: 'hsl(43, 96%, 50%)',
        accent: 'hsl(43, 96%, 60%)',
        success: 'hsl(140, 70%, 45%)',
        danger: 'hsl(0, 70%, 45%)',
        'text-primary': 'hsl(0, 0%, 98%)',
        'text-secondary': 'hsl(240, 5%, 65%)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
        '2xl': '48px',
      },
      boxShadow: {
        'card': '0 8px 24px hsla(43, 96%, 50%, 0.12)',
        'hover': '0 12px 32px hsla(43, 96%, 50%, 0.2)',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
