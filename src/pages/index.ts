import ChatsPage from './chats';
import Page404 from './404';
import Page500 from './500';
import LoginPage from './login';
import RegisterPage from './register';
import ProfilePage from './profile';
import EditCredentials from './edit-credentials';
import EditPassword from './edit-password';
import Router from '../router/router';

export const router = new Router('app');
router
  .use('/', LoginPage)
  .use('/register', RegisterPage)
  .use('/404', Page404)
  .use('/500', Page500)
  .use('/chats', ChatsPage)
  .use('/profile', ProfilePage)
  .use('/edit-credentials', EditCredentials)
  .use('/edit-password', EditPassword)
  .start();
