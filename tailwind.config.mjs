/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B5329', // forest green
        secondary: '#FF6B35', // sunset orange
        background: '#F4F1DE', // natural cream
        text: '#2F2F2F', // charcoal
        accent: '#1B998B', // mountain lake
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'source': ['"Source Sans Pro"', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
