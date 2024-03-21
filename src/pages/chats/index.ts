import './chats.scss';
import ChatItem from '../../components/chat-list-item';
import Block from '../../tools/block';
import ChatInput from '../../components/chat-input';
import ChatMessage from '../../components/chat-message';

const chatsData = [
  {
    id: 5,
    avatar: { size: 'medium', src: '' },
    display_name: 'John Doe',
    date: '10:59',
    message: 'Чекаво? Вася!',
    unread: '9',
    isSelected: false
  },
  {
    id: 7,
    avatar: { size: 'medium', src: './assets/icons/dots.svg' },
    display_name: 'Samanta Smith',
    date: '10:59',
    message: 'Алло, на!',
    unread: '7',
    isSelected: false
  },
];

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
]

export default class ChatsPage extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      ...props,
      lists: {
        chatItems: chatsData.map(
          e => new ChatItem(e)
        ),
        messages: messagesData.map(
          e => new ChatMessage(e)
        )
      },
      chatInput: new ChatInput({
        name: "message",
        type: "text",
        placeholder: "Сообщение"
      }),
      searchInput: new ChatInput({
        className: "chat-input__search",
        name: "search",
        type: "search",
        placeholder: "Поиск"
      })
    });
  }

  override render() {
    return `
      <div class="chat-page">
        <div class="chat-page__chats">
          <div class="chat-page__header">
            <div class="chat-page__profile-link-wrapper">
              <a class="chat-page__profile-link" href="profile">
                Профиль
              </a>
              <img class="icon-chevron-right" src="../../assets/icons/chevron right.svg" alt="chevron-right">
            </div>
            {{{searchInput}}}
          </div>
          {{{ chatItems }}}
        </div>

        <div class="chat-page__chat-preview">
          {{#if isChatSelected }}
            <div class="chat-page__chat-body">
              <div class="chat-page__chat-header">
                <div class="chat-page__chat-name">
                  <p>{{ display_name }}</p>
                </div>
                <div class="chat-page__more">
                  <img class="icon-dots" src="../../assets/icons/dots.svg" alt="dots">
                </div>
              </div>
              <div class="chat-page__chat-body">
                {{{ messages }}}
              </div>
              <div class="chat-page__chat-input">
                <img class="icon-send-file" src="../../assets/icons/sendFIle.svg" alt="send-file">
                {{{ chatInput }}}
                <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
              </div>
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
