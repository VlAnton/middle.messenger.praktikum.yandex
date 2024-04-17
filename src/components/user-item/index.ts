import './user-item.scss';
import Block from '../../tools/block';
import { Avatar } from '../avatar';
import store from '../../store';

export class UserItem extends Block {
  constructor(props: Props) {
    const { avatar } = props;
    super({
      ...props,
      isSelected: false,
      display_name: props.display_name || `${props.first_name} ${props.second_name}`,
      avatar: new Avatar(avatar),
      selectedChats: [],
      events: {
        click() {
          const id = (this as unknown as Block).props.id
          if (!store.getState().selectedUsers.includes(id)) {
            this.setProps({isSelected: true})
            store.set('selectedUsers', [
              ...store.getState().selectedUsers, id
            ])
          } else {
            this.setProps({isSelected: false})
            store.set('selectedUsers', 
              store.getState().selectedUsers.filter(e => e !== id)
            )
          }
        }
      }
    });
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
