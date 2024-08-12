import { configureStore } from '@reduxjs/toolkit';
import headphonesReducer from './headphonesSlice';
import cartReducer from "./cartSlice"
const store = configureStore({
  reducer: {
    headphones: headphonesReducer,
    cart: cartReducer,
  },
});

export default store;
