import './500.scss';
import Error from '../../components/error';
import Block from '../../tools/block';

export default class Page500 extends Block {
  constructor({ ...props }) {
    super({
      ...props,
      error: new Error({
        title: "500",
        subtitle: "Мы уже фиксим",
      })
    });
  }

  render() {
    return `
      <div class="error-404">
        {{{ error }}}
      </div>
    `
  }
}
