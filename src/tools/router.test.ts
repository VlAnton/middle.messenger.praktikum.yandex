import { expect } from 'chai';
import routerClass from '../tools/router';
import Block from '../tools/block';
import { JSDOM } from 'jsdom';


class Page1 extends Block {
    constructor() {
      super();
    }
    render() {
      return `<div id='page-1'>Page 1</div>`;
    }
}

class Page2 extends Block {
    constructor() {
      super();
    }
    render() {
      return `<div id='page-2'>Page 2</div>`;
    }
}

describe('Test Router', () => {
  const router = new routerClass('app');

  beforeEach(() => {
    const { window } = new JSDOM('<main id="app"></main>', {
      url: 'http://localhost:3000',
    });

    // eslint-disable-next-line
    (global as any).window = window;
    global.document = window.document;
});

  it('page rendered', () => {
    router
      .use('/', Page1)
      .start();
    expect(document.querySelector('#page-1')?.innerHTML).to.equal('Page 1');
  });

  it('second page rendered after redirect', () => {
    router
      .use('/', Page1)
      .use('/page2', Page2)
      .start();
    router.go('/page2');
    expect(document.querySelector('#page-2')?.innerHTML).to.equal('Page 2');
  });
});
