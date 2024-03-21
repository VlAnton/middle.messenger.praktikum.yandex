import './edit-credentials.scss';
import Block from '../../tools/block';
import { Input, Button } from '../../components';

export default class EditCredentials extends Block {
  constructor({ ...props }) {
    super({
      ...props,
      submitButton: new Button({
        text: "Сохранить",
        page: "profile"
      }),
      lists: {
        fields: [
          new Input({
            title: "Почта",
            name: "email",
            value: "pochta@yandex.ru",
            type: 'email'
          }),
          new Input({
            title: "Логин",
            value: "ivanivanov",
            name: "login"
          }),
          new Input({
            title: "Имя",
            value: "Иван",
            name: "first_name",
          }),
          new Input({
            title: "Фамилия",
            value: "Иванов",
            name: "second_name",
          }),
          new Input({
            title: "Имя в чате",
            value: "Иван",
            name: "second_name",
          }),
          new Input({
            title: "Телефон",
            value: "+7 (909) 967 30 30",
            name: "phone",
            type: 'tel'
          }),
        ]
      }
    });
  }

  render() {
    return `
      <div class="edit-page">
        <a class="edit-page__back-block" href="profile">
          <img class="icon-send-message" src="../../assets/icons/sendMessage.svg">
        </a>
      
        <form class="edit-page__form">
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
      </div>
    `
  }
}
