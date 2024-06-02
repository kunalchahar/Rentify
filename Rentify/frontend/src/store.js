import { configureStore } from '@reduxjs/toolkit'
import authReducer from './StoreSlices/authSlice'
import propertyReducer from './StoreSlices/propertiesSlice'
import filterReducer from './StoreSlices/propertyFilterSlice'

export const store = configureStore({
  reducer: {
   auth: authReducer,
   property: propertyReducer,
   filters: filterReducer,
  },
})
