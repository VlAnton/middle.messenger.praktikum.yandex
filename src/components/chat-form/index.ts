import './chat-form.scss';
import { ChatInput } from '..';
import Block from '../../tools/block';
import { ChatsController } from '../../controllers/chats-controller';

export class ChatForm extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
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
          e.preventDefault()
          const value = (this as unknown as ChatForm).children.chatInput.props.value
          if (value) {
            ChatsController.websocket?.send(
                JSON.stringify({
                  type: 'message',
                  content: value,
                }),
            );
          }
          (this as unknown as ChatForm).children.chatInput.setProps({ value: '' })
        }
      }
    });
  }

  override render() {
    return `
      <form class="chat-form">
        <img class="icon-send-file" src="../../assets/icons/sendFIle.svg" alt="send-file">
        {{{ chatInput }}}
        <button class="chat-form__button" type="submit">
          <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
        </button>
      </form>
    `;
  }
}
