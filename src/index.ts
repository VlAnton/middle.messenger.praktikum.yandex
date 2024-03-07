import Handlebars from 'handlebars';

import './index.scss';
import * as Components from './components';
import pages from './pages';
import * as IconSetter from './helpers/set-icons'



Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string, newArgs: any = null) {
  const [ source, args ] = (pages as any)[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(newArgs || args);
};

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname.replace('/', '')
  if ((pages as any)[url]) {
    navigate(url)
  } else if (url === '') {
    window.location.pathname = 'login'
  } else {
    window.location.pathname = '404'
  }

  Array.from(document.getElementsByClassName('chat-item')).forEach((element: any) => {
    element.addEventListener('click', (event: Event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      navigate('chats', {
        isChatSelected: true,
        display_name: 'Вадим',
      })
      IconSetter.setIcons(IconSetter.icons)
    })
  });

  IconSetter.setIcons(IconSetter.icons)
});

document.addEventListener('click', (e: Event) => {
  const page = (e.target as HTMLBaseElement).getAttribute('page');
  if (page) {
    window.location.pathname = page;

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
