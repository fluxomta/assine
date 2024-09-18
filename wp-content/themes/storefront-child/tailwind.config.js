/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",           // Todos os arquivos PHP na raiz do tema
    "./**/*.php",        // Todos os arquivos PHP em subdiretórios
    "./assets/**/*.js",  // Todos os arquivos JavaScript em sua pasta de assets (caso você tenha scripts JS usando Tailwind)
    "./assets/**/*.css"  // Todos os arquivos CSS em sua pasta de assets
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9e9e9",
          100: "#d2d2d2",
          200: "#a5a5a5",
          300: "#797979",
          400: "#4c4c4c",
          500: "#1f1f1f",
          600: "#191919",
          700: "#131313",
          800: "#0c0c0c",
          900: "#121212"
        },
        secondary: {
          50: "#fff9e6",
          100: "#fef2cd",
          200: "#fee69b",
          300: "#fdd96a",
          400: "#fdcd38",
          500: "#fcc006",
          600: "#ca9a05",
          700: "#977304",
          800: "#654d02",
          900: "#322601"
        }
      }
    }
  },
  plugins: [],
}
