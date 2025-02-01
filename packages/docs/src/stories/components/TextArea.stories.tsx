import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@unimake-ui/react";

const meta = {
	title: "Form/Text Area",
	component: TextArea,
	parameters: {
		TextArea
	},

	args: {
		disabled: false,
		$hasError: false,
		placeholder: ""
	},

	argTypes: {
		disabled: {
			type: "boolean"
		},

		placeholder: {
			type: "string"
		},

		$hasError: {
			type: "boolean"
		}
	},

	decorators: [
		Story => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<Text $size="sm">Descrição</Text>
					{Story()}
				</Box>
			);
		}
	],

	tags: ["autodocs"]
} as Meta<TextAreaProps>;

export default meta;

export const Primary: StoryObj<TextAreaProps> = {};

export const Placeholder: StoryObj<TextAreaProps> = {
	args: {
		placeholder: "Escreva uma descrição para esta atividade..."
	}
};

export const WithError: StoryObj<TextAreaProps> = {
	args: {
		$hasError: true
	}
};

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true
	}
};
