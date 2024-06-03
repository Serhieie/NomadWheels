import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    details: [],
    form: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.details = payload.details;
      state.form = payload.form;
      state.location = payload.location;
    },
    resetFilter: (state) => {
      state.location = '';
      state.details = [];
      state.form = '';
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const selectFilter = (store) => store.filter;

export const filterReducer = filterSlice.reducer;
