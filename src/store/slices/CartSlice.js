import { createSlice } from "@reduxjs/toolkit";
import fetchAllCartItems, { addBookToCart } from "../reducers/CartCreator";

const initialState = {
  cart: [],
  cartLoading: false,
  cartError: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateAllCart: (state, action) => {
      const bookIdx = state.cart.findIndex((el) => el.id === action.payload.id);
      state.cart[bookIdx] = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCartItems.pending, (state, action) => {
      state.cartLoading = true;
      state.cart = [];
      state.cartError = "";
    });

    builder.addCase(fetchAllCartItems.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.cart = action.payload;
      state.cartError = "";
    });

    builder.addCase(fetchAllCartItems.rejected, (state, action) => {
      state.cartLoading = false;
      state.cartError = action.payload;
    });
    builder.addCase(addBookToCart.rejected, (state, action) => {
      state.cartError = action.payload;
    });
  },
});

const cartReducer = cartSlice.reducer;

export const { updateCart, updateAllCart } = cartSlice.actions;
export default cartReducer;
