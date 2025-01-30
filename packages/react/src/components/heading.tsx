"use client";

import styled, { css, Interpolation } from "styled-components";

const baseStyles = css`
	font-family: ${props => props.theme.fonts.default};
	line-height: ${props => props.theme.lineHeights.shorter};
	margin: 0;
	color: ${props => props.theme.colors.gray900};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const sizeStyles = {
	sm: css`
		font-size: ${props => props.theme.fontSizes["xl"]};
	`,
	md: css`
		font-size: ${props => props.theme.fontSizes["2xl"]};
	`,
	lg: css`
		font-size: ${props => props.theme.fontSizes["4xl"]};
	`,
	xl: css`
		font-size: ${props => props.theme.fontSizes["5xl"]};
	`,
	"2xl": css`
		font-size: ${props => props.theme.fontSizes["6xl"]};
	`,
	"3xl": css`
		font-size: ${props => props.theme.fontSizes["7xl"]};
	`,
	"4xl": css`
		font-size: ${props => props.theme.fontSizes["8xl"]};
	`,
	"5xl": css`
		font-size: ${props => props.theme.fontSizes["9xl"]};
	`
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	as?: React.ElementType;
	$size?: keyof typeof sizeStyles;
	$css?: Interpolation<HeadingProps>;
}

export const Heading = styled.h2<HeadingProps>`
	${baseStyles}
	${({ $size = "md" }) => sizeStyles[$size]}

	${props => props.$css}
`;

Heading.displayName = "Heading";
