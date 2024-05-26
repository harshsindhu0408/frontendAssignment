import { configureStore } from '@reduxjs/toolkit';
import likedMoviesReducer from './likedMoviesSlice';

const store = configureStore({
  reducer: {
    likedMovies: likedMoviesReducer,
  },
});

export default store;
