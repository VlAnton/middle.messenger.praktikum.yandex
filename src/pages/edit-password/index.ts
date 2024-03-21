import './edit-password.scss';
import Block from '../../tools/block';
import { Input, Button } from '../../components';

export default class EditPassword extends Block {
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
            title: "Старый пароль",
            value: "1231231",
            name: "oldPassword",
            type: 'password'
          }),
          new Input({
            title: "Новый пароль",
            name: "newPassword",
            type: 'password'
          }),
          new Input({
            title: "Повторите новый пароль",
            name: "newPasswordAgain",
            type: 'password'
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
