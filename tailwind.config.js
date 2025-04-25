/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        retro: {
          purple: '#B24BF3',
          blue: '#4B9FE3',
          pink: '#FF6B9B',
          green: '#50E3C2',
          yellow: '#FFD23F',
          orange: '#FF8C42',
          dark: '#1F2335',
          darker: '#141824',
          light: '#2F3555'
        }
      },
      fontFamily: {
        pixel: ['Press Start 2P', 'cursive']
      },
      animation: {
        'pixel-bounce': 'pixel-bounce 0.5s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 1s steps(1) infinite'
      },
      keyframes: {
        'pixel-bounce': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'blink': {
          '50%': { opacity: '0' }
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234B9FE3' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2v40H40V0z'/%3E%3C/g%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
};