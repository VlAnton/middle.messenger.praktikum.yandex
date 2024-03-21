import './chat-message.scss';
import Block from '../../tools/block'

export class ChatMessage extends Block {
  constructor({ ...props }) {
    super({
      ...props,
    });
  }

  render() {
    return `
      <div class="chat-message{{#if isYours}} chat-message__yours {{/if}}">
        <p class="chat-message__text">{{ message }}</p>
        <div class="chat-message__info">
          {{#if isYours }}
            {{#if isRead }}
              <img class="icon-read" src="../../assets/icons/read.svg" alt="read">
            {{/if}}
          {{/if}}
          <div class="chat-message__time {{#if isYours}} chat-message__time-yours {{/if}}">
            {{ date }}
          </div>
        </div>
      </div>
    `;
  }
}
