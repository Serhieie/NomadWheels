import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertById } from './campersOperation';
import { initialState } from './initialState';
import {
  handlePending,
  handleRejected,
  handleFetchAdvertsFulfilled,
  handleAddFavorite,
} from './campersHandlers';

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addFavorite: handleAddFavorite,
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //getAll
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      //getById
      .addCase(fetchAdvertById.pending, handlePending)
      .addCase(fetchAdvertById.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdvertById.rejected, handleRejected);
  },
});

export const {
  fetchAdvertsStart,
  fetchAdvertsSuccess,
  fetchAdvertsFailure,
  addFavorite,
  removeFavorite,
  setPage,
} = campersSlice.actions;

export default campersSlice.reducer;
