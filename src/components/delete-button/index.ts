import Block from '../../tools/block';

export class DeleteButton extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: {
        click() {
          props.onClick && props.onClick();
        },
      },
    });
  }

  render() {
    return `
      <div>
        <img src="../../../assets/icons/Cross.svg" alt="cross">
      </div>
    `;
  }
}
