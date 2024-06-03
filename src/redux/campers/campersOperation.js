import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getAdverts,
  getAdvertById,
  apiCall,
  getFilteredAdverts,
} from '../../api/axiosInstance';
import { setFilters } from '../../api/setFilters';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async ({ page = 1, limit = 4 }, { rejectWithValue }) => {
    try {
      const campers = await getAdverts(page, limit);
      return campers;
    } catch (error) {
      toast.error('Ups something went wrong');
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
      if (error.status === 404) {
        toast.error('Item not found');
      }

      return rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdverts = createAsyncThunk(
  'adverts/fetchFilteredAdverts',
  async ({ location, form, details }, { rejectWithValue }) => {
    try {
      const filters = setFilters({ location, form });
      const url = `?${filters.toString()}`;
      const filteredAdverts = await apiCall(url);
      const filteredByDetails = getFilteredAdverts(filteredAdverts, details);
      toast.success(`Success we found ${filteredByDetails.length} cars!`);
      return filteredByDetails;
    } catch (error) {
      if (error.status === 404) {
        toast.error('No cars with this filter, try to find somethin else');
      }
      return rejectWithValue(error.message);
    }
  }
);
