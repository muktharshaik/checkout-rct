const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        textBase: '#4F4F4F',
        label: '#828282',
        primary: '#1660CF',
        strike: '#b2bbca',
        borderColor: {
          light: '#e0e0e0',
          dark: '#b2bcca',
        },
      },
      boxShadow: {
        container: '0px 2px 6px rgba(0, 0, 0, 0.14)',
        button: '0px 4px 4px rgba(14, 53, 191, 0.25)',
      },
    },
    fontSize: {
      xxs: '0.625rem', //10px
      xs: '0.75rem', //12px
      sm: '0.813rem', //13px
      base: '0.875rem', //14px
      lg: '0.938rem', //15px
      xl: '1rem', //16px
    },
  },
  plugins: [],
};
