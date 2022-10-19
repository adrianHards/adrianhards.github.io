/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'context-still': "url('/src/assets/context.png')",
        'context-gif': "url('/src/assets/context.gif')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
