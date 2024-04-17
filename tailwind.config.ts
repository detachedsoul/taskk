import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'media',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                urbanist: ['var(--font-urbanist)'],
                pacifico: ['var(--font-pacifico)'],
            },
        },
    },
    plugins: [],
};
export default config;
