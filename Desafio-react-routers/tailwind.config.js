/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'canyon': "url('assets/imagens/GrandCanyon.jpg')",
        'escocia': "url('assets/imagens/Escocia.jfif')",
        'china': "url('assets/imagens/Muralha.jpg')",
        'aruba': "url('assets/imagens/Aruba.jpg')",
      }
    },
  },
  plugins: [],
}

