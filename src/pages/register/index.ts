import './register.scss';

import Block from '../../tools/block';
import { Input, Button, Dialog, Link } from '../../components';


export default class RegisterPage extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      ...props,
      dialog: new Dialog({
        title: 'Регистрация',
        fields: [
          new Input({
            title: "Почта",
            name: "email",
            type: 'email'
          }),
          new Input({
            title: "Логин",
            name: "login"
          }),
          new Input({
            title: "Имя",
            name: "first_name",
          }),
          new Input({
            title: "Фамилия",
            name: "second_name",
          }),
          new Input({
            title: "Телефон",
            name: "phone",
            type: 'tel'
          }),
          new Input({
            title: "Пароль",
            name: "password",
            type: 'password'
          }),
          new Input({
            title: "Пароль (ещё раз)",
            name: "passwordRepeat",
            type: 'password'
          }),
        ],
        buttons: [
          new Button({
            text: "Зарегистрироваться",
            page: "chats"
          }),
          new Link({
            text: "Войти",
            href: "login"
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
