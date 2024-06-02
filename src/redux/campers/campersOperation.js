import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts, getAdvertById } from '../../api/axiosInstance';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async ({ page = 1, limit = 4 }, { rejectWithValue }) => {
    try {
      const campers = await getAdverts(page, limit);
      return campers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  'adverts/fetchAdvertById',
  async (id, { rejectWithValue }) => {
    try {
      const campers = await getAdvertById(id);
      return campers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
