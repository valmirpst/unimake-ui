"use client";

import { lighten, opacify } from "polished";
import styled, { css } from "styled-components";
import { TextInputProps } from "../../../dist";

const sizeStyles = {
	md: css`
		padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};
		gap: ${props => (!!props.theme.$startIcon || !!props.theme.$endIcon) && props.theme.space[2]};
		height: 36px;
	`,

	lg: css`
		padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};
		gap: ${props => (!!props.theme.$startIcon || !!props.theme.$endIcon) && props.theme.space[2]};
		height: 40px;
	`
};

export const TextInputContainer = styled.div<TextInputProps>`
	background-color: ${props => lighten(0.0125, props.theme.colors.gray100)};
	border: 1px solid ${props => lighten(0.125, props.theme.colors.gray300)};
	border-radius: ${props => props.theme.radii.sm};
	box-sizing: border-box;

	display: flex;
	align-items: center;

	${({ $size = "md" }) => sizeStyles[$size]}

	svg {
		width: ${props => props.theme.space[4]};
		height: ${props => props.theme.space[4]};
	}

	${({ $hasError = false }) =>
		$hasError &&
		css`
			border-color: ${props => props.theme.colors.red300};
		`}

	&:has(input:focus) {
		border-color: ${props => props.theme.colors.gray800};
	}

	&:has(input:disabled) {
		opacity: 0.5;
		cursor: default;
	}
`;

export const Prefix = styled.span`
	font-family: ${props => props.theme.fonts.default};
	font-size: ${props => props.theme.fontSizes.sm};
	color: ${props => props.theme.colors.gray500};
	font-weight: ${props => props.theme.fontWeights.regular};
`;

export const Input = styled.input<{ $css?: string }>`
	font-family: ${props => props.theme.fonts.default};
	font-size: ${props => props.theme.fontSizes.sm};
	color: ${props => props.theme.colors.gray800};
	font-weight: ${props => props.theme.fontWeights.regular};
	background: transparent;
	border: 0;
	width: 100%;

	${props => props.$css}

	&:focus {
		outline: 0;
	}

	&:disabled {
		cursor: default;
	}

	&::placeholder {
		color: ${props => opacify(-0.25, props.theme.colors.gray500)};
	}
`;
