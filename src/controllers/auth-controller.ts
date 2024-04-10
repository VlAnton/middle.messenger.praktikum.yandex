import { AuthApi, AuthApiData, SignUpAPIData } from "../api/auth-api";
import { router } from "../pages";
import store from "../store";
import { UserController } from "./user-controller";

export class AuthController {
  static signIn(data: AuthApiData) {
    AuthApi
      .signIn(data)
      .then(_ => {
        store.set('isAuthenticated', true);
        UserController.getUser();
        console.log(store.getState())
      })
      .catch(_ => {
        store.set('isAuthenticated', true);
        store.set('user', {})
      });
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
        router.go('/login')
      })
  }
} 
