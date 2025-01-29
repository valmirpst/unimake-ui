import {
	colors,
	darkColors,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
	space,
	transitions
} from "@unimake-ui/tokens";

export { styled, ThemeProvider, useTheme } from "styled-components";

export const { theme, darkTheme } = {
	theme: {
		title: "light",
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
		transitions
	},

	darkTheme: {
		title: "dark",
		colors: darkColors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
		transitions
	}
};
