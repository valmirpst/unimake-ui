"use client";

import styled, { css } from "styled-components";
import { theme } from "../styles";

const baseStyles = css`
	font-family: ${theme.fonts.default};
	line-height: ${theme.lineHeights.base};
	margin: 0;
	color: ${theme.colors.gray900};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	align-items: center;
`;

const sizeStyles = {
	xxs: css`
		font-size: ${theme.fontSizes.xxs};
	`,
	xs: css`
		font-size: ${theme.fontSizes.xs};
	`,
	sm: css`
		font-size: ${theme.fontSizes.sm};
	`,
	md: css`
		font-size: ${theme.fontSizes.md};
	`,
	lg: css`
		font-size: ${theme.fontSizes.lg};
	`,
	xl: css`
		font-size: ${theme.fontSizes.xl};
	`,
	"2xl": css`
		font-size: ${theme.fontSizes["2xl"]};
	`,
	"4xl": css`
		font-size: ${theme.fontSizes["4xl"]};
	`,
	"5xl": css`
		font-size: ${theme.fontSizes["5xl"]};
	`,
	"6xl": css`
		font-size: ${theme.fontSizes["6xl"]};
	`,
	"7xl": css`
		font-size: ${theme.fontSizes["7xl"]};
	`,
	"8xl": css`
		font-size: ${theme.fontSizes["8xl"]};
	`,
	"9xl": css`
		font-size: ${theme.fontSizes["9xl"]};
	`
};

const weightStyles = {
	light: css`
		font-weight: ${theme.fontWeights.light};
	`,
	regular: css`
		font-weight: ${theme.fontWeights.regular};
	`,
	medium: css`
		font-weight: ${theme.fontWeights.medium};
	`,
	bold: css`
		font-weight: ${theme.fontWeights.bold};
	`
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	as?: React.ElementType;
	size?: keyof typeof sizeStyles;
	weight?: keyof typeof weightStyles;
}

export const Text = styled.p<TextProps>`
	${baseStyles}
	${({ size = "md" }) => sizeStyles[size]}
  ${({ weight }) => weight && weightStyles[weight]}
`;

Text.displayName = "Text";
