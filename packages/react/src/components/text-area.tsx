"use client";

import { lighten, opacify } from "polished";
import styled, { css, Interpolation } from "styled-components";

export const TextArea = styled.textarea<TextAreaProps>`
	background-color: ${props => lighten(0.0125, props.theme.colors.gray100)};
	border: 1px solid ${props => lighten(0.125, props.theme.colors.gray300)};
	border-radius: ${props => props.theme.radii.sm};
	box-sizing: border-box;
	padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};

	font-family: ${props => props.theme.fonts.default};
	font-size: ${props => props.theme.fontSizes.sm};
	font-weight: ${props => props.theme.fontWeights.regular};
	resize: vertical;
	min-height: 80px;

	font-family: ${props => props.theme.fonts.default};
	font-size: ${props => props.theme.fontSizes.sm};
	color: ${props => props.theme.colors.gray800};
	font-weight: ${props => props.theme.fontWeights.regular};
	width: 100%;

	&:focus {
		outline: 0;
	}

	&:disabled {
		cursor: default;
	}

	&::placeholder {
		color: ${props => opacify(-0.125, props.theme.colors.gray500)};
	}

	&:focus {
		outline: 0;
		border-color: ${props => props.theme.colors.unimake300};
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	${({ $hasError = false }) =>
		$hasError &&
		css`
			border-color: ${props => props.theme.colors.red300};
		`}

	${props => props.$css}
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	$hasError?: boolean;
	$css?: Interpolation<TextAreaProps>;
}

TextArea.displayName = "TextArea";
