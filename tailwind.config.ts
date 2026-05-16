import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        forest: {
          50:  '#f0f7f0',
          100: '#d6ead6',
          200: '#aed4ae',
          300: '#7dba7d',
          400: '#4fa14f',
          500: '#2d8630',
          600: '#1e6b23',
          700: '#17531c',
          800: '#113e15',
          900: '#0b2c0e',
          950: '#051608',
        },
        sand: {
          50:  '#fdfaf5',
          100: '#f9f2e4',
          200: '#f2e4c9',
          300: '#e8d0a5',
          400: '#dbb87c',
          500: '#cfa05a',
          600: '#b8853e',
          700: '#966931',
          800: '#75512a',
          900: '#5a3f22',
          950: '#2e1f10',
        },
        terracotta: {
          50:  '#fdf4f0',
          100: '#fae4d8',
          200: '#f4c5aa',
          300: '#ec9f77',
          400: '#e2754d',
          500: '#d4532a',
          600: '#b8401f',
          700: '#96321a',
          800: '#74261a',
          900: '#5a2018',
          950: '#310e0b',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        cream: '#FAF7F2',
        warmwhite: '#FEFCF8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-right':  'slideRight 0.6s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'texture-leaf':    "url('/images/texture-leaf.svg')",
      },
      boxShadow: {
        'warm':       '0 4px 24px rgba(163, 120, 60, 0.12)',
        'warm-lg':    '0 8px 48px rgba(163, 120, 60, 0.18)',
        'forest':     '0 4px 24px rgba(29, 107, 35, 0.12)',
        'forest-lg':  '0 8px 48px rgba(29, 107, 35, 0.20)',
        'card':       '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
    },
  },
  plugins: [],
}

export default config
