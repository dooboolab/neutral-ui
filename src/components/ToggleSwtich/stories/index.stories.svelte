<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import ToggleSwitch from "../";
  </script>
  
  <Meta
    title="Components/ToggleSwitch"
    component={ToggleSwitch}
    argTypes={{
        checked: {control: 'boolean'},
        size: {control: {type: 'select', options: ['large', 'medium', 'small']}},
        onClick: {action: "onClick"},
        checked: {control: 'boolean'},
        circleColorOff: {control: 'color', defaultValue: '#fff'},
        circleColorOn: {control: 'color', defaultValue: '#fff'},
        backgroundColorOn: {control: 'color', defaultValue: '#A3DA8D'},
        backgroundColorOff: {control: 'color', defaultValue: '#A9A9A9'}
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
    id="main"
    name="ToggleSwitch"
    args={{
        checked: false,
        size: 'medium'
    }}
  />