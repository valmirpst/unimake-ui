import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@unimake-ui/react";

const meta = {
	title: "Typography/Text",
	component: Text,
	parameters: {
		Text
	},

	args: {
		children: "Seja bem vindo à Unimake Software UI",
		$size: "md",
		$weight: "regular"
	},

	argTypes: {
		$size: {
			options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
			control: { type: "inline-radio" }
		},
		$weight: {
			options: ["light", "regular", "medium", "bold"],
			control: "inline-radio"
		}
	},

	tags: ["autodocs"]
} as Meta<TextProps>;

export default meta;

export const Primary: StoryObj<TextProps> = {};
