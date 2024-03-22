import './chat-input.scss';
import Block from '../../tools/block';

export class ChatInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        change: (e: Event) => {
          if (e) {
            props.onChange((e.target as HTMLInputElement).value);
          }
        },
      },
      attr: {
        class: 'fake',
      },
    });
  }

  render() {
    return `
      <div class="chat-input">
        <input
          class="chat-input__element {{#if className}} {{className}} {{/if}}"
          type="{{ type }}"
          name="{{ name }}"
          value="{{ value }}"
          placeholder="{{ placeholder }}"
        >
      </div>
    `;
  }

  validate() {
    console.log('blur');
  }
}
