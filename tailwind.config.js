/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'homelgreen': '#FFF280',
      'homedgreen': "#7EFF5E",
      'lyellow': '#FFF280',
      "dyellow": '#FFC700',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }
  },
  },
  plugins: [],
}

