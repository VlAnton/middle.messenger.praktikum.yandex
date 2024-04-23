import { ChatsApi } from '../api/chats-api';
import store from '../store';
import { CreateChatsApi, DeleteChatsApi, UsersAPI } from '../types/api';

export class ChatsController {
  static websocket?: WebSocket;

  static async getChats() {
    try {
      const response = await ChatsApi.getChats();
      store.set('chats', JSON.parse((response as XMLHttpRequest).responseText));
    } catch {
      store.unsetState()
    }
  }
  static async createChat(data: CreateChatsApi) {
    try {
      const response = await ChatsApi.createChat(data);
      store.set(
        'createdChatInForm',
        JSON.parse((response as XMLHttpRequest).responseText),
      );
      await this.getChats();
    } catch {
      store.unsetState()
    }
  }
  static async deleteChat(data: DeleteChatsApi) {
    try {
      await ChatsApi.deleteChat(data);
      await this.getChats();
    } catch {
      store.unsetState()
    }
  }

  static async addUsersToChat(data: UsersAPI) {
    try {
      await ChatsApi.addUsers(data);
    } catch {
      store.unsetState()
    }
  }

  static async getChatUsers() {
    try {
      const response = await ChatsApi.getChatUsers();
      store.set(
        'usersToDelete',
        JSON.parse((response as XMLHttpRequest).responseText),
      );
    } catch {
      store.unsetState()
    }
  }

  static async deleteChatUsers(data: UsersAPI) {
    try {
      await ChatsApi.deleteUsers(data);
      await ChatsController.getChatUsers();
      (store.getState());
    } catch {}
  }

  static async getChatToken() {
    try {
      const chatId = store.getState().selectedChat;
      if (!chatId) {
        return;
      }

      const response = await ChatsApi.getChatToken(chatId);
      store.set(
        'token',
        JSON.parse((response as XMLHttpRequest).responseText).token,
      );

      ChatsController.connectToChat();
    } catch (error) {
      store.unsetState()
    }
  }

  static connectToChat() {
    try {
      const chatId = store.getState().selectedChat;
      const userId = store.getState().user.id;
      const token = store.getState().token;
      if (!chatId || !userId || !token) {
        return;
      }
      ChatsController.websocket = new WebSocket(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
      );
      ChatsController.websocket.addEventListener('open', () => {
        console.log('Соединение установлено');

        setInterval(() => {
          ChatsController.websocket?.send(
            JSON.stringify({
              type: 'ping',
            }),
          );
        }, 1000);

        ChatsController.websocket?.send(
          JSON.stringify({
            content: '0',
            type: 'get old',
          }),
        );
        ChatsController.websocket?.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }
          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        ChatsController.websocket?.addEventListener('error', (event) => {
          console.log('Ошибка', event);
        });

        ChatsController.websocket?.addEventListener('message', (event) => {
          const messages = JSON.parse(event.data);

          if (messages instanceof Array) {
            store.set('messages', [...messages]);
          } else {
            const msg = JSON.parse(event.data);

            if (msg.type === 'message') {
              const prev = store.getState().messages as unknown[];
              store.set('messages', [msg, ...prev]);
            }
          }
        });
      });
      return ChatsController.websocket;
    } catch (error) {
      console.log(error);
    }
  }
}
