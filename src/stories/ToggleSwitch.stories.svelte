<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import ToggleSwitch from "./ToggleSwitch.svelte";
  </script>
  
  <Meta
    title="Example/ToogleSwitch"
    component={ToggleSwitch}
    argTypes={{
        checked: {control: 'boolean'},
        circleColorOff: {control: 'color'},
        circleColorOn: {control: 'color'},
        backgroundColorOn: {control: 'color'},
        backgroundColorOff: {control: 'color'}
    }}
  />
  
  <Template let:args>
    <ToggleSwitch
      {...args}
    />
  </Template>
  
  <Story
    name="ToggleSwitch"
    args={{
        checked: false,
    }}
  />
  
  