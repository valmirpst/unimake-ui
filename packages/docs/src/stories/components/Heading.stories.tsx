import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@unimake-ui/react";

const meta = {
	title: "Typography/Heading",
	component: Heading,
	parameters: {
		Heading
	},

	args: {
		children: "Heading",
		size: "md"
	},

	argTypes: {
		size: {
			options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
			control: { type: "inline-radio" }
		}
	},

	tags: ["autodocs"]
} as Meta<HeadingProps>;

export default meta;

export const Primary: StoryObj<HeadingProps> = {};
