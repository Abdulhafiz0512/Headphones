import { configureStore } from '@reduxjs/toolkit';
import headphonesReducer from './headphonesSlice';

const store = configureStore({
  reducer: {
    headphones: headphonesReducer,
  },
});

export default store;
