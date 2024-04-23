import './avatar-setter.scss';
import Block from '../../tools/block';
import url from '../../assets/icons/profileImg.svg?url';
import connect from '../../tools/hoc';
import { UserController } from '../../controllers/user-controller';
import { BASE_URL } from '../../constants';

class AvatarSetter extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: {
        mouseover () {
          (this as unknown as Block).setProps({ isHovered: true })
        },
        mouseleave () {
          (this as unknown as Block).setProps({ isHovered: false })
        },
        change (e: Event) {
          const target = e.target as HTMLInputElement
          if (!target?.files?.item(0)) {
            return;
          }
          const formData = new FormData();
          formData.append('avatar', target.files[0]);

          UserController.setAvatar(formData);
        }
      }
    });

    UserController.getUser()
  }

  render() {
    return `
      <form class="avatar-setter">
        <img src="{{url}}" class="avatar-setter__image" alt="profile-img">
        {{#if isHovered}}
          <div class="avatar-setter__overlay">
            <input type="file" id="myfile" class="avatar-setter__input" name="myfile">
              <label for="myfile" class="avatar-setter__input-label">Поменять аватар</label>
            </input>
          </div>
        {{/if}}
      </form>
    `;
  }
}

const mapStateToProps = (state: Indexed) => {
  let newUrl = url
  if (state.user.avatar) {
    newUrl = state.user.avatar.startsWith('https') ?
      state.user.avatar :
      `${BASE_URL}/resources/${state.user.avatar}`
  }
  return {
    url: newUrl
  };
};

export default connect(mapStateToProps)(AvatarSetter)
