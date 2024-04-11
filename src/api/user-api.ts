import HTTP from '../tools/fetch';

export type UserAPIData = {
  first_name: string
  second_name: string
  login: string
  display_name: string
  email: string
  phone: string
}
export type UserPasswordAPIData = {
  oldPassword: string
  newPassword: string
}

export class UserAPI {
  static getUser() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/auth/user');
  }
  static editCredentials(data: UserAPIData) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/user/profile', { data });
  }
  static editPassword(data: UserPasswordAPIData) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/user/password', { data });
  }
}
