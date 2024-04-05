import './profile.scss';
import Block from '../../tools/block';
import { Link } from '../../components';

export default class ProfilePage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      changeCredentials: new Link({
        text: 'Изменить данные',
        href: 'edit-credentials',
        xl: true,
      }),
      changePassword: new Link({
        text: 'Изменить пароль',
        href: 'edit-password',
        xl: true,
      }),
      exit: new Link({
        text: 'Выйти',
        href: 'login',
        xl: true,
        negative: true,
      }),
    });
  }

  render() {
    return `
      <div class="profile-page">
        <a class="profile-page__back-block" href="chats">
          <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
        </a>
      
        <div class="profile-page__info">
          <div class="profile-page__header">
            <div class="profile-page__image">
              <img class="icon-profile-img" src="../../assets/icons/profileImg.svg" alt="profile-img">
            </div>
      
            <div class="profile-page__name">
              {{ display_name }}
            </div>
          </div>
      
          <div class="profile-page__body">
            <div class="profile-page__item">
              <p class="profile-page__item__key">Почта</p>
              <p class="profile-page__item__value">{{ email }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Логин</p>
              <p class="profile-page__item__value">{{ login }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Имя</p>
              <p class="profile-page__item__value">{{ name }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Фамилия</p>
              <p class="profile-page__item__value">{{ lastName }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Имя в чате</p>
              <p class="profile-page__item__value">{{ display_name }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Телефон</p>
              <p class="profile-page__item__value">{{ phone }}</p>
            </div>
          </div>
      
          <div class="profile-page__footer">
            {{{ changeCredentials }}}
            <div class="profile-page__divider"></div>
            {{{ changePassword }}}
            <div class="profile-page__divider"></div>
            {{{ exit }}}
          </div>
        </div>
      </div>
    `;
  }
}
