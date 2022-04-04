import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({type: String})
  child = '';

  render(): TemplateResult {
    return html` <div>${this.child}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
