/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                // Mint Green Natural Palette
                mint: {
                    50: '#f0fdf9',
                    100: '#ccfbef',
                    200: '#99f6e0',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6', // Primary mint
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                sage: {
                    50: '#f6f7f6',
                    100: '#e3e7e3',
                    200: '#c7cfc7',
                    300: '#a2afa2',
                    400: '#7a8f7a',
                    500: '#5f7460',
                    600: '#4a5c4b',
                    700: '#3d4a3e',
                    800: '#333e34',
                    900: '#2b352c',
                },
                natural: {
                    cream: '#fdfcfa',
                    sand: '#f5f1ea',
                    earth: '#e8e0d5',
                    stone: '#c9bfb1',
                    charcoal: '#2d3a2e',
                }
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
