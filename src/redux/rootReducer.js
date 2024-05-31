import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campers/campersReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCampersReducer = persistReducer(persistConfig, campersReducer);

const rootReducer = combineReducers({
  campers: persistedCampersReducer,
});

export default rootReducer;
