// Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const usersArticles = createSlice({
  name: 'usersArticles',
  initialState: {
    userData: {
        id: "1",
        name: "Sasha"
    },
    articles: [
        {
            user: "1",
            author:"Sasha",
            id: "1",
            urlToImage: "https://picsum.photos/200/300",
            description: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "article 1"
        },
        {
            user: "1",
            author:"Sasha",
            id: "2",
            urlToImage: "https://picsum.photos/200/300",
            description: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "article 2"
        },
        {
            user: "2",
            author:"Misha",
            id: "3",
            urlToImage: "https://picsum.photos/200/300",
            description: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "article 3"
        },
        {
            user: "3",
            author:"Anton",
            id: "4",
            urlToImage: "https://picsum.photos/200/300",
            description: "4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "article 4"
        }
    ],
    lockArticleActive: false
  },
  reducers: {
    deleteArticle: (state, action) => {
        state.articles = state.articles.filter(article=>article.id !== action.payload)
      },
      addArticle: (state, action) => {
        state.articles.unshift(action.payload)
      },
    lockArticle: (state,action) => {
            state.lockArticleActive = action.payload
    },
    unlockArticle: (state) => {
            state.lockArticleActive = false
    }
  },
})

export const { deleteArticle, addArticle, lockArticle,unlockArticle } = usersArticles.actions;

export default usersArticles.reducer;