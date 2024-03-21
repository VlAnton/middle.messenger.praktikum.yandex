import './button.scss';
import Block from '../../tools/block';

export class Button extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        click: () => console.log('event')
      }
    })
  }

  render() {
    return `
      <button
        class="button{{#if className}} {{className}}{{/if}}"
        type="submit"
        page="{{ page }}"
      >
        {{ text }}
      </button>
    `
  }
}
