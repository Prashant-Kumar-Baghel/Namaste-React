/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [//Here we put "./src/**/*.{html,js,ts,jsx,tsx}" in empty array and telling that we can use tailwind css in any of these files(html,js,ts,jsx,tsx).basically any file in src folder has one of the extension among (html,js,ts,jsx,tsx) can use tailwind.Here /**/* represent anywhere.
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

