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
import { ThemeProvider as ThemeProviderPrimitive } from "styled-components";

export const { theme, darkTheme, ThemeProvider } = {
	ThemeProvider: ThemeProviderPrimitive,

	theme: {
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
