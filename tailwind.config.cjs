/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-dark-mode="true"]'],
  theme: {
    screens: {
      md: '768px',
      lg: '1000px',
    },
    fontFamily: {
      main: ['Space Mono', 'monospace'],
    },
    fontSize: {
      sm: 'var(--fs-sm)',
      base: 'var(--fs-base)',
      'base-2': 'var(--fs-base-2)',
      md: 'var(--fs-md)',
      lg: 'var(--fs-lg)',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      normal: '1.6',
    },
    colors: {
      bg: {
        primary: 'rgb(var(--clr-bg-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-bg-secondary) / <alpha-value>)',
      },
      font: {
        primary: 'rgb(var(--clr-font-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-font-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--clr-font-tertiary) / <alpha-value>)',
        quaternary: 'rgb(var(--clr-font-quaternary) / <alpha-value>)',
      },
      brand: {
        primary: 'rgb(var(--clr-brand-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-brand-secondary) / <alpha-value>)',
      },
      ui: {
        warning: 'rgb(var(--clr-ui-warning) / <alpha-value>)',
      },
    },
    extend: {},
  },
  plugins: [],
};
