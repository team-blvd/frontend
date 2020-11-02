module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',

		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',

		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',

		'@react-native-community',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'no-use-before-define': [0],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-unresolved': 0,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
