import { AuthController } from './controllers/auth-controller';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  AuthController.checkCurrentSession()
});
