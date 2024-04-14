import './add-chat.scss';
import Block from '../../tools/block';

export class AddChat extends Block {
  constructor(props: Props) {
    super({
      ...props,
      modalOpened: false,
      events: {
        click() {
          (this as unknown as Block).setProps({ modalOpened: true })
          props.onClick && props.onClick()
        }
      }
    });
  }

  render() {
    return `
      <button class="add-chat">
        {{#if modalOpened}}
          <div class="add-chat__modal">
            
          </div>
        {{/if}}
        {{ text }}
      </button>
    `;
  }
}
