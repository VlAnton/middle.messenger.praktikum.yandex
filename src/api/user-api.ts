import HTTP from '../tools/fetch';
import { UserAPIData, UserPasswordAPIData, UserSearchAPIData } from '../types/api';

export class UserAPI {
  static getUser() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/auth/user');
  }
  static editCredentials(data: UserAPIData) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/user/profile', {
      data,
    });
  }
  static editPassword(data: UserPasswordAPIData) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/user/password', {
      data,
    });
  }
  static search(data: UserSearchAPIData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/user/search', {
      data,
    });
  }
}
