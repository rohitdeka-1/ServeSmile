/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001f3f',
        'navy-blue': '#1a2a4a',
        orange: '#CC7722',
        'green-badge': '#2d7a5f',
      },
      animation: {
        'pulse-scale': 'pulse-scale 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
