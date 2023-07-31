import { createAsyncThunk } from "@reduxjs/toolkit";

import {api} from "../../api"

const fetchAllBooks = createAsyncThunk("books/fetchAll", async (payload, thunkApi)=>{
    try{
        const response = await api.getBooks()
        return response.data
    } catch (err){
        return thunkApi.rejectWithValue('Something has gone wrong')
    }
})
export default fetchAllBooks