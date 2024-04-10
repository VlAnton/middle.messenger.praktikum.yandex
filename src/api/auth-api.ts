import HTTP from '../tools/fetch';

export type AuthApiData = {
  login: string
  password: string
}

export type SignUpAPIData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export class AuthApi {
  static signIn(data: AuthApiData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/signin', { data });
  }

  static signUp(data: SignUpAPIData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/signup', { data });
  }

  static sighOut() {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/logout')
  }
}
