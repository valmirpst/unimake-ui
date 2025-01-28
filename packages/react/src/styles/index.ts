import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space, transitions } from "@unimake-ui/tokens";

export const { theme, cn } = {
	cn: (...classes: (string | undefined | null | boolean)[]): string => {
		return classes.filter(Boolean).join(" ");
	},

	theme: {
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
		transitions
	}
};
