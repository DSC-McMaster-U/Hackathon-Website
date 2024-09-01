import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import { ESLint } from "eslint";
import typescriptParser from "@typescript-eslint/parser";

// Define the ESLint configuration
const eslintConfig = {
	ignorePatterns: [
		"dist", // Build output directory
		"node_modules", // Node modules
		"coverage", // Test coverage reports
		"vite.config.ts", // Vite configuration file (if you have one)
		"*.config.js", // Configuration files that might not need linting
	],
	extends: [
		js.configs.recommended,
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: typescriptParser,
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "react-hooks", "@typescript-eslint"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		...react.configs.recommended.rules,
		...reactHooks.configs.recommended.rules,
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"react/react-in-jsx-scope": "off",
	},
};

// Create an ESLint instance and set the configuration
const eslint = new ESLint({ overrideConfig: eslintConfig });

export default eslint;
