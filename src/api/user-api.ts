import { BASE_URL } from '../constants';
import HTTP from '../tools/fetch';
import { UserAPIData, UserPasswordAPIData, UserSearchAPIData } from '../types/api';

export class UserAPI {
  static getUser() {
    return new HTTP().get(`${BASE_URL}/auth/user`);
  }
  static editCredentials(data: UserAPIData) {
    return new HTTP().put(`${BASE_URL}/user/profile`, {
      data,
    });
  }
  static editPassword(data: UserPasswordAPIData) {
    return new HTTP().put(`${BASE_URL}/user/password`, {
      data,
    });
  }
  static search(data: UserSearchAPIData) {
    return new HTTP().post(`${BASE_URL}/user/search`, {
      data,
    });
  }
}
