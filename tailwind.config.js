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
            "base-100": '#FFFFFF',
            primary: "#2a68ff",
            black: '#000000',
            white: '#F5F5F5',
            header: '#FEFEFE',
            transparent: "transparent",
            ghost: '#D9D9D9',
            error: "#f87272",
            required: '#FF0000',
            current: "currentColor",
            "gradient-first":'#F26322',
            "gradient-second":'#F36339',
        },
        container: {
            center: true
        },
        extend: {
            backgroundImage: {
                'landing-background': "url('/images/background-feedback-home-1 1.svg')",
                'movie-section': "url('/images/pic2.png')",
                'icon-bg':"url('/images/Ellipse 1.svg')"
            }
        },
    },
    plugins: [],
}

