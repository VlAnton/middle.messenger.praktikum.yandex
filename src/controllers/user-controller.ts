import { UserAPI } from "../api/user-api";
import store from "../store";

export class UserController {
  static async getUser() {
    const response = await UserAPI.getUser()
    store.set('user', JSON.parse(response.response))
  }
} 
