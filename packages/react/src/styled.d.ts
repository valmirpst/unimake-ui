import * as theme from "@unimake-ui/tokens";
import "styled-components";

type Theme = typeof theme;

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
