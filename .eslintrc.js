module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@dooboo/eslint-config-svelte',
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
