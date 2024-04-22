import './chat-actions.scss';
import Block from '../../tools/block';
import { ChatAction } from './chat-action';
import { ChatsController } from '../../controllers/chats-controller';
import store from '../../store';

export class ChatActions extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      isOpened: false,
      lists: {
        actions: [
          new ChatAction({
            title: 'Удаление пользователей',
            isDeletion: true,
            onClick(self: Block) {
              if (self.props.isOpened) {
                self.setProps({ isOpened: false });
              } else {
                self.setProps({ isOpened: true });
              }
            },
          }),
          new ChatAction({
            title: 'Добавление пользователей',
            type: 'add',
            onClick(self: Block) {
              if (self.props.isOpened) {
                self.setProps({ isOpened: false });
              } else {
                self.setProps({ isOpened: true });
              }
            },
          }),
          new ChatAction({
            title: 'Удалить чат',
            negative: true,
            onClick() {
              ChatsController.deleteChat({
                chatId: store.getState().selectedChat,
              });
              store.set('selectedChat', null);
            },
          }),
        ],
      },
      events: {
        click(event: Event) {
          event.preventDefault();
          const self = this as unknown as Block;
          if (self.props.isOpened) {
            self.setProps({ isOpened: false });
          } else {
            self.setProps({ isOpened: true });
          }
        },
      },
    });
  }

  render() {
    return `
      <div class="chat-actions">
        <img class="icon-dots" src="../../assets/icons/dots.svg" alt="dots">
        {{#if isOpened}}
          <div class="chat-actions__menu">
            {{{ actions }}}
          </div>
        {{/if}}
      </div>
    `;
  }
}
