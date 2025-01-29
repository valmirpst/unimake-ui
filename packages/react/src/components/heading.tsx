"use client";

import styled, { css } from "styled-components";
import { theme } from "../styles";

const baseStyles = css`
	font-family: ${theme.fonts.default};
	line-height: ${theme.lineHeights.shorter};
	margin: 0;
	color: ${theme.colors.gray900};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const sizeStyles = {
	sm: css`
		font-size: ${theme.fontSizes["xl"]};
	`,
	md: css`
		font-size: ${theme.fontSizes["2xl"]};
	`,
	lg: css`
		font-size: ${theme.fontSizes["4xl"]};
	`,
	xl: css`
		font-size: ${theme.fontSizes["5xl"]};
	`,
	"2xl": css`
		font-size: ${theme.fontSizes["6xl"]};
	`,
	"3xl": css`
		font-size: ${theme.fontSizes["7xl"]};
	`,
	"4xl": css`
		font-size: ${theme.fontSizes["8xl"]};
	`,
	"5xl": css`
		font-size: ${theme.fontSizes["9xl"]};
	`
};

export interface HeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
	as?: React.ElementType;
	size?: keyof typeof sizeStyles;
}

export const Heading = styled.h2<HeadingProps>`
	${baseStyles}
	${({ size = "md" }) => sizeStyles[size]}
`;

Heading.displayName = "Heading";
