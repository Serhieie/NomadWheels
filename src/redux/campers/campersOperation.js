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
      if (campers.length < 4) {
        toast.success('This is last campers in our list', {
          position: 'bottom-right',
        });
      } else if (campers.length === 0) {
        toast.warning('We have no more campers', {
          position: 'bottom-right',
        });
      }
      return campers;
    } catch (error) {
      toast.error('Ups something went wrong', {
        position: 'bottom-right',
      });
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
      if (error.message === 'Not found') {
        toast.error("Sorry! We didn't find this car", {
          position: 'bottom-right',
        });
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
      toast.success(`Success we found ${filteredByDetails.length} cars!`, {
        position: 'bottom-right',
      });
      return filteredByDetails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
