import './chat-input.scss';
import Block from '../../tools/block';

export class ChatInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        blur: (e: Event) => {
          this.setProps({ value: (e.target as HTMLInputElement).value })
          props.onBlur && props.onBlur((e.target as HTMLInputElement).value)
        }
      },
    });
  }

  render() {
    return `
      <input
        class="chat-input chat-input__element {{#if className}} {{className}} {{/if}}"
        type="{{ type }}"
        name="{{ name }}"
        value="{{ value }}"
        placeholder="{{ placeholder }}"
      >
    `;
  }
}
