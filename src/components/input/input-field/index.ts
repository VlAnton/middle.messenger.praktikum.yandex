import './input-field.scss';
import Block from '../../../tools/block';

export class InputField extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: {
        blur: (e: Event) => {
          this.setProps({ value: (e.target as HTMLInputElement).value });
          props.onBlur((e.target as HTMLInputElement).value);
        },
      },
    });
  }

  render() {
    return `
      <input
        id="input-field__element__{{ title }}"
        class="input-field-element {{#if className}} {{ className }} {{/if}}"
        type="{{ type }}"
        name="{{ name }}"
        value="{{ value }}"
      >
    `;
  }
}
