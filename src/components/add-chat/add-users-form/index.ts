import './add-users-dialog.scss';
import Block from '../../../tools/block';
import { Button, ChatInput } from '../..';
import store from '../../../store';
import { UserController } from '../../../controllers/user-controller';
import connect from '../../../tools/hoc';
import { UserItem } from '../../user-item';
import { ChatsController } from '../../../controllers/chats-controller';

class AddUsersDialogForm extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      lists: {
        users: store
          .getState()
          .searchedUsers.map((e: User) => new UserItem({ ...e })),
      },
      userInput: new ChatInput({
        title: 'Название чата',
        onBlur(value: string) {
          if (value) {
            UserController.searchUserByLogin({ login: value });
          }
        },
      }),
      createButton: new Button({
        text: 'Добавить пользователей',
        className: 'button__add',
      }),
      events: {
        click(e: Event) {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
          if (!e.target) {
            return;
          }
          if (
            (e.target as HTMLButtonElement).classList.contains('button__add')
          ) {
            const state = store.getState();
            const users = state.selectedUsers;
            ChatsController.addUsersToChat({
              chatId: state.createdChatInForm?.id || state.selectedChat,
              users,
            });
            state.set('selectedUsers', []);
          }
        },
      },
    });

    UserController.searchUserByLogin({ login: '' });
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

type User = {
  avatar: string | null;
  display_name: string | null;
  first_name: string;
  id: number;
  login: string;
  second_name: string;
};

const mapStateToProps = (state: Indexed) => {
  return {
    lists: {
      users: state.searchedUsers.map((e: User) => new UserItem({ ...e })),
    },
  };
};

export default connect(mapStateToProps)(AddUsersDialogForm);
