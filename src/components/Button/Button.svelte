<style lang="postcss">
  button {
    background-color: var(--color);
    color: black;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }
  }

  .white-text {
    color: white;
  }

  .outlined {
    background-color: white;
    color: var(--color);
    border: 1px solid var(--color);
  }

  .small {
    padding: 8px;
    font-size: 0.8rem;
  }

  .medium {
    padding: 12px;
    font-size: 0.9rem;
  }

  .large {
    padding: 14px;
    font-size: 1rem;
  }

  .primary {
    background-color: var(--primary);
    color: white;
  }

  .secondary {
    background-color: var(--secondary);
    color: black;
  }

  .success {
    background-color: var(--success);
    color: black;
  }

  .danger {
    background-color: var(--danger);
    color: white;
  }

  .warning {
    background-color: var(--warning);
    color: black;
  }

  .info {
    background-color: var(--info);
    color: white;
  }

  .light {
    background-color: var(--light);
    color: black;
  }

  .disabled {
    cursor: not-allowed;
  }

  .loader {
    border: 2px solid var(--background);
    border-top: 2px solid gray;
    border-radius: 50%;
    padding: 8px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script lang="ts">
  import {getContext} from 'svelte';
  import {type ThemeStore} from 'svelte-theme';
  import type {Colors} from '../../../types';

  export let color: Colors = 'light';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let type: 'submit' | undefined = undefined;
  export let style = '';
  export let disabled = false;
  export let loading = false;
  export let outlined = false;

  const getTheColorCode = () => {
    const {theme} = getContext<ThemeStore>('svelte-theme');

    return theme[color] || theme['light'];
  };

  const shouldWhiteText =
    color === 'danger' || color === 'primary' || color === 'info';

  const colorCode = getTheColorCode();
</script>

<button
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class:large={size === 'large'}
  class:white-text={shouldWhiteText}
  class:outlined
  class={$$props.class}
  type={type}
  style={`--color: ${colorCode}; ${style}`}
  disabled={disabled}
  on:click
>
  {#if loading}
    <div class="loader" />
  {/if}
  <slot />
</button>
