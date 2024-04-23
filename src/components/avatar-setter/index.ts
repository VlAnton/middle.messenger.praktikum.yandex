import './avatar-setter.scss';
import Block from '../../tools/block';
import url from '../../assets/icons/profileImg.svg?url';
import connect from '../../tools/hoc';
import { UserController } from '../../controllers/user-controller';

class AvatarSetter extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      url,
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
  return {
    url: state.user.avatar ?
      state.user.avatar :
      url
    };
};

export default connect(mapStateToProps)(AvatarSetter)
