/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.php", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        Coklat: ['#FAFFCA'],
      }
    },
  },
  plugins: [],
}
