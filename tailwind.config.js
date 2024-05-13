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
            "base-100":'#FFFFFF',
            primary: "#2a68ff",
            black:'#000000',
            white:'#F5F5F5',
            header:'#FEFEFE',
            transparent: "transparent",
        },
        container: {
            center: true
        },
        extend: {
            backgroundImage: {
                'landing-background': "url('/images/background-feedback-home-1 1.svg')"
            }
        },
    },
    plugins: [],
}

