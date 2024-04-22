import './input.scss';
import Block from '../../tools/block';
import { InputField } from './input-field';

export class Input extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      inputField: new InputField({
        ...props,
        onBlur: (value: string) => {
          if (!props.validationProps) {
            this.setProps({ value });
            return;
          }
          const { func, error } = props.validationProps;
          if (func(value)) {
            this.setProps({ error, value });
          } else {
            this.setProps({ error: '', value });
          }
        },
      }),
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
