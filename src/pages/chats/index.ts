import './chats.scss';
import { ChatItem, ChatInput, ChatMessage, Avatar, Link, Button } from '../../components';
import Block from '../../tools/block';
import store from '../../store';
import { router } from '..';
import connect from '../../tools/hoc';
import { ChatsController } from '../../controllers/chats-controller';
import { AddChat } from '../../components/add-chat';

const messagesData = [
  {
    isYours: false,
    message:
      'Go на свалкуa sldkfjlkasjdflk jaslkdjflkjs ajdlkfjlaskj fklasfjd lkfjlask djlkjs fldkj asjkdf kjasndkj fnkjsdn kjfan kjdnaksj fnkjasdn knfskajdn kjsan kdjnf skdjnf kjsndkfn ksjdn kfjnksj ndkn kfnsdkj nfkjns dkjnk jnfksjn kdjn kjnsdkjn fkjsnd kjnfk sdjnkj nfdksjn kdjsnsdjknfk djsnfkjn fsdkjn kfjnsdk jnkjsn kfjndskj nkjsdn kfn fsdknkds jnkjdsn kjfsd!',
    date: '10:49',
  },
  { isYours: false, message: 'Привет', date: '10:49' },
  {
    isYours: true,
    message: 'Олололололололололололо',
    isRead: true,
    date: '10:49',
  },
];

class ChatsPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isChatSelected: true,
      lists: {
        chatItems: store.getState().chats.map(e => new ChatItem(e)),
        messages: messagesData.map((e) => new ChatMessage(e)),
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
  return {
    lists: {
      chatItems: state.chats.map(e => new ChatItem(e))
    }
  }
}

export default connect(mapStateToProps)(ChatsPage)
