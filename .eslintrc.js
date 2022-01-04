module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@dooboo/eslint-config-svelte',
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
};
