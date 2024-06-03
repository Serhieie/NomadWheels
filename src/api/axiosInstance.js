import axios from 'axios';

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

export const getAdvertById = (id) => apiCall(`${id}`);

export const getFilteredAdverts = (filteredAdverts, details) => {
  return filteredAdverts.filter((advert) => {
    for (const detail of details) {
      let detailToCompare = detail.toLowerCase();
      if (detail === 'TV' || detail === 'CD') {
        detailToCompare = detail;
      } else if (detail === 'AC') {
        detailToCompare = 'airConditioner';
      }
      if (detail === 'Automatic') {
        return advert.transmission === 'automatic';
      }
      if (
        !advert.details ||
        !(detailToCompare in advert.details) ||
        advert.details[detailToCompare] === 0
      ) {
        return false;
      }
    }
    return true;
  });
};
