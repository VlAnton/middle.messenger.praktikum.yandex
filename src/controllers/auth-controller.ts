import { AuthApi, AuthApiData, SignUpAPIData } from "../api/auth-api";
import { router } from "../pages";
import store from "../store";
import { UserController } from "./user-controller";

export class AuthController {
  static async signIn(data: AuthApiData) {
    try {
      await AuthApi.signIn(data);
      const response = await UserController.getUser();
      if (response.status !== 200) {
        throw Error('login or password is incorrect')
      }
      store.set('user', JSON.parse(response.responseText));
      store.set('isAuthenticated', true);
      router.go('/chats');
    } catch {
      store.set('isAuthenticated', false);
      store.set('user', {});
    }
  }

  static signUp(data: SignUpAPIData) {
    AuthApi
      .signUp(data)
      .then(_ => {
        store.set('isAuthenticated', true)
      });
  }

  static signOut() {
    AuthApi
      .sighOut()
      .then(_ => {
        store.set('isAuthenticated', false)
        router.go('/')
      })
  }
} 
