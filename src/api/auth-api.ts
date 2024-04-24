import { BASE_URL } from '../constants';
import HTTP from '../tools/fetch';
import { AuthApiData, SignUpAPIData } from '../types/api';

export class AuthApi {
  static signIn(data: AuthApiData) {
    return new HTTP().post(`${BASE_URL}/auth/signin`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static signUp(data: SignUpAPIData) {
    return new HTTP().post(`${BASE_URL}/auth/signup`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static sighOut() {
    return new HTTP().post(`${BASE_URL}/auth/logout`);
  }
}
