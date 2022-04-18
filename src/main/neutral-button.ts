import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

import {colors} from '../colors';

@customElement('neutral-button')
export class NeutralButton extends LitElement {
  static styles = [
    colors,
    css`
      :host {
        display: inline-block;
      }

      :host button {
        background-color: var(--button-color, #000);
        color: var(--text-color, #fff);
        border: 1px solid var(--border-color, #000);
        min-width: 6em;
        height: 3em;
        border-radius: 2em;
        padding: 1em 1.5em;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      :host(.small) button {
        font-size: 0.75rem;
      }

      :host(.medium) button {
        font-size: 1rem;
      }

      :host(.large) button {
        font-size: 1.125rem;
      }

      :host(.primary) button {
        background-color: var(--primary);
        color: var(--white);
        border: none;
      }

      :host(.secondary) button {
        background-color: var(--secondary);
        color: var(--black);
        border: none;
      }

      :host(.success) button {
        background-color: var(--success);
        color: var(--black);
        border: none;
      }

      :host(.danger) button {
        background-color: var(--danger);
        color: var(--white);
        border: none;
      }

      :host(.warning) button {
        background-color: var(--warning);
        color: var(--black);
        border: none;
      }

      :host(.info) button {
        background-color: var(--info);
        color: var(--black);
        border: none;
      }

      :host(.light) button {
        background-color: var(--light);
        color: var(--black);
        border: none;
      }

      :host(.disabled) button {
        background-color: var(--disabled);
        color: var(--black);
        border: none;
      }

      :host(.outlined) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
      }

      :host(.outlined.primary) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--primary);
      }

      :host(.outlined.secondary) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--secondary);
      }

      :host(.outlined.success) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--success);
      }

      :host(.outlined.danger) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--danger);
      }

      :host(.outlined.warning) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--warning);
      }

      :host(.outlined.info) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--info);
      }

      :host(.outlined.light) button {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--light);
      }

      :host(.outlined.disabled) button {
        background-color: var(--white);
        color: var(--disabled);
        border: 1px solid var(--disabled);
      }

      .loader {
        border: 2px solid var(--background-color, #fff);
        border-top: 2px solid var(--text-color, #000);
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  @property({type: Boolean})
  loading = false;

  @property({type: String})
  size = 'small';

  @property({type: Boolean})
  outlined = false;

  protected render(): TemplateResult {
    return html`
      <button>
        <slot name="left-element"></slot>
        ${this.loading ? html`<div class="loader" />` : html`<slot />`}
        <slot name="right-element"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neutral-button': NeutralButton;
  }
}
