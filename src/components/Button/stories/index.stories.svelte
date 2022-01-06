<script>
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import {ThemeProvider} from 'svelte-theme';
  import Button from '../index';
</script>

<Meta
  title="Button"
  component={Button}
  argTypes={{
    color: {control: 'text'},
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
    },
    outlined: {control: 'boolean'},
    disabled: {control: 'boolean'},
    loading: {control: 'boolean'},
    onClick: {action: 'onClick'},
  }}
/>

<Template let:args>
  <ThemeProvider>
    <Button {...args} on:click={args.onClick}>Button</Button>
  </ThemeProvider>
</Template>

<Story name="Default Button" />

<Story
  name="Loading Button"
  args={{
    loading: true,
  }}
/>

<Story
  name="Outlined Button"
  args={{
    color: 'primary',
    outlined: true,
  }}
/>

<Story
  name="Primary"
  args={{
    primary: true,
    color: 'primary',
  }}
/>

<Story
  name="Secondary"
  args={{
    color: 'secondary',
  }}
/>

<Story
  name="Success"
  args={{
    color: 'success',
  }}
/>

<Story
  name="Danger"
  args={{
    color: 'danger',
  }}
/>

<Story
  name="Info"
  args={{
    color: 'info',
  }}
/>

<Story
  name="Light"
  args={{
    color: 'light',
  }}
/>
