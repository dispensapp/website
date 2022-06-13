/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                '10xl': '8rem',
            },
            colors: {
                'primary-yellow': '#FFEAC2',
            }
        },
    },
    plugins: [],
}