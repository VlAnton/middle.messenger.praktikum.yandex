import { AuthApi } from '../api/auth-api';
import { router } from '../pages';
import store from '../store';
import { AuthApiData, SignUpAPIData } from '../types/api';
import { UserController } from './user-controller';

export class AuthController {
  static async signIn(data: AuthApiData) {
    try {
      await AuthApi.signIn(data);
      const response = await UserController.getUser();
      if ((response as XMLHttpRequest).status !== 200) {
        throw Error('login or password is incorrect');
      }
      store.set('user', JSON.parse((response as XMLHttpRequest).responseText));
      store.set('isAuthenticated', true);
      router.go('/messenger');
    } catch {
      store.unsetState()
    }
  }

  static async checkCurrentSession() {
    try {
      const response = await UserController.getUser();

      if (response.status === 200) {
        store.set('isAuth', true);
        store.set('user', JSON.parse(response.responseText));
        router.go('/messenger');
      }
    } catch (error) {
      store.unsetState()
      router.go('/');
    }
  }

  static async signUp(data: SignUpAPIData) {
    try {
      await AuthApi.signUp(data);
      store.set('isAuthenticated', true);
    } catch {
      store.unsetState()
    }
  }

  static async signOut() {
    try {
      await AuthApi.sighOut();
      store.unsetState()
      router.go('/');
      location.reload()
    } catch {
      store.unsetState()
    }
  }
}
