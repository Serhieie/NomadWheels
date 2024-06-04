import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAdverts, getAdvertsByFilter } from '../../api/axiosInstance';
import { getFilteredAdverts } from '../../helpers';

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

export const fetchFilteredAdverts = createAsyncThunk(
  'adverts/fetchFilteredAdverts',
  async ({ location, form, details }, { rejectWithValue }) => {
    try {
      const filteredAdverts = await getAdvertsByFilter({ location, form });
      const filteredByDetails = getFilteredAdverts(filteredAdverts, details);
      if (filteredByDetails.length === 0) {
        toast.warning(`We have no cars with thise filters`, {
          position: 'bottom-right',
        });
      } else
        toast.success(`Success we found ${filteredByDetails.length} cars!`, {
          position: 'bottom-right',
        });
      return filteredByDetails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
