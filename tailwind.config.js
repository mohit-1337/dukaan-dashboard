/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        regular: ["15px", "22px"],
        subBodyRegular: ["13px", "16px"],
        count: ["32px", "38px"],
      },
    },
  },
  plugins: [],
};
