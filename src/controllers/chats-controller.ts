import { ChatsApi } from "../api/chats-api";
import store from "../store";

export class ChatsController {
  static async getChats() {
    try {
      const response = await ChatsApi.getChats()
      store.set('chats', JSON.parse(response.responseText))
    } catch {

    }
  }
} 
