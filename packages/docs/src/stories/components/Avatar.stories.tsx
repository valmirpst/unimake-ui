import { Avatar, AvatarProps } from "@/components/ui/avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Data Display/Avatar",
	component: Avatar,
	parameters: {
		Avatar
	},

	args: {
		size: "md",
		src: "https://github.com/valmirpst.png",
		alt: "Valmir Paiva Stachin"
	},

	argTypes: {
		size: {
			options: ["xs", "sm", "md", "lg"],
			control: "inline-radio"
		},

		src: {
			control: { type: "text" }
		}
	},

	tags: ["autodocs"]
} as Meta<AvatarProps>;

export default meta;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: ""
	}
};
