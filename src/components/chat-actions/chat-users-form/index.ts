import './chat-users-form.scss';
import Block from '../../../tools/block';
import { Button } from '../..';
import store from '../../../store';
import connect from '../../../tools/hoc';
import { UserItem } from '../../user-item';
import { ChatsController } from '../../../controllers/chats-controller';

class DeleteUsersDialogForm extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      lists: {
        users: store.getState().searchedUsers.map((e: User) => new UserItem({...e}))
      },
      deleteButton: new Button({ text: 'Удалить пользователей' }),
      events: {
        click(e: Event) {
          e.preventDefault()
          e.stopImmediatePropagation()
        },
        submit(e: Event) {
          e.preventDefault();
          e.stopImmediatePropagation();
          const state = store.getState()
          const users = state.selectedUsers
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

type User = {
  avatar: string | null
  display_name: string | null
  first_name: string
  id: number
  login: string
  second_name: string
}

const mapStateToProps = (state: Indexed) => {
  return {
    lists: {
      users: state.usersToDelete?.map((e: User) => new UserItem({...e}))
    }
  }
}

export default connect(mapStateToProps)(DeleteUsersDialogForm)
