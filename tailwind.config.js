/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        'website-loader': 999,
        'navbar' : 998
      },
      colors: {
        'color-1': '#FFA317',
        'color-2': '#EB1C44',
        'linear-gradient-1': 'linear-gradient(to right, #FFA317, #EB1C44) 1',
        'linear-gradient-2': 'linear-gradient(to right, #FFA317, #EB1C44)'

      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
