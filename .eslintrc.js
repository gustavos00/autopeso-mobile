module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'none',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ]
  }
};
