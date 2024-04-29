import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<main id="app"></main>', {
  url: 'http://localhost:3000',
});

global.window = window;
global.document = window.document;
