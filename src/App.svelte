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
  import {ThemeProvider} from 'svelte-theme';
  import Button from './components/Button';
</script>

<main>
  <ThemeProvider>
    <h1>dooboo-ui-svelte</h1>
    <Button size={'large'} label={'test'} />
  </ThemeProvider>
</main>
