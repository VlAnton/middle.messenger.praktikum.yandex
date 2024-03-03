import { LoginPage } from './login'
import { RegisterPage } from './register'
import { Error404 } from './404'
import { ChatsPage } from './chats'

export default {
  'login': [ LoginPage ],
  'register': [ RegisterPage ],
  '404': [ Error404 ],
  'chats': [ ChatsPage, {
    isChatSelected: true
  } ],
};