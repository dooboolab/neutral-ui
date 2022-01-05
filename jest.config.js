module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!svelte-theme)'],
  moduleNameMapper: {'^.+\\.(css|less|scss)$': 'babel-jest'},
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  modulePathIgnorePatterns: ['build', 'public'],
  testEnvironment: 'jsdom',
  globals: {
    window: {},
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
    },
  },
};
