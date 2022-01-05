import { ThemeProvider } from "svelte-theme";

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFF',
      },
      {
        name: 'dark',
        value: '#000'
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};