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
  private static __instance: Store
  private state: Record<string, any> = {};

  constructor(state: Record<string, any>) {
    super();
    if (Store.__instance) {
      return Store.__instance;
    }
    this.state = state;
    this.listeners[StoreEvents.Updated] = [];
    Store.__instance = this;    
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
