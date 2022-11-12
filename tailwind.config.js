/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                85: "85px",
                1400: "1400px",
            },
            height: {
                85: "85px",
            },
            gap: {
                26: "26px",
            },
            colors: {
                dark: "#3A4562",
                secondary: "#878D9D",
                star: "#38415D",
            },
        },
    },
    plugins: [],
};
