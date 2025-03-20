/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        extend: {}
    },
    plugins: [require("@tailwindcss/forms")]
};
