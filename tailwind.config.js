/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "index.html"],
    theme: {
        extend: {
            fontSize: {
                '10xl': '8rem',
            },
            colors: {
                'primary-yellow': '#FFEAC2',
                'secondary-yellow': '#FFF6E5',
                'primary-blue': '#003049'
            }
        },
    },
    plugins: [],
}