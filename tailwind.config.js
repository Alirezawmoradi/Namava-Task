/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "orange": '#F36339',
            "base-content": '#303539',
        },
        extend: {
            backgroundImage: {
                'landing-background': "url('/src/public/images/background-feedback-home-1 1.svg')"
            }
        },
    },
    plugins: [],
}

