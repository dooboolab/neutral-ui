<style lang="postcss">
  main {
    text-align: center;
  }

  h1 {
    font-size: 4em;
    color: var(--text);
  }
</style>

<script lang="ts">
  import {getContext} from 'svelte';

  import {ThemeProvider, type ThemeStore} from 'svelte-theme';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });
  };

  toggleTheme();
</script>

<main>
  <ThemeProvider>
    <h1>dooboo-ui-svelte</h1>
  </ThemeProvider>
</main>
