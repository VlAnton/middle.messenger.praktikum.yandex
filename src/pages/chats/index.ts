import './chats.scss';
import { ChatInput, ChatMessage, Avatar, Link } from '../../components';
import ChatItem from '../../components/chat-list-item';
import Block from '../../tools/block';
import store from '../../store';
import { router } from '..';
import connect from '../../tools/hoc';
import { ChatsController } from '../../controllers/chats-controller';
import { AddChat } from '../../components/add-chat';

class ChatsPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      lists: {
        chatItems: store.getState().chats.map(e => new ChatItem(e)),
        messages: [],
      },
      avatar: new Avatar({}),
      chatInput: new ChatInput({
        name: 'message',
        type: 'text',
        placeholder: 'Сообщение',
        onBlur(value: string) {
          if (!value || value.length < 1) {
            console.error('Сообщение не должно быть пустым');
          }
        },
      }),
      searchInput: new ChatInput({
        className: 'chat-input__search',
        name: 'search',
        type: 'search',
        placeholder: 'Поиск',
        onBlur(value: string) {
          if (!value) {
            return;
          }
          ChatsController.getChats()
        }
      }),
      createChatButton: new AddChat({
        text: 'Создать чат',
      }),
      profileLink: new Link({
        text: 'Профиль',
        onClick() {
          router.go('/profile')
        }
      })
    });

    ChatsController.getChats()
    if (store.getState().selectedChat) {
      this.setProps({isChatSelected: true})
      // ChatsController.
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
                <div class="chat-page__more">
                  <img class="icon-dots" src="../../assets/icons/dots.svg" alt="dots">
                </div>
              </div>
              <div class="chat-page__chat-body">
                {{{ messages }}}
              </div>
              <form class="chat-page__chat-input">
                <img class="icon-send-file" src="../../assets/icons/sendFIle.svg" alt="send-file">
                {{{ chatInput }}}
                <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
              </form>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    lists: {
      chatItems: state.chats.map(e => new ChatItem(e)),
      messages: state.messages.map(e => new ChatMessage(e)),
    },
    isChatSelected: Boolean(state.selectedChat)
  }
}

export default connect(mapStateToProps)(ChatsPage)
