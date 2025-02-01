"use client";

import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
	$size: number;
	$currentStep?: number;
}

export function MultiStep({ $size = 1, $currentStep = 1 }: MultiStepProps) {
	return (
		<MultiStepContainer>
			<Label>
				Passo {$currentStep} de {$size}
			</Label>
			<Steps $size={$size}>
				{Array.from({ length: $size }, (_, i) => i + 1).map((step, index) => {
					return <Step key={`${step} + ${index}`} $active={$currentStep >= step} />;
				})}
			</Steps>
		</MultiStepContainer>
	);
}

MultiStep.displayName = "MultiStep";
