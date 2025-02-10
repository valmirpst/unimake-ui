import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		colors: {
			transparent: "transparent",

			black: "rgba(var(--black), <alpha-value>)",

			white: {
				100: "var(--white-100)",
				300: "var(--white-300)"
			},

			gray: {
				50: "var(--gray-50)",
				100: "var(--gray-100)",
				200: "var(--gray-200)",
				300: "var(--gray-300)",
				400: "var(--gray-400)",
				500: "var(--gray-500)",
				600: "var(--gray-600)",
				700: "var(--gray-700)",
				800: "var(--gray-800)",
				900: "var(--gray-900)"
			},

			unimake: {
				100: "var(--unimake-100)",
				300: "var(--unimake-300)",
				500: "var(--unimake-500)",
				700: "var(--unimake-700)",
				900: "var(--unimake-900)"
			},

			green: {
				300: "var(--green-300)",
				500: "var(--green-500)",
				700: "var(--green-700)"
			},

			red: {
				300: "var(--red-300)",
				500: "var(--red-500)",
				700: "var(--red-700)"
			}
		},

		fontSize: {
			xxs: "0.625rem",
			xs: "0.75rem",
			sm: "0.875rem",
			md: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "3rem",
			"7xl": "4rem",
			"8xl": "4.5rem",
			"9xl": "6rem"
		},

		fontWeight: {
			light: "300",
			regular: "400",
			medium: "500",
			bold: "700"
		},

		fontFamily: {
			default: "'Source Sans 3', sans-serif",
			code: "monospace"
		},

		lineHeight: {
			full: "100%",
			shorter: "125%",
			short: "140%",
			base: "160%",
			tall: "180%"
		},

		borderRadius: {
			px: "1px",
			xs: "4px",
			sm: "6px",
			md: "8px",
			lg: "16px",
			full: "99999px"
		},

		transitionDuration: {
			DEFAULT: "100ms",
			100: "100ms",
			200: "200ms",
			300: "300ms",
			400: "400ms",
			500: "500ms",
			600: "600ms",
			800: "800ms",
			1000: "1000ms",
			2000: "2000ms"
		},

		extend: {
			spacing: {
				112: "28rem",
				128: "32rem",
				144: "36rem"
			},

			transitionProperty: {
				DEFAULT: "all"
			},

			keyframes: {
				slideIn: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" }
				},

				slideOut: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-100%)" }
				}
			},

			animation: {
				slideIn: "slideIn 0.1s ease-out",
				slideOut: "slideOut 0.1s ease-out"
			}
		}
	},

	plugins: []
} satisfies Config;
