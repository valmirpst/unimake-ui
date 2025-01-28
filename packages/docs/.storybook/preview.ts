import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		dark: { ...themes.dark },
		light: { ...themes.normal },
		darkMode: {
			current: "light"
		}
	}
};

export default preview;
