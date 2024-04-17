import { AddUsersAPI, ChatsApi, CreateChatsApi, DeleteChatsApi } from "../api/chats-api";
import store from "../store";

export class ChatsController {
  static async getChats() {
    try {
      const response = await ChatsApi.getChats()
      store.set('chats', JSON.parse(response.responseText))
    } catch {

    }
  }
  static async createChat(data: CreateChatsApi) {
    try {
      const response = await ChatsApi.createChat(data)
      store.set('createdChatInForm', JSON.parse(response.responseText))
      await this.getChats()
    } catch {

    }
  }
  static async deleteChat(data: DeleteChatsApi) {
    try {
      await ChatsApi.deleteChat(data)
      await this.getChats()
    } catch {
    }
  }

  static async addUsersToChat(data: AddUsersAPI) {
    try {
      await ChatsApi.addUsers(data)
    } catch {

    }
  }
} 
