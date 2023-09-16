/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    

    extend: {
      colors: {
        'bg': '#15132B',
        "priamry": '#6418C3',
        "secondary": '#211A75',
        "background": '#0D0B21'
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        

    
       },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
