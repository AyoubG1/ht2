import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0c0d16',
        panel: '#14172a',
        neon: '#6d7cff',
        fuchsia: '#f95d9b',
        aqua: '#40e0d0'
      },
      boxShadow: {
        glow: '0 0 25px rgba(109, 124, 255, 0.4)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(27,31,59,1) 0%, rgba(12,13,22,1) 65%)',
        'panel-gradient': 'linear-gradient(135deg, rgba(109,124,255,0.2), rgba(249,93,155,0.18))'
      }
    }
  },
  plugins: []
};

export default config;
