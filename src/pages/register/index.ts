import './register.scss';

import Block from '../../tools/block';
import { Input, Dialog } from '../../components';
import { SignUpController } from '../../controllers/sign-up-controller';

export default class RegisterPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      dialog: new Dialog({
        title: 'Регистрация',
        fields: [
          new Input({
            title: 'Почта',
            name: 'email',
            type: 'email',
            validationProps: {
              func(value: string) {
                const regexp = new RegExp('^(\\w|-)+@[a-zA-Z]+\\.[a-zA-Z]+$');
                return !regexp.test(value);
              },
              error:
                'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть @ и точка после неё, но перед точкой обязательно должны быть буква',
            },
          }),
          new Input({
            title: 'Логин',
            name: 'login',
            validationProps: {
              func(value: string) {
                const regexp = new RegExp('^[a-zA-Z0-9_-]{3,20}$');
                return !regexp.test(value) || !Number.isNaN(Number(value));
              },
              error:
                'Длина должна быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
            },
          }),
          new Input({
            title: 'Имя',
            name: 'first_name',
            validationProps: {
              func(value: string) {
                const regexp = new RegExp('^[А-ЯA-Z][а-яa-z-]+$');
                return !regexp.test(value);
              },
              error:
                'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, разрешается дефис',
            },
          }),
          new Input({
            title: 'Фамилия',
            name: 'second_name',
            validationProps: {
              func(value: string) {
                const regexp = new RegExp('^[А-ЯA-Z][а-яa-z-]+$');
                return !regexp.test(value);
              },
              error:
                'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, разрешается дефис',
            },
          }),
          new Input({
            title: 'Телефон',
            name: 'phone',
            type: 'tel',
            validationProps: {
              func(value: string) {
                const regexp = new RegExp('^\\+{0,1}\\d{10,15}$');
                return !regexp.test(value);
              },
              error:
                'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
            },
          }),
          new Input({
            title: 'Пароль',
            name: 'password',
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
            title: 'Пароль (ещё раз)',
            name: 'passwordRepeat',
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
        ],
        buttonProps: {
          text: 'Зарегистрироваться',
          page: 'chats',
        },
        linkProps: {
          text: 'Войти',
          href: 'login',
        },
      }),
    });
  }

  override render() {
    return `
      <div class="register-page">
        {{{ dialog }}}
      </div>
    `;
  }
}
