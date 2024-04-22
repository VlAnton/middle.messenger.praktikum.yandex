import ChatsPage from './chats';
import Page404 from './404';
import Page500 from './500';
import LoginPage from './login';
import RegisterPage from './register';
import ProfilePage from './profile';
import EditCredentials from './edit-credentials';
import EditPassword from './edit-password';
import Router from '../tools/router';

export const router = new Router('app');
router
  .use('/', LoginPage)
  .use('/sign-up', RegisterPage)
  .use('/404', Page404)
  .use('/500', Page500)
  .use('/messenger', ChatsPage)
  .use('/settings', ProfilePage)
  .use('/change-profile', EditCredentials)
  .use('/change-password', EditPassword)
  .start();
