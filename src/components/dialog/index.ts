import './dialog.scss';
import Block from '../../tools/block';

export class Dialog extends Block {
  constructor(props) {
    const { fields, buttons } = props;
    super({
      ...props,
      lists: { fields, buttons },
    });
  }

  render() {
    return `
      <div class="dialog">
        <h1 class="dialog__title">
          {{ title }}
        </h1>
        <form class="dialog__form">
          <div class="dialog__content">
            {{{ fields }}}
          </div>
          <div class="dialog__footer">
            {{{ buttons }}}
          </div>
        </form>
      </div>
    `;
  }
}
