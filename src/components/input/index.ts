import './input.scss';
import Block from '../../tools/block';
import { InputField } from './input-field';

export class Input extends Block {
  constructor(props: Props) {
    super({
      ...props,
      inputField: new InputField({ ...props }),
    });
  }

  render() {
    return `
      <div class="input-field">
        <label for="input-field__element__{{ title }}" class="input-field__title">{{ title }}</label>
        {{{ inputField }}}
        {{#if error}}
          <p class="input-field__error">{{ error }}</p>
        {{/if}}
      </div>
    `;
  }
}
