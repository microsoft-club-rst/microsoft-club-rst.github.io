import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Microsoft Fluent 2 Dark Design Tokens
        fluent: {
          bg: '#050B14',
          surface: '#0F172A',
          border: '#1E293B',
          blue: '#0078D4',
          cyan: '#00A4EF',
          hover: '#106EBE',
        },
        'primary-bg': '#050B14',
        'card-bg': '#0F172A',
        'surface-bg': '#0F172A',
        'border-color': '#1E293B',
        'ms-blue': '#0078D4',
        'ms-cyan': '#00A4EF',
        'ms-hover': '#106EBE',
      },
      backgroundColor: {
        'primary-bg': '#050B14',
        'card-bg': '#0F172A',
        'surface-bg': '#0F172A',
      },
      borderColor: {
        'card-border': '#1E293B',
      },
      fontFamily: {
        sans: [
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'sans-serif',
        ],
        fluent: [
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
