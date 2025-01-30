"use client";

import { Slot } from "@radix-ui/react-slot";
import { opacify } from "polished";
import { forwardRef } from "react";
import styled, { css, Interpolation } from "styled-components";

const baseStyles = css`
	all: unset;
	border-radius: ${props => props.theme.radii.sm};
	font-size: ${props => props.theme.fontSizes.sm};
	font-weight: ${props => props.theme.fontWeights.medium};
	font-family: ${props => props.theme.fonts.default};
	text-align: center;
	min-width: 120px;
	padding: 0.25rem ${props => props.theme.space[6]};
	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${props => props.theme.space[2]};

	cursor: pointer;
	transition: ${props => props.theme.transitions[100]};

	svg {
		width: ${props => props.theme.space[4]};
		height: ${props => props.theme.space[4]};
	}

	&:not(:disabled):active {
		filter: brightness(1.1);
	}

	&:disabled {
		cursor: not-allowed;
	}

	&:focus-visible {
		box-shadow: 0 0 0 2px ${props => props.theme.colors.gray900};
	}
`;

const variantStyles = {
	primary: css`
		color: ${props => props.theme.colors.white300};
		background-color: ${props => props.theme.colors.unimake300};

		&:not(:disabled):hover {
			background-color: ${props => props.theme.colors.unimake500};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,
	secondary: css`
		color: ${props => props.theme.colors.gray900};
		background-color: ${props => props.theme.colors.gray100};

		&:not(:disabled):hover {
			background-color: ${props => props.theme.colors.gray200};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,

	tertiary: css`
		color: ${props => props.theme.colors.gray500};

		&:not(:disabled):hover {
			color: ${props => props.theme.colors.gray900};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,

	danger: css`
		color: ${props => props.theme.colors.white300};
		background-color: ${props => props.theme.colors.red500};

		&:not(:disabled):hover {
			background-color: ${props => props.theme.colors.red700};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,

	safe: css`
		color: ${props => props.theme.colors.white300};
		background-color: ${props => props.theme.colors.green500};

		&:not(:disabled):hover {
			background-color: ${props => props.theme.colors.green700};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,

	ghost: css`
		color: ${props => props.theme.colors.gray900};

		&:not(:disabled):hover {
			background-color: ${props => opacify(-0.5, props.theme.colors.gray100)};
		}

		&:disabled {
			opacity: 0.6;
		}
	`,

	link: css`
		min-width: unset;
		color: ${props => props.theme.colors.gray900};

		&:not(:disabled):hover {
			text-decoration: underline;
		}

		&:disabled {
			opacity: 0.6;
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

	lg: css`
		height: 40px;
	`,

	full: css`
		width: 100%;
		height: 36px;
	`
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: React.ElementType;
	$variant?: "primary" | "secondary" | "tertiary" | "danger" | "safe" | "ghost" | "link";
	$size?: "sm" | "md" | "lg" | "full";
	asChild?: boolean;
	$css?: Interpolation<ButtonProps>;
}

const StyledButton = styled.button<ButtonProps>`
	${baseStyles}

	${({ $variant = "primary", $size = "md" }) => css`
		${variantStyles[$variant]}
		${sizeStyles[$size]}
	`}
	
	${props => props.$css}
`;

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	({ asChild, ...props }, ref) => {
		const Component = asChild ? Slot : StyledButton;
		return <Component ref={ref} {...props} />;
	}
);

Button.displayName = "Button";
