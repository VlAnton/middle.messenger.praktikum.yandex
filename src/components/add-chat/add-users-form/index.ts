import './add-users-dialog.scss';
import Block from '../../../tools/block';
import { Button, ChatInput } from '../..';
import store from '../../../store';
import { UserController } from '../../../controllers/user-controller';
import connect from '../../../tools/hoc';
import { UserItem } from '../../user-item';
import { ChatsController } from '../../../controllers/chats-controller';

class AddUsersDialogForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
      lists: {
        users: store.getState().searchedUsers.map(e => new ChatItem({...e}))
      },
      userInput: new ChatInput({ 
        title: 'Название чата',
        onBlur(value: string) {
          if (value) {
            UserController.searchUserByLogin({ login: value })
          }
        }
      }),
      createButton: new Button({ text: 'Добавить пользователей' }),
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const state = store.getState()
          const users = state.selectedUsers
          ChatsController.addUsersToChat({
            chatId: state.createdChatInForm.id,
            users
          })
        },
      },
    });

    UserController.searchUserByLogin({ login: '' })
  }

  render() {
    return `
      <form class="add-users" style="padding-top: 32px;">
        {{{ userInput }}}
        <div class="add-users__footer">
          <div class="add-users__users">
            {{{ users }}}
          </div>
          {{{ createButton }}}
        </div>
      </form>
    `;
  }
}

const mapStateToProps = (state) => {
  return {
    lists: {
      users: state.searchedUsers.map(e => new UserItem({...e}))
    }
  }
}

export default connect(mapStateToProps)(AddUsersDialogForm)
