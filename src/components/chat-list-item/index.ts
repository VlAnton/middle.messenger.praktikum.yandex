import './chat-list-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';
import { ChatDeleteButton } from './chat-delete-button';

export class ChatItem extends Block {
  constructor(props: Props) {
    const { avatar } = props;
    super({
      ...props,
      avatar: new Avatar(avatar),
      cross: new ChatDeleteButton({
        id: props.id,
      }),
      events: {
        click() {
          if (this.props.isSelected) {
            this.setProps({ isSelected: false })
          } else {
            this.setProps({ isSelected: true })
          }
        }
      }
    });
  }

  render() {
    return `
      <div id="{{id}}" class="chat-item">
        <div class="chat-item__divider"></div>
        <div class="chat-item__block {{#if isSelected }} chat-item__selected{{/if}}">
          {{{ avatar }}}
          <div class="chat-item__message-block">
            <div class="chat-item__name">{{ title }} {{id}}</div>
            {{#if last_message }}
              <div class="chat-item__message">
                <p class="chat-item__message-text">
                  {{ last_message }}
                </p>
              </div>
            {{/if}}
          </div>
          <div class="chat-item__info-block">
          <div class="chat-item__date">{{ date }}</div>
          {{{cross}}}
          {{#if unread_count}}
              <div class="chat-item__unread">
                {{ unread_count }}
              </div>
            {{/if}}
          </div>
        </div>
      </div>
    `;
  }
}
