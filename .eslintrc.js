module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unsafe-call": "off",
    camelcase: 0,
    indent: "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "no-console": "warn",
    curly: ["error", "all"],
    "max-len": [
      "error",
      {
        code: 140,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    semi: [2, "always"],
    "arrow-parens": ["error", "always"],
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-use-before-define": [0],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@typescript-eslint/ban-ts-comment": 0,
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
      {
        blankLine: "always",
        prev: "*",
        next: ["const", "let", "var", "export"],
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var", "export"],
        next: ["const", "let", "var", "export"],
      },
      {
        blankLine: "always",
        prev: ["multiline-const", "multiline-expression", "multiline-let", "multiline-block-like", "multiline-var"],
        next: ["multiline-const", "multiline-expression", "multiline-let", "multiline-block-like", "multiline-var"],
      },
      {
        blankLine: "always",
        prev: ["if", "class", "for", "do", "while", "switch", "try"],
        next: "*",
      },
    ],
    "@typescript-eslint/no-empty-function": 0,
    "no-unused-expressions": "off",
    "default-param-last": ["warn"],
    "no-undef": 0,
    "no-duplicate-imports": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  ],
};
