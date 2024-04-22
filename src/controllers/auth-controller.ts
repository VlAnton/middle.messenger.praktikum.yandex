import { AuthApi, AuthApiData, SignUpAPIData } from "../api/auth-api";
import { router } from "../pages";
import store from "../store";
import { UserController } from "./user-controller";

export class AuthController {
  static async signIn(data: AuthApiData) {
    try {
      await AuthApi.signIn(data);
      const response = await UserController.getUser();
      if ((response as XMLHttpRequest).status !== 200) {
        throw Error('login or password is incorrect')
      }
      store.set('user', JSON.parse((response as XMLHttpRequest).responseText));
      store.set('isAuthenticated', true);
      router.go('/chats');
    } catch {
      store.set('isAuthenticated', false);
      store.set('user', {});
    }
  }

  static async signUp(data: SignUpAPIData) {
    try {
      await AuthApi.signUp(data)
      store.set('isAuthenticated', true);
    } catch {
      store.set('isAuthenticated', false);
      store.set('user', {});
    }
  }

  static async signOut() {
    try {
      await AuthApi.sighOut()
      store.set('isAuthenticated', false)
      router.go('/')
    } catch {
      store.set('isAuthenticated', false);
      store.set('user', {});
    }
  }
} 
