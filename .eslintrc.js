module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'error',
		quotes: [2, 'single', { avoidEscape: true }],
		'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
		'padded-blocks': [2, 'never'],
	},
};
