import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';
import {persistStore} from 'redux-persist';

// export default () => {
//   const store =
//   return {store};
// };

export default () => {
  const store: any = createStore(rootReducer, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);
  return {store, persistor};
};
