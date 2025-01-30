"use client";

import styled, { css, Interpolation } from "styled-components";

const baseStyles = css`
	font-family: ${props => props.theme.fonts.default};
	line-height: ${props => props.theme.lineHeights.base};
	margin: 0;
	color: ${props => props.theme.colors.gray800};
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

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	as?: React.ElementType;
	$size?: keyof typeof sizeStyles;
	$weight?: keyof typeof weightStyles;
	$css?: Interpolation<TextProps>;
}

export const Text = styled.p<TextProps>`
	${baseStyles}
	${({ $size = "md" }) => sizeStyles[$size]}
  ${({ $weight }) => $weight && weightStyles[$weight]}

	${props => props.$css}
`;

Text.displayName = "Text";
