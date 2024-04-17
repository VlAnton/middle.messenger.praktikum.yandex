import { ChatsController } from "../../../controllers/chats-controller";
import Block from "../../../tools/block";

export class ChatDeleteButton extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click() {
          ChatsController.deleteChat({ chatId: props.id })
        }
      }
    });
  }

  render() {
    return `
      <div>
        <img src="../../../assets/icons/Cross.svg" alt="cross">
      </div>
    `
  }
}
