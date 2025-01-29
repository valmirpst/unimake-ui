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

export const { theme, ThemeProvider } = {
	ThemeProvider: ThemeProviderPrimitive,

	theme: {
		colors,
		darkColors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
		transitions
	}
};
