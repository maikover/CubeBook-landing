import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/locales/**/*.json'
  ],
  theme: {
    extend: {
      colors: {
        // Neo-brutalism color palette
        'neo-bg': '#FFFDF5', // Cream/Off-White background
        'neo-fg': '#000000', // Pure Black foreground
        'neo-accent': '#FF6B6B', // Hot Red
        'neo-secondary': '#FFD93D', // Vivid Yellow
        'neo-muted': '#C4B5FD', // Soft Violet
        'neo-white': '#FFFFFF', // Pure White
      },
      fontFamily: {
        // Space Grotesk for neo-brutalism
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        // Neo-brutalism: sharp corners or full round only
        'none': '0px',
        'full': '9999px',
      },
      boxShadow: {
        // Neo-brutalism hard shadows (zero blur)
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo-md': '8px 8px 0px 0px #000000',
        'neo-lg': '12px 12px 0px 0px #000000',
        'neo-xl': '16px 16px 0px 0px #000000',
        // Inverted shadows for dark backgrounds
        'neo-invert': '-4px -4px 0px 0px #000000',
      },
      keyframes: {
        // Neo-brutalism animations: fast and mechanical
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'push': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(2px, 2px)' },
        },
        'lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'push': 'push 100ms ease-out',
        'lift': 'lift 200ms ease-out',
      }
    }
  },
  plugins: [],
};

export default config;
