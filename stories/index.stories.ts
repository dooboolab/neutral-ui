import '../src/main/neutral-button';

import {TemplateResult, html} from 'lit';

export default {
  title: 'Button',
  component: 'neutral-button',
  argTypes: {
    textColor: {control: 'color'},
    buttonColor: {control: 'color'},
    borderColor: {control: 'color'},
    size: {
      options: ['small', 'medium', 'large'],
      control: {type: 'select'},
    },
    loading: {control: 'boolean'},
    click: {action: 'clicked'},
  },
  label: {control: 'text'},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  textColor?: string;
  buttonColor?: string;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  onClick?: {};
}

const template: Story<ArgTypes> = ({
  textColor,
  buttonColor,
  borderColor,
  loading,
  size,
}) =>
  html` <neutral-button
    class=${size}
    style="--text-color: ${textColor}; --button-color: ${buttonColor}; --border-color: ${borderColor}"
    .loading=${loading}
  >
    Button
  </neutral-button>`;

export const Button: Story<ArgTypes> = (args) =>
  html`
    <style>
      .container {
        margin: 0 20px;
      }

      section {
        border-bottom: 1px solid #000;
        padding: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
      }
    </style>

    <main class="container">
      <section>
        <h2>Demo</h2>
        <div>${template({...args})}</div>
      </section>
      <section>
        <h2>Basic Styles</h2>
        <div class="button-wrapper">
          <neutral-button class="medium primary">Primary</neutral-button>
          <neutral-button class="medium secondary">Secondary</neutral-button>
          <neutral-button class="medium success">Success</neutral-button>
          <neutral-button class="medium danger">Danger</neutral-button>
          <neutral-button class="medium warning">Warning</neutral-button>
          <neutral-button class="medium info">Info</neutral-button>
          <neutral-button class="medium light">Light</neutral-button>
          <neutral-button class="medium disabled">Disabled</neutral-button>
        </div>
      </section>
      <section>
        <h2>Outlined Styles</h2>
        <div class="button-wrapper">
          <neutral-button class="medium primary">Primary</neutral-button>
          <neutral-button class="medium secondary">Secondary</neutral-button>
          <neutral-button class="medium success">Success</neutral-button>
          <neutral-button class="medium danger">Danger</neutral-button>
          <neutral-button class="medium warning">Warning</neutral-button>
          <neutral-button class="medium info">Info</neutral-button>
          <neutral-button class="medium light">Light</neutral-button>
          <neutral-button class="medium disabled">Disabled</neutral-button>
        </div>
      </section>
      <section>
        <h2>Aspect of sizes</h2>
        <div class="button-wrapper">
          <neutral-button class="large">button</neutral-button>
          <neutral-button class="medium">button</neutral-button>
          <neutral-button class="small">button</neutral-button>
        </div>
      </section>
    </main>
  `;
