import './chat-list-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';
import { ChatDeleteButton } from '../delete-button';
import store from '../../store';
import { ChatsController } from '../../controllers/chats-controller';

export default class ChatItem extends Block {
  constructor(props: Indexed) {
    const { avatar } = props;
    super({
      ...props,
      avatar: new Avatar(avatar),
      events: {
        click() {
          const self = this as unknown as Block
          if (self.props.selectedChat === self.props.id) {
            self.setProps({ isSelected: false })
            store.set('selectedChat', null)
          } else {
            self.setProps({ isSelected: true })
            store.set('selectedChat', self.props.id)
            ChatsController.getChatToken()
          }
        }
      }
    });
    const date = this.props.last_message?.time
    if (date) {
      const newDate = new Date(date)
      this.setProps({
        date: `${newDate.toLocaleDateString('ru-RU')} ${newDate.toLocaleTimeString('ru-RU', { weekday: 'short' })}`
      })
    }
    if (store.getState().selectedChat === this.props.id) {
      this.setProps({ isSelected: true })
    }
  }

  render() {
    return `
      <div id="{{id}}" class="chat-item">
        <div class="chat-item__divider"></div>
        <div class="chat-item__block {{#if isSelected }} chat-item__selected{{/if}}">
          {{{ avatar }}}
          <div class="chat-item__message-block">
            <div class="chat-item__name">{{ title }}</div>
            <div class="chat-item__message">
              <p class="chat-item__message-text">
                {{ last_message.content }}
              </p>
            </div>
          </div>
          <div class="chat-item__info-block">
            <div class="chat-item__date">{{ date }}</div>
            {{#if unread_count}}
              <div class="chat-item__unread">
                {{ unread_count }}
              </div>
            {{/if}}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
