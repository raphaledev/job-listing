/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
        'desaturated-cyan': 'hsl(180, 29%, 50%)',
        'light-cyan-background': 'hsl(180, 52%, 96%)',
        'light-cyan-filter': 'hsl(180, 31%, 95%)',
        'dark-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-cyan': 'hsl(180, 14%, 20%)'
      }
    },
  },
  plugins: [],
}
