import './index.scss';
import * as IconSetter from './tools/set-icons';
import { router } from './pages'

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname.replace('/', '');

  if (router.getRoute(`/${url}`)) {
    router.go(url);
  } else if (url === '') {
    router.go('/login');
  } else {
    router.go('/404');
  }

  IconSetter.setIcons(IconSetter.icons);
});

document.addEventListener('click', (e: Event) => {
  const page = (e.target as HTMLBaseElement).getAttribute('page');
  if (page) {
    router.go(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
