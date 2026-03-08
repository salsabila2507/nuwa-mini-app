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
        'nuwa-purple': '#8B5CF6',
        'nuwa-blue': '#3B82F6',
        'nuwa-dark': '#1E1B4B',
      },
    },
  },
  plugins: [],
}
