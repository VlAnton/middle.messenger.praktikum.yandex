import './chat-action.scss';
import Block from '../../../tools/block';
import ChatForm from '../chat-users-form';
import { ChatsController } from '../../../controllers/chats-controller';

export class ChatAction extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      isOpened: false,
      chatForm: new ChatForm({}),
      events: {
        click(event: Event) {
          event.preventDefault()
          event.stopImmediatePropagation()
          ChatsController.getChatUsers()
          props.onClick && props.onClick(this)
        }
      }
    });
  }

  render() {
    return `
      <div class="chat-action">
        <p class="{{#if negative}} chat-action__negative {{/if}}">{{ title }}</p>
        {{#if isOpened}}
          <div class="chat-action__dialog">
            {{{ chatForm }}}
          </div>
          <div class="chat-action__overlay"></div>
        {{/if}}
      </div>
    `;
  }
}
