import axios from "axios"

const instance = axios.create({ baseURL: process.env.REACT_APP_API_SERVER})

const getBooks = () => instance.get('/books')
const createBook = (payload) => instance.post('/books', payload)

const getCart = () => instance.get('/cart')
const createBookToCart = (payload) => instance.post('/cart', payload)
const changeBookFromCart = (payload) => instance.put(`/cart/${ payload.id}`, payload)
const deleteBookFromCart = (id) => instance.delete(`/cart/${id}`)
const updateCartItem = (payload) => instance.put(`/cart/${payload.id}`, payload)

export const api = {
    getBooks,
    createBook,
    getCart,
    createBookToCart,
    updateCartItem,
    changeBookFromCart,
    deleteBookFromCart,
}