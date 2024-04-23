import './avatar-setter.scss';
import Block from '../../tools/block';
import url from '../../assets/icons/profileImg.svg?url';
import connect from '../../tools/hoc';
import { UserController } from '../../controllers/user-controller';

class AvatarSetter extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      url
    });

    UserController.getUser()
  }

  render() {
    return `
      <div class="avatar-setter">
        <img src="{{url}}" alt="profile-img">
      </div>
    `;
  }
}

const mapStateToProps = (state: Indexed) => {
  return { url: state.user.avatar || url };
};

export default connect(mapStateToProps)(AvatarSetter)
