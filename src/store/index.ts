import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialState from '@/store/initialState';
import rootReducer from '@/reducers';
import rootSaga from '@/sagas';
import logger from 'redux-logger';

const createConfiguredStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(
    {
      key: 'user',
      storage,
      whitelist: ['user', 'language'],
    },
    rootReducer
  );

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = createConfiguredStore();
export const persistor = persistStore(store, {});
