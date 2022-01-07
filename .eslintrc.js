const eslint = {
	extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base"
	],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-hooks", 'jest', 'prettier'],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
      }
    ],
    "class-methods-use-this": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "object-curly-newline": "off",
    "arrow-parens": "off",
    "no-console": "off",
    "max-len": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "function-paren-newline": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/indent": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "import/extensions": "off"
  }
	env: {
		'jest/globals': true,
	},
};

module.exports = eslint;