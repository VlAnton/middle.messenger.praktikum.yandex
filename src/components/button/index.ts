import './button.scss';
import Block from '../../tools/block';

export class Button extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return `
      <button
        class="button{{#if className}} {{className}}{{/if}}"
        type="{{ type }}"
      >
        {{ text }}
      </button>
    `;
  }
}
