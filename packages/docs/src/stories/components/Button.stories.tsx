import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@unimake-ui/react";
import { MoveRight } from "lucide-react";

const meta = {
	title: "Form/Button",
	component: Button,
	parameters: {
		Button
	},

	args: {
		variant: "primary",
		children: "Enviar",
		size: "md"
	},

	argTypes: {
		variant: {
			options: ["primary", "secondary", "tertiary", "danger", "safe", "ghost", "link"],
			control: { type: "inline-radio" }
		},

		size: {
			options: ["sm", "md", "full"],
			control: { type: "inline-radio" }
		},

		disabled: { control: "boolean" }
	},

	tags: ["autodocs"]
} as Meta<ButtonProps>;

export default meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: "secondary",
		children: "Adicionar"
	}
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: "tertiary",
		children: "Cancelar"
	}
};

export const Danger: StoryObj<ButtonProps> = {
	args: {
		variant: "danger",
		children: "Confirmar"
	}
};

export const Safe: StoryObj<ButtonProps> = {
	args: {
		variant: "safe",
		children: "Salvar"
	}
};

export const Ghost: StoryObj<ButtonProps> = {
	args: {
		variant: "ghost",
		children: "Ghost"
	}
};

export const Link: StoryObj<ButtonProps> = {
	args: {
		variant: "link",
		children: "Link"
	}
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: "sm"
	}
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Próximo passo
				<MoveRight />
			</>
		)
	}
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true
	}
};
