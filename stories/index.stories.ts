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
    classNames: {control: 'text'},
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
  classNames?: string;
  loading?: boolean;
  onClick?: () => void;
}

const template: Story<ArgTypes> = ({
  textColor,
  buttonColor,
  borderColor,
  loading,
  size,
  onClick,
  classNames,
}) =>
  html` <neutral-button
    class=${`${classNames} ${size}`}
    style="--text-color: ${textColor}; --button-color: ${buttonColor}; --border-color: ${borderColor}"
    .loading=${loading}
    @click=${onClick}
  >
    Button
  </neutral-button>`;

const facebookButton = template.bind({});
facebookButton.args = {
  loading: true,
  onClick: () => {
    console.log('test');
  },
};

export const Button: Story<ArgTypes> = (args) => {
  return html`
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

      section h2 {
        margin-bottom: 3rem;
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
      }
    </style>

    <main class="container">
      <section>
        <h2>Demo</h2>
        ${template({...args})}
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
          <neutral-button class="medium primary outlined">
            Primary
          </neutral-button>
          <neutral-button class="medium secondary outlined">
            Secondary
          </neutral-button>
          <neutral-button class="medium success outlined">
            Success
          </neutral-button>
          <neutral-button class="medium danger outlined">
            Danger
          </neutral-button>
          <neutral-button class="medium warning outlined">
            Warning
          </neutral-button>
          <neutral-button class="medium info outlined"> Info </neutral-button>
          <neutral-button class="medium light outlined">Light</neutral-button>
          <neutral-button class="medium disabled outlined">
            Disabled
          </neutral-button>
        </div>
      </section>

      <section>
        <h2>Aspect of sizes</h2>
        <div class="button-wrapper">
          <neutral-button class="large">Large</neutral-button>
          <neutral-button class="medium">Medium</neutral-button>
          <neutral-button class="small">Small</neutral-button>
        </div>
      </section>

      <section>
        <h2>Adding elements</h2>
        <div class="button-wrapper">
          <neutral-button class="large outlined">
            <img
              slot="left-element"
              src="../assets/google.png"
              style="margin-right: 20px;"
            />
            GOOGLE SIGN IN
          </neutral-button>
          <neutral-button class="large">
            <img
              slot="left-element"
              src="../assets/facebook.png"
              style="margin-right: 20px;"
            />
            <span>FACEBOOK SIGN IN</span>
          </neutral-button>
          ${facebookButton({...args})}
        </div>
      </section>
    </main>
  `;
};
