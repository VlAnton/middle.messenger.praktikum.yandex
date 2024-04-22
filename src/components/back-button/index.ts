import './back-button.scss';
import Block from '../../tools/block';
import { router } from '../../pages';

export class BackButton extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: {
        click(event: Event) {
          event.preventDefault();
          event.stopPropagation();
          router.go(props.link);
        },
      },
    });
  }

  render() {
    return `
      <div class="back-block">
        <img class="icon-send-message" src="../../assets/icons/sendMessage.svg" alt="send-message">
      </div>
    `;
  }
}
