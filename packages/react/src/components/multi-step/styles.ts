"use client";

import { lighten } from "polished";
import styled, { css } from "styled-components";
import { Text } from "../text";

export const MultiStepContainer = styled.div``;

export const Label = styled(Text)`
	color: ${props => props.theme.colors.gray600};
	font-size: ${props => props.theme.fontSizes.sm};
`;

export const Steps = styled.div<{ $size: number }>`
	display: grid;
	gap: ${props => props.theme.space[2]};
	margin-top: ${props => props.theme.space[1]};

	${({ $size }) => css`
		grid-template-columns: repeat(${$size}, 1fr);
	`}
`;

interface StepProps {
	$active?: boolean;
}

export const Step = styled.div<StepProps>`
	height: ${props => props.theme.space[1]};
	border-radius: ${props => props.theme.radii.xs};
	background-color: ${props => lighten(0.175, props.theme.colors.gray300)};

	${props =>
		props.$active &&
		css`
			background-color: ${lighten(0.05, props.theme.colors.unimake300)};
		`}
`;
