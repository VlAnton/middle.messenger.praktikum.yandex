import HTTP from '../tools/fetch';
import { AuthApiData, SignUpAPIData } from '../types/api';

export class AuthApi {
  static signIn(data: AuthApiData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/signin', {
      data,
    });
  }

  static signUp(data: SignUpAPIData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/signup', {
      data,
    });
  }

  static sighOut() {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/logout');
  }
}
