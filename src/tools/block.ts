import EventBus from './event-bus';
import Handlebars from 'handlebars';

type Lists = Record<string, Record<string, Block[]>>;

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };
  public props: Indexed;
  protected children: Record<string, Block>;
  private lists: Lists;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  private _id = Math.floor(100000 + Math.random() * 900000);

  constructor(propsWithChildren = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } =
      this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy({ ...props });
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren() {}

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName].bind(this));
      }
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(
          eventName,
          events[eventName].bind(this),
        );
      }
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Indexed, newProps: Indexed) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: Indexed, newProps: Indexed) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  _getChildrenPropsAndProps(propsAndChildren: Indexed) {
    const children: Record<string, Block> = {};
    const props: Indexed = {};
    const lists: Lists = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (key === 'lists') {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  addAttributes() {
    const { attr = {} } = this.props;

    Object.entries(attr).forEach(([key, value]) => {
      if (this._element) {
        this._element.setAttribute(key, value as string);
      }
    });
  }

  setProps = (nextProps: Indexed) => {
    if (!nextProps) {
      return;
    }
    if (nextProps.lists) {
      this.lists = { lists: nextProps.lists } as Lists;
      this._render();
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const propsAndStubs = { ...this.props };
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.values(this.lists).forEach((child) => {
      Object.entries(child).forEach(([k, items]) => {
        items &&
          items.forEach((item) => {
            if (item instanceof Block) {
              propsAndStubs[k] = `<div data-id="__l_${item._id}"></div>`;
            }
          });
      });
    });

    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent() as string | Node);
      }
    });

    Object.values(this.lists).forEach((child) => {
      const listCont = this._createDocumentElement(
        'template',
      ) as HTMLTemplateElement;
      Object.values(child).forEach((items) => {
        items.forEach((item) => {
          if (item instanceof Block) {
            listCont.content.append(item.getContent() as string | Node);
          } else {
            listCont.content.append(`${item}`);
          }
          const stub = fragment.content.querySelector(
            `[data-id="__l_${item._id}"]`,
          );
          if (stub) {
            stub.replaceWith(listCont.content);
          }
        });
      });
    });

    const newElement = fragment.content.firstElementChild as string | Node;
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement as HTMLElement;
    this._addEvents();
  }

  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: Indexed) {
    const self = this;

    return new Proxy(props, {
      get(target: Indexed, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Indexed, prop: string, value: unknown) {
        const oldTarget = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = '';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
