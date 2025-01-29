import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@unimake-ui/react";
import { User2 } from "lucide-react";

const meta = {
	title: "Form/Text Input",
	component: TextInput,
	parameters: {
		TextInput
	},

	args: {
		$size: "md",
		disabled: false,
		$hasError: false,
		placeholder: "",
		$prefix: ""
	},

	argTypes: {
		$size: {
			options: ["md", "lg"],
			control: "inline-radio"
		},

		disabled: {
			type: "boolean"
		},

		placeholder: {
			type: "string"
		},

		$hasError: {
			type: "boolean"
		},

		$prefix: {
			type: "string"
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
} as Meta<TextInputProps>;

export default meta;

export const Primary: StoryObj<TextInputProps> = {};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		$prefix: "github.com/"
	}
};

export const WithStartIcon: StoryObj<TextInputProps> = {
	args: {
		$startIcon: <User2 />
	}
};

export const WithEndIcon: StoryObj<TextInputProps> = {
	args: {
		$endIcon: <User2 />
	}
};

export const WithError: StoryObj<TextInputProps> = {
	args: {
		$hasError: true
	}
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true
	}
};
