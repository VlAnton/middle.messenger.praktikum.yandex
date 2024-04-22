import store from '../store';
import HTTP from '../tools/fetch';
import { CreateChatsApi, DeleteChatsApi, UsersAPI } from '../types/api';

export class ChatsApi {
  static getChats() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/chats');
  }
  static createChat(data: CreateChatsApi) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/chats', { data });
  }
  static deleteChat(data: DeleteChatsApi) {
    return new HTTP().delete('https://ya-praktikum.tech/api/v2/chats', {
      data,
    });
  }
  static addUsers(data: UsersAPI) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/chats/users', {
      data,
    });
  }
  static getChatUsers() {
    const id = store.getState().selectedChat;
    return new HTTP().get(`https://ya-praktikum.tech/api/v2/chats/${id}/users`);
  }
  static deleteUsers(data: UsersAPI) {
    return new HTTP().delete('https://ya-praktikum.tech/api/v2/chats/users', {
      data,
    });
  }
  static getChatToken(chatId: string) {
    return new HTTP().post(
      'https://ya-praktikum.tech/api/v2/chats/token/' + chatId,
    );
  }
}
