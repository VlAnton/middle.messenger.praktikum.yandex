import './login.scss';

import Block from '../../tools/block';
import { Input, Button, Dialog, Link } from '../../components';

export default class LoginPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      dialog: new Dialog({
        title: 'Вход',
        fields: [
          new Input({
            title: 'Логин',
            name: 'login',
            onBlurProps: {
              func(value: string) {
                const regexp = new RegExp('^[a-zA-Z0-9_-]{3,20}$')
                return !regexp.test(value) || !Number.isNaN(Number(value))
              },
              error: 'Длина должна быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
            }
          }),
          new Input({
            title: 'Пароль',
            name: 'password',
            type: 'password',
            onBlurProps: {
              func(value: string) {
                const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$')
                const hasNumbers = value.search(/[0-9]/) !== -1
                const hasUpperCase = value.search(/[A-Z]/) !== -1
                return !regexp.test(value) || !hasNumbers || !hasUpperCase
              },
              error: 'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
            }
          }),
        ],
        buttons: [
          new Button({
            text: 'Авторизоваться',
            type: 'submit',
            page: 'chats',
          }),
          new Link({
            text: 'Нет аккаунта?',
            href: 'register',
          }),
        ],
      }),
    });
  }

  override render() {
    return `
      <div class="login-page">
        {{{ dialog }}}
      </div>
    `;
  }
}
