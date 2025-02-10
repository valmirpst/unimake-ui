import { Heading, HeadingProps } from "@/components/ui/heading";
import type { Meta, StoryObj } from "@storybook/react";

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
			options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
			control: { type: "inline-radio" }
		},
		as: {
			control: { disable: true }
		}
	},

	tags: ["autodocs"]
} as Meta<HeadingProps>;

export default meta;

export const Primary: StoryObj<HeadingProps> = {};
