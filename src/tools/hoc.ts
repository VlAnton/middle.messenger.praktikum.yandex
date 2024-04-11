import store, { StoreEvents } from "../store";
import Block from "./block";
import { isEqual } from "./helpers";

type Indexed = Record<string, unknown>;

export default function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function(Component: typeof Block) {
    return class extends Component {
      constructor(props: Props) {
        let state = mapStateToProps(store.getState());
        super({...props, ...state});
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());
          
          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({...newState});
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    }
  }
}
