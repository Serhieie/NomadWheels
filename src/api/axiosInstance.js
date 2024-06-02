import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://665976bade346625136c78b7.mockapi.io/adverts/',
});

export const apiCall = async (path, method = 'get', body) => {
  try {
    const response = await instance[method](path, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const getAdverts = (page, limit) => apiCall(`?page=${page}&limit=${limit}`);

export const getAdvertById = (id) => apiCall(`${id}`);
