import './input-field.scss';
import Block from '../../../tools/block';

export class InputField extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        blur: (e: Event) =>
          props.onBlur(this, (e.target as HTMLInputElement).value)
      },
    });
  }

  render() {
    return `
      <input
        id="input-field__element__{{ title }}"
        class="input-field__element {{#if className}} {{ className }} {{/if}}"
        type="{{ type }}"
        name="{{ name }}"
        value="{{ value }}"
      >
      {{#if error}}
        <p class="input-field__error">{{ error }}</p>
      {{/if}}
    `;
  }
}
