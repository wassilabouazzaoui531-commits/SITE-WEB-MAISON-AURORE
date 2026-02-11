/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maison-blue': '#0C1A2A',
        'maison-gold': '#C8A453',
        'maison-champagne': '#D8C7A1',
        'maison-ivory': '#F9F7F2',
        'maison-black': '#050505',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        body: ['Lora', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}