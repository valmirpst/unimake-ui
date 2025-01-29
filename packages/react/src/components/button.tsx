"use client";

import styled, { css } from "styled-components";
import { theme } from "../styles";

const baseStyles = css`
	all: unset;
	border-radius: ${props => theme.radii.sm};
	font-size: ${props => theme.fontSizes.sm};
	font-weight: ${props => theme.fontWeights.medium};
	font-family: ${props => theme.fonts.default};
	text-align: center;
	min-width: 120px;
	padding: 0 ${props => theme.space[4]};
	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${props => theme.space[2]};

	cursor: pointer;
	transition: ${props => theme.transitions[100]};

	svg {
		width: ${props => theme.space[4]};
		height: ${props => theme.space[4]};
	}

	&:not(:disabled):active {
		filter: brightness(1.1);
	}

	&:disabled {
		cursor: not-allowed;
	}

	&:focus-visible {
		box-shadow: 0 0 0 2px ${props => theme.colors.gray900};
	}
`;

const variantStyles = {
	primary: css`
		color: ${props => theme.colors.white300};
		background-color: ${props => theme.colors.unimake300};

		&:not(:disabled):hover {
			background-color: ${props => theme.colors.unimake500};
		}

		&:disabled {
			background-color: ${props => theme.colors.gray200};
		}
	`,
	secondary: css`
		color: ${props => theme.colors.gray900};
		background-color: ${props => theme.colors.gray100};

		&:not(:disabled):hover {
			background-color: ${props => theme.colors.gray200};
		}

		&:disabled {
			opacity: 0.5;
		}
	`,

	tertiary: css`
		color: ${props => theme.colors.gray600};

		&:not(:disabled):hover {
			color: ${props => theme.colors.black};
		}

		&:disabled {
			color: ${props => theme.colors.gray400};
		}
	`,

	danger: css`
		color: ${props => theme.colors.white300};
		background-color: ${props => theme.colors.red500};

		&:not(:disabled):hover {
			background-color: ${props => theme.colors.red700};
		}

		&:disabled {
			background-color: ${props => theme.colors.gray200};
		}
	`,

	safe: css`
		color: ${props => theme.colors.white300};
		background-color: ${props => theme.colors.green500};

		&:not(:disabled):hover {
			background-color: ${props => theme.colors.green700};
		}

		&:disabled {
			background-color: ${props => theme.colors.gray200};
		}
	`,

	ghost: css`
		color: ${props => theme.colors.gray900};

		&:not(:disabled):hover {
			background-color: ${props => theme.colors.gray100};
		}

		&:disabled {
			color: ${props => theme.colors.gray600};
			opacity: 0.5;
		}
	`,

	link: css`
		min-width: unset;
		color: ${props => theme.colors.gray900};

		&:not(:disabled):hover {
			text-decoration: underline;
		}

		&:disabled {
			color: ${props => theme.colors.gray600};
			opacity: 0.5;
		}

		&:focus-visible {
			outline: none;
			text-decoration: underline;
		}
	`
};

const sizeStyles = {
	sm: css`
		min-width: 96px;
		height: 32px;
	`,

	md: css`
		height: 36px;
	`,

	full: css`
		width: 100%;
		height: 36px;
	`
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "danger" | "safe" | "ghost" | "link";
	size?: "sm" | "md" | "full";
}

export const Button = styled.button<ButtonProps>`
	${baseStyles}
	${({ variant = "primary", size = "md" }) => css`
		${variantStyles[variant]}
		${sizeStyles[size]}
	`}
`;

Button.displayName = "Button";
