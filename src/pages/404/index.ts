import './404.scss';
import Error from '../../components/error';
import Block from '../../tools/block';

export default class Page404 extends Block {
  constructor({ ...props }) {
    super({
      ...props,
      error: new Error({
        title: "404",
        subtitle: "Не туда попали",
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
