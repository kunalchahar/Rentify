import { configureStore } from '@reduxjs/toolkit'
import authReducer from './StoreSlices/authSlice'

export const store = configureStore({
  reducer: {
   auth: authReducer
  },
})
