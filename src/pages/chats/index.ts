import Handlebars from 'handlebars';
import './chats.scss';
export { default as ChatsPage } from './chats.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Опоссум', message: 'Изображение', unread: '2' , avatar: "../assets/opossum_1.png", date: '10:49'},
    { name: 'Енот', message:'Go на свалкуa sldkfjlkasjdflk jaslkdjflkjs ajdlkfjlaskj fklasfjd lkfjlask djlkjs fldkj asjkdf kjasndkj fnkjsdn kjfan kjdnaksj fnkjasdn knfskajdn kjsan kdjnf skdjnf kjsndkfn ksjdn kfjnksj ndkn kfnsdkj nfkjns dkjnk jnfksjn kdjn kjnsdkjn fkjsnd kjnfk sdjnkj nfdksjn kdjsnsdjknfk djsnfkjn fsdkjn kfjnsdk jnkjsn kfjndskj nkjsdn kfn fsdknkds jnkjdsn kjfsd!', date: '10:49' },
    { name: 'Барсук', message:'А у кого ключи от сарая?', unread: '4', date: '10:49' },
  ]
});

Handlebars.registerHelper('chat-page-messages-list', () => {
  return [
    { isYours: false, message:'Go на свалкуa sldkfjlkasjdflk jaslkdjflkjs ajdlkfjlaskj fklasfjd lkfjlask djlkjs fldkj asjkdf kjasndkj fnkjsdn kjfan kjdnaksj fnkjasdn knfskajdn kjsan kdjnf skdjnf kjsndkfn ksjdn kfjnksj ndkn kfnsdkj nfkjns dkjnk jnfksjn kdjn kjnsdkjn fkjsnd kjnfk sdjnkj nfdksjn kdjsnsdjknfk djsnfkjn fsdkjn kfjnsdk jnkjsn kfjndskj nkjsdn kfn fsdknkds jnkjdsn kjfsd!', date: '10:49' },
    { isYours: false, message:'Привет', date: '10:49' },
    { isYours: true, message: 'Олололололололололололо', isRead: true, avatar: "../assets/opossum_1.png", date: '10:49'},
  ]
});