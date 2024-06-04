import axios from 'axios';
import { setFiltersUrl } from './setFiltersUrl';

export const instance = axios.create({
  baseURL: 'https://665976bade346625136c78b7.mockapi.io/adverts/',
});

export const apiCall = async (path, method = 'get', body) => {
  try {
    const response = await instance[method](path, body, {
      headers: { 'content-type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const getAdverts = (page, limit) => apiCall(`?page=${page}&limit=${limit}`);

export const getAdvertsByFilter = ({ location, form }) => {
  const filters = setFiltersUrl({ location, form });
  const url = `?${filters.toString()}`;
  return apiCall(url);
};
