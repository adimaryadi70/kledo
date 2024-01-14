import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter/counterSlice';
import storageReducer from './feature/storage/storageStore';

export const makeStore = () => {
    return configureStore({
      reducer: {
        counter: counterReducer,
        storage: storageReducer
      }
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']