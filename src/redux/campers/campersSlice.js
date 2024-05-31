import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const counterSlice = createSlice({
  name: 'camper',
  initialState,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
