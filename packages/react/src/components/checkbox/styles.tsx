"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { lighten } from "polished";
import styled, { css, keyframes } from "styled-components";

export const CheckboxContainer = styled(CheckboxPrimitive.Root)<{ $size?: "sm" | "md" }>`
	all: unset;
	background-color: ${props => lighten(0.0125, props.theme.colors.gray100)};
	border: 1px solid ${props => lighten(0.125, props.theme.colors.gray300)};
	border-radius: ${props => props.theme.radii.xs};
	line-height: 0;
	cursor: pointer;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.1s;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&[data-state="checked"] {
		background-color: ${props => props.theme.colors.unimake300};

		&:hover {
			filter: brightness(1.1);
		}

		&:focus-visible {
			box-shadow: 0 0 0 1px ${props => props.theme.colors.gray900};
		}
	}

	&:focus,
	&[data-state="checked"] {
		border-color: ${props => props.theme.colors.unimake300};
	}

	&:not(:disabled):active {
		border-color: ${props => props.theme.colors.unimake300};
	}

	${props =>
		props.$size === "sm" &&
		css`
			width: ${props.theme.space[4]};
			height: ${props.theme.space[4]};
		`}

	${props =>
		(props.$size === "md" || !props.$size) &&
		css`
			width: ${props.theme.space[5]};
			height: ${props.theme.space[5]};
		`}
`;

// Animações
const slideIn = keyframes`
	from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
`;

const slideOut = keyframes`
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(-100%);
	}
`;

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
	color: ${props => props.theme.colors.white100};
	width: ${props => props.theme.space[3]};
	height: ${props => props.theme.space[3]};

	&[data-state="checked"] {
		animation: ${slideIn} 0.1s ease-out;
	}

	&[data-state="unchecked"] {
		animation: ${slideOut} 0.2s ease-out;
	}
`;
