import ChatsPage from './chats';
import Block from '../tools/block';
import Page404 from './404';
import Page500 from './500';
import LoginPage from './login';
import RegisterPage from './register';

export const pages: Record<string, [Block, Record<string, unknown>?]> = {
  login: [new LoginPage({})],
  register: [new RegisterPage({})],
  '404': [new Page404({})],
  '500': [new Page500({})],
  chats: [new ChatsPage({})],
  // profile: [
  //   ProfilePage,
  //   {
  //     email: 'pochta@yandex.ru',
  //     login: 'ivanivanov',
  //     name: 'Иван',
  //     lastName: 'Иванов',
  //     display_name: 'Иван',
  //     phone: '+7 (909) 967 30 30',
  //   },
  // ],
  // edit: [EditCredentials],
  // 'edit-password': [EditPassword],
};
