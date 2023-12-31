import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/CounterSlice'
import TodoReducer from './Slices/TodoSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopReducer from "./Slices/shoppingSlice"


const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({
    counter: CounterSlice,
    todo: TodoReducer,
    shop: shopReducer

  })
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: true,
})

export const persistStor = persistStore(store)