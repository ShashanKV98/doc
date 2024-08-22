/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        metropolis: ['Varela', 'sans-serif'],
        shantell: ['Shantell', 'sans-serif'],
        cookie: ['Cookie', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],

        // metropolis: ['var(--font-varela)'],
        // shantell: ['var(--font-shantell)']
      },
    },
  },
  plugins: [
    require('@vidstack/react/tailwind.cjs')({
      prefix: 'media',
    }),
    require('tailwindcss-animate'),
    // require('@tailwindcss/typography')
  ],
}