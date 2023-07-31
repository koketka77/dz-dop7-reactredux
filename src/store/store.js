import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/BookSlice";
import cartReducer from "./slices/CartSlice";

const rootReducer = combineReducers({
    books: bookReducer,
    cart: cartReducer,

})

const store = configureStore({reducer: rootReducer})

export default store