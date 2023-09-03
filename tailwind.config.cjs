/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1B73E8',
        darkModeShadow: '#ffffff',
      },
      transitionProperty: {
        colors: 'background-color', // 启用背景颜色过渡
      },
      padding: {
        '5per': '5%',
        '10per': '10%',
        '20per': '20%',
        '25per': '25%',
        '30per': '30%',
        '40per': '40%',
      },
      margin: {
        '5per': '5%',
        '10per': '10%',
        '20per': '20%',
      },
      width: {
        '105/100': '105%',
        '11/10': '110%',
        '6/5': '120%',
      },
    },
  },
  plugins: [],
}
