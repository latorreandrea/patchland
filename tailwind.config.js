/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './home/templates/**/*.html',
    './home/static/home/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Forest Green / Explorer Green
        forest: {
          50: '#f1f7f3',
          100: '#dcebe1',
          200: '#bcd8c6',
          300: '#92bda2',
          400: '#639c79',
          500: '#43805c',
          600: '#326648',
          700: '#28523b',
          800: '#214231',
          900: '#1c3d2b',
          950: '#0e2017',
        },
        // Parchment / aged paper
        parchment: {
          50: '#fffdf8',
          100: '#fdfbf7',
          200: '#f4ebd9',
          300: '#e9dcbe',
          400: '#dcc79a',
          500: '#d0b27a',
        },
        // Brass / Vintage Gold
        brass: {
          50: '#fbf6e7',
          100: '#f5e9c3',
          200: '#ecd68d',
          300: '#e0bf55',
          400: '#d4af37',
          500: '#c59b27',
          600: '#a67b1f',
          700: '#855d1c',
          800: '#6f4c1d',
          900: '#5f401d',
        },
        // Dark Ink
        ink: {
          DEFAULT: '#2b261f',
          soft: '#4a443a',
          faint: '#6b6357',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 35s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
