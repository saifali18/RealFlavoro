import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      let Find = state.cart.find((item) => item.id === action.payload.id)

      if (Find) {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        state.cart = [...state.cart, action.payload];
        console.log(state.cart,"carttt..");
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((itm) => itm.id !== action.payload.id);
    },
    Increment: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
    },
    Decrement: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item);
    },
    AllDelete: (state) => {
      state.cart = []
    }
  }
})
export const { addToCart, removeFromCart, Increment, Decrement, AllDelete } = CartSlice.actions;
export default CartSlice.reducer;