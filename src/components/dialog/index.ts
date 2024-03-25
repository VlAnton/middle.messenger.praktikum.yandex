import './dialog.scss';
import Block from '../../tools/block';
import { Button, Link } from '../../components';

export class Dialog extends Block {
  constructor(props: Props) {
    const { fields, buttonProps, linkProps } = props;
    super({
      ...props,
      lists: { fields },
      button: new Button(buttonProps),
      link: new Link(linkProps),

      events: {
        submit: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const formHasErrors = props.fields.some(
            (el: Block) => el.props.error && el.props.error.length > 0,
          );
          let formHasEmptyFields = false;
          props.fields.forEach((el: Block) => {
            if (!el.element) {
              return;
            }
            if (!el.props.value) {
              formHasEmptyFields = true;
              el.setProps({ error: 'Поле не может быть пустым' });
            }
          });
          if (!formHasErrors && !formHasEmptyFields) {
            // window.location.pathname = 'chats'
            const res: Record<string, string> = {};
            fields.forEach((el: Block) => {
              res[el.props.name] = el.props.value;
            });
            console.log(res);
          }
        },
      },
    });
  }

  render() {
    return `
      <form class="dialog dialog__form">
        <h1 class="dialog__title">
          {{ title }}
        </h1>
        <div class="dialog__content">
          {{{ fields }}}
        </div>
        <div class="dialog__footer">
          {{{ button }}}
          {{{ link }}}
        </div>
      </form>
    `;
  }
}
