<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import ImageEditable from '../index';
  </script>
  
  <Meta
    title="ImageEditable"
    component={ImageEditable}
    argTypes={{
        src: {control: 'text'},
        isEditing: {control: 'boolean'},
        altImage: {control: 'text'},
        containerStyle: {control: 'text'},
        imageStyle: {control: 'text'},
        altImageWrapperStyle: {control: 'text'},
        iconStyle: {control: 'text'},
        onClick: {action: "onClick"},
    }}
  />
  
  <Template let:args >
    <ImageEditable
      on:click={args.onClick}
      {...args}
    />
  </Template>
  
  <Story
    name="ImageEditable"
    args={{}}
  />