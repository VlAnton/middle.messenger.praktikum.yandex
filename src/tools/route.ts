import Block from '../tools/block';

export default class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block | null;
  private _props: Indexed;

  constructor(pathname: string, view: typeof Block, props: Indexed) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  _render () {
    const root = document.querySelector('#app');
    if (root) {
      root.innerHTML = '';
      root.appendChild((this._block?.getContent() as Node));
    }
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({ ...this._props });
      this._render()
      return;
    }
    this._render()
    this._block.show();
  }
}
