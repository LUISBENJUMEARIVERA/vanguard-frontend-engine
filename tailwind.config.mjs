/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#08080a',
        surface: {
          900: '#0f0f13',
          800: '#16161d',
          700: '#23232c',
        },
        acid: {
          lime: '#d4ff00',
          yellow: '#ffe600',
          cyan: '#00f5ff',
          flame: '#ff4d00',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        display: ['Syne', 'Clash Display', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.06em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
