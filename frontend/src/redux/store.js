import cartReducer from './cartReducer'
import userReducer from './userReducer'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistCombineReducers(persistConfig, {cartData:cartReducer,userData:userReducer})

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)