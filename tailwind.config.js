/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://image-us.samsung.com/SamsungUS/smartthings/images/desktop/BG.jpg')",
        'mobile-hero': "url('https://image-us.samsung.com/SamsungUS/smartthings/images/mobile/BG.png')",
      },
      scale: {
        130: '1.3',
      },
      transitionProperty: {
        opacity: 'opacity',
        transform: 'transform',
      },
      transitionDuration: {
        300: '300ms',
      },
      fontFamily: {
        SamsungOne: ['SamsungOne', 'sans-serif'],
        SamsungSharpSans: ['SamsungSharpSans', 'sans-serif'],
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { transform: 'translateX(0)', opacity: '1' },
          '80%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      boxShadow: {
        'room-btn': '0px 3px 20px 0px rgba(0, 0, 0, 0.5)',
        'room-btn-mob': '0px 2.5px 12px 0px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        slideInOut: 'slideInOut 5s forwards',
      },
    },
  },
  plugins: [],
};
