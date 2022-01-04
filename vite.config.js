import {defineConfig} from 'vite';
import preprocess from 'svelte-preprocess';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  clearScreen: false,
  build: {
    outDir: './public',
  },
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {dev: !production},
      extensions: ['.svelte'],
      preprocess: preprocess({
        postcss: true,
        sourceMap: !production,
      }),
    }),
  ],
});