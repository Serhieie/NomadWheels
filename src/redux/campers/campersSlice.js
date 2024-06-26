import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFilteredAdverts } from './campersOperation';
import { initialState } from './initialState';
import {
  handlePending,
  handleRejected,
  handleFetchAdvertsFulfilled,
  handleFetchFilteredAdvertsFulfilled,
  handleAddFavorite,
  handleFetchFilteredAdvertsRejected,
  handleRemoveFavorite,
  handleFetchFilteredAdvertsPending,
} from './campersHandlers';

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setNoItems: (state, action) => {
      state.noItems = action.payload;
    },
    setIsCamperModalOpen: (state, action) => {
      state.isCamperModalOpen = action.payload;
    },
    setActive: (state, action) => {
      state.activeCamper = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //getAll
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      //getFiltered
      .addCase(fetchFilteredAdverts.pending, handleFetchFilteredAdvertsPending)
      .addCase(fetchFilteredAdverts.fulfilled, handleFetchFilteredAdvertsFulfilled)
      .addCase(fetchFilteredAdverts.rejected, handleFetchFilteredAdvertsRejected);
  },
});

export const {
  fetchAdvertsStart,
  fetchAdvertsSuccess,
  fetchAdvertsFailure,
  addFavorite,
  removeFavorite,
  setPage,
  setNoItems,
  setIsCamperModalOpen,
  setActive,
} = campersSlice.actions;

export default campersSlice.reducer;
