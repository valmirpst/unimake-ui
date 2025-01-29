import type { Preview } from "@storybook/react";
import { theme, ThemeProvider } from "@unimake-ui/react";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const preview: Preview = {
	decorators: [
		Story => {
			const [activeTheme, setActiveTheme] = useState("light");

			return (
				<ThemeProvider theme={activeTheme === "light" ? theme : { ...theme, colors: theme.darkColors }}>
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
					{Story()}
				</ThemeProvider>
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
