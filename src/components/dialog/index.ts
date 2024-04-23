import './dialog.scss';
import Block from '../../tools/block';
import { Button, Link } from '../../components';
import { router } from '../../pages';
import { AuthController } from '../../controllers/auth-controller';
import store from '../../store';
import { AuthApiData, SignUpAPIData } from '../../types/api';

export class Dialog extends Block {
  constructor(props: Indexed) {
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
          (e.target as HTMLInputElement).querySelectorAll('input').forEach(input => input.blur());
          const formHasErrors =
            props.fields &&
            props.fields.some(
              (el: Block) => el.props.error && el.props.error.length > 0,
            );
          let formHasEmptyFields = false;
          props.fields &&
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
            const res: Record<string, string> = {};
            fields.forEach((el: Block) => {
              res[el.props.name] = el.props.value;
            });
            if (router.getCurrentRoute()?.match('/')) {
              AuthController.signIn(res as AuthApiData);
            } else {
              AuthController.signUp(res as SignUpAPIData);
            }
            if (store.getState().user.id) {
              router.go('/messenger');
            }
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
