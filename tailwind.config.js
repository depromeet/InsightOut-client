const { colors } = require('./src/styles/theme/foundations/colors');
const { boxShadow } = require('./src/styles/theme/foundations/boxShadow');
const { dropShadow } = require('./src/styles/theme/foundations/dropShadow');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    boxShadow,
    dropShadow,
  },
  plugins: [],
};
