import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(  
        (item) => item.id === action.payload
      )
      if(itemInCart){
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1}) // not sure about this --A> prolly it's better to spread with state.cart --> something like this --> [...state.cart, {action.payload, quantity: 1}] 
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find( 
        (item)=> item.id === action.payload.id
      )
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload)
      if(item.quantity === 1){
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      )
      state.cart= removeItem; 
    },
    clearCart : (state) => {
      state.cart = [];
    }
  }
})

export const cartReducer= cartSlice.reducer;

export const { 
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart
} = cartSlice.actions;