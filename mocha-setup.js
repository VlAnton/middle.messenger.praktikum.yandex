import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<main id="app"></main>');

global.window = window;
global.document = window.document;
