import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";
import { updateCart ,updateAllCart} from "../slices/CartSlice";
import { v4 as uuidv4 } from "uuid";

const fetchAllCartItems = createAsyncThunk(
  "cart/fetchall",
  async (payload, thunkApi) => {
    try {
      const response = await api.getCart();
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue("something has gone wrong");
    }
  }
);

const addBookToCart = createAsyncThunk(
  "cart/addtocart",
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    try {
      const { books } = getState().books;
      const { cart } = getState().cart;
      const bookIdx = books.findIndex((el) => el.id === payload);
      const book = books[bookIdx];

      const test = cart.filter((el) => {
        if (el.id === book.id) {
          return el;
        }
      });
      console.log(test);
      if (test.length > 0) {
        const newItem = {
          id: book.id,
          title: book.title,
          count: test[0].count+1,
          total: book.price,
        };
        const response = await api.updateCartItem(newItem);
      dispatch(updateAllCart(newItem));
        
      } else {
        const newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price,
        };
         const response = await api.createBookToCart(newItem);
      dispatch(updateCart([...cart, newItem]));

      }
    
     
    } catch (err) {
      return thunkApi.rejectWithValue("Failed to create item on cart");
    }
  }
);
export { addBookToCart };
export default fetchAllCartItems;
