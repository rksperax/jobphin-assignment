/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#1597E4',
        fontdark: '#212121',
        fontwhite: '#FAFAFA',
        border: '#E6E6E6',
        error: '#D86161',
        lightgrey: '#7A7A7A',
      },
      placeholderColor: {
        primary: '#7A7A7A',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|primary|fontdark|fontwhite|border|error|placeholder)/,
    },
  ],
}