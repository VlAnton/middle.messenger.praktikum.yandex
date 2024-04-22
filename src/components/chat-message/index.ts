import './chat-message.scss';
import Block from '../../tools/block';
import store from '../../store';
import iconUrl from '../../assets/icons/read.svg?url'

export class ChatMessage extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      url: iconUrl
    });
    this.setProps({ isYours: this.props.user_id === store.getState().user.id });
  }

  render() {
    return `
      <div class="chat-message{{#if isYours}} chat-message__yours {{/if}}">
        <p class="chat-message__text">{{ content }}</p>
        <div class="chat-message__info">
          {{#if isYours }}
            {{#if is_read }}
              <img class="icon-read" src="{{url}}" alt="read">
            {{/if}}
          {{/if}}
          <div class="chat-message__time {{#if isYours}} chat-message__time-yours {{/if}}">
            {{ time }}
          </div>
        </div>
      </div>
    `;
  }
}
