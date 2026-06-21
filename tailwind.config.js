/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', '"Roboto Serif"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        serif: ['var(--font-serif)', '"Roboto Serif"', 'Playfair Display', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light'
    ],
  },
}

