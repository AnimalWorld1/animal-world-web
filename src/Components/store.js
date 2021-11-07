import { configureStore } from '@reduxjs/toolkit'
import waxReducer from './waxSlice'


export const store = configureStore({
    reducer: {
        wax: waxReducer,
      },
  })