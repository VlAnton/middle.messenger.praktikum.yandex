import Handlebars from 'handlebars';

import './index.scss';
import * as Components from './components';
import pages from './pages';

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string, newArgs) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(newArgs || args);
};

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname.replace('/', '')
  if (pages[url]) {
    navigate(url)
  } else {
    window.location.pathname = '404'
  }
});

document.addEventListener('click', (e: Event) => {
  const page = (e.target as HTMLBaseElement).getAttribute('page');
  if (page) {
    window.location.pathname = page

    e.preventDefault();
    e.stopImmediatePropagation();
  }
  if ((e.target as HTMLBaseElement).className.includes('chat-item')) {
    navigate('chats', {
      'isChatSelected': true, selectedChat: 'chat-item-0'
    })
  }
});

// Array.from(document.getElementsByClassName('chat-item')).forEach((element: HTMLBaseElement) => {
//   element.addEventListener('click', (event: Event) => {
//     event.preventDefault();
//     event.stopImmediatePropagation();
//   })
// });
