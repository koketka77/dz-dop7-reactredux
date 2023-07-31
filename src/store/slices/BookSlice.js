import { createSlice } from '@reduxjs/toolkit'
import fetchAllBooks from '../reducers/BookCreator'

const initialState = {
    books: [],
    booksLoading: false,
    booksError: ''
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.pending, (state, action) => {
            state.booksLoading = true;
            state.books = []
            state.booksError = ''
        })
        builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
            state.booksLoading = false;
            state.books = action.payload
            state.booksError = ''
        })
        builder.addCase(fetchAllBooks.rejected, (state, action) => {
            state.booksLoading = true;
            state.booksError = action.payload
        })
    }
})
const bookReducer = bookSlice.reducer;
export const { } = bookSlice.actions;
export default bookReducer;