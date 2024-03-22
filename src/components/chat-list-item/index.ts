import './chat-list-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';

export class ChatItem extends Block {
  constructor(props: Props) {
    const { avatar } = props;
    super({
      ...props,
      avatar: new Avatar(avatar),
    });
  }

  render() {
    return `
      <div class="chat-item">
        <div class="chat-item__divider"></div>
        <div class="chat-item__block {{#if isSelected }} chat-item__selected{{/if}}">
          {{{ avatar }}}
          <div class="chat-item__message-block">
            <div class="chat-item__name">{{ display_name }}</div>
            <div class="chat-item__message">
              <p class="chat-item__message-text">
                {{ message }}
              </p>
            </div>
          </div>
          <div class="chat-item__info-block">
            <div class="chat-item__date">{{ date }}</div>
            {{#if unread}}
              <div class="chat-item__unread">
                {{ unread }}
              </div>
            {{/if}}
          </div>
        </div>
      </div>
    `;
  }
}
