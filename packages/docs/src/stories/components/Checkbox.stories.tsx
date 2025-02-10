import { Box } from "@/components/ui/box";
import { Checkbox, CheckboxProps } from "@/components/ui/checkbox";
import { Text } from "@/components/ui/text";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Form/Checkbox",
	component: Checkbox,
	parameters: {
		Checkbox
	},

	args: {
		size: "md",
		disabled: false
	},

	argTypes: {
		size: {
			control: "inline-radio",
			options: ["sm", "md"]
		},
		disabled: {
			control: "boolean"
		}
	},

	decorators: [
		Story => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
					{Story()}
					<Text size="sm">Encerrado?</Text>
				</Box>
			);
		}
	],

	tags: ["autodocs"]
} as Meta<CheckboxProps>;

export default meta;

export const Primary: StoryObj<CheckboxProps> = {};

export const Small: StoryObj<CheckboxProps> = {
	args: {
		size: "sm"
	}
};

export const Disabled: StoryObj<CheckboxProps> = {
	args: {
		disabled: true
	}
};
