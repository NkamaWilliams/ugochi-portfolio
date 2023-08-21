/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'flower': 'url("/images/flower.jpeg")',
        'gradient-rainbow': 'linear-gradient(to right, green, red, blue)',
        // yellow, orange, red, purple, violet, blue
        'gradient-volunteer': 'linear-gradient(270deg, #F9F871, #FF856C)'
      },
      colors: {
        'dark-blue': '#034F89',
        'light-blue': '#2D9BF0',
        'cyan': 'cyan',
        'new': '#3F4497',
        'new2': '#918CB8',
        'new3': '#0061AE',
        'transparent-black': 'rgba(0, 0, 0, 0.7)',
        'transparent-white': 'rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}
