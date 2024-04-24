import { BASE_URL } from '../constants';
import store from '../store';
import HTTP from '../tools/fetch';
import { CreateChatsApi, DeleteChatsApi, UsersAPI } from '../types/api';

export class ChatsApi {
  static getChats() {
    return new HTTP().get(`${BASE_URL}/chats`);
  }

  static createChat(data: CreateChatsApi) {
    return new HTTP().post(`${BASE_URL}/chats`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static deleteChat(data: DeleteChatsApi) {
    return new HTTP().delete(`${BASE_URL}/chats`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static addUsers(data: UsersAPI) {
    return new HTTP().put(`${BASE_URL}/chats/users`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static getChatUsers() {
    const id = store.getState().selectedChat;
    return new HTTP().get(`${BASE_URL}/chats/${id}/users`);
  }

  static deleteUsers(data: UsersAPI) {
    return new HTTP().delete(`${BASE_URL}/chats/users`, {
      data,
      headers: { 'content-type': 'application/json' },
    });
  }

  static getChatToken(chatId: string) {
    return new HTTP().post(`${BASE_URL}/chats/token/${chatId}`);
  }
}
