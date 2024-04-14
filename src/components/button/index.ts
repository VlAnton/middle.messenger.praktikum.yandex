import './button.scss';
import Block from '../../tools/block';

export class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click() {
          props.onClick && props.onClick()
        }
      }
    });
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
