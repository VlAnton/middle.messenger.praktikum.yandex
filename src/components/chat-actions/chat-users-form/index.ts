import './chat-users-form.scss';
import Block from '../../../tools/block';
import { Button } from '../..';
import store from '../../../store';
import connect from '../../../tools/hoc';
import { UserItem } from '../../user-item';
import { ChatsController } from '../../../controllers/chats-controller';
import { User } from '../../../types/common';

class DeleteUsersDialogForm extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      lists: {
        users: store
          .getState()
          .searchedUsers.map((e: User) => new UserItem({ ...e })),
      },
      deleteButton: new Button({
        text: 'Удалить пользователей',
        className: 'button__delete',
      }),
      events: {
        click(e: Event) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (!e.target) {
            return;
          }
          if (
            (e.target as HTMLButtonElement).classList.contains('button__delete')
          ) {
            const state = store.getState();
            const users = state.selectedUsers;
            const chatId = state.selectedChat;
            ChatsController.deleteChatUsers({ chatId, users });
          }
        },
      },
    });
  }

  render() {
    return `
      <form class="delete-users">
        <div class="delete-users__users">
          {{{ users }}}
        </div>
        {{{ deleteButton }}}
      </form>
    `;
  }
}

const mapStateToProps = (state: Indexed) => {
  return {
    lists: {
      users: state.usersToDelete?.map((e: User) => new UserItem({ ...e })),
    },
  };
};

export default connect(mapStateToProps)(DeleteUsersDialogForm);
