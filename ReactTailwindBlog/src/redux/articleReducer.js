import { createSlice } from '@reduxjs/toolkit';

const initialState = {articles:[]};

export const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    }
  }
});

export const { setArticles } = slice.actions;
export const allArticles = (state) => state.article.articles;
export default slice.reducer;