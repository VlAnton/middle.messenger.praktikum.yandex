import './chat-list-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';
import { ChatDeleteButton } from './chat-delete-button';
import store from '../../store';
import connect from '../../tools/hoc';

class ChatItem extends Block {
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
          const self = this as unknown as Block
          if (self.props.selectedChat === self.props.id) {
            self.setProps({ isSelected: false })
            store.set('selectedChat', null)
          } else {
            self.setProps({ isSelected: true })
            store.set('selectedChat', self.props.id)
          }
        }
      }
    });
    if (this.props.selectedChat === this.props.id) {
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

const mapStateToProps = (state) => {
  return {
    selectedChat: state.selectedChat
  }
}

export default connect(mapStateToProps)(ChatItem)
