// Redux Imports
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {API_NEWS} from "../../consts/consts";

// Fetch Data
export const fetchData = createAsyncThunk('newsArticles/fetchData', async (params) => {
    const response = 
    await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-04&pageSize=${params.limit}&sortBy=publishedAt&apiKey=${API_NEWS}`);
    return response.data
  })

export const newsArticles = createSlice({
  name: 'newsArticles',
  initialState: {
    posts: [
       
    ],
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.posts = action.payload.articles
    })
  }
})


export default newsArticles.reducer;