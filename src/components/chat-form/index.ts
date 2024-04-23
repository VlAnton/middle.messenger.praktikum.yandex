import './chat-form.scss';
import { ChatInput } from '..';
import Block from '../../tools/block';
import { ChatsController } from '../../controllers/chats-controller';
import sendFileUrl from '../../assets/icons/sendFIle.svg?url'
import sendMessageUrl from '../../assets/icons/sendMessage.svg?url'

export class ChatForm extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      sendFileUrl,
      sendMessageUrl,
      chatInput: new ChatInput({
        name: 'message',
        type: 'text',
        placeholder: 'Сообщение',
        onBlur(value: string) {
          if (!value || value.length < 1) {
            console.error('Сообщение не должно быть пустым');
          }
        },
      }),
      events: {
        submit(e: Event) {
          e.preventDefault();
          (e.target as HTMLInputElement).querySelectorAll('input').forEach(input => input.blur());
          const value = (this as unknown as ChatForm).children.chatInput.props
            .value;
          if (value) {
            ChatsController.websocket?.send(
              JSON.stringify({
                type: 'message',
                content: value,
              }),
            );
          }
          (this as unknown as ChatForm).children.chatInput.setProps({
            value: '',
          });
        },
      },
    });
  }

  override render() {
    return `
      <form class="chat-form">
        <img class="icon-send-file" src="{{sendFileUrl}}" alt="send-file">
        {{{ chatInput }}}
        <button class="chat-form__button" type="submit">
          <img class="icon-send-message" src="{{sendMessageUrl}}" alt="send-message">
        </button>
      </form>
    `;
  }
}
