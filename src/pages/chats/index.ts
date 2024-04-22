import './chats.scss';
import {
  ChatInput,
  ChatMessage,
  Avatar,
  Link,
  ChatItem,
  AddChat,
  ChatForm,
  ChatActions
} from '../../components';
import Block from '../../tools/block';
import store from '../../store';
import { router } from '..';
import connect from '../../tools/hoc';
import { ChatsController } from '../../controllers/chats-controller';
import { Chat, User } from '../../types/common';


class ChatsPage extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      lists: {
        chatItems: store.getState().chats.map((e: Chat) => new ChatItem(e)),
        messages: [],
      },
      avatar: new Avatar({}),
      chatForm: new ChatForm({}),
      searchInput: new ChatInput({
        className: 'chat-input__search',
        name: 'search',
        type: 'search',
        placeholder: 'Поиск',
      }),
      createChatButton: new AddChat({
        text: 'Создать чат',
      }),
      profileLink: new Link({
        text: 'Профиль',
        onClick() {
          router.go('/settings');
        },
      }),
      chatActions: new ChatActions({}),
    });

    ChatsController.getChats();
    if (store.getState().selectedChat) {
      this.setProps({ isChatSelected: true });
    }
  }

  override render() {
    return `
      <div class="chat-page">
        <div class="chat-page__chats">
          <div class="chat-page__header">
            <div class="chat-page__profile-link-wrapper">
              {{{ createChatButton }}}
              {{{ profileLink }}}
            </div>
            {{{ searchInput }}}
          </div>
          {{{ chatItems }}}
        </div>

        <div class="chat-page__chat-preview">
          {{#if isChatSelected }}
            <div class="chat-page__chat-body">
              <div class="chat-page__chat-header">
                <div class="chat-page__chat-name">
                  {{{ avatar }}}
                  <p>{{ display_name }}</p>
                </div>
                {{{ chatActions }}}
              </div>
              <div class="chat-page__chat-messages">
                {{{ messages }}}
              </div>
              {{{ chatForm }}}
            </div>
          {{else}}
            <p class="chat-page__chat-placeholder">
              Выберите чат чтобы отправить сообщение
            </p>
          {{/if}}
        </div>
      </div>
    `;
  }
}

const mapStateToProps = (state: Indexed) => {
  const chat = state.chats.find((e: Chat) => e.id === state.selectedChat);
  return {
    lists: {
      chatItems: state.chats.map((e: Chat) => new ChatItem(e)),
      messages: state.messages.map((e: User) => new ChatMessage(e)),
    },
    display_name: chat ? chat.title : '',
    isChatSelected: Boolean(state.selectedChat),
  };
};

export default connect(mapStateToProps)(ChatsPage);
