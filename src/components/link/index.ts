import './link.scss';
import Block from '../../tools/block';

export class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    return `
      <a
        class="link{{#if negative}} link__negative{{/if}} {{#if xl}}link__xl{{/if}}"
        href="{{ href }}"
      >
        {{ text }}
      </a>
    `;
  }
}
