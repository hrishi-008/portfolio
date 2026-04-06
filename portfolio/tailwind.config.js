/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#faf6f0',
          base: '#f0e6d3',
          bg: '#f7f5f0',
          page: '#ede4d4',
        },
        kraft: {
          dark: '#3d2e20',
          medium: '#5a4535',
          light: '#c9b89a',
          muted: '#8a7560',
        },
        primary: {
          50: '#f0e6d3',
          100: '#e8dcc4',
          200: '#d4c4a8',
          300: '#c9b89a',
          400: '#b89d7a',
          500: '#5a4535',
          600: '#3d2e20',
          700: '#2a1f15',
          800: '#1a1410',
          900: '#0f0a07',
        },
        secondary: {
          50: '#faf6f0',
          100: '#f5f1e8',
          200: '#f0e8db',
          300: '#e8dcc4',
          400: '#d4c4a8',
          500: '#c9b89a',
          600: '#b89d7a',
          700: '#5a4535',
          800: '#3d2e20',
          900: '#2a1f15',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Instrument Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 