import './edit-password.scss';
import Block from '../../tools/block';
import { Input, Button, BackButton, AvatarSetter } from '../../components';
import { UserController } from '../../controllers/user-controller';
import { UserPasswordAPIData } from '../../types/api';

export default class EditPassword extends Block {
  constructor(props: Indexed) {
    const fields = [
      new Input({
        title: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$');
            const hasNumbers = value.search(/[0-9]/) !== -1;
            const hasUpperCase = value.search(/[A-Z]/) !== -1;
            return !regexp.test(value) || !hasNumbers || !hasUpperCase;
          },
          error:
            'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        },
      }),
      new Input({
        title: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$');
            const hasNumbers = value.search(/[0-9]/) !== -1;
            const hasUpperCase = value.search(/[A-Z]/) !== -1;
            return !regexp.test(value) || !hasNumbers || !hasUpperCase;
          },
          error:
            'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        },
      }),
      new Input({
        title: 'Повторите новый пароль',
        name: 'newPasswordAgain',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$');
            const hasNumbers = value.search(/[0-9]/) !== -1;
            const hasUpperCase = value.search(/[A-Z]/) !== -1;
            return !regexp.test(value) || !hasNumbers || !hasUpperCase;
          },
          error:
            'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        },
      }),
    ];
    super({
      ...props,
      avatarSetter: new AvatarSetter({}),
      events: {
        submit(e: Event) {
          e.preventDefault();
          e.stopImmediatePropagation();
          (e.target as HTMLInputElement)
            .querySelectorAll('input')
            .forEach((input) => input.blur());

          const formHasErrors = fields.some(
            (el: Block) => el.props.error && el.props.error.length > 0,
          );
          let formHasEmptyFields = false;
          fields.forEach((el: Block) => {
            if (!el.element) {
              return;
            }
            if (!el.props.value) {
              formHasEmptyFields = true;
              el.setProps({ error: 'Поле не может быть пустым' });
            }
          });
          if (!formHasErrors && !formHasEmptyFields) {
            const res: Indexed = {};
            fields.forEach((el: Block) => {
              res[el.props.name] = el.props.value;
            });
            UserController.editPassword(res as UserPasswordAPIData);
          }
        },
      },
      submitButton: new Button({
        text: 'Сохранить',
        type: 'submit',
      }),
      backButton: new BackButton({
        link: '/settings',
      }),
      lists: {
        fields,
      },
    });
  }

  render() {
    return `
      <form class="edit-password-page">
        {{{ backButton }}}
        <div class="profile-page__header">
          {{{ avatarSetter }}}
        </div>
        <div class="edit-password-page__fields">
          {{{ fields }}}
        </div>
        <div class="edit-password-page__footer">
          {{{ submitButton }}}
        </div>
      </form>
    `;
  }
}
