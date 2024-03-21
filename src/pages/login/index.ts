import './login.scss';

import Block from '../../tools/block';
import Dialog from '../../components/dialog';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';


export default class LoginPage extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      ...props,
      dialog: new Dialog({
        title: 'Вход',
        fields: [
          new Input({
            title: "Логин",
            name: "login"
          }),
          new Input({
            title: "Пароль",
            name: "password",
            type: 'password'
          }),
        ],
        buttons: [
          new Button({
            text: "Авторизоваться",
            page: "chats"
          }),
          new Link({
            text: "Нет аккаунта?",
            href: "register"
          })
        ]
      })
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
