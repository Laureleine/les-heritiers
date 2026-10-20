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
        // Remappage Belle Époque — gray neutre → gamme chaude parchemin/encre
        // Permet aux 248 composants existants (bg-white, text-gray-*, border-gray-*)
        // d'hériter automatiquement de la charte sans modification individuelle.
        gray: {
          50:  '#faf6ed',
          100: '#f0e8d0',
          200: '#ddd3b4',
          300: '#c8bc9c',
          400: '#a8956e',
          500: '#806840',
          600: '#5c4d30',
          700: '#3e3018',
          800: '#2e2100',
          900: '#1e1500',
          950: '#0f0b00',
        },
        white: '#faf6ed',
        black: '#2e2100',
      },
      fontFamily: {
        /* font-serif Tailwind → AG Garamond Pro (corps de texte principal) */
        serif:       ['"AG Garamond Pro"', 'Garamond', 'Georgia', 'serif'],
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
