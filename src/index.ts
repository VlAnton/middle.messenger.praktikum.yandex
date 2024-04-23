import { AuthController } from './controllers/auth-controller';
import './index.scss';
import { router } from './pages';

document.addEventListener('DOMContentLoaded', () => {
  AuthController.checkCurrentSession();
});

document.addEventListener('click', (e: Event) => {
  const page = (e.target as HTMLBaseElement).getAttribute('page');
  if (page) {
    router.go(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
