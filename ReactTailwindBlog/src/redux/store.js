import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import expireReducer from 'redux-persist-transform-expire';

const expireTransform = expireReducer({
  key: 'root',
  expireSeconds: 3600,
  whitelist: ['articleReducer']
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireTransform]
}

const persistedReducer = persistReducer(persistConfig, articleReducer)

export const store = configureStore({
    reducer: {
      article: persistedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
  });

  export const persistor = persistStore(store);