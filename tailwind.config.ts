import type { Config } from 'tailwindcss';

// Same semantic token names/values as the app's own tailwind.config.ts
// (LorenGrz/ServerlessScanner/frontend/tailwind.config.ts) — kept in sync
// by hand since this is a separate Next.js project.
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f9fb',
        surface: '#ffffff',
        'surface-alt': '#f2f4f6',
        primary: '#000000',
        'on-primary': '#ffffff',
        accent: '#8a5100',
        'accent-bg': '#fe9800',
        'on-surface': '#191c1e',
        'on-surface-variant': '#45464d',
        'outline-variant': '#c6c6cd',
        error: '#ba1a1a',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
