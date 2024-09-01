import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { ESLint } from "eslint";

// Define the ESLint configuration
const eslintConfig = {
	ignores: ["dist"],
	extends: [
		js.configs.recommended,
		"@typescript-eslint/recommended",
		"prettier",
	],
	files: ["**/*.{ts,tsx}"],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser,
		parser: "@typescript-eslint/parser",
	},
	plugins: {
		"react-hooks": reactHooks,
		"react-refresh": reactRefresh,
		"@typescript-eslint": "@typescript-eslint/eslint-plugin",
	},
	rules: {
		...reactHooks.configs.recommended.rules,
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};

// Create an ESLint instance and set the configuration
const eslint = new ESLint({ overrideConfig: eslintConfig });

export default eslint;
