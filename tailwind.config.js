/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF1F7',
          100: '#D6DEEB',
          200: '#AEBDD6',
          300: '#7E93B8',
          400: '#4E6896',
          500: '#2E4775',
          600: '#1B335C',
          700: '#142648',
          800: '#0F1E38',
          900: '#0A1528',
          950: '#060D18',
        },
        crimson: {
          50: '#FDECEE',
          100: '#FBD0D5',
          200: '#F4A1AC',
          300: '#E96D7E',
          400: '#DC3B53',
          500: '#C8102E',
          600: '#A80C26',
          700: '#860A1F',
          800: '#640816',
          900: '#43050F',
        },
        flame: {
          50: '#FFF6E8',
          100: '#FFE6BD',
          200: '#FFCB7A',
          300: '#FBAB45',
          400: '#F7941D',
          500: '#F2700F',
          600: '#ED1C24',
          700: '#C2161D',
        },
        steel: {
          50: '#F6F7F9',
          100: '#ECEEF2',
          200: '#D8DCE3',
          300: '#B9C0CC',
          400: '#8D97A6',
          500: '#69748A',
          600: '#515B6E',
          700: '#3F4858',
          800: '#2D3340',
          900: '#1C202A',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      clipPath: {
        badge: 'polygon(0 0, 100% 0, 100% 92%, 93% 100%, 0 100%)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(15, 30, 56, 0.12)',
        'card-hover': '0 16px 40px -8px rgba(15, 30, 56, 0.22)',
        glow: '0 0 40px rgba(247, 148, 29, 0.35)',
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #F7941D 0%, #ED1C24 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1B335C 0%, #0A1528 100%)',
        'steel-texture':
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
