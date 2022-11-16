/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                85: "85px",
                66: "66px",
                1400: "1400px",
            },
            height: {
                85: "85px",
                66: "66px",
            },
            gap: {
                26: "26px",
                10: "10px",
                15: "15px",
            },
            margin: {
                26: "26px",
                135: "135px",
                30: "30px",
                "10-mr": "10px",
            },
            padding: {
                18: "18px",
                30: "30px",
            },
            colors: {
                dark: "#3A4562",
                secondary: "#878D9D",
                star: "#38415D",
                "middle-gray": "#EFF0F5",
                "dark-gray": "#7D859C",
                "dark-middle-gray": "#70778B",
                "light-gray": "#E7EAF0",
                "middle-blue": "#5876C5",
                "dark-middle-blue": "#384564",
                "dark-blue": "#2A3047",
                "light-blue": "#55699E",
                "super-light-blue": "#A1B1DB",
                "super-light-yellow": "#FFCF00",
                "dark-yellow": "#988B49",
            },
            boxShadow: {
                "4xl": "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
                "3xl": "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
            },
            fontSize: {
                tx28: ["28px", "34px"],
                tx20: ["20px", "25px"],
                tx16: ["16px", "16px"],
            },
            opacity: {
                82: ".82",
                13: ".13",
                15: ".15",
                14: ".14",
            },
            listStyleType: {
                square: "square",
            },
        },
    },
    plugins: [],
};
