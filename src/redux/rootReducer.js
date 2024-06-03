import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campers/campersSlice';
import { filterReducer } from './filter/filterSlice';

const persistCampersConfig = {
  key: 'campers',
  storage,
  whitelist: ['favorites'],
};
const persistFiltersConfig = {
  key: 'filter',
  storage,
};

const persistedCampersReducer = persistReducer(persistCampersConfig, campersReducer);
const persistedFilterReducer = persistReducer(persistFiltersConfig, filterReducer);

const rootReducer = combineReducers({
  campers: persistedCampersReducer,
  filter: persistedFilterReducer,
});

export default rootReducer;
