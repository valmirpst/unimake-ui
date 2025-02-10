#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

// Função para instalar um componente específico
function installComponent(component) {
	const componentPath = path.resolve(
		__dirname,
		`../src/components/${component.includes(".tsx") ? component : `${component}.tsx`}`
	);

	if (fs.existsSync(componentPath)) {
		console.log(`Instalando o componente ${component}...`);

		const targetPath = path.resolve("./src/components/ui/");

		if (!fs.existsSync(targetPath)) {
			console.log(`A pasta ${targetPath} não existe. Criando...`);
			fs.mkdirSync(targetPath, { recursive: true });
			console.log(`Pasta ${targetPath} criada com sucesso!`);
		}

		execSync(`cp -r ${componentPath} ${targetPath}`, { stdio: "inherit" });

		console.log(`${component} instalado com sucesso!`);
	} else {
		console.error(`Componente ${component} não encontrado!`);
	}
}

function installCnFile() {
	const cnFilePath = path.resolve(__dirname, "../src/lib/cn.ts");
	const targetPath = path.resolve("./src/lib/");

	if (!fs.existsSync(targetPath)) {
		console.log(`A pasta ${targetPath} não existe. Criando...`);
		fs.mkdirSync(targetPath, { recursive: true });
		console.log(`Pasta ${targetPath} criada com sucesso!`);
	}

	if (fs.existsSync(cnFilePath)) {
		execSync(`cp ${cnFilePath} ${targetPath}`, { stdio: "inherit" });
		console.log("cn.ts instalado com sucesso!");
	} else {
		console.error("Arquivo cn.ts não encontrado!");
	}
}

function instalGlobalsCssFile() {
	const cnFilePath = path.resolve(__dirname, "../src/globals.css");
	const targetPath = path.resolve("./src/app/");

	if (!fs.existsSync(targetPath)) {
		console.log(`A pasta ${targetPath} não existe. Criando...`);
		fs.mkdirSync(targetPath, { recursive: true });
		console.log(`Pasta ${targetPath} criada com sucesso!`);
	}

	if (fs.existsSync(cnFilePath)) {
		execSync(`cp ${cnFilePath} ${targetPath}`, { stdio: "inherit" });
		console.log("globals.css instalado com sucesso!");
	} else {
		console.error("Arquivo globals.css não encontrado!");
	}
}

function installTailwindConfigFile() {
	const cnFilePath = path.resolve(__dirname, "../tailwind.config.ts");
	const targetPath = path.resolve("./");

	if (fs.existsSync(cnFilePath)) {
		execSync(`cp ${cnFilePath} ${targetPath}`, { stdio: "inherit" });
		console.log("tailwind.config.ts instalado com sucesso!");
	} else {
		console.error("Arquivo tailwind.config.ts não encontrado!");
	}
}

function installPostCssConfig() {
	const cnFilePath = path.resolve(__dirname, "../postcss.config.mjs");
	const targetPath = path.resolve("./");

	if (fs.existsSync(cnFilePath)) {
		execSync(`cp ${cnFilePath} ${targetPath}`, { stdio: "inherit" });
		console.log("postcss.config.mjs instalado com sucesso!");
	} else {
		console.error("Arquivo postcss.config.mjs não encontrado!");
	}
}

// Função para instalar todos os componentes
function installAllComponents() {
	const componentsDir = path.resolve(__dirname, "../src/components");
	const components = fs.readdirSync(componentsDir);

	console.log("Instalando todos os componentes...");

	components.forEach(component => {
		const componentPath = path.resolve(componentsDir);

		// Verifica se o componente é uma pasta (assumimos que cada componente é uma pasta)
		if (fs.statSync(componentPath).isDirectory()) {
			installComponent(component);
		}
	});

	console.log("Todos os componentes foram instalados com sucesso!");
}

// Receber o nome do componente como argumento
const args = process.argv.slice(2);
if (args.length === 0) {
	// Se não passar nada, instala todos os componentes
	installAllComponents();
	installCnFile();
	instalGlobalsCssFile();
	installTailwindConfigFile();
	installPostCssConfig();
} else {
	// Se passar um componente, instala apenas ele
	const component = args[0];
	installComponent(component);
}
