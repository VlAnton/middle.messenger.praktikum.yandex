import './chat-action.scss';
import Block from '../../../tools/block';
import ChatForm from '../chat-users-form';
import { ChatsController } from '../../../controllers/chats-controller';
import AddUsersDialogForm from '../../add-chat/add-users-form';

export class ChatAction extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      isOpened: false,
      deleteChatForm: new ChatForm({}),
      addChatForm: new AddUsersDialogForm({}),
      events: {
        click(event: Event) {
          event.preventDefault();
          event.stopPropagation();
          ChatsController.getChatUsers();
          props.onClick && props.onClick(this);
        },
      },
    });
  }

  render() {
    return `
      <div class="chat-action">
        <p class="{{#if negative}} chat-action__negative {{/if}}">{{ title }}</p>
        {{#if isOpened}}
          <div class="chat-action__dialog">
            {{#if isDeletion}}
              {{{ deleteChatForm }}}
            {{else}}
              {{{ addChatForm }}}
            {{/if}}
          </div>
          <div class="chat-action__overlay"></div>
        {{/if}}
      </div>
    `;
  }
}
