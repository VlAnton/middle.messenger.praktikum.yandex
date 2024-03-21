import './error.scss';
import Block from '../../tools/block';
import { Link } from '../link';

export class ErrorBlock extends Block {
  constructor({ ...props }) {
    super({
      ...props,
      link: new Link({
        text: 'Назад к чатам',
        href: 'chats',
      }),
    });
  }

  render() {
    return `
      <div class="error">
        <h1 class="error__title">
          {{ title }}
        </h1>
        <h2 class="error__subtitle">
          {{ subtitle }}
        </h2>
        <div class="error__footer">
          {{{ link }}}
        </div>
      </div>
    `;
  }
}
