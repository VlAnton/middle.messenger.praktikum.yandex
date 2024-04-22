import './user-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';
import store from '../../store';

export class UserItem extends Block {
  constructor(props: Indexed) {
    const { avatar } = props;
    super({
      ...props,
      isSelected: false,
      display_name: props.display_name || `${props.first_name} ${props.second_name}`,
      avatar: new Avatar(avatar),
      selectedChats: [],
      events: {
        click(e: Event) {
          e.preventDefault()
          e.stopImmediatePropagation()
          const self = this as unknown as Block
          const id = self.props.id
          if (!self.props.isSelected) {
            self.setProps({isSelected: true})
            store.set('selectedUsers', [
              ...store.getState().selectedUsers, id
            ])
          } else {
            self.setProps({isSelected: false})
            store.set('selectedUsers', 
              store.getState().selectedUsers.filter((e: number) => e !== id)
            )
          }
        }
      }
    });
    if (store.getState().selectedUsers.includes(this.props.id)) {
      this.setProps({ isSelected: true })
    }
  }

  render() {
    return `
      <div id="{{id}}" class="user-item {{#if isSelected}} user-item__selected {{/if}}">
        {{{avatar}}}
        {{display_name}}
      </div>
    `;
  }
}
