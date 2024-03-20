import './chat-input.scss';
import Block from '../../tools/block';

export default class ChatInput extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (e) => {
          props.onChange(e.target.value);
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
