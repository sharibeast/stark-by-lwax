module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cozy: {
        DEFAULT: '#F1EADC',
        dark: '#E2C893',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
