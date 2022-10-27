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
        'reminder-still': "url('/src/assets/reminder.png')",
        'reminder-gif': "url('/src/assets/reminder.gif')",
      }
    },
  },
  plugins: [],
}
