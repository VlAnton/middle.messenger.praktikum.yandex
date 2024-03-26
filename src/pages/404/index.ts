import './404.scss';
import { ErrorBlock } from '../../components';
import Block from '../../tools/block';

export default class Page404 extends Block {
  constructor(props: Props) {
    super({
      ...props,
      error: new ErrorBlock({
        title: '404',
        subtitle: 'Не туда попали',
      }),
    });
  }

  render() {
    return `
      <div class="error-404">
        {{{ error }}}
      </div>
    `;
  }
}
