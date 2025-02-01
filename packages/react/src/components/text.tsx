"use client";

import styled, { css, Interpolation } from "styled-components";

const baseStyles = css`
	font-family: ${props => props.theme.fonts.default};
	line-height: ${props => props.theme.lineHeights.base};
	margin: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	align-items: center;
`;

const sizeStyles = {
	xxs: css`
		font-size: ${props => props.theme.fontSizes.xxs};
	`,
	xs: css`
		font-size: ${props => props.theme.fontSizes.xs};
	`,
	sm: css`
		font-size: ${props => props.theme.fontSizes.sm};
	`,
	md: css`
		font-size: ${props => props.theme.fontSizes.md};
	`,
	lg: css`
		font-size: ${props => props.theme.fontSizes.lg};
	`,
	xl: css`
		font-size: ${props => props.theme.fontSizes.xl};
	`,
	"2xl": css`
		font-size: ${props => props.theme.fontSizes["2xl"]};
	`,
	"4xl": css`
		font-size: ${props => props.theme.fontSizes["4xl"]};
	`,
	"5xl": css`
		font-size: ${props => props.theme.fontSizes["5xl"]};
	`,
	"6xl": css`
		font-size: ${props => props.theme.fontSizes["6xl"]};
	`,
	"7xl": css`
		font-size: ${props => props.theme.fontSizes["7xl"]};
	`,
	"8xl": css`
		font-size: ${props => props.theme.fontSizes["8xl"]};
	`,
	"9xl": css`
		font-size: ${props => props.theme.fontSizes["9xl"]};
	`
};

const weightStyles = {
	light: css`
		font-weight: ${props => props.theme.fontWeights.light};
	`,
	regular: css`
		font-weight: ${props => props.theme.fontWeights.regular};
	`,
	medium: css`
		font-weight: ${props => props.theme.fontWeights.medium};
	`,
	bold: css`
		font-weight: ${props => props.theme.fontWeights.bold};
	`
};

const variantStyles = {
	default: css`
		color: ${props => props.theme.colors.gray800};
	`,
	lighter: css`
		color: ${props => props.theme.colors.gray600};
	`,
	danger: css`
		color: ${props => props.theme.colors.red300};
	`,
	safe: css`
		color: ${({ theme }) => (theme.title === "dark" ? theme.colors.green300 : theme.colors.green500)};
	`
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	as?: React.ElementType;
	$size?: keyof typeof sizeStyles;
	$weight?: keyof typeof weightStyles;
	$variant?: keyof typeof variantStyles;
	$css?: Interpolation<TextProps>;
}

export const Text = styled.p<TextProps>`
	${baseStyles}
	${({ $size = "md" }) => sizeStyles[$size]}
  ${({ $weight = "regular" }) => $weight && weightStyles[$weight]}
  ${({ $variant = "default" }) => $variant && variantStyles[$variant]}

	${props => props.$css}
`;

Text.displayName = "Text";
