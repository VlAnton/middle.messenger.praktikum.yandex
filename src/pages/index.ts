import { LoginPage } from './login';
import { RegisterPage } from './register';
import { Error404 } from './404';
import { Error500 } from './500';
import { ChatsPage } from './chats';
import { ProfilePage } from './profile';
import { EditCredentials } from './edit-credentials';
import { EditPassword } from './edit-password';

export default {
  login: [LoginPage],
  register: [RegisterPage],
  '404': [Error404],
  '500': [Error500],
  chats: [
    ChatsPage,
    {
      display_name: 'Вадим',
    },
  ],
  profile: [
    ProfilePage,
    {
      email: 'pochta@yandex.ru',
      login: 'ivanivanov',
      name: 'Иван',
      lastName: 'Иванов',
      display_name: 'Иван',
      phone: '+7 (909) 967 30 30',
    },
  ],
  'edit': [EditCredentials],
  'edit-password': [EditPassword],
};
