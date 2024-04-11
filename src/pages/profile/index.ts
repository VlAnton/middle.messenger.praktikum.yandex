import './profile.scss';
import Block from '../../tools/block';
import { Link } from '../../components';
import { UserController } from '../../controllers/user-controller';
import store, { StoreEvents } from '../../store';
import { AuthController } from '../../controllers/auth-controller';
import connect from '../../tools/hoc';
import { router } from '..';

class ProfilePage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      ...store.getState().user,
      changeCredentials: new Link({
        text: 'Изменить данные',
        href: 'edit-credentials',
        xl: true,
        onClick: (e: Event) => {
          e.preventDefault()
          e.stopImmediatePropagation()
          router.go('/edit-credentials')
        }
      }),
      changePassword: new Link({
        text: 'Изменить пароль',
        href: 'edit-password',
        xl: true,
        onClick: (e: Event) => {
          e.preventDefault()
          e.stopImmediatePropagation()
          router.go('/edit-password')
        }
      }),
      exit: new Link({
        text: 'Выйти',
        href: 'login',
        xl: true,
        negative: true,
        onClick: (e: Event) => {
          e.preventDefault()
          e.stopImmediatePropagation()

          AuthController.signOut()
        }
      }),
    });
    console.log(store.getState())
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

const mapStateToProps = (state) => ({...state.user})

export default connect(mapStateToProps)(ProfilePage)
