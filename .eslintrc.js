module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'indent': ['error', 'tab'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
	}],
	'react/jsx-indent': ['error', 'tab'],
	'react/jsx-indent-props': ['error', 'tab']
  },
};
