import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@unimake-ui/react";

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
