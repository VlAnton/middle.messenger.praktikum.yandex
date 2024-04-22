import { UserAPI, UserAPIData, UserPasswordAPIData, UserSearchAPIData } from "../api/user-api";
import { router } from "../pages";
import store from "../store";

export class UserController {
  static async getUser() {
    return await UserAPI.getUser()
  }

  static async editCredentials(data: UserAPIData) {
    try {
      await UserAPI.editCredentials(data);
      const response = await this.getUser();
      store.set('user', JSON.parse((response as XMLHttpRequest).responseText));
      router.go('/profile');
    } catch (error) {
      store.set('isAuthenticated', false);
      router.go('/');
    }
  }

  static async editPassword(data: UserPasswordAPIData) {
    try {
      await UserAPI.editPassword(data);
      router.go('/profile');
    } catch (error) {
      store.set('isAuthenticated', false);
      router.go('/');
    }
  }

  static async searchUserByLogin(data: UserSearchAPIData) {
    try {
      const response = await UserAPI.search(data);
      store.set('searchedUsers', JSON.parse((response as XMLHttpRequest).responseText))
    } catch (error) {
      // store.set('isAuthenticated', false);
      // router.go('/');
    }
  }
} 
