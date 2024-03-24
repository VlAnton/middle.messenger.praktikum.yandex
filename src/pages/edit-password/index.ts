import './edit-password.scss';
import Block from '../../tools/block';
import { Input, Button } from '../../components';

export default class EditPassword extends Block {
  constructor(props: Props) {
    const fields = [
      new Input({
        title: 'Старый пароль',
        value: '1231231',
        name: 'oldPassword',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$')
            const hasNumbers = value.search(/[0-9]/) !== -1
            const hasUpperCase = value.search(/[A-Z]/) !== -1
            return !regexp.test(value) || !hasNumbers || !hasUpperCase
          },
          error: 'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        }
      }),
      new Input({
        title: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$')
            const hasNumbers = value.search(/[0-9]/) !== -1
            const hasUpperCase = value.search(/[A-Z]/) !== -1
            return !regexp.test(value) || !hasNumbers || !hasUpperCase
          },
          error: 'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        }
      }),
      new Input({
        title: 'Повторите новый пароль',
        name: 'newPasswordAgain',
        type: 'password',
        validationProps: {
          func(value: string) {
            const regexp = new RegExp('^[a-zA-Z0-9]{8,40}$')
            const hasNumbers = value.search(/[0-9]/) !== -1
            const hasUpperCase = value.search(/[A-Z]/) !== -1
            return !regexp.test(value) || !hasNumbers || !hasUpperCase
          },
          error: 'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
        }
      }),
    ]
    super({
      ...props,
      submitButton: new Button({
        text: 'Сохранить',
        page: 'profile',
        onClick() {
          const formHasErrors = fields
            .some((el: Block) => el.props.error && el.props.error.length > 0)
          let formHasEmptyFields = false
          fields.forEach((el: Block) => {
            if (!el.element) {
              return
            }
            if (!el.props.value) {
              formHasEmptyFields = true
              el.setProps({ error: 'Поле не может быть пустым' })
            }
          })
          if (!formHasErrors && !formHasEmptyFields) {
            const res: Record<string, string> = {}
            fields.forEach((el: Block) => {
              res[el.props.name] = el.props.value
            })
            console.log(res)
          }
        }
      }),
      lists: {
        fields
      },
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
    `;
  }
}
