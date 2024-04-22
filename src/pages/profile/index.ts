import './profile.scss';
import Block from '../../tools/block';
import { Link, BackButton } from '../../components';
import store from '../../store';
import { AuthController } from '../../controllers/auth-controller';
import connect from '../../tools/hoc';
import { router } from '..';

class ProfilePage extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      ...store.getState().user,
      changeCredentials: new Link({
        text: 'Изменить данные',
        xl: true,
        onClick: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          router.go('/change-profile');
        },
      }),
      changePassword: new Link({
        text: 'Изменить пароль',
        xl: true,
        onClick: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          router.go('/change-password');
        },
      }),
      backButton: new BackButton({
        link: '/messenger',
      }),
      exit: new Link({
        text: 'Выйти',
        href: 'login',
        xl: true,
        negative: true,
        onClick: (e: Event) => {
          e.preventDefault();
          AuthController.signOut();
        },
      }),
    });
  }

  render() {
    return `
      <div class="profile-page">
        {{{ backButton }}}
      
        <div class="profile-page__info">
          <div class="profile-page__header">
            <div class="profile-page__image">
              <img class="icon-profile-img" src="../../assets/icons/profileImg.svg" alt="profile-img">
            </div>
      
            <div class="profile-page__name">
              {{#if display_name }}{{ display_name }} {{else}} {{first_name}} {{ second_name}} {{/if}}
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
              <p class="profile-page__item__value">{{ first_name }}</p>
            </div>
            <div class="profile-page__divider"></div>
            <div class="profile-page__item">
              <p class="profile-page__item__key">Фамилия</p>
              <p class="profile-page__item__value">{{ second_name }}</p>
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

const mapStateToProps = (state: Indexed) => ({ ...state.user });

export default connect(mapStateToProps)(ProfilePage);
