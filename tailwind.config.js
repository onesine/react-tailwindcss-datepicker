/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {},
    variants: {},
    plugins: [require("@tailwindcss/forms")]
};
