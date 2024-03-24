import './index.scss';
import * as IconSetter from './tools/set-icons';
import { pages } from './pages';
import { navigate } from './tools/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname.replace('/', '');
  if (pages[url]) {
    navigate(url);
  } else if (url === '') {
    window.location.pathname = 'login';
  } else {
    window.location.pathname = '404';
  }

  IconSetter.setIcons(IconSetter.icons);
});

document.addEventListener('click', (e: Event) => {
  const page = (e.target as HTMLBaseElement).getAttribute('page');
  if (page) {
    window.location.pathname = page;

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
