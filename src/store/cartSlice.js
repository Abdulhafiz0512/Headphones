
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, ...product } = action.payload;
      const existingProduct = state.cartItems.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, id, quantity: 1 }); // Ensure quantity is initialized
      }
    

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
    incrementQuantity: (state, action) => {
        const { id } = action.payload;
        const existingProduct = state.cartItems.find(item => item.id === id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        }
      },
    decrementQuantity: (state, action) => {
        const { id } = action.payload;
        const existingProduct = state.cartItems.find(item => item.id === id);
        if (existingProduct && existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        }
      }
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
