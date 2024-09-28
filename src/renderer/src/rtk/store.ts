import { configureStore } from '@reduxjs/toolkit'
import configReducer from './config/configSlice'
export const store = configureStore({
  devTools: true,
  reducer: {
    config: configReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
