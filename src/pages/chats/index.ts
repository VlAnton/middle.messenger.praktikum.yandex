import './chats.scss';
import ChatItem from '../../components/chat-list-item';
import Block from '../../tools/block';
import ChatInput from '../../components/chat-input';

const data = [
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

export default class ChatsPage extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      ...props,
      lists: data.map(
        e => new ChatItem({
          ...e,
          click: () => {
            console.log('click')
          }
        })
      ),
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
          {{{ lists }}}
        </div>

        <div class="chat-page__chat-preview">
          <p class="chat-page__chat-placeholder">
            Выберите чат чтобы отправить сообщение
          </p>
        </div>
      </div>
    `;
  }
}
