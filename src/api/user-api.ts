import HTTP from '../tools/fetch';

export class UserAPI {
  static getUser() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/auth/user');
  }
}
