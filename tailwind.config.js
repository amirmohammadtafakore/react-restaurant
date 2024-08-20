/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'res-100': '#1A3636',
        'res-200': '#40534C',
        'res-300': '#677D6A',
        'res-400': '#D6BD98',
        'light-100': '#F7F7E8',
        'light-200': '#C7CFB7',
        'light-300': '#9DAD7F',
        'light-400': "#557174",
      },
    },
  },
  plugins: [],
}