import { configureStore } from '@reduxjs/toolkit';
import user from './slice/user.slice';
import cart from './slice/cart.slice';
const store = configureStore({
  reducer: {
    user,
    cart,
  },
});

export default store;
