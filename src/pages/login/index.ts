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
            onBlur: (self: Block, value: string) => {
              console.log(value.length)
              if (value.length < 3 || value.length > 20) {
                self.setProps({
                  error: 'Длина неправильная',
                  value
                })
              }
            },
          }),
          new Input({
            title: 'Пароль',
            name: 'password',
            type: 'password',
            onBlur: (value: string) => {
            },
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
