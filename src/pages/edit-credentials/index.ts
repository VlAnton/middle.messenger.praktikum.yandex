import './edit-credentials.scss';
import Block from '../../tools/block';
import { Input, Button } from '../../components';

export default class EditCredentials extends Block {
  constructor(props: Props) {
    const fields = [
      new Input({
        title: 'Почта',
        name: 'email',
        value: 'pochta@yandex.ru',
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
        value: 'ivanivanov',
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
        value: 'Иван',
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
        value: 'Иванов',
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
        title: 'Имя в чате',
        value: 'Иван',
        name: 'display_name',
      }),
      new Input({
        title: 'Телефон',
        value: '+7 (909) 967 30 30',
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
    ];
    super({
      ...props,
      events: {
        submit(e: Event) {
          e.preventDefault();
          e.stopImmediatePropagation();
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
            const res: Record<string, string> = {};
            fields.forEach((el: Block) => {
              res[el.props.name] = el.props.value;
            });
          }
        },
      },
      submitButton: new Button({
        text: 'Сохранить',
        type: 'submit',
      }),
      lists: {
        fields,
      },
    });
  }

  render() {
    return `
      <form class="edit-page edit-page__form">
        <a class="edit-page__back-block" href="profile">
          <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
        </a>

        <div class="profile-page__header">
          <div class="profile-page__image">
            <img class="icon-profile-img" src="../../assets/icons/profileImg.svg" alt="profile-img">
          </div>
        </div>
        <div class="edit-page__fields">
          {{{ fields }}}
        </div>
        <div class="edit-page__footer">
          {{{ submitButton }}}
        </div>
      </form>
    `;
  }
}
