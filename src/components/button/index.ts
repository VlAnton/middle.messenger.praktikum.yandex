import './button.scss';
import Block from '../../tools/block';

export class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          e.preventDefault()
          e.stopImmediatePropagation()
          props.onClick()
        },
      },
    });
  }

  render() {
    return `
      <button
        class="button{{#if className}} {{className}}{{/if}}"
        type="{{ type }}"
        page="{{ page }}"
      >
        {{ text }}
      </button>
    `;
  }
}
