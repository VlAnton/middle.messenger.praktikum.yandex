import './back-button.scss';
import Block from '../../tools/block';
import { router } from '../../pages';
import iconUrl from '../../assets/icons/sendMessage.svg?url';

export class BackButton extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      url: iconUrl,
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
        <img class="icon-send-message" src="{{url}}" alt="send-message">
      </div>
    `;
  }
}
