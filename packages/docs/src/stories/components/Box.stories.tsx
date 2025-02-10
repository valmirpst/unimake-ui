import { Box, BoxProps } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Layout/Box",
	component: Box,
	parameters: {
		Box
	},

	args: {
		children: <Text>Seja bem vindo à Unimake Software UI</Text>
	},

	tags: ["autodocs"]
} as Meta<BoxProps>;

export default meta;

export const Primary: StoryObj<BoxProps> = {};
