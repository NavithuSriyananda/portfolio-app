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
        'navbar': 998
      },
      colors: {
        'color-1': '#FFA317',
        'color-2': '#EB1C44',
        'linear-gradient-1': 'linear-gradient(to right, #FFA317, #EB1C44) 1',
        'linear-gradient-2': 'linear-gradient(to right, #FFA317, #EB1C44)'

      },
      animation: {
        'enter-from-top': 'keyframe-enter-from-top 0.8s ease-in-out 1',
        'enter-from-bottom': 'keyframe-enter-from-bottom 0.8s ease-in-out 1',
        'enter-from-left': 'keyframe-enter-from-left 0.8s ease-in-out 1',
        'enter-from-right': 'keyframe-enter-from-right 0.8s ease-in-out 1',
      },
      transitionDuration: {
        '2000': '2000ms'
      },
      keyframes: {
        'keyframe-enter-from-top': {
          '0%': { opacity: 0, transform: 'translateY(-1em)' },
          '100%': { opacity: 1 }
        },
        'keyframe-enter-from-bottom': {
          '0%': { opacity: 0, transform: 'translateY(1em)' },
          '100%': { opacity: 1 }
        },
        'keyframe-enter-from-left': {
          '0%': { opacity: 0, transform: 'translateX(-1em)' },
          '100%': { opacity: 1 }
        },
        'keyframe-enter-from-right': {
          '0%': { opacity: 0, transform: 'translateX(1em)' },
          '100%': { opacity: 1 }
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
