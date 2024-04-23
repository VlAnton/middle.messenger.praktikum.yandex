import { UserAPI } from '../api/user-api';
import { BASE_URL } from '../constants';
import { router } from '../pages';
import store from '../store';
import { UserAPIData, UserPasswordAPIData, UserSearchAPIData } from '../types/api';

export class UserController {
  static async getUser() {
    try {
      const response = await UserAPI.getUser()
      store.set('user', JSON.parse((response as XMLHttpRequest).responseText));

      return store.getState().user;
    } catch {
      store.unsetState()
    }
  }

  static async editCredentials(data: UserAPIData) {
    try {
      await UserAPI.editCredentials(data);
      const response = await this.getUser();
      store.set('user', JSON.parse((response as XMLHttpRequest).responseText));
      router.go('/settings');
    } catch (error) {
      store.unsetState()
    }
  }

  static async editPassword(data: UserPasswordAPIData) {
    try {
      await UserAPI.editPassword(data);
      router.go('/settings');
    } catch (error) {
      store.unsetState()
    }
  }

  static async searchUserByLogin(data: UserSearchAPIData) {
    try {
      const response = await UserAPI.search(data);
      store.set(
        'searchedUsers',
        JSON.parse((response as XMLHttpRequest).responseText),
      );
    } catch (error) {
      store.unsetState()
    }
  }

  static async updateAvatar(data: FormData) {
    try {
      const response = await UserAPI.setImage(data);
      const user = JSON.parse((response as XMLHttpRequest).responseText);

      store.set(
        'user.avatar',
        `${BASE_URL}/resources/${user.avatar}`,
      );
    } catch (error) {
      store.unsetState()
      router.go('/');
    }
}
}
