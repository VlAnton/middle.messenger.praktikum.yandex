import HTTP from '../tools/fetch';

export type SignUpAPIData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export class SignUpAPI {
  static signUp(data: SignUpAPIData) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/auth/signup', { data });
  }
}
