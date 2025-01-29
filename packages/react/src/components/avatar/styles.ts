"use client";

import * as AvatarRadix from "@radix-ui/react-avatar";
import styled, { css } from "styled-components";
import { AvatarProps } from ".";

const baseAvatarStyles = css`
	border-radius: ${props => props.theme.radii.full};
	display: inline-block;
	overflow: hidden;
`;

const baseImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`;

const baseFallbackStyles = css`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.gray100};
	color: ${props => props.theme.colors.gray800};
`;

export const sizeStyles = {
	sm: css`
		width: ${props => props.theme.space[8]};
		height: ${props => props.theme.space[8]};

		svg {
			width: ${props => props.theme.space[4]};
			height: ${props => props.theme.space[4]};
		}
	`,

	md: css`
		width: ${props => props.theme.space[12]};
		height: ${props => props.theme.space[12]};

		svg {
			width: ${props => props.theme.space[6]};
			height: ${props => props.theme.space[6]};
		}
	`,

	lg: css`
		width: ${props => props.theme.space[16]};
		height: ${props => props.theme.space[16]};

		svg {
			width: ${props => props.theme.space[8]};
			height: ${props => props.theme.space[8]};
		}
	`
};

export const AvatarContainer = styled(AvatarRadix.Root)<AvatarProps>`
	${baseAvatarStyles}
	${({ $size }) => sizeStyles[$size || "md"]}
`;

export const AvatarImage = styled(AvatarRadix.Image)`
	${baseImageStyles}
`;

export const AvatarFallback = styled(AvatarRadix.Fallback)`
	${baseFallbackStyles}
`;

AvatarContainer.displayName = "AvatarContainer";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";
