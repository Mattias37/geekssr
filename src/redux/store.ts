import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import combinedReducer from './reducer';
import { AppMiddlewares } from './middlewares';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}
let aloneStore: any;
const initStore = () => {
  aloneStore = createStore(reducer, AppMiddlewares() /* bindMiddleware([thunkMiddleware]) */);
  return aloneStore;
}
export {aloneStore};
export const wrapper = createWrapper(initStore)