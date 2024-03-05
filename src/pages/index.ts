import { LoginPage } from './login'
import { RegisterPage } from './register'
import { Error404 } from './404'
import { ChatsPage } from './chats'
import { ProfilePage } from './profile'

export default {
  'login': [ LoginPage ],
  'register': [ RegisterPage ],
  '404': [ Error404 ],
  'chats': [ ChatsPage, {
    chatName: 'Вадим'
  } ],
  'profile': [ ProfilePage, {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    name: 'Иван',
    lastName: 'Иванов',
    chatName: 'Иван',
    phone: '+7 (909) 967 30 30'
  } ]
};
