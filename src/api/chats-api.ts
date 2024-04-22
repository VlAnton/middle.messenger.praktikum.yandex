import store from '../store';
import HTTP from '../tools/fetch';

export type CreateChatsApi = Record<string, string>
export type DeleteChatsApi = {
  chatId: number
}
export type AddUsersAPI = {
  chatId: number,
  users: Record<string, number>
}

export class ChatsApi {
  static getChats() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/chats');
  }
  static createChat(data: CreateChatsApi) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/chats', { data });
  }
  static deleteChat(data: DeleteChatsApi) {
    return new HTTP().delete('https://ya-praktikum.tech/api/v2/chats', { data });
  }
  static addUsers(data: AddUsersAPI) {
    return new HTTP().put('https://ya-praktikum.tech/api/v2/chats/users', { data });
  }
  static getChatUsers() {
    const id = store.getState().selectedChat
    return new HTTP().get(`https://ya-praktikum.tech/api/v2/chats/${id}/users`);
  }
  static getChatToken(chatId: string) {
    return new HTTP().post('https://ya-praktikum.tech/api/v2/chats/token/' + chatId);
  }
}
