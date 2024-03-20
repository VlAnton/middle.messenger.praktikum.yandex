import './link.scss';
import Block from '../../tools/block'

export default class Link extends Block {
  constructor({ ...props }) {
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
    `
  }
}
