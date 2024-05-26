import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedMovies: [],
};

const likedMoviesSlice = createSlice({
  name: 'likedMovies',
  initialState,
  reducers: {
    likeMovie: (state, action) => {
      state.likedMovies.push(action.payload);
    },
    unlikeMovie: (state, action) => {
      state.likedMovies = state.likedMovies.filter(
        movie => movie.id !== action.payload.id
      );
    },
  },
});

export const { likeMovie, unlikeMovie } = likedMoviesSlice.actions;

export default likedMoviesSlice.reducer;
