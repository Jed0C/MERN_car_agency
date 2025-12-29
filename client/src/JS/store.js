import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import carSlice  from './carSlice'
import  commandeSlice  from './commandeSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    car : carSlice,
    commande : commandeSlice,
    
  },
})