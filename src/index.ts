import Handlebars from 'handlebars';

import './index.scss';
import * as Components from './components';
import pages from './pages';

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component)
})

function navigate(page: string) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));
