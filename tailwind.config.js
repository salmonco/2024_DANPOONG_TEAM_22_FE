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
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        gray100: 'var(--color-gray-100)',
        gray200: 'var(--color-gray-200)',
        gray300: 'var(--color-gray-300)',
        gray400: 'var(--color-gray-400)',
        gray500: 'var(--color-gray-500)',
        yellow100: 'var(--color-yellow-100)',
        yellow200: 'var(--color-yellow-200)',
        yellow300: 'var(--color-yellow-300)',
        yellow400: 'var(--color-yellow-400)',
        yellowPrimary: 'var(--color-yellow-primary)',
        yellow600: 'var(--color-yellow-600)',
        recording: 'var(--color-recording)',
      },
      backgroundColor: {
        gradient100: 'var(--color-bg-gradient-100)',
        gradient200: 'var(--color-bg-gradient-200)',
        solid: 'var(--color-bg-solid)',
        bottomNavigation: 'var(--color-bg-bottomNavigation)',
        tabIcon: 'var(--color-bg-tabIcon)',
        mainPageBack100: 'var(--color-bg-mainPageBack-100)',
        mainPageBack200: 'var(--color-bg-mainPageBack-200)',
      },
    },
  },
  plugins: [],
}
