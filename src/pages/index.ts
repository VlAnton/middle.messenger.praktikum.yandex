import ChatsPage from './chats';
import Block from '../tools/block';
import Page404 from './404';
import Page500 from './500';
import LoginPage from './login';
import RegisterPage from './register';
import ProfilePage from './profile';
import EditCredentials from './edit-credentials'
import EditPassword from './edit-password'

export const pages: Record<string, [Block, Record<string, unknown>?]> = {
  login: [new LoginPage({})],
  register: [new RegisterPage({})],
  '404': [new Page404({})],
  '500': [new Page500({})],
  chats: [new ChatsPage({})],
  profile: [new ProfilePage({
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    name: 'Иван',
    lastName: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30',
  })],
  'edit-credentials': [new EditCredentials({})],
  'edit-password': [new EditPassword({})],
};
