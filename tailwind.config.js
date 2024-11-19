/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bold: 'WantedSans-Bold',
        semiBold: 'WantedSans-SemiBold',
        regular: 'WantedSans-Regular',
        medium: 'WantedSans-Medium',
      },
      textColor: {
        white: '#fafafa',
        black: '#121212',
        gray100: '#efefef',
        gray200: '#d0d0d0',
        gray300: '#a0a0a0',
        gray400: '#717171',
        gray500: '#333333',
        yellow100: '#fefee2',
        yellow200: '#fdfdc4',
        yellow300: '#fbfba7',
        yellow400: '#fafa89',
        yellowPrimary: '#f9f96c',
        yellow600: '#c7c756',
        recording: '#f13a1e',
      },
      backgroundColor: {
        gradient100: '#252738',
        gradient200: '#393c52',
        solid: '#252738',
        bottomNavigation: '#36384e',
        tabIcon: '#585a6c',
        mainPageBack100: '#121320',
        mainPageBack200: '#252738',
      },
    },
  },
  plugins: [],
}
