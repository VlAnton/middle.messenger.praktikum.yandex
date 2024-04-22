import './link.scss';
import Block from '../../tools/block';

export class Link extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: {
        click(e: Event) {
          props.onClick && props.onClick(e);
        },
      },
    });
  }

  render() {
    return `
      <a
        class="link{{#if negative}} link__negative{{/if}} {{#if xl}}link__xl{{/if}}"
      >
        {{ text }}
      </a>
    `;
  }
}
