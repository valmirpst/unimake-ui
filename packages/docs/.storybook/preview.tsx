import type { Preview } from "@storybook/react";
import { darkTheme, StyledThemeProvider, theme } from "@unimake-ui/react";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

import "@/app/globals.css";

const preview: Preview = {
	decorators: [
		Story => {
			const [activeTheme, setActiveTheme] = useState("light");

			return (
				<StyledThemeProvider theme={activeTheme === "light" ? theme : darkTheme}>
					<button
						style={{
							borderRadius: 4,
							border: "1px solid #ccc",
							padding: "0.5rem",
							display: "grid",
							position: "absolute",
							top: "1rem",
							right: "1rem"
						}}
						onClick={() => setActiveTheme(activeTheme === "light" ? "dark" : "light")}
					>
						{activeTheme === "light" ? <Sun size={16} /> : <Moon size={16} />}
					</button>
					<div className={activeTheme === "dark" ? "dark" : ""}>{Story()}</div>
				</StyledThemeProvider>
			);
		}
	],

	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
