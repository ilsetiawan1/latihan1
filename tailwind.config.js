/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
      colors: {
        primary: ['#0f766e'],
        secondary: ['#14b8a6'],
        cover: ['#eef6f9'],
      },
      boxShadow: {
        full: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 4px 0 6px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
