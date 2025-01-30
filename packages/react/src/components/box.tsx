"use client";

import { lighten } from "polished";
import styled, { css, Interpolation } from "styled-components";

const baseStyles = css`
	padding: ${props => props.theme.space[6]};
	background-color: ${props => lighten(0.0375, props.theme.colors.gray100)};
	border: 1px solid ${props => props.theme.colors.gray100};
	border-radius: ${props => props.theme.radii.sm};
	box-sizing: "border-box";
`;

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType;
	$width?: number | string | undefined;
	$height?: number | string | undefined;
	$maxWidth?: number | string | undefined;
	$maxHeight?: number | string | undefined;
	$css?: Interpolation<BoxProps>;
}

export const Box = styled.div<BoxProps>`
	${baseStyles}

	${({ $width, $height, $maxWidth, $maxHeight }) => css`
		width: ${$width};
		height: ${$height};
		max-width: ${$maxWidth};
		max-height: ${$maxHeight};
	`}

	${props => props.$css}
`;

Box.displayName = "Box";
