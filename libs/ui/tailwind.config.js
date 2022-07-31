const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('tailwind-workspace-preset')],
  content: [
    join(__dirname, 'src/**/*.{js,tsx,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#e2e2e2',
      },
      boxShadow: {
        lg: '0px 8px 40px rgba(0, 0, 0, 0.04)',
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
