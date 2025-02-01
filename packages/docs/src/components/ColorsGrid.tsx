import { colors, darkColors } from "@unimake-ui/tokens";
import { getContrast, lighten } from "polished";

const tailwindConfig = `
		colors: {
			transparent: "transparent",

			black: "#000000",

			white: {
				100: "#FFFFFF",
				300: "#FAFAFA",
			},

			gray: {
				gray100: "#E6E6EB",
				gray200: "#CECED8",
				gray300: "#9C9CAA",
				gray400: "#868692",
				gray500: "#5A5A63",
				gray600: "#3C3C42",
				gray700: "#303036",
				gray800: "#26262A",
				gray900: "#18181A",
			},

			unimake: {
				100: "#00527A",
				300: "#004465",
				500: "#003652",
				700: "#00293D",
				900: "#001B29",
			},

			green: {
				300: "#28A847",
				500: "#1F8438",
				700: "#17632A",
			},

			red: {
				300: "#D52A3E",
				500: "#BF2234",
				700: "#AD1F2F",
			},

			"gray-dark": {
				100: "#121214",
				200: "#202024",
				300: "#29292E",
				400: "#323238",
				500: "#7C7C8A",
				600: "#9494A2",
				700: "#ABABB7",
				800: "#C9C9D2",
				900: "#E1E1E6",
			},

			"green-dark": {
				300: "#28A847",
				500: "#1F8438",
				700: "#17632A",
			},

			"red-dark": {
				300: "#D02539",
				500: "#BF2234",
				700: "#AD1F2F",
			},
		}
`;

export function ColorsGrid() {
	return (
		<>
			<span
				style={{ textDecoration: "underline", cursor: "pointer" }}
				onClick={() => navigator.clipboard.writeText(tailwindConfig)}
			>
				copy tailwind config
			</span>
			<div style={{ marginTop: 16, marginBottom: 16 }}>
				<h2>Light</h2>
			</div>
			{Object.entries(colors).map(([key, color]) => {
				return (
					<div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								fontFamily: "monospace",
								color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF"
							}}
						>
							<strong>${key}</strong>
							<span>{color}</span>
						</div>
					</div>
				);
			})}
			<h2 style={{ marginBottom: 16, marginTop: 32 }}>Dark</h2>
			<div style={{ backgroundColor: lighten(0.0375, darkColors.gray100), padding: 16, margin: -16, borderRadius: 4 }}>
				{Object.entries(darkColors).map(([key, color]) => {
					return (
						<div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									fontFamily: "monospace",
									color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF"
								}}
							>
								<strong>${key}</strong>
								<span>{color}</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
