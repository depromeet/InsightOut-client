/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {},
      colors: {},
      fontSize: {},
    },
    // chakra가 tailwind 보다 css 우선순위가 높아서 chakra custum theme에서 먼저 적용되겠지만 방어코드로 남겨놓음
    fontFamily: {
      pretendard: ['Pretendard', ...fontFamily.sans],
    },
  },
  plugins: [],
};
