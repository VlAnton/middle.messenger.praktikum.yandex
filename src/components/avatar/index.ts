import './avatar.scss';
import Block from '../../tools/block'

export class Avatar extends Block {
  constructor({ ...props }) {
    super({
      ...props,
    });
  }

  render() {
    return `
      <div class="avatar">
        {{#if src }}
          <img class="avatar__img" src={{ src }} alt="avatar"><img>
        {{/if}}
      </div>
    `
  }
}
