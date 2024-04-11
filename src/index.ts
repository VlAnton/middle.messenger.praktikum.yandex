import './index.scss';
import * as IconSetter from './tools/set-icons';
import { router } from './pages';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname;
  if (!router.getRoute(url)) {
    router.go('/404');
  } else if (!store.getState().isAuthenticated) {
    router.go('/');
  } else {
    router.go(url);
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
