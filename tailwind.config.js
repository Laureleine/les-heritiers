/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lh: {
          or:                '#ac882e',
          'or-clair':        '#d4aa4e',
          'or-sombre':       '#7a6220',
          nuit:              '#0a1c36',
          encre:             '#2e2100',
          parchemin:         '#faf6ed',
          'parchemin-chaud': '#f0e8d0',
          bordeaux:          '#4b0221',
          foret:             '#2c4312',
          'gris-parchemin':  '#c8bc9c',
        },
      },
      fontFamily: {
        /* font-serif Tailwind → Amarante (tous les composants utilisant font-serif) */
        serif:       ['Amarante', 'Georgia', 'serif'],
        garamond:    ['"AG Garamond Pro"', 'Garamond', 'Georgia', 'serif'],
        boecklin:    ['"Arnold Boecklin"', 'fantasy'],
        gismonda:    ['Gismonda', 'Georgia', 'serif'],
        amarante:    ['Amarante', 'Georgia', 'serif'],
        magnificent: ['"Magnificent Personal Use"', 'fantasy'],
      },
      animation: {
        'fade-in':      'fadeIn 0.3s ease-out',
        'fade-in-up':   'fadeInUp 0.3s ease-out',
        'fade-in-down': 'fadeInDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn:     { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp:   { '0%': { opacity: '0', transform: 'translateY(10px)' },  '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
