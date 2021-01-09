import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const appReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor }
}
