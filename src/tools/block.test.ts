import Block from '../tools/block'
import { expect } from 'chai'
import { describe, it } from 'mocha'

class TestBlock extends Block {
  constructor (props: Indexed) {
    super({...props})
  }

  render() {
    return '<div>{{ text }}</div>'
  }
}

describe('test Block', () => {
  const block = new TestBlock({ text: 'Test' })

  it('component rendered', () => {
    expect(block.element?.innerHTML).to.equal('Test')
  })
})
