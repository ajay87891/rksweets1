/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './container/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
      
        'primary': '#582c4f',
      },
      fontFamily: {
        Shrikhand: ["Shrikhand", "cursive"],
        Kalam: ["Kalam", "cursive"],
        Lora: ["Lora", "serif"],
        Coiny: ["Coiny", "serif"],
        Lugrasimo: ["Lugrasimo", "serif"],

    
       },
    },
    
  },
  plugins: [require('flowbite/plugin')],
}
