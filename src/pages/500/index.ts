import './500.scss';
import { ErrorBlock } from '../../components/error';
import Block from '../../tools/block';

export default class Page500 extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      error: new ErrorBlock({
        title: '500',
        subtitle: 'Мы уже фиксим',
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
