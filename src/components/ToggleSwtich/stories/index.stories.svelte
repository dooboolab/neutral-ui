<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import ToggleSwitch from "../";
  </script>
  
  <Meta
    title="ToogleSwitch"
    component={ToggleSwitch}
    argTypes={{
        checked: {control: 'boolean'},
        size: {control: {type: 'select', options: ['large', 'medium', 'small']}},
        onClick: {action: "onClick"},
        checked: {control: 'boolean'},
        circleColorOff: {control: 'color'},
        circleColorOn: {control: 'color'},
        backgroundColorOn: {control: 'color'},
        backgroundColorOff: {control: 'color'}
    }}
  />
  
  <Template let:args >
    <ToggleSwitch
      {...args}
      on:click={args.onClick}
      styles={{
        circleColorOff: args.circleColorOff,
        circleColorOn: args.circleColorOn,
        backgroundColorOn: args.backgroundColorOn,
        backgroundColorOff: args.backgroundColorOff,
      }}
      
    />
  </Template>
  
  <Story
    name="ToggleSwitch"
    args={{
        checked: false,
        size: 'medium'
    }}
  />