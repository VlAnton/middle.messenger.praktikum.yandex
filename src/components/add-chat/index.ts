import './add-chat.scss';
import Block from '../../tools/block';
import AddChatDialog from './add-chat-dialog';

export class AddChat extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      modalOpened: false,
      dialog: new AddChatDialog({
        title: 'Создать чат',
      }),
      events: {
        click(event: Event) {
          if ((event.target as HTMLElement).className === 'add-chat__overlay') {
            (this as unknown as Block).setProps({ modalOpened: false });
            return;
          }
          (this as unknown as Block).setProps({ modalOpened: true });
          props.onClick && props.onClick();
        },
      },
    });
  }

  render() {
    return `
      <button class="add-chat">
        {{#if modalOpened}}
          <div class="add-chat__overlay"></div>
          {{{ dialog }}}
        {{/if}}
        {{ text }}
      </button>
    `;
  }
}
