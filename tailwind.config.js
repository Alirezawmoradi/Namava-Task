/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'landing-background':"url('/src/public/images/background-feedback-home-1 1.svg')"
            }
        },
    },
    plugins: [],
}

