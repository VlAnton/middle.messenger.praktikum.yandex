import Block from './block';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { JSDOM } from 'jsdom';

class TestBlock extends Block {
  constructor(props: Indexed) {
    super({ ...props });
  }

  render() {
    return '<div>{{ text }}</div>';
  }
}

describe('test Block', () => {
  const { window } = new JSDOM('<main id="app"></main>', {
    url: 'http://localhost:3000',
  });
  // eslint-disable-next-line
  (global as any).window = window;
  global.document = window.document;
  const block = new TestBlock({ text: 'Test' });

  it('component rendered', () => {
    expect(block.element?.innerHTML).to.equal('Test');
  });
});
