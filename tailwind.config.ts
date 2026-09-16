import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#F0F4F8',
          100: '#D9E2EC',
          500: '#1B4F8A',
          900: '#0A2540',
        },
        brand: {
          blue: '#1B4F8A',
          'light-blue': '#E8F0FE',
          red: '#D32F2F',
          'dark-red': '#B71C1C',
          gray: '#F5F7FA',
          'dark-gray': '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '800' }],
        h2: ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        section: '5rem',
        'section-lg': '7rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(10, 37, 64, 0.08), 0 4px 12px rgba(10, 37, 64, 0.06)',
        'card-hover': '0 4px 8px rgba(10, 37, 64, 0.12), 0 12px 24px rgba(10, 37, 64, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
