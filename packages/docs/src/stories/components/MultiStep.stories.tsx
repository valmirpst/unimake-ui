import type { Meta, StoryObj } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@unimake-ui/react";

export default {
	title: "Form/Multi Step",
	component: MultiStep,

	args: {
		$size: 4,
		$currentStep: 1
	},

	decorators: [
		Story => {
			return <Box>{Story()}</Box>;
		}
	],

	tags: ["autodocs"]
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
	args: {
		$currentStep: 4
	}
};
