/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': { 'max': '767px' },
      
    },
    extend: {
      colors: {
        'lumblue': '#0E337D',
        'lumpink': '#F7B9D2',
        'lumred': '#E12B2B',
        'lumwhite': '#F0E8DD',
        'lumdarkpink': '#CD90A8'
      },
      backgroundImage: {
        home: "url('/img/hero/home.png')",
        etab: "url('/img/lp/etablishment.png')",
        foot: "url('/img/footer/footerbg.png')",
        bluephone: "url('/img/mobile/bluebgapp.png')",
        menuburger: "url('/img/navbar/menuburger.png')"
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

