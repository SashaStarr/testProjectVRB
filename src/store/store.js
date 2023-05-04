// Toolkit imports
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import articlesInfo from "../components/usersArticles/UsersArticlesSlice";
import openModal from "../sharedComponents/modal/ModalSlice";
import newsArticles from "../components/newsArticles/NewsArticlesSlice";


export const store = configureStore({
  reducer: {
    articlesInfo,
    openModal,
    newsArticles
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
