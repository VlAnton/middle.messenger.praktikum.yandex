import EventBus from "../tools/event-bus";
import { set } from "../tools/helpers";

export enum StoreEvents {
  Updated = 'updated',
}

const initialState = {
  isAuthenticated: false,
  user: {},
};

class Store extends EventBus {
  private state: Record<string, unknown> = {};

  constructor(state: Record<string, unknown>) {
    super();
    this.state = state;
    this.listeners[StoreEvents.Updated] = [];
  }

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store(initialState);
