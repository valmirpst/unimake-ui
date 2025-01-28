import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
	all: "unset",
	borderRadius: "$sm",
	fontSize: "$sm",
	fontWeight: "$medium",
	fontFamily: "$default",
	textAlign: "center",
	minWidth: 120,
	padding: "0 $4",
	boxSizing: "border-box",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "$2",

	cursor: "pointer",
	transition: "$100",

	svg: {
		width: "$4",
		height: "$4"
	},

	"&:not(:disabled):active": {
		filter: "brightness(1.1)"
	},

	"&:disabled": {
		cursor: "not-allowed"
	},

	variants: {
		variant: {
			primary: {
				color: "$white300",
				backgroundColor: "$unimake300",

				"&:not(:disabled):hover": {
					backgroundColor: "$unimake500"
				},

				"&:disabled": {
					backgroundColor: "$gray200"
				}
			},

			secondary: {
				color: "$gray900",
				backgroundColor: "$gray100",

				"&:not(:disabled):hover": {
					backgroundColor: "$gray200"
				},

				"&:disabled": {
					opacity: 0.5
				}
			},

			tertiary: {
				color: "$gray600",

				"&:not(:disabled):hover": {
					color: "$black"
				},

				"&:disabled": {
					color: "$gray400"
				}
			},

			danger: {
				color: "$white300",
				backgroundColor: "$red500",

				"&:not(:disabled):hover": {
					backgroundColor: "$red700"
				},

				"&:disabled": {
					backgroundColor: "$gray200"
				}
			},

			safe: {
				color: "$white300",
				backgroundColor: "$green500",

				"&:not(:disabled):hover": {
					backgroundColor: "$green700"
				},

				"&:disabled": {
					backgroundColor: "$gray200"
				}
			},

			ghost: {
				color: "$gray900",

				"&:not(:disabled):hover": {
					backgroundColor: "$gray100"
				},

				"&:disabled": {
					color: "$gray600",
					opacity: 0.5
				}
			},

			link: {
				minWidth: "unset",
				color: "$gray900",

				"&:not(:disabled):hover": {
					textDecoration: "underline"
				},

				"&:disabled": {
					color: "$gray600",
					opacity: 0.5
				},

				"&:focus": {
					outline: "none",
					textDecoration: "underline"
				}
			}
		},

		size: {
			sm: {
				minWidth: 96,
				height: 32
			},

			md: {
				height: 36
			}
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType;
}

Button.displayName = "Button";
