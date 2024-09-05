/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './template-parts/**/*.php',
    './woocommerce/**/*.php',
    './inc/**/*.php',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8E8E8',
          100: '#D1D1D1',
          200: '#A6A6A6',
          300: '#787878',
          400: '#4D4D4D',
          500: '#1F1F1F',
          600: '#1A1A1A',
          700: '#121212',
          800: '#0D0D0D',
          900: '#050505',
          950: '#030303',
        },
        secondary: {
          50: '#FFF8E6',
          100: '#FEF2CD',
          200: '#FEE59A',
          300: '#FDD868',
          400: '#FDCB35',
          500: '#FCC006',
          600: '#CA9802',
          700: '#977202',
          800: '#654C01',
          900: '#322601',
          950: '#191300',
        },
      },
    },
  },
  plugins: [],
};
