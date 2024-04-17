import './add-chat-dialog.scss';
import Block from '../../../tools/block';
import { Button, Input, Link } from '../../../components';
import { router } from '../../../pages';
import { AuthController } from '../../../controllers/auth-controller';
import { AuthApiData, SignUpAPIData } from '../../../api/auth-api';
import store from '../../../store';
import { ChatsController } from '../../../controllers/chats-controller';
import AddUsersDialogForm from '../add-users-form';
import connect from '../../../tools/hoc';

class AddChatDialog extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isUsersAvailiable: Boolean(store.getState().createdChatInForm),
      users: [],
      titleInput: new Input({ title: 'Название чата' }),
      createButton: new Button({ text: 'Создать чат' }),
      usersForm: new AddUsersDialogForm({ title: 'Добавить пользователей' }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const { value } = this.children.titleInput.props;
          if (value) {
            ChatsController.createChat({ title: value })
          }
          if (store.getState().createdChatInForm) {
            this.setProps({ isUsersAvailiable: true })
          }
        },
      },
    });
  }

  render() {
    return `
      <form class="dialog dialog__form">
        <h1 class="dialog__title">
          {{ title }}
        </h1>
        {{{ titleInput }}}
        <div class="dialog__footer">
          {{{ createButton }}}
        </div>
        {{#if isUsersAvailiable }}
          {{{usersForm}}}
        {{/if}}
      </form>
    `;
  }
}

const mapStateToProps = (state) => {
  return {isUsersAvailiable: Boolean(state.createdChatInForm)}
}

export default connect(mapStateToProps)(AddChatDialog)
