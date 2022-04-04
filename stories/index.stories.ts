import '../src/main/my-element';

import {TemplateResult, html} from 'lit';

export default {
  title: 'MyElement',
  component: 'my-element',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<TemplateResult> = () =>
  html`<my-element child="test component"></my-element> `;

export const Regular = Template.bind({});
