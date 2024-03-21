import './input.scss';
import Block from '../../tools/block';

export class Input extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (e) => {
          props.onChange(e.target.value);
        },
      },
    });
  }

  render() {
    return `
      <div class="input-field">
        <label for="input-field__element__{{ title }}" class="input-field__title">{{ title }}</label>
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
      </div>
    `;
  }

  validate() {
    console.log('blur');
  }
}
