import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  totalCount: 0,
  productList: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state) => {
      state.productList = [...state.productList, action.payload.productList] // not sure of adding the productList at the end of this
    },
    clearCart: (state) => {
      state.productList = [];
      state.totalCount = 0;
    }
  }
})

export const { addProductToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;