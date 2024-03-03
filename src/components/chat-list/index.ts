import Handlebars from 'handlebars';

import './chat-list.scss';
export { default as ChatList } from './chat-list.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Опоссум', message: 'Изображение', unread: '2' , avatar: "../assets/opossum_1.png"},
    { name: 'Енот', message:'Go на свалку!' },
    { name: 'Барсук', message:'А у кого ключи от сарая?', unread: '4' },
  ]
});