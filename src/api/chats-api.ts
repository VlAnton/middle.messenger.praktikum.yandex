import HTTP from '../tools/fetch';


export class ChatsApi {
  static getChats() {
    return new HTTP().get('https://ya-praktikum.tech/api/v2/chats');
  }
}
